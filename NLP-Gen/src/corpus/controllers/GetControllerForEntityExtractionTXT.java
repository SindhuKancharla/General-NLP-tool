package corpus.controllers;

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

import java.io.File;
import java.io.IOException;

public class GetControllerForEntityExtractionTXT extends SentenceExtraction{

	public static CorpusController createController() throws GateException, IOException {
		
		Gate.getCreoleRegister().registerDirectories(
				new File(Gate.getPluginsHome(), "Tools").toURI().toURL());
		
//		Gate.getCreoleRegister().registerDirectories(
//				new File(Gate.getPluginsHome(), "Tagger_Zemanta").toURI().toURL());
//		
		Gate.getCreoleRegister().registerDirectories(
				new File(Gate.getPluginsHome(), "Tagger_Lupedia").toURI().toURL());
		
		Gate.getCreoleRegister().registerDirectories(
				new File(Gate.getPluginsHome(), "Tools").toURI().toURL());
		
		Gate.getCreoleRegister().registerDirectories(
				new File(Gate.getPluginsHome(), "LingPipe").toURI().toURL());
		
		Gate.getCreoleRegister().registerDirectories(
				new File(Gate.getPluginsHome(), "JAPE_Plus").toURI().toURL());
		
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
		 
		 FeatureMap paramsLupedia = Factory.newFeatureMap();  
		 ProcessingResource lup = (ProcessingResource)Factory.createResource(  
			     "gate.lupedia.LupediaServicePR", paramsLupedia);
			 
		 controller.add(5,lup);
		 
//		 FeatureMap paramzemanta = Factory.newFeatureMap();  
//		 paramzemanta.put("apiKey", "h0qbqaqing7sypznp4rzoqm3");
//
//		 ProcessingResource zem = (ProcessingResource)Factory.createResource(  
//			     "gate.zemanta.ZemantaServicePR", paramzemanta);
//		 controller.add(6,zem);
//		 
		 FeatureMap params = Factory.newFeatureMap();  
			params.put("grammarURL", new File(resourcesPath+"resources/features.extraction.txt/MainGetFeatures.jape").toURI().toURL()); 
			ProcessingResource transducer = (ProcessingResource)Factory.createResource(  
			     "gate.jape.plus.Transducer", params);
			
		
		controller.add(transducer);
		
		return controller;
	}
}