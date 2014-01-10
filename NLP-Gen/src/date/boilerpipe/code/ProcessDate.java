package date.boilerpipe.code;

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
import java.util.Iterator;
import java.util.List;

import org.apache.commons.lang.StringUtils;

public class ProcessDate extends GetDocumentDateHTML{

	private static final String DATE_PATTERN = 
	          "(((19|20)\\d\\d)/0?[1-9]|[12][0-9]|3[01])/(0?[1-9]|1[012])";
	 
	public static void process(Corpus corpus, CorpusController controller,String fileType,String opFile) throws IOException, GateException{
	
		File file1 = new File(opFile);
		
		if (!file1.exists()) {
			file1.createNewFile();
		}

		FileWriter fw = new FileWriter(file1.getAbsoluteFile());
		BufferedWriter bw = new BufferedWriter(fw);
		
		String sentAnnotation = "DocDate";
			
		ArrayList<String> dates = new ArrayList<>();
		controller.setCorpus(corpus);
    	
    	controller.execute();
    	
		System.out.println("Annie run !!");
	
		Iterator<Document> it = corpus.iterator();		
		List<Document> docs = new ArrayList<Document>();
		while(it.hasNext()){
			
			Document doc = it.next();
			docs.add(doc);
			
			String sentence = "";
			AnnotationSet keySet = doc.getAnnotations();
			AnnotationSet dateset = keySet.get(sentAnnotation);
			
			if(dateset.isEmpty()){
				String dateFileName = actualFileName;
					String[] parts = dateFileName.split(DATE_PATTERN);
					int startDateIndex = parts[0].length();
					int endIndex = startDateIndex+10;
					sentence = dateFileName.substring(startDateIndex, endIndex);
					bw.write(sentence + " . ");
		
			}
			else{
				for(Annotation k : dateset){
					if(k.getType().equalsIgnoreCase(sentAnnotation)){
						sentence = k.getFeatures().get("string").toString();
						if(dates.contains(sentence)){
							continue;
						}
						else{
							if(StringUtils.isNotBlank(sentence)){
								bw.write(sentence + " . ");
								dates.add(sentence);
							}
						}
					}
				}
			}
			
		}
		bw.close();
		cleanUp(controller,docs);
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
