package extract.values;

import java.io.File;
import java.io.IOException;
import java.net.MalformedURLException;
import java.util.Properties;

import corpus.controllers.GetControllerForEntityExtractionHTML;
import corpus.controllers.GetControllerForEntityExtractionPDF;
import corpus.controllers.GetControllerForEntityExtractionTXT;
import gate.Corpus;
import gate.CorpusController;
import gate.Document;
import gate.Factory;
import gate.FeatureMap;
import gate.creole.ExecutionException;
import gate.creole.ResourceInstantiationException;
import gate.util.GateException;
import general.code.SentenceExtraction;

public class GetAllImpValues extends SentenceExtraction{

	static String fileName = null;
	static CorpusController controller ;
	static String featureOPFile = "";
	static String conceptOPFile = "";
	static String DBPediaOPFile = "";
	static String AnnieOPFile = "";
	static String impSentsOPFile = "";
	static String sentencesOPFile = "";

	public static void getEntities(String inputFileName, String fileType){
		
		if(server){
			fileName = inputFileName;
			featureOPFile = "/var/www/gen/FeatureOutput.txt";
			conceptOPFile = "/var/www/gen/ConceptOutput.txt";
			DBPediaOPFile = "/var/www/gen/DBPediaOutput.txt";
			AnnieOPFile = "/var/www/gen/AnnieOutput.txt";
			impSentsOPFile = "/var/www/gen/impSentsOutput.txt";
	     	sentencesOPFile = "/var/www/gen/SentencesOutput.txt".trim();

			Properties props = System.getProperties();

			props.setProperty("gate_home", "/home/ubuntu/gate");
			props.setProperty("gate_plugins_home", "/home/plugins");
     	 	
			System.setProperties(props);
			try {
				gate.Gate.init();
			} catch (GateException e) {
				e.printStackTrace();
			}
		}
		else{
			fileName = inputFileName;
			featureOPFile = "C:/sindu/wamp/www/gen/FeatureOutput.txt";
			conceptOPFile = "C:/sindu/wamp/www/gen/ConceptOutput.txt";
			DBPediaOPFile = "C:/sindu/wamp/www/gen/DBPediaOutput.txt";
			AnnieOPFile = "C:/sindu/wamp/www/gen/AnnieOutput.txt";
			impSentsOPFile = "C:/sindu/wamp/www/gen/impSentsOutput.txt";
	     	sentencesOPFile = "C:/sindu/wamp/www/gen/SentencesOutput.txt".trim();

			Properties props = System.getProperties();

	    	props.setProperty("gate.home", "F:/gate/");
	        props.setProperty("gate.plugins.home", "F:/gate/plugins/");
	         	
	     	System.setProperties(props);
	    	try {
				gate.Gate.init();
			} catch (GateException e) {
				e.printStackTrace();
			}
		}

    	Corpus corpus = null;
	    try {
			corpus = Factory.newCorpus("Corpus");
		} catch (ResourceInstantiationException e1) {
			e1.printStackTrace();
		}
	    
    	System.out.println("GATE initialized !!!");
    			
		getDocumentsForGate(fileType,fileName,corpus);
	}

	private static void getDocumentsForGate(String fileType, String fileName,Corpus corpus) {	
         
		FeatureMap docParams = Factory.newFeatureMap();
		Document doc = null;

		if(fileType.equalsIgnoreCase("pdf")){
			
			try {
	         	controller = GetControllerForEntityExtractionPDF.createController();
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
				ProcessDocs.process(corpus, controller, fileType);
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
	         	controller = GetControllerForEntityExtractionTXT.createController();
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
				ProcessDocs.process(corpus, controller, fileType);
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
	         	controller = GetControllerForEntityExtractionHTML.createController();
	        } catch (GateException e) {
	 			e.printStackTrace();
	        } catch (IOException e) {
	 			e.printStackTrace();
	        }
			
			try {
				docParams.put(Document.DOCUMENT_URL_PARAMETER_NAME, file.toURI().toURL());
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
				ProcessDocs.process(corpus, controller, fileType);
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
}
