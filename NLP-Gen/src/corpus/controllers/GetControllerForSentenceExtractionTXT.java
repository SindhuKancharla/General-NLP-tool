package corpus.controllers;

import gate.CorpusController;
import gate.Factory;
import gate.FeatureMap;
import gate.Gate;
import gate.ProcessingResource;
import gate.creole.ANNIEConstants;
import gate.creole.SerialAnalyserController;
import gate.util.GateException;
import gate.util.persistence.PersistenceManager;
import general.code.SentenceExtraction;

import java.io.File;
import java.io.IOException;

public class GetControllerForSentenceExtractionTXT extends SentenceExtraction {

	public static CorpusController createController() throws GateException, IOException {
		
		Gate.getCreoleRegister().registerDirectories(
				new File(Gate.getPluginsHome(), "Tools").toURI().toURL());
		
		Gate.getCreoleRegister().registerDirectories(
				new File(Gate.getPluginsHome(), "LingPipe").toURI().toURL());
		
		SerialAnalyserController controller = (SerialAnalyserController) 
				PersistenceManager.loadObjectFromFile(new File(new File( 
				Gate.getPluginsHome(), ANNIEConstants.PLUGIN_DIR),ANNIEConstants.DEFAULT_FILE));
		
		controller.remove(3); // removing the ANNIE Sentence Splitter

		 FeatureMap paramsss = Factory.newFeatureMap();  
		 ProcessingResource sentenceSplitter = (ProcessingResource)Factory.createResource(  
			     "gate.lingpipe.SentenceSplitterPR", paramsss);
			 
		 controller.add(2,sentenceSplitter);
		 
		 FeatureMap params = Factory.newFeatureMap();  
			params.put("grammarURL", new File(resourcesPath+"resources/sentence.extraction.txt/getSentences.jape").toURI().toURL()); 
			ProcessingResource transducer = (ProcessingResource)Factory.createResource(  
			     "gate.creole.Transducer", params);
			
		 controller.add(transducer);
		 return controller;
	}
}