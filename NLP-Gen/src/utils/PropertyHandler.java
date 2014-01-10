package utils;

import java.io.FileInputStream;
import java.io.IOException;
import java.util.Properties;

public class PropertyHandler {
	
	Properties properties = new Properties();

	public PropertyHandler(){
		
		try {
			  properties.load(new FileInputStream("api.conf"));
			 
		} catch (IOException e) {
			  System.out.println(e);
		}	
	}
	
	public void getProperties(){
		 
		  for(String key : properties.stringPropertyNames()) {
			  String value = properties.getProperty(key);
			  System.out.println(key + "=>" + value);
			}
		
	}



public String getDestinationJsonFile () {

	String destination_json_file = "";
	
	for(String key : properties.stringPropertyNames()) {
		  String value = properties.getProperty(key);
		 
		  if(key.equalsIgnoreCase("destination_json_file")){
			  destination_json_file  = value;
		  }
	}
	
	return destination_json_file ;
}
	
public String getDataToSearch  () {

	String data_to_search  = "";
	
	for(String key : properties.stringPropertyNames()) {
		  String value = properties.getProperty(key);
		 
		  if(key.equalsIgnoreCase("data_to_search")){
			  data_to_search   = value;
		  }
	}
	
	return data_to_search  ;
}
public String getLoginName  () {

	String loginName  = "";
	
	for(String key : properties.stringPropertyNames()) {
		  String value = properties.getProperty(key);
		 
		  if(key.equalsIgnoreCase("user")){
			  loginName   = value;
		  }
	}
	
	return loginName  ;
}public String getPassword   () {

	String password   = "";
	
	for(String key : properties.stringPropertyNames()) {
		  String value = properties.getProperty(key);
		 
		  if(key.equalsIgnoreCase("password")){
			  password    = value;
		  }
	}
	
	return password   ;
}
public String getUrl() {

	String url   = "";
	
	for(String key : properties.stringPropertyNames()) {
		  String value = properties.getProperty(key);
		 
		  if(key.equalsIgnoreCase("url")){
			  url    = value;
		  }
	}
	
	return url   ;
}
public String getDestinationEntityFile () {

	String destination_Entity_file = "";
	
	for(String key : properties.stringPropertyNames()) {
		  String value = properties.getProperty(key);
		 
		  if(key.equalsIgnoreCase("destination_Entity_file")){
			  destination_Entity_file  = value;
		  }
	}
	
	return destination_Entity_file ;
}

}
