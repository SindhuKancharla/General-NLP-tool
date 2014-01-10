package general.code;

import gate.Annotation;
import gate.AnnotationSet;
import gate.Corpus;
import gate.CorpusController;
import gate.Document;
import gate.Factory;
import gate.util.GateException;

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

public class Process {

	public static List<String> process(Corpus corpus, CorpusController controller,String fileType,String opFile) throws IOException, GateException{
	
		Map<Integer,Annotation> map = new HashMap<>();

		File file1 = new File(opFile);
		
		if (!file1.exists()) {
			file1.createNewFile();
		}

		FileWriter fw = new FileWriter(file1.getAbsoluteFile());
		BufferedWriter bw = new BufferedWriter(fw);
		
		String sentAnnotation = "";
		if(fileType.equalsIgnoreCase("pdf")){
			sentAnnotation = "SENTENCE1";
		}
		else if(fileType.equalsIgnoreCase("txt")|fileType.equalsIgnoreCase("html")|fileType.equalsIgnoreCase("htm")){
			sentAnnotation = "keySentence";
		}
			
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
			AnnotationSet sentset = keySet.get(sentAnnotation);

			for(Annotation ann : sentset){
				int id = ann.getId();
				map.put(id, ann);
			}
			
			Object[] ids = map.keySet().toArray();
			Arrays.sort(ids);
			
			for(Object i : ids){
				Annotation k = map.get(i);
				if(k.getType().equalsIgnoreCase(sentAnnotation)){
					sentence = k.getFeatures().get("string").toString();
					bw.write(sentence+"\n\n\n");
				}
			}
			
		}
		bw.close();
		cleanUp(controller,docs);
		return ops;
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
