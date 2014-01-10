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

import java.io.File;
import java.io.IOException;

import date.boilerpipe.code.GetDocumentDateHTML;

public class GetControllerForDateExtractionHTML extends GetDocumentDateHTML{

	
	public static CorpusController createController() throws GateException, IOException {

		Gate.getCreoleRegister().registerDirectories(
				new File(Gate.getPluginsHome(), "Tools").toURI().toURL());
		
		SerialAnalyserController controller = (SerialAnalyserController) 
				PersistenceManager.loadObjectFromFile(new File(new File( 
				Gate.getPluginsHome(), ANNIEConstants.PLUGIN_DIR),ANNIEConstants.DEFAULT_FILE));		
		 
		ProcessingResource transfer = (ProcessingResource) Factory.
        		createResource("gate.creole.annotransfer.AnnotationSetTransfer", Factory.newFeatureMap());
		FeatureMap map = Factory.newFeatureMap();
		map.put("inputASName","Original markups");
		transfer.setParameterValues(map);
		controller.add(transfer);
	 
		FeatureMap params = Factory.newFeatureMap();  
		params.put("grammarURL", new File(resourcesPath+"resources/features.extraction.html/GetDocDate.jape").toURI().toURL()); 
		ProcessingResource transducer = (ProcessingResource)Factory.createResource(  
		     "gate.creole.Transducer", params);
		
		controller.add(transducer);
		
		return controller;
	}
}
