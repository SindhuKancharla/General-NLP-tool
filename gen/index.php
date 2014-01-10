<html>
<head>
<script type="text/javascript">
function startTime()
{
var today=new Date();
var h=today.getHours();
var m=today.getMinutes();
var s=today.getSeconds();
// add a zero in front of numbers<10
m=checkTime(m);
s=checkTime(s);
document.getElementById('txt').innerHTML=h+":"+m+":"+s;
t=setTimeout('startTime()',500);
}

function checkTime(i)
{
if (i<10)
  {
  i="0" + i;
  }
return i;
}
</script>

 <SCRIPT LANGUAGE="JavaScript1.2">

var months=new Array(13);
months[1]="January";
months[2]="February";
months[3]="March";
months[4]="April";
months[5]="May";
months[6]="June";
months[7]="July";
months[8]="August";
months[9]="September";
months[10]="October";
months[11]="November";
months[12]="December";
var time=new Date();
var lmonth=months[time.getMonth() + 1];
var date=time.getDate();
var year=time.getYear();
if (year < 2000)
year = year + 1900;
document.write("<right>" + lmonth + " ");
document.write(date + ", " + year + "</center>");
</SCRIPT>
</head>
<body>
<style type="text/css">
body
{
background:Lavender;
}
p.z{
position:fixed;
top:80px;
left:500px
}
p.x{
position:fixed;
top:320px;
left:500px
}
p.y{
position:fixed;
top:200px;
left:500px
}
form{
position:fixed;
top:130px;
font-family:"Tahoma",Geneva, sans-serif ;
font-size:18px;
left:500px;}

p.y{font-family:"Tahoma",Geneva, sans-serif ;}
p.y{font-size:18px;}
p.x{font-family:"Tahoma",Geneva, sans-serif ;}
p.x{font-size:18px;}
p.z{font-family:"Tahoma",Geneva, sans-serif ;}
p.z{font-size:18px;}
</style>


<body onload="startTime()">
<div id="txt"></div>
<p class="z">
Do you want to upload a PDF or HTML or txt file ??</br>
</p>
<form action="sel2.php" method="GET">

	<input type="submit" value="Yes" name="yes" />

</form>

<form action="date.php" method="GET">

<p class="y">
	Do you want to give a link to a website ??
	</br>
	<input type="submit" value="Yes" name="yes" />
</p>
</form>


<form action="TextInput.php" method="GET" class = "x">

<p class = "x">
	Do you want to give the text input directly ??
	</br>
		<input type="submit" value="Yes" name="yes" />

</p>
</form>
</body>

</html>