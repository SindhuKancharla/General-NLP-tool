<?php
		session_start();
?>
<head>
<meta http-equiv='Pragma' content='no-cache'>
<meta http-equiv='Expires' content='-1'>

</head>

<form action="link.php" method="GET" class = "x">

	<?php

		putenv("CLASSPATH=D:\java\jdk1.7.0_01\bin");
		putenv("gate.home=F:\gate");
		putenv("gate.plugins.home=F:\gate\plugins");

		$filename = $_SESSION['fileName'];
		$sentence = $_SESSION['sentence'];

		$CleanHTML = $_SESSION['cleanHTML'];

		$command = "java -Xmx1g -jar F:\zwalaa\NLP-Gen\SentNEntitiesLocal.jar $filename $sentence $CleanHTML 2>&1";
		exec($command,$out);
		print_r($out);
	?>

</form>
<input action="action" type="button" value="Back" onclick="history.go(-2);" />
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
	case 'tab5':
        livetab='t5';
    break;
	case 'tab6':
        livetab='t6';
    break;
}
for(i=1;i<=6;i++){
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
    DBPedia Entities
      </li>
	  <li class="lh" id="t3" onClick="change('tab3')">
    Other Entities
      </li>
      <li class="lh" id="t4" onClick="change('tab4')">
    Features
      </li>
	  <li class="lh" id="t5" onClick="change('tab5')">
    Concepts
      </li>
	  <li class="lh" id="t6" onClick="change('tab6')">
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

	<?php
	$file = fopen("DBPediaOutput.txt", "r") or exit("Unable to open file!");
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
	$file = fopen("AnnieOutput.txt", "r") or exit("Unable to open file!");
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
$file = fopen("FeatureOutput.txt", "r") or exit("Unable to open file!");
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
$file = fopen("ConceptOutput.txt", "r") or exit("Unable to open file!");
//Output a line of the file until the end is reached
while(!feof($file))
  {
  echo fgets($file). "<br>";
  }
fclose($file);
?>
    </div>
	
	<div id="tab6" class="content_tab">
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
