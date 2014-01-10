package date.boilerpipe.code;

import java.io.BufferedWriter;
import java.io.File;
import java.io.FileWriter;
import java.io.IOException;
import java.net.MalformedURLException;
import java.net.URL;
import java.util.Properties;

import org.xml.sax.SAXException;

import corpus.controllers.GetControllerForDateExtractionHTML;
import corpus.controllers.GetControllerForSentenceExtractionPDF;
import corpus.controllers.GetControllerForSentenceExtractionTXT;
import de.l3s.boilerpipe.BoilerpipeExtractor;
import de.l3s.boilerpipe.BoilerpipeProcessingException;
import de.l3s.boilerpipe.extractors.ArticleExtractor;
import de.l3s.boilerpipe.sax.HTMLHighlighter;
import gate.Corpus;
import gate.CorpusController;
import gate.Document;
import gate.Factory;
import gate.FeatureMap;
import gate.creole.ExecutionException;
import gate.creole.ResourceInstantiationException;
import gate.util.GateException;

public class GetDocumentDateHTML {

	static String fileName = "";
	static CorpusController controller ;
	static String outputFile = "";
	protected static String resourcesPath ="";
	static String actualFileName ="";
	protected static File cleanTextOP;
	protected static File cleanHTMLOP;

	public static void main(String[] args) throws IOException, SAXException{
		
		String fileType = null;
			
		boolean server = true;
		if(server){
				     	
			resourcesPath = "/home/ubuntu/nlp-gen/";
			cleanTextOP = new File("/var/www/gen/cleanText.txt");
			cleanHTMLOP = new File("/var/www/gen/cleanHTML.html");
			
	     	Properties props = System.getProperties();

	     	props.setProperty("gate_home", "/home/ubuntu/gate");
	        props.setProperty("gate_plugins_home", "/home/plugins");
	     	System.setProperties(props);
	     	try {
				gate.Gate.init();
			} catch (GateException e) {
				e.printStackTrace();
			}
	     	
	     	fileName = "/var/www/gen/"+args[0];
			actualFileName = args[1];

			System.out.println("file anem is "+fileName);
			System.out.println("actula file na " + actualFileName);
			actualFileName.replaceAll("\n", "");
			outputFile = "/var/www/gen/DocumentDate.txt";
			
		}
		else{
	     	
			resourcesPath = "F:/zwalaa/NLP-Gen/";
			cleanTextOP = new File("C:/sindu/wamp/www/gen/cleanText.txt");
			cleanHTMLOP = new File("C:/sindu/wamp/www/gen/cleanHTML.html");

	     	Properties props = System.getProperties();
		
	     	props.setProperty("gate.home", "F:/gate/");
	     	props.setProperty("gate.plugins.home", "F:/gate/plugins/");
			
	     	System.setProperties(props);
	     	try {
				gate.Gate.init();
			} catch (GateException e) {
				e.printStackTrace();
			}
	     	
	     	fileName = "C:/sindu/wamp/www/gen/"+args[0];
			actualFileName = args[1];

			outputFile = "C:/sindu/wamp/www/gen/DocumentDate.txt";
		}
		
		File temp = new File(outputFile);
		if(temp.exists()){
			temp.delete();
		}
		
		Corpus corpus = null;
	    try {
			corpus = Factory.newCorpus("Corpus");
		} catch (ResourceInstantiationException e1) {
			e1.printStackTrace();
		}
	    
    	System.out.println("GATE initialized !!!");
    	
		fileType = getTypeOfFile(fileName);
		
		if(fileType.equalsIgnoreCase("html")|fileType.equalsIgnoreCase("htm")){
			URL url = null;
			try {
				url = new URL(actualFileName);
			} catch (MalformedURLException e2) {
				e2.printStackTrace();
			}
			
			FileWriter fw = new FileWriter(cleanHTMLOP);
			
			BufferedWriter bff = new BufferedWriter(fw);
			
			FileWriter fwtext = new FileWriter(cleanTextOP);
			
			BufferedWriter bftext = new BufferedWriter(fwtext);
			
			try {
				BoilerpipeExtractor bp = ArticleExtractor.INSTANCE;
				String cleanHTML  = HTMLHighlighter.newExtractingInstance().process(url,bp);
				bff.write(cleanHTML);
				bff.close();
				
				String cleanText = ArticleExtractor.getInstance().getText(url);
				bftext.write(cleanText);
				bftext.close();
				
			} catch (BoilerpipeProcessingException e1) {
				e1.printStackTrace();
			}
		}
		getDocumentsForGate(fileType,fileName,corpus);		 
		
	}

	private static void getDocumentsForGate(String fileType, String fileName,Corpus corpus) throws IOException, SAXException {	
         
		FeatureMap docParams = Factory.newFeatureMap();
		Document doc = null;

		if(fileType.equalsIgnoreCase("pdf")){
			
			try {
	         	controller = GetControllerForSentenceExtractionPDF.createController();
	        } catch (GateException e) {
	 			e.printStackTrace();
	        } catch (IOException e) {
	 			e.printStackTrace();
	        }
			
			try {
				docParams.put(Document.DOCUMENT_URL_PARAMETER_NAME, new File(fileName).toURI().toURL());
			} catch (MalformedURLException e) {
				e.printStackTrace();
			}
			docParams.put(Document.DOCUMENT_MIME_TYPE_PARAMETER_NAME,"application/pdf");
			try {
				doc = (Document)Factory.createResource("gate.corpora.DocumentImpl", docParams);
			} catch (ResourceInstantiationException e) {
				e.printStackTrace();
			}
			
			corpus.add(doc);
			controller.setCorpus(corpus);
			try {
				controller.execute();
				ProcessDate.process(corpus, controller, fileType,outputFile);
			} catch (ExecutionException e) {
				e.printStackTrace();
			} catch (IOException e) {
				e.printStackTrace();
			} catch (GateException e) {
				e.printStackTrace();
			} 
			
			 
			System.out.println("Annie execution complete !!");

		}
		else if(fileType.equalsIgnoreCase("txt")){
			
			try {
	         	controller = GetControllerForSentenceExtractionTXT.createController();
	        } catch (GateException e) {
	 			e.printStackTrace();
	        } catch (IOException e) {
	 			e.printStackTrace();
	        }
			
			try {
				docParams.put(Document.DOCUMENT_URL_PARAMETER_NAME, new File(fileName).toURI().toURL());
			} catch (MalformedURLException e) {
				e.printStackTrace();
			}
			docParams.put(Document.DOCUMENT_MIME_TYPE_PARAMETER_NAME,"text/plain");
			try {
				doc = (Document)Factory.createResource("gate.corpora.DocumentImpl", docParams);
			} catch (ResourceInstantiationException e) {
				e.printStackTrace();
			}
			
			corpus.add(doc);
			controller.setCorpus(corpus);
			try {
				controller.execute();
				ProcessDate.process(corpus, controller, fileType,outputFile);
			} catch (ExecutionException e) {
				e.printStackTrace();
			} catch (IOException e) {
				e.printStackTrace();
			} catch (GateException e) {
				e.printStackTrace();
			} 
			
			System.out.println("Annie execution complete !!");

		}
		else if(fileType.equalsIgnoreCase("html")|fileType.equalsIgnoreCase("htm")){
			
			try {
	         	controller = GetControllerForDateExtractionHTML.createController();
	        } catch (GateException e) {
	 			e.printStackTrace();
	        } catch (IOException e) {
	 			e.printStackTrace();
	        }
			try {
				docParams.put(Document.DOCUMENT_URL_PARAMETER_NAME, new File(fileName).toURI().toURL());
			} catch (MalformedURLException e) {
				e.printStackTrace();
			}
			docParams.put(Document.DOCUMENT_MIME_TYPE_PARAMETER_NAME,"text/html");
			try {
				doc = (Document)Factory.createResource("gate.corpora.DocumentImpl", docParams);
			} catch (ResourceInstantiationException e) {
				e.printStackTrace();
			}
			corpus.add(doc);
			controller.setCorpus(corpus);
			try {
				ProcessDate.process(corpus, controller, fileType,outputFile);
			} catch (ExecutionException e) {
				e.printStackTrace();
			} catch (IOException e) {
				e.printStackTrace();
			} catch (GateException e) {
				e.printStackTrace();
			}
			System.out.println("Annie execution complete !!");

		}
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
