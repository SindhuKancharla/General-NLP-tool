package general.code;

import java.io.BufferedWriter;
import java.io.File;
import java.io.FileWriter;
import java.io.IOException;
import java.net.MalformedURLException;
import java.net.URL;

import org.xml.sax.SAXException;

import de.l3s.boilerpipe.BoilerpipeExtractor;
import de.l3s.boilerpipe.BoilerpipeProcessingException;
import de.l3s.boilerpipe.extractors.ArticleExtractor;
import de.l3s.boilerpipe.sax.HTMLHighlighter;

public class BoilerPipeHTML {
	
	static String u ="http://movies.ndtv.com/movie-reviews/the-wolf-of-wall-street-when-greed-was-good-and-fun-910?ndtv_rhs";
	protected static File file = new File("F:/zwalaa/NLP-Gen/resources/test/1.html");

	public static void main(String[] args) throws IOException, SAXException{
		
		URL url = null;
		try {
			url = new URL(u);
		} catch (MalformedURLException e2) {
			e2.printStackTrace();
		}
		
		FileWriter fw = new FileWriter(file);
		
		BufferedWriter bff = new BufferedWriter(fw);
		
		try {
			BoilerpipeExtractor bp = ArticleExtractor.INSTANCE;
			String text  = HTMLHighlighter.newExtractingInstance().process(url,bp);
			bff.write(text);
			bff.close();
		} catch (BoilerpipeProcessingException e1) {
			e1.printStackTrace();
		}
	
	}

}
