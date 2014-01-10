package corpus.controllers;

import java.io.File;
import java.io.IOException;

import gate.CorpusController;
import gate.Factory;
import gate.FeatureMap;
import gate.Gate;
import gate.LanguageAnalyser;
import gate.ProcessingResource;
import gate.creole.ANNIEConstants;
import gate.creole.SerialAnalyserController;
import gate.util.GateException;
import gate.util.persistence.PersistenceManager;
import general.code.SentenceExtraction;

public class GetControllerForSentenceExtractionPDF extends SentenceExtraction{

	public static CorpusController createController() throws GateException, IOException {
		
		Gate.getCreoleRegister().registerDirectories(
				new File(Gate.getPluginsHome(), "Tools").toURI().toURL());
		
		Gate.getCreoleRegister().registerDirectories(
				new File(Gate.getPluginsHome(), "JAPE_Plus").toURI().toURL());
		
		Gate.getCreoleRegister().registerDirectories(
				new File(Gate.getPluginsHome(), "LingPipe").toURI().toURL());
		
		SerialAnalyserController controller = (SerialAnalyserController) 
				PersistenceManager.loadObjectFromFile(new File(new File( 
				Gate.getPluginsHome(), ANNIEConstants.PLUGIN_DIR),ANNIEConstants.DEFAULT_FILE));
		
		controller.remove(3); // removing the ANNIE Sentence Splitter
		
		 FeatureMap paramsg = Factory.newFeatureMap();  
		 paramsg.put("listsURL", new File(resourcesPath+"resources/rules/abr.def").toURI().toURL()); 
		 LanguageAnalyser mainGazetteer = (LanguageAnalyser)Factory.createResource(  
		     "gate.creole.gazetteer.DefaultGazetteer", paramsg);
			
		 controller.add(3,mainGazetteer);

		 FeatureMap paramsss = Factory.newFeatureMap();  
		 ProcessingResource sentenceSplitter = (ProcessingResource)Factory.createResource(  
			     "gate.lingpipe.SentenceSplitterPR", paramsss);
			 
		 controller.add(4,sentenceSplitter);

		ProcessingResource transfer = (ProcessingResource) Factory.
	        		createResource("gate.creole.annotransfer.AnnotationSetTransfer", Factory.newFeatureMap());
		FeatureMap map = Factory.newFeatureMap();
        map.put("inputASName","Original markups");
		transfer.setParameterValues(map);
		
		FeatureMap params = Factory.newFeatureMap();  
		params.put("grammarURL", new File(resourcesPath+"resources/sentence.extraction.pdf/MainGetAllSentences.jape").toURI().toURL()); 
		ProcessingResource transducer = (ProcessingResource)Factory.createResource(  
		     "gate.jape.plus.Transducer", params);
		
		
		controller.add(transfer);
		controller.add(transducer);
		
		return controller;
	}
}
