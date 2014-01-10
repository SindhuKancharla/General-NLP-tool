package general.code;

import java.io.BufferedReader;
import java.io.BufferedWriter;
import java.io.File;
import java.io.FileReader;
import java.io.FileWriter;
import java.io.IOException;
import java.util.ArrayList;
import java.util.Collections;
import java.util.HashMap;
import java.util.HashSet;
import java.util.List;
import java.util.Map;
import java.util.Map.Entry;
import java.util.Set;

import extract.values.GetAllImpValues;

public class RemoveDupsFromTxt extends GetAllImpValues{

	public static void deduplicateTextFile(String fileName) throws IOException {
		   
		 
	    BufferedReader reader = new BufferedReader(new FileReader(new File(fileName)));
	    Set<String> lines = new HashSet<String>(); 
	   
	    List<String> names=new ArrayList<>();
	    List<String> namesNew=new ArrayList<>(names);

	    Map<String,String> map = new HashMap<>();
	    String line;
	    while ((line = reader.readLine()) != null) {
	    	line = line.trim();
	    	String lineCopy = new String(line);
	    	String[] parts = lineCopy.split(":");

	    	if(parts.length==2)
	    	{
	    		names.add(parts[1].trim());
	    		map.put(parts[1], parts[0]);
	    	}
	    	lines.add(line);
	    }
	    reader.close();
	    
	    for(String s : names){
	    	for(String l : names){
	    		if(s.contains(l))
	    		{
	    			namesNew.remove(l);
	    		}
	    	}
	    	namesNew.add(s);
	    }
	   
		BufferedWriter writer = new BufferedWriter(new FileWriter(fileName));

		List<String> finallist = new ArrayList<>();
	    for(Entry<String, String> s : map.entrySet()){
	    	String as=s.getKey().trim();
	    	for(String m : namesNew){
	    		m=m.trim();
	    		if(as.equalsIgnoreCase(m)){
	    			String unique = s.getValue() + " : " + s.getKey();
	    			finallist.add(unique);
	    		}
	    	}
	    }
	    
	    Collections.sort(finallist);
	    for(String s: finallist){
	    	writer.write(s+"\n\n");
	    	writer.newLine();
	    }
	    writer.close();
	}
	
}