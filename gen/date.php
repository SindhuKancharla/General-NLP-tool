<?php
session_start();
?>
<head>
<meta http-equiv='Pragma' content='no-cache'>
<meta http-equiv='Expires' content='-1'>

</head>
<style type="text/css" rel="stylesheet">
body
{
background:Lavender;
}
p.x{font-family:"Tahoma",Geneva, sans-serif ;}
p.x{font-size:14px;}

p.z{font-family:"Tahoma",Geneva, sans-serif ;}
p.z{font-size:14px;}
 
</style>
<form action="date.php" method="GET" class = "x">

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
	
	$command = "java -Xmx1g -jar F:\zwalaa\NLP-Gen\DateAndBPLocal.jar $filename $sentence 2>&1";
	exec($command,$out);
	print_r($out);
	
	$_SESSION['fileName'] = $filename;
	$_SESSION['sentence'] = $sentence;
	
	$CleanHTML = 'cleanHTML.html';
	$_SESSION['cleanHTML'] = $CleanHTML;

?>

</form>

<div id = "date">

<?php
if(isset($_GET['execute'])){
$file = fopen("DocumentDate.txt", "r") or exit("Unable to open file!");
//Output a line of the file until the end is reached
while(!feof($file))
  {
  echo " Document Date : " . '<br/>' . fgets($file);
  }
fclose($file);
}
?>

</div>
</br>
<br/>	

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
}
for(i=1;i<=2;i++){
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
p.x{font-family:"Tahoma",Geneva, sans-serif ;}
p.x{font-size:18px;}

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
	height:auto;
	overflow :hidden;
    padding: 2px;
    border: 1px solid gray;
	display:tab1
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
    CleanHTML
      </li>
      <li class="lh" id="t2" onClick="change('tab2')">
    CleanText
      </li>
    </ul>
  </div>
  <div id="Display_content" onload="change('h1')">
  </div>
    <div id="tab1" class="content_tab">
<?php
$file = fopen("cleanHTML.html", "r") or exit("Unable to open file!");
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
	$file = fopen("cleanText.txt", "r") or exit("Unable to open file!");
	//Output a line of the file until the end is reached
	while(!feof($file))
	{
		echo fgets($file). "<br>";
	}
	fclose($file);
	?>

    </div>
</div>
<br/>
<br/>
<form action="link.php" method="GET" class = "x">
	
		<input type=submit name="execute" value="Get Sentences And Entities" />
		<br/>
</form>
