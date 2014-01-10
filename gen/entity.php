<head>
<meta http-equiv='Pragma' content='no-cache'>
<meta http-equiv='Expires' content='-1'>

</head>

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
    width: 100px;
    height: 25px;
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
    DBPedia Tags
      </li>
      <li class="lh" id="t2" onClick="change('tab2')">
    Unknown Tags
      </li>
      <li class="lh" id="t3" onClick="change('tab3')">
    Annie Tags
      </li>
	  <li class="lh" id="t4" onClick="change('tab4')">
    My tags
      </li>
    </ul>
  </div>
  <div id="Display_content" onload="change('h1')">
  </div>
    <div id="tab1" class="content_tab">
<?php
$file = fopen("DBPediaOutput.txt", "r") or exit("Unable to open file!");
while(!feof($file))
  {
  echo fgets($file). "<br>";
  }
fclose($file);
?>
	</div>
    <div id="tab2" class="content_tab">

	<?php
	$file = fopen("UnknownOutput.txt", "r") or exit("Unable to open file!");
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
$file = fopen("OtherTagsOutput.txt", "r") or exit("Unable to open file!");
//Output a line of the file until the end is reached
while(!feof($file))
  {
  echo fgets($file). "<br>";
  }
fclose($file);
?>
    </div>
</div>
