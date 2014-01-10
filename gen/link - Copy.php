<head>
<meta http-equiv='Pragma' content='no-cache'>
<meta http-equiv='Expires' content='-1'>

</head>

<form action="link.php" method="GET" class = "x">

<p class = "x">
	Please enter the webpage link</br>
</p>

<textarea rows="3" cols="80" name="ta"><?php
		if(isset($_GET['ta']))echo $_GET['ta'];
				
	    ?></textarea>
	<br/>	
			
	<?php if(isset($_GET['execute']) && isset($_GET['ta'])&& $_GET['ta']!=''){
			echo('</br>');

			}
			
			
		
	?>
	<br/>	
	<input type=submit value="Submit" name="execute" />
	<br/>
	<?php
putenv("CLASSPATH=D:\java\jdk1.7.0_01\bin");
putenv("gate.home=F:\gate");
putenv("gate.plugins.home=F:\gate\plugins");

	if(isset($_GET['execute']) && isset($_GET['ta'])&& $_GET['ta']!=''){
		
		$sentence = $_GET['ta'];
		
		$page = file_get_contents($sentence);

		echo $sentence;
		file_put_contents('InputHTMLFile.html',$page );
		
		//$uploadDir  =  "C:/sindu/wamp/www/sigmoid/"; //  copy  the  uploaded  file  to  the  directory
		//move_uploaded_file($_FILES['data']['tmp_name'],  $uploadDir  .  $_FILES['data']['name'])  or  die("Cannot  copy  uploaded  file"); //  display  success  message
		//echo  "File  successfully  uploaded  to  "  .  $uploadDir  .$_FILES['data']['name']; 
		//$actualfilename = $uploadDir  .$_FILES['data']['name']; 
		$filename = 'InputHTMLFile.html';
	}
	
	$command = "java -Xmx1g -jar F:\zwalaa\NLP-Gen\bp.jar $filename $sentence 2>&1";
	exec($command,$out);
	print_r($out);
?>

</form>

<script type="text/javascript">
 
var namee;
function change(namee){
document.getElementById("Display_content").innerHTML=document.getElementById(namee).innerHTML;
 
//optional Javascript code below - To change color of clicked tab
var livetab, i;
switch(namee){
    case 'tab1':
        livetab='t1';
    break;
    case 'tab2':
        livetab='t2';
    break;
    case 'tab3':
        livetab='t3';
    break;
	case 'tab4':
        livetab='t4';
    break;
}
for(i=1;i<=3;i++){
    document.getElementById("t"+i).style.backgroundColor="gray";
}
document.getElementById(livetab).style.backgroundColor="silver";
//optional code ends here
 
}
 
</script>

<style type="text/css" rel="stylesheet">
body
{
background:Lavender;
}
div.content_tab {
    display:none;
}
#tabbed_section {
    border: 2px solid gray;
    }
#menu {
    clear: both;
}
#Display_content {
    clear: both;
    min-height: 44px;
    padding: 2px;
    border: 1px solid gray;
}
#ul_tabs {
    clear: both;
    padding: 0px;
    margin: 0px;
}
.lh {
    padding:5px;
    background-color: gray;
    list-style: none;
    width: 140px;
    height: 40px;
    float: left;
    border: 1px solid #FFFFFA;
    text-align:center;
}
li.lh:hover {
    background-color: white;
    cursor: pointer;
}
 
</style>

<div id="tabbed_section">
  <div id="menu">
    <ul id="ul_tabs">
      <li class="lh" id="t1" onClick="change('tab1')">
    Sentences
      </li>
      <li class="lh" id="t2" onClick="change('tab2')">
    Entities
      </li>
      <li class="lh" id="t3" onClick="change('tab3')">
    Features
      </li>
	  <li class="lh" id="t4" onClick="change('tab4')">
    Concepts
      </li>
	  <li class="lh" id="t5" onClick="change('tab5')">
    Important Sentences
      </li>
    </ul>
  </div>
  <div id="Display_content" onload="change('h1')">
  </div>
    <div id="tab1" class="content_tab">
<?php
$file = fopen("SentencesOutput.txt", "r") or exit("Unable to open file!");
//Output a line of the file until the end is reached
while(!feof($file))
  {
  echo fgets($file). "<br>";
  }
fclose($file);
?>
	</div>
    <div id="tab2" class="content_tab">

	<form action="entity.php" method="GET" class = "x">
	
		<input type=submit name="execute" value="Entities Detailed" />
		<br/>
	</form>
	<?php
	$file = fopen("EntityOutput.txt", "r") or exit("Unable to open file!");
	//Output a line of the file until the end is reached
	while(!feof($file))
	{
		echo fgets($file). "<br>";
	}
	fclose($file);
	?>

    </div>
    <div id="tab3" class="content_tab">
<?php
$file = fopen("FeatureOutput.txt", "r") or exit("Unable to open file!");
//Output a line of the file until the end is reached
while(!feof($file))
  {
  echo fgets($file). "<br>";
  }
fclose($file);
?>
    </div>
	<div id="tab4" class="content_tab">
<?php
$file = fopen("ConceptOutput.txt", "r") or exit("Unable to open file!");
//Output a line of the file until the end is reached
while(!feof($file))
  {
  echo fgets($file). "<br>";
  }
fclose($file);
?>
    </div>
	
	<div id="tab5" class="content_tab">
<?php
$file = fopen("impSentsOutput.txt", "r") or exit("Unable to open file!");
//Output a line of the file until the end is reached
while(!feof($file))
  {
  echo fgets($file). "<br>";
  }
fclose($file);
?>
    </div>
</div>
