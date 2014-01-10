package general.code;

import java.io.File;
import java.io.IOException;
import org.xml.sax.SAXException;

import extract.values.GetAllImpValues;
import gate.CorpusController;

public class SentenceExtraction {

	static String fileName = "";
	static CorpusController controller ;
	protected static String resourcesPath ="";
	static String actualFileName ="";
	protected static File file;
	protected static boolean server = false;

	public static void main(String[] args) throws IOException, SAXException{
		
		String fileType = null;
			
		if(server){
				     	
			resourcesPath = "/home/ubuntu/nlp-gen/";     	
	     	fileName = "/var/www/gen/"+args[0].trim();

			file = new File("/var/www/gen/"+args[2]);	
		}
		else{
	     	
			resourcesPath = "F:/zwalaa/NLP-Gen/";
	     	fileName = "C:/sindu/wamp/www/gen/"+args[0].trim();

			file = new File("C:/sindu/wamp/www/gen/"+args[2]);
		}
		
		fileType = getTypeOfFile(fileName);
				
		GetAllImpValues.getEntities(fileName,fileType);
		 
	}

	private static String getTypeOfFile(String fileName) {

		String format = null;
		
		if(fileName.endsWith("txt")){
			format = "txt";
		}
		else if(fileName.endsWith("pdf")){
			format = "pdf";
		}
		else if(fileName.endsWith("html")){
			format = "html";
		}
		else if(fileName.endsWith("htm")|fileName.endsWith("cms")){
			format = "htm";
		}
		
		return format;
	}
}
