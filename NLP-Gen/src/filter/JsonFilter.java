package filter;

import java.io.FileNotFoundException;
import java.io.FileReader;
import java.io.FileWriter;
import java.io.IOException;
import java.util.Iterator;

import org.json.simple.JSONArray;
import org.json.simple.JSONObject;
import org.json.simple.parser.JSONParser;
import org.json.simple.parser.ParseException;

import utils.PropertyHandler;

public class JsonFilter {

	/**
	 * @param args
	 */
	static PropertyHandler ph =new PropertyHandler();
	public static void main(String[] args) {
		// TODO Auto-generated method stub
		
		String fileName=ph.getDestinationJsonFile();
		JSONParser parser = new JSONParser();
		String entityFileName = ph.getDestinationEntityFile();
		String productDesc=ph.getDataToSearch();
		
		JSONObject obj = null;
		int counter=0;
		try {
			obj = (JSONObject) parser.parse(new FileReader(fileName));
			
			JSONArray array=(JSONArray)obj.get("@graph");
			
			System.out.println("Number of graph items : "+array.size());
			
			FileWriter file = new FileWriter(entityFileName);
			//file.write(((JSONObject) obj).toJSONString());
			//file.flush();
			file.write(" Product Description : "+productDesc+System.getProperty( "line.separator" )+System.getProperty( "line.separator" ));
			for(int i=0;i<array.size();i++)
			{
				JSONObject entity_refrence=(JSONObject) array.get(i);
				//System.out.println("graph["+(i+1)+"] : "+entity_refrence);
				
				if(entity_refrence.get("entity-reference")!=null)
				
				{	counter++;
					System.out.println("entity_refrence found for entity["+(i+1)+"]: "+entity_refrence.get("entity-reference"));
					file.write(entity_refrence.get("entity-reference").toString()+System.getProperty( "line.separator" ));
					
				}
			}
			
			file.flush();
			file.close();
			if(counter==0)
			{
				System.out.println("\n!!! No entity found ");
			}else{
				System.out.println("!!! Output Saved in file : "+entityFileName);
			}
			
		} catch (Exception e) {
			// TODO Auto-generated catch block
			e.printStackTrace();
		}
		 
		

	}

}
