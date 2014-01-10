package enhancer;

import java.io.BufferedReader;
import java.io.FileWriter;
import java.io.IOException;
import java.io.InputStreamReader;

import org.json.simple.JSONObject;
import org.json.simple.parser.JSONParser;
import org.json.simple.parser.ParseException;

import utils.PropertyHandler;



public class Main_curl {

	/**
	 * @param args
	 */
	static PropertyHandler ph=new PropertyHandler();
	
	public static void main(String[] args) {
		// TODO Auto-generated method stub
      
		//String data="iphone4";
		String data=ph.getDataToSearch();
		//String command="curl -X POST -H \"Accept: application/json  \" -H \"Content-type: text/plain\" --data \""+data+"\" http://54.235.133.136:9191/enhancer/chain/dbpedia-spotlight -u "+ph.getLoginName()+" -p "+ph.getPassword();
		//String command="curl -X POST -H \"Accept: application/json  \" -H \"Content-type: text/plain\" --data "+data+" http://54.235.133.136:9191/enhancer/chain/dbpedia-spotlight ";
		String url=ph.getUrl();
		String command="curl -X POST -H \"Accept: application/json  \" -H \"Content-type: text/plain\" --data \""+data+"\" "+ph.getUrl()+" -u sandhya -p sandhya";
		String fileName=ph.getDestinationJsonFile();
		
		try {
			Process p=Runtime.getRuntime().exec(command);
			
			BufferedReader reader=new BufferedReader(new InputStreamReader(p.getInputStream()));
						
			JSONParser parser=new JSONParser();
			
			Object obj=parser.parse(reader);
			JSONObject object=(JSONObject) obj;
			
			System.out.println(object);
			FileWriter file = new FileWriter(fileName);
			file.write(((JSONObject) obj).toJSONString());
			file.flush();
			
			System.out.println("!!! Data saved in file : "+fileName);
			file.close();
			
		} catch (IOException e) {
			// TODO Auto-generated catch block
			//e.printStackTrace();
			System.out.println("File Not Created");
		} catch (ParseException e) {
			// TODO Auto-generated catch block
			//e.printStackTrace();
			System.out.println("Unable to parse data");
		}
		
	}

}
