package extract.values;

import gate.Annotation;
import gate.AnnotationSet;
import gate.Corpus;
import gate.CorpusController;
import gate.Document;
import gate.Factory;
import gate.util.GateException;
import general.code.RemoveDupsFromTxt;

import java.io.BufferedWriter;
import java.io.File;
import java.io.FileWriter;
import java.io.IOException;
import java.util.ArrayList;
import java.util.Arrays;
import java.util.HashMap;
import java.util.Iterator;
import java.util.List;
import java.util.Map;

public class ProcessDocs extends GetAllImpValues{

	static ArrayList<String> entities = new ArrayList<>();

	public static List<String> process(Corpus corpus, CorpusController controller,String fileType) throws IOException, GateException{
	
		Map<Integer,Annotation> map = new HashMap<>();
		
		File featureFile = new File(featureOPFile);

		if (!featureFile.exists()) {
			featureFile.createNewFile();
		}
		
		FileWriter fwf = new FileWriter(featureFile.getAbsoluteFile());
		BufferedWriter bwf = new BufferedWriter(fwf);
		
		File impSentsFile = new File(impSentsOPFile);

		if (!impSentsFile.exists()) {
			impSentsFile.createNewFile();
		}
		
		FileWriter fwimps = new FileWriter(impSentsFile.getAbsoluteFile());
		BufferedWriter bwimps = new BufferedWriter(fwimps);
		
		File conceptFile = new File(conceptOPFile);

		if (!conceptFile.exists()) {
			conceptFile.createNewFile();
		}
		
		FileWriter fwc = new FileWriter(conceptFile.getAbsoluteFile());
		BufferedWriter bwc = new BufferedWriter(fwc);
		
		
		File dbpediaFile = new File(DBPediaOPFile);

		if (!dbpediaFile.exists()) {
			dbpediaFile.createNewFile();
		}
		FileWriter fwdb = new FileWriter(dbpediaFile.getAbsoluteFile());
		BufferedWriter bwdb = new BufferedWriter(fwdb);

		File annieFile = new File(AnnieOPFile);

		if (!annieFile.exists()) {
			annieFile.createNewFile();
		}
		FileWriter fwan = new FileWriter(annieFile.getAbsoluteFile());
		BufferedWriter bwan = new BufferedWriter(fwan);
	
		File file1 = new File(sentencesOPFile);
		
		if (!file1.exists()) {
			file1.createNewFile();
		}

		FileWriter fw = new FileWriter(file1.getAbsoluteFile());
		BufferedWriter bw = new BufferedWriter(fw);
		
//		String sentAnnotation = "";
//		if(fileType.equalsIgnoreCase("pdf")){
//			sentAnnotation = "SENTENCE1";
//		}
//		else if(fileType.equalsIgnoreCase("txt")|fileType.equalsIgnoreCase("html")|fileType.equalsIgnoreCase("htm")){
//			sentAnnotation = "keySentence";
//		}
		
		controller.setCorpus(corpus);
    	
    	controller.execute();
    	
		System.out.println("Annie run !!");
	
		List<String> ops = new ArrayList<String>();
		Iterator<Document> it = corpus.iterator();		
		List<Document> docs = new ArrayList<Document>();
		while(it.hasNext()){
			
			Document doc = it.next();
			docs.add(doc);
			
			String sentence = "";
			AnnotationSet keySet = doc.getAnnotations();
			
			for(Annotation ann : keySet){
				int id = ann.getId();
				map.put(id, ann);
			}
			
			Object[] ids = map.keySet().toArray();
			Arrays.sort(ids);
			
			for(Object i : ids){
				String type = "";
				Annotation k = map.get(i);
				if(k.getType().equalsIgnoreCase("ENTITY")){
					if(k.getFeatures().get("type")==null)
						type = "imp";
					else
						type = k.getFeatures().get("type").toString();
					
					writeAllEntities(type,k,bwdb,bwan);
				}
				if(k.getType().equalsIgnoreCase("FEATURE")){
					if(k.getFeatures().get("type")==null)
						type = "imp";
					else
						type = k.getFeatures().get("type").toString();
					
					sentence = type + " : "+k.getFeatures().get("string").toString();
					bwf.write(sentence+"\n\n");
				}
				if(k.getType().equalsIgnoreCase("Concepts")){
					sentence = k.getFeatures().get("string").toString();
					bwc.write(sentence+"\n\n");
				}
				if(k.getType().equalsIgnoreCase("FEATURE_SENTENCE")){
					sentence = k.getFeatures().get("string").toString();
					bwimps.write(sentence+"\n\n");
				}
				if(k.getType().equalsIgnoreCase("SENTENCE1")){
					sentence = k.getFeatures().get("string").toString();
					bw.write(sentence+"\n\n");
				}
			}
			
		}
		bwf.close();
		bwc.close();
		bwdb.close();
		bwan.close();
		bwimps.close();
		bw.close();
		cleanUp(controller,docs);
		
		RemoveDupsFromTxt.deduplicateTextFile(DBPediaOPFile);
		RemoveDupsFromTxt.deduplicateTextFile(AnnieOPFile);
		RemoveDupsFromTxt.deduplicateTextFile(featureOPFile);
		return ops;
	}

	private static void writeAllEntities(String type, Annotation k, BufferedWriter bwdb, BufferedWriter bwan) throws IOException {

		String sentence = "";
		String tag = "";
		if(type.equalsIgnoreCase("DBPedia")){
			tag = k.getFeatures().get("tag").toString();
					
			String inst = k.getFeatures().get("inst").toString();
			
			String[] linkParts = inst.split("/");
			String actualName = linkParts[linkParts.length-1];
			
			while(actualName.contains("%")){
				int i = actualName.indexOf("%");
				String webError = actualName.substring(i, i+3);
				
				actualName = actualName.replaceAll(webError, "");
			}
			sentence = k.getFeatures().get("string").toString();
			bwdb.write(tag+ " : "+sentence+ "    ( "+actualName+" )"+"\n\n");
		}
		else if(type.equalsIgnoreCase("Annie")){
				tag = k.getFeatures().get("tag").toString();
				
				sentence = k.getFeatures().get("string").toString();
				
				if(!entities.contains(sentence)){
					entities.add(sentence);
					bwan.write(tag+ " : "+sentence+"\n\n");
				}
		}
	}

	public static void cleanUp(CorpusController contoller, List<Document> docs){
	
		Corpus corp = contoller.getCorpus();
		
		Iterator<Document> it = docs.iterator();
		while(it.hasNext()){
			
			Document doc = it.next();
			Factory.deleteResource(doc);
		}
		Factory.deleteResource(corp);
	}
}
