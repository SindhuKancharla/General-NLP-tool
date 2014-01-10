package enhancer;

import java.io.BufferedReader;
import java.io.FileWriter;
import java.io.IOException;
import java.io.InputStreamReader;

import org.json.simple.JSONObject;
import org.json.simple.parser.JSONParser;
import org.json.simple.parser.ParseException;

import utils.PropertyHandler;

public class TestCurlParam {

	/**
	 * @param args
	 */
	public static void main(String[] args) {
		// TODO Auto-generated method stub
		
		PropertyHandler ph=new PropertyHandler();
		/*
		 * send an enhancement request with a
custom content item URI that will include the execution metadata in the
response.
		 */
		
		//dev server
		//String command="curl -X POST -H \"Accept: text/turtle  \" -H \"Content-type: text/plain\" --data \" The Stanbol enhancer can detect famous cities such as Paris and people such as Bob Marley.\"  \"http://dev.iks-project.eu:8081/enhancer/chain/dbpedia-proper-noun?uri=urn:fise-example-content-item&executionmetadata=true\"";
		
		//for analyzed text
		//String command="curl -X POST -H \"Accept: text/turtle  \" -H \"Content-type: text/plain\" --data \" The Stanbol enhancer can detect famous cities such as Paris and people such as Bob Marley.\"  \"http://dev.iks-project.eu:8081/enhancer/chain/dbpedia-proper-noun?uri=urn:stanbol.enhancer:nlp.analysedText&executionmetadata=true\"";
		
		
		//stanbol local
		//String command="curl -X POST -H \"Accept: text/turtle  \" -H \"Content-type: text/plain\" --data \" The Stanbol enhancer can detect famous cities such as Paris and people such as Bob Marley.\"  \"http://54.235.133.136:9191/enhancer/chain/Testing?uri=urn:fise-example-content-item&executionmetadata=true\"";
		
		//String command="curl -X POST -H \"Accept: text/turtle  \" -H \"Content-type: text/plain\" --data \" The Stanbol enhancer can detect famous cities such as Paris and people such as Bob Marley.\"  \"http://54.235.133.136:9191/enhancer/chain/Testing?uri=urn:fise-example-content-item&executionmetadata=true\"";
		
		/*
		*Return Metadata and transformed Content versions
		**/
		//String command="curl -v -X POST -H \"Accept: multipart/from-data\" -H \"Content-type: text/html; charset=UTF-8\"   --data \"&lt;html&gt;&lt;body&gt;&lt;p&gt;The Stanbol enhancer  can detect famous cities such as Paris and people such       as Bob Marley..&lt;/p&gt;&lt;/body&gt;&lt;/html&gt;\"     \"http://dev.iks-project.eu:8081/enhancer/chain/dbpedia-proper-noun?outputContent=*/*&omitParsed=true&rdfFormat=application/rdf%2Bxml\"";
		
		
		
		/*
		 * Return Metadata and transformed Content versions
		 */
		
		//String command="curl -v -X POST -H \"Accept: multipart/from-data\" -H \"Content-type: text/html; charset=UTF-8\" --data \"&lt;html&gt;&lt;body&gt;&lt;p&gt;The Stanbol enhancer can detect famous cities such as Paris and people such as Bob Marley..&lt;/p&gt;&lt;/body&gt;&lt;/html&gt;\" \"http://dev.iks-project.eu:8081/enhancer/chain/dbpedia-proper-noun?outputContent=*/*&omitParsed=true&rdfFormat=application/rdf%2Bxml\"";
		
		
		/*
		 * Commands for getting POS tags
		 */
		String command="curl -X POST -H \"Content-Type: text/plain\" -H \"Content-Language: en\" --data \""+ph.getDataToSearch() +"\" \"http://dev.iks-project.eu:8087/analysis\" ";
		//curl -i -X POST -H "Content-Type: text/plain" -H "Content-Language: ru" --data "The Stanbol enhancer can detect famous cities such as Paris and people such as Bob Marley." http://54.235.133.136:8087/analysis
		try {
			Process p=Runtime.getRuntime().exec(command);
			
			BufferedReader br=new BufferedReader(new InputStreamReader(p.getInputStream()));
			
			System.out.println(br.readLine());
			String line;
        	while ((line = br.readLine()) != null) {
        		System.out.println(line);
        	}		
			
			
		} catch (IOException e) {
			// TODO Auto-generated catch block
			//e.printStackTrace();
			System.out.println("File Not Created");
		} 
	
	}

}
