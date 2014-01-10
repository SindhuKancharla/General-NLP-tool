var req;
var signup_emailid="";
var flg_signup_allpages = false;
function showDiv(dvnm)
{
	if(document.getElementById(dvnm)){document.getElementById(dvnm).style.display = 'block';}
}

function strpos( haystack, needle, offset){
var i = (haystack+'').indexOf( needle, offset );
return i===-1 ? false : i;
}

function hideDiv(dvnm)
{
	if(document.getElementById(dvnm)){document.getElementById(dvnm).style.display = 'none';}
}
	var uname="";
function validateloginform()
{
	uname	= document.getElementById("c_uname").value;
	var pass	= document.getElementById("c_pass").value;
	var remem	= document.getElementById("remember");
	remember = "";
	
	
	if (remem.checked)
	{
		remember = "On";
	}

	if ( uname == "" )
	{
		document.getElementById("c_uname").focus();
		alert("Please enter a username");
		return false;			
	}
	if ( pass == "" )
	{
		document.getElementById("c_pass").focus();
		alert("Please enter a password");
		return false;			
	}
	//alert(typeof(homepage));
	if(typeof(homepage) != "undefined")
	{
		if((strpos(uname,"@") == false || strpos(uname,"@rediffmail.com") != false) )
		{
			
			document.getElementById("loginform1").login.value = uname;
			document.getElementById("loginform1").passwd.value = pass;
			document.getElementById("loginform1").action = "http://mail.rediff.com/cgi-bin/login.cgi";
			//document.loginform1.action = "http://mail.rediff.com/cgi-bin/login.cgi";
			
			
			//alert(document.getElementById("loginform1").action);
			//alert(document.loginform1.action);
			
			return true;
		}
	}
	var url		=  org_domain+"/login/dologin";
	var postdata	= "id="+uname+"&num="+pass+"&format=xml";
	if (remember == "On")
	{
		postdata += "&remember=On";
	}
	
	/*if (window.XMLHttpRequest)
	{
		req = new XMLHttpRequest();
		req.onreadystatechange = loginstateChanged;
		req.open("POST", url, true);
		req.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
		req.setRequestHeader("Content-Length", postdata.length);
		req.setRequestHeader("Connection", "Close");
		req.send(postdata);
	}
	else if (window.ActiveXObject)
	{
		req = new ActiveXObject("Microsoft.XMLHTTP");
		if (req)
		{
			req.onreadystatechange = loginstateChanged;
			req.open("POST", url, true);
			req.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
			req.setRequestHeader("Content-Length", postdata.length);
			req.setRequestHeader("Connection", "Close");
			req.send(postdata);
		}
	}*/

	return true;
}

function loginstateChanged()
{
	if (req.readyState==4 || req.readyState=="complete")
	{
		if(req.status == 200) 
		{
			var status = "";
			var statustag = req.responseXML.getElementsByTagName("status");
			if(statustag[0].firstChild)
			{
				status = statustag[0].firstChild.nodeValue;
			}
			else
			{
				status = "";
			}
			if(status == "true")
			{
				window.location.reload();
			}
			else if(status == "pending")
			{
				hideDiv('div_signin');
				hideDiv('div_signup');
				showconfirm();
				document.getElementById("span_reconfirm").innerHTML = "<a href='"+org_domain+"/signup/reconfirmuser?id="+uname+"'>Click here</a> to send a confirmation email";
				return false;
			}
			else
			{
				document.getElementById("btn_login").disabled = false;
				document.getElementById("waitimg1").style.visibility='hidden' ;
				alert("You have entered invalid username and password.");
				return false;
			}
		}
		else
		{
				document.getElementById("btn_login").disabled = false;
				document.getElementById("waitimg1").style.visibility='hidden' ;
				return false;
		}
	}
	if (req.readyState==1)
	{
		document.getElementById("btn_login").disabled = true;
		document.getElementById("waitimg1").style.visibility='visible' ;
	}
}

// Name Validator
function isFullName(name)	
{
	var regex_for_name	= /^[A-Za-z]+ [A-Za-z]+$/;
	var alt_regex_for_name	= /^[A-Za-z]+$/;
	if(   (name.search(regex_for_name) != -1)  || (name.search(alt_regex_for_name) != -1 ) ) 
	{
		return true;
	} 
	else 
	{
		alert("Name is invalid");
		return	false;	
	}
}

function isPass(str,str2)	
{
	if ((str == "") || (str.length < 6))
	{
		alert("\nThe password field is either empty or less than 6 chars.\n\nPlease enter your password.")
		return false;
	}
	if (str != str2)
	{
		alert("Passwords typed do not match, please re-enter your passwords.\n\n");
		return false;
	}
	return true;
}

function validateform_allpages()
{
	flg_signup_allpages = true;
	return validateform();
}

function validateform()
{
	var fullname	= document.getElementById("fullname").value;
	var emailid		= document.getElementById("emailid").value;
	var pass		= document.getElementById("pass").value;
	var repass		= document.getElementById("repass").value;
	var date_day	= document.getElementById("date_day").value;
	var date_mon	= document.getElementById("date_mon").value;
	var date_yr		= document.getElementById("date_yr").value;

	var fld_captcha	= document.getElementById("fld_captcha").value;
	

	signup_emailid  = emailid;



	if ( isFullName(fullname) == false )
	{
		document.getElementById("fullname").focus();
		return false;			
	}
	
	if ( emailid == "" )
	{
		alert("Emailid is invaid");
		return false;			
	}

	if (isPass(pass,repass) == false)
	{
		return false;
	}
/*
	var url= org_domain+"/signup/register"
	var postdata = "fullname="+fullname+"&emailid="+emailid+"&pass="+pass+"&repass="+repass+"&sex="+sex+"&country="+country+"&city="+city+"&othercity="+othercity+"&date_day="+date_day+"&date_mon="+date_mon+"&date_yr="+date_yr+"&hintq="+hintq+"&answer="+answer+"&fld_captcha="+fld_captcha;
	if (window.XMLHttpRequest)
	{
		req = new XMLHttpRequest();
		req.onreadystatechange = registeruserstateChanged;
		req.open("POST", url, true);
		req.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
		req.setRequestHeader("Content-length", postdata.length);
		req.setRequestHeader("Connection", "close");
		req.send(postdata);
	}
	else if (window.ActiveXObject)
	{
		req = new ActiveXObject("Microsoft.XMLHTTP");
		if (req)
		{
			req.onreadystatechange = registeruserstateChanged;
			req.open("POST", url, true);
			req.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
			req.setRequestHeader("Content-length", postdata.length);
			req.setRequestHeader("Connection", "close");
			req.send(postdata);
		}
	}
*/
	return true;
}

function validatesimplesignupform()
{
	var fullname	= document.getElementById("fullname").value;
	var emailid		= document.getElementById("emailid").value;
	var pass		= document.getElementById("pass").value;
	var repass		= document.getElementById("repass").value;
	var date_day	= document.getElementById("date_day").value;
	var date_mon	= document.getElementById("date_mon").value;
	var date_yr		= document.getElementById("date_yr").value;

	var fld_captcha	= document.getElementById("fld_captcha").value;
	
	if ( isFullName(fullname) == false )
	{
		document.getElementById("fullname").focus();
		return false;			
	}
	
	if ( emailid == "" )
	{
		alert("Emailid is invaid");
		return false;			
	}

	if (isPass(pass,repass) == false)
	{
		return false;
	}
	return true;
}


function registeruserstateChanged() 
{ 
	if (req.readyState==4 || req.readyState=="complete")
	{
		if(req.status == 200) 
		{
			if (req.responseText == "")
			{
				document.getElementById("btn_register").disabled = false;
				alert("Error processing your request.\nPlease try again after sometime");
			}
			var status = "",message = "";
			var statustag	= req.responseXML.getElementsByTagName("status");
			var messagetag	= req.responseXML.getElementsByTagName("message");
			if(statustag[0].firstChild)
			{
				status = statustag[0].firstChild.nodeValue;
			}
			else
			{
				status = "";
			}
			if(messagetag[0].firstChild)
			{
				message = messagetag[0].firstChild.nodeValue;
			}
			else
			{
				message = "";
			}
			if(status == "Success")
			{
				if (flg_signup_allpages)
				{
					hideDiv('div_signin');
					hideDiv('div_signup');
				}
				else
				{
					hideDiv('div_signin2');
				}

				showconfirm() ;
			}
			else
			{
				document.getElementById("btn_register").disabled = false;
				document.getElementById("waitimg2").style.visibility='hidden' ;
				alert(message);
			}
		}
		else
		{
				document.getElementById("btn_register").disabled = false;
				document.getElementById("waitimg2").style.visibility='hidden' ;
		}
	}
	if (req.readyState==1)
	{
		document.getElementById("btn_register").disabled = true;
		document.getElementById("waitimg2").style.visibility='visible' ;
	}
}


function showcity(ob)
{
	if(ob.value=='')
	{
		hideDiv('cityrow');
	}
	else
	{
		if(ob.value=='India')
		{
			showDiv('cityrow');
			showDiv('city');
			hideDiv('othercity')
		}
		else
		{
			showDiv('cityrow');
			showDiv('othercity');
			hideDiv('city')
		}
	}
}


function loadcaptchaimg()
{
	document.getElementById("img_captcha").src= "http://social.rediff.com/reg_image.php?"+Math.floor(Math.random()*1000);	
}

function trim(s){
s = s.replace(/^\s*/,'').replace(/\s*$/, '');
return s;
}

function signin()
{
	if (typeof(r_controller) == "undefined")
	{
		r_controller	= "";
	}
	if (typeof(r_action) == "undefined")
	{
		r_action		= "";
	}
	document.getElementById('div_signin').innerHTML='<form method="POST" id="loginform1" name="loginform1" action="'+org_domain+'/login/dologin" onsubmit="return validateloginform();"><div><div class="floatR"><span title="Close" class="close" onclick="hideDiv(\'div_signin\');hideDiv(\'trans_div\');hideDiv(\'div_popupcontainer\');"><b>X</b></span>&nbsp;</div><b>Already a User? Sign in!</b></div><span class="clear ht15"></span><div class="fontsm">Sign-in to see what your friends are upto and make friends with people with similar interests.</div><span class="clear ht20"></span><div class="col1">Your email ID</div><div class="col2"><input type="text" name="id" id="c_uname"  class="txtbox" /><p class="grey1 sm2">eg:  abc@rediffmail.com, abc@yahoo.com</p></div><span class="clear ht10"></span><div class="col1">Password</div><div class="col2"><input type="password" name="num" id="c_pass"  class="txtbox" /></div><span class="clear ht10"></span><div class="col1"></div><div class="col2"><input type="checkbox" name="remember" id="remember" value="1" checked /> Keep me signed in<br/><span class="sm1 grey2 bold">&nbsp; &nbsp; &nbsp; (Uncheck if on shared computer)</span></div><span class="clear ht10"></span><div class="col1">&nbsp;</div><div class="col2"><input type="hidden" name="r_controller" id="id_r_controller" value="'+r_controller+'" /><input type="hidden" name="r_action" id="id_r_action" value="'+r_action+'" /><input type="hidden" name="login" /><input type="hidden" name="passwd" /><input value="existing" name="FormName" type="hidden"><input type="submit" value="Go"  id="btn_login" class="gobtn vmiddle"/> <img id="waitimg1" src="'+imgpath+'/blank.gif" class="waitimg" /></div><span class="clear ht5"></span><div class="col1">&nbsp;</div><div class="col2"><a href="javascript:forgotpass()">Forgot password?</a></div><span class="clear ht5"></span><hr class="hr1" /><span class="ht10"></span><p><b>New user? <a href="http://register.rediff.com/register/register.php?FormName=user_details">Create a Rediffmail account</a></b></p></form>'
	showDiv('trans_div');
	showDiv('div_popupcontainer');
	showDiv('div_signin');
}



function signup()
{
var data="";
data ='<form method="POST" action="'+org_domain+'/signup/register" onsubmit="return validateform_allpages()" ><div><div class="floatR"><span title="Close" class="close" onclick="hideDiv(\'div_signup\');hideDiv(\'trans_div\');"><b>X</b></span> &nbsp;</div><b>New User? Sign up!</b><br><span class=grey1>Tell us a few things about yourself and we will help you find classmates and<br>other friends among rediff.com\'s millions of world wide users.</span></div><span class="clear ht15"></span><div class="col1">Your full name</div><div class="col2"><input type="text" name="fullname" id="fullname" value="" class="txtbox" /></div><div class="col3"><img id="tick1" src="'+imgpath+'/blank.gif" class="" /><span id="msgtip1"></span></div><span class="clear ht5"></span><div class="col1">Your email ID</div><div class="col2"><input type="text" name="emailid"  id="emailid"  class="txtbox"  onfocus="validateSignupForm(1)" /></div><div class="col3"><img id="tick7" src="'+imgpath+'/blank.gif" class="" /><span id="msgtip7"></span></div><span class="clear ht5"></span><div class="col1">New password</div><div class="col2"><input type="password" name="pass" id="pass"  class="txtbox" onfocus="validateSignupForm(7)" /></div><div class="col3"><img id="tick2" src="'+imgpath+'/blank.gif" class="" /><span id="msgtip2"></span></div><span class="clear ht5"></span><div class="col1">Retype password</div><div class="col2"><input type="password" name="repass" id="repass"  class="txtbox" onfocus="validateSignupForm(2)"  /></div><div class="col3"><img id="tick3" src="'+imgpath+'/blank.gif" class="" /><span id="msgtip3"></span></div><span class="clear ht5"></span><div class="col1">Gender:</div><div class="col2"><input type="radio" name="sex" id="sex" value="m" onfocus="validateSignupForm(3)" />Male &nbsp; &nbsp; <input type="radio" name="sex" value="f" onfocus="validateSignupForm(3)" />Female</div><span class="clear ht5"></span><div class="col1">Date of birth</div><div class="col2">	<select name="date_day" id="date_day"><option value="">Day</option><option value="01">01</option><option value="02">02</option><option value="03">03</option><option value="04">04</option><option value="05">05</option><option value="06">06</option><option value="07">07</option><option value="08">08</option><option value="09">09</option><option value="10">10</option><option value="11">11</option><option value="12">12</option><option value="13">13</option><option value="14">14</option><option value="15">15</option><option value="16">16</option><option value="17">17</option><option value="18">18</option><option value="19">19</option><option value="20">20</option><option value="21">21</option><option value="22">22</option><option value="23">23</option><option value="24">24</option><option value="25">25</option><option value="26">26</option><option value="27">27</option><option value="28">28</option><option value="29">29</option><option value="30">30</option><option value="31">31</option></select> <select name="date_mon"  id="date_mon"><option value="">Month</option><option value="01">JAN</option><option value="02">FEB</option><option value="03">MAR</option><option value="04">APR</option><option value="05">MAY</option><option value="06">JUN</option><option value="07">JUL</option><option value="08">AUG</option><option value="09">SEP</option><option value="10">OCT</option><option value="11">NOV</option><option value="12">DEC</option></select> <select name="Date_Year" id="date_yr" ><option>Year</option>';
var optionCounter ;
var yearval="" ;

for (optionCounter = endyear; optionCounter >1908 ; optionCounter--)
{
	yearval += '<OPTION value='+optionCounter+'>'+optionCounter+'</option>' ;
}
data += yearval ;
data += '</select></div><span class="clear ht5"></span><div class="col1">Location</div><div class="col2"><input type="text" value="" name="city" id="signup_city" class="txtbox" onfocus="document.getElementById(\'msgtip4\').innerHTML=\'City where you live now, e.g. San Fransisco\'" /></div><div class="col3"><img id="tick4" src="'+imgpath+'/blank.gif" class="" /><span id="msgtip4"></span></div><span class="clear ht5"></span><div class="col1">School</div><div class="col2"><input type="text" value="" name="school" id="school" onfocus="validateSignupForm(4)" class="txtbox" /></div><div class="col3"><img id="tick5" src="'+imgpath+'/blank.gif" class="" /><span id="msgtip5"></span></div><span class="clear ht5"></span><div class="col1">College</div><div class="col2"><input type="text" value="" name="college"  id="college"  onfocus="validateSignupForm(5)" class="txtbox" /></div><div class="col3"><img id="tick6" src="'+imgpath+'/blank.gif" class="" /><span id="msgtip6"></span></div><span class="clear ht5"></span><div class="col1">&nbsp;</div><div class="col2"><img id="img_captcha" name="img_captcha" /></div><span class="clear ht5"></span><div class="col1">Enter the code given<br>in the above image</div><div class="col2"><input type="text" name="fld_captcha" id="fld_captcha"  class="txtbox" onfocus="validateSignupForm(6)"  /></div><span class="clear ht5"></span><div class="col1">&nbsp;</div><div class="col2"><input type="submit" value="Submit" id="btn_register" class="submitbtn vmiddle" /> <img id="waitimg2" src="'+imgpath+'/blank.gif" class="waitimg" /></div><span class="clear ht5"></span></form>' ;

document.getElementById('div_signup').innerHTML= data ;
showDiv('trans_div');
loadcaptchaimg();
showDiv('div_popupcontainer');
showDiv('div_signup');
}


function showconfirm()
{
	if (flg_signup_allpages)
	{
		document.getElementById('div_confirm').innerHTML='<div><div class="floatR"><span title="Close" class="close" onclick="hideDiv(\'div_confirm\');hideDiv(\'trans_div\');"><b>X</b></span> &nbsp;&nbsp;</div><b>Confirm your email address</b></div><span class="clear ht15"></span><div><span id="span_reconfirm">We have sent a confirmation email to your email-id.<br />To complete sign up, click on the link in the email.</span></div><span class="clear ht5"></span>';
		showDiv('div_popupcontainer');
		showDiv('div_confirm');
		if (signup_emailid != "")
		{
			var emaildomain = signup_emailid.substring(signup_emailid.lastIndexOf('@')+1);
			document.getElementById('div_confirm').innerHTML += '<br /><a href="http://'+emaildomain+'" target="_blank">Click here</a> to go to '+emaildomain+'';
		}
	}
	else
	{
		document.getElementById('div_signup2').innerHTML='<div><div class="floatR">&nbsp;&nbsp;</div><b>Confirm your email address</b></div><span class="clear ht15"></span><div><span id="span_reconfirm">We have sent a confirmation email to your email-id.<br />To complete sign up, click on the link in the email.</span></div><span class="clear ht5"></span>';
		if (signup_emailid != "")
		{
			var emaildomain = signup_emailid.substring(signup_emailid.lastIndexOf('@')+1);
			document.getElementById('div_signup2').innerHTML += '<br /><a href="http://'+emaildomain+'" target="_blank">Click here</a> to go to '+emaildomain+'';
		}
	}
}




function signinIphone()
{
document.getElementById('div_signin').innerHTML='<form method="POST" action="'+org_domain+'/login/dologin" onsubmit="return validateloginform()"><div class="floatR"><a href="javascript:hideDiv(\'div_signin\');" title="Close" class="close"><b>X</b></a> &nbsp;&nbsp;</div><span class="clear"></span><div class="floatL"><b>Already a User? Sign in!</b></div><span class="clear ht15"></span><div class="fontsm floatL">Sign-in to see what your friends are upto and make friends with people with similar interests.</div><span class="clear ht20"></span><div class="col1">Your email ID</div><div class="col2"><input type="text" name="id" id="c_uname" /></div><span class="clear ht5"></span><div class="col1">Password</div><div class="col2"><input type="password" name="num" id="c_pass" /></div><span class="clear ht5"></span><div class="col1"></div><div class="col2"><input type="checkbox" name="remember" id="remember"   value="1" checked /> Keep me signed in</div><span class="clear ht10"></span><div class="col1">&nbsp;</div><div class="col2"><input type="submit"  value="Go"  id="btn_login" class="gobtn vmiddle"/> <img id="waitimg1" src="'+imgpath+'/blank.gif" class="waitimg" /></div><span class="clear ht5"></span><div class="col1">&nbsp;</div><div class="col2"><a href="javascript:forgotpass();">Forgot password ?</a></div><span class="clear ht5"></span><hr class="hr1" /><span class="ht10"></span><p><b>New user? <a href="javascript:hideDiv(\'div_signin\');signupIphone();">Sign up</a></b></p></div></form>' ;
hideDiv('div_signup');
showDiv('div_signin')
}



function signupIphone()
{
var data="" ;
data ='<form method="POST" action="'+org_domain+'/signup/register" onsubmit="return validateform_allpages()" ><div><div class="floatR"><a href="javascript:hideDiv(\'div_signup\');" title="Close" class="close"><b>X</b></a> &nbsp;&nbsp;</div><b>New User? Sign up!</b><br><span class="fontsm2 grey1">Tell us a few things about yourself and we will help you find classmates and<br>other friends among rediff.com\'s millions of world wide users.</span></div><span class="clear ht15"></span><div class="col1">Your full name</div><div class="col2"><input type="text" name="fullname" id="fullname" value="" /></div><span class="clear ht5"></span><div class="col1">Your email ID</div><div class="col2"><input type="text" name="emailid"  id="emailid" /></div><span class="clear ht5"></span><div class="col1">New password</div><div class="col2"><input type="password" name="pass" id="pass" /></div><span class="clear ht5"></span><div class="col1">Retype password</div><div class="col2"><input type="password" name="repass" id="repass" /></div><span class="clear ht5"></span><div class="col1">Gender:</div><div class="col2"><input type="radio" name="sex" id="sex" value="m" />Male &nbsp; &nbsp; <input type="radio" name="sex" value="f" />Female</div><span class="clear ht5"></span><div class="col1">Date of birth</div><div class="col2">	<select name="date_day" id="date_day"><option value="">Day</option><option value="01">01</option><option value="02">02</option><option value="03">03</option><option value="04">04</option><option value="05">05</option><option value="06">06</option><option value="07">07</option><option value="08">08</option><option value="09">09</option><option value="10">10</option><option value="11">11</option><option value="12">12</option><option value="13">13</option><option value="14">14</option><option value="15">15</option><option value="16">16</option><option value="17">17</option><option value="18">18</option><option value="19">19</option><option value="20">20</option><option value="21">21</option><option value="22">22</option><option value="23">23</option><option value="24">24</option><option value="25">25</option><option value="26">26</option><option value="27">27</option><option value="28">28</option><option value="29">29</option><option value="30">30</option><option value="31">31</option></select> <select name="date_mon"  id="date_mon"><option value="">Month</option><option value="01">JAN</option><option value="02">FEB</option><option value="03">MAR</option><option value="04">APR</option><option value="05">MAY</option><option value="06">JUN</option><option value="07">JUL</option><option value="08">AUG</option><option value="09">SEP</option><option value="10">OCT</option><option value="11">NOV</option><option value="12">DEC</option></select> <select name="Date_Year" id="date_yr" ><option>Year</option>';
var optionCounter ;
var yearval="" ;

for (optionCounter = endyear; optionCounter >1908 ; optionCounter--)
{
	yearval += '<OPTION value='+optionCounter+'>'+optionCounter+'</option>' ;
}
data += yearval ;
data += '</select></div><span class="clear ht5"></span><div class="col1">Location</div><div class="col2"><input type="text" value="" name="city" id="signup_city" /></div><span class="clear ht5"></span><div class="col1">School</div><div class="col2"><input type="text" value="" name="school" id="school" /></div><span class="clear ht5"></span><div class="col1">College</div><div class="col2"><input type="text" value="" name="college"  id="college" /></div><span class="clear ht5"></span><div class="col1">&nbsp;</div><div class="col2"><img id="img_captcha" name="img_captcha" /></div><span class="clear ht5"></span><div class="col1">Enter the code given in the above image</div><div class="col2"><input type="text" name="fld_captcha" id="fld_captcha" /></div><span class="clear ht5"></span><div class="col1">&nbsp;</div><div class="col2"><input type="submit" value="Submit" id="btn_register" class="submitbtn vmiddle" /> <img id="waitimg2" src="'+imgpath+'/blank.gif" class="waitimg" /></div><span class="clear ht5"></span></form>' ;

document.getElementById('div_signup').innerHTML= data ;
loadcaptchaimg();
showDiv('div_signup');

}

function forgotpass() 
{
	window.open("http://login.rediff.com/cgi-bin/subs/passwd_remind.cgi?FormName=showlogin",'forgetPswdWinRediff','toolbar=no,directories=no,resize=yes,menubar=no,location=no,scrollbars=yes,width=490,height=480,maximize=null,top=70,left=80'); 
}


var xmlHttp;
var allowsubmit = false;
function checktosubmit()
{
	if (allowsubmit)
	{
		return true;
	}
	else
	{
		showPassdiv();
		return false;
	}
}
function validEmail(email)
{
		var exclude=/[^@\-\.\w]|^[_@\.\-]|[\._\-]{2}|[@\.]{2}|(@)[^@]*\1/;
		var hc=/\.[a-zA-Z]{2,4}$/;
		if((email.search(exclude)!=-1)||(email.search(hc)==-1))
		{
			return false;
		}
		atPos=email.indexOf("@",0);
		pPos1=email.indexOf(".",0);
		periodPos=email.indexOf(".",atPos);
		pos1=pPos1;
		pos2=0;
		while(pos2>-1)
		{pos2=email.indexOf(".",pos1+1);
			if(pos2==pos1+1)
			{
				return false;
			}
			else{pos1=pos2}}
		if(atPos==-1)
		{	return false;	}
		if(atPos==0)
		{	return false;	}
		if(pPos1==0)
		{	return false;	}
		if(email.indexOf("@",atPos+1)>-1)
		{	return false;	}
		if(periodPos==-1)
		{	return false;	}
		if(atPos+1==periodPos)
		{	return false;	}
		if(periodPos+3>email.length)
		{	return false;	}
		return true;
}

function showPassdiv()
{

	xmlHttp=GetXmlHttpObject();
	if (xmlHttp==null)
	{
		alert ("Browser does not support AJAX");
		 return;
	}
	var usr_email	= document.getElementById('txtlogin').value;

	if (usr_email.indexOf("@") == -1)
	{
		usr_email = usr_email + "@rediffmail.com";
	}


	if (!validEmail(usr_email))
	{
		alert("Please enter a valid email");
		return false;
	}

	var url=org_domain+"/login/validatelogin";
	url=url+"/"+usr_email;
	xmlHttp.onreadystatechange=stateChanged 
	xmlHttp.open("GET",url,true)
	xmlHttp.send(null)
}


function stateChanged() 
{ 
	if (xmlHttp.readyState==4 || xmlHttp.readyState=="complete")
 	{
		if(xmlHttp.status == 200) 
		{
			if(xmlHttp.responseText == "true")
			{
				document.getElementById("btn_go").disabled = false;
				document.getElementById("waitimg3").style.visibility='hidden' ;
				document.getElementById('pass_div').style.display='block' ;
				document.getElementById('btn_go').style.visibility='hidden' ;
				document.getElementById('div_register').style.display='none' ;
				document.getElementById('pass_box').focus();
				allowsubmit = true;
			}
			else
			{
				var usr_email	= document.getElementById('txtlogin').value;
				if (usr_email.indexOf("@rediffmail.com") != -1)
				{
						alert("Invalid rediffmail id");
						document.getElementById("btn_go").disabled = false;
						document.getElementById("waitimg3").style.visibility='hidden' ;
						return false;
				}
				document.getElementById('pass_div').style.display='none' ;
				document.getElementById('div_register').style.display='block' ;
				document.getElementById('emailid').value = usr_email;
				document.getElementById("btn_go").disabled = false;
				document.getElementById("waitimg3").style.visibility='hidden' ;
			}
		}
		else
		{
			// enable the continue button
			alert("Error in processing the request.Please try again after sometime.");
			document.getElementById("btn_go").disabled = false;
			document.getElementById("waitimg3").style.visibility='hidden' ;
		}
	}
	if (xmlHttp.readyState==1)
	{
		document.getElementById("btn_go").disabled = true;
		document.getElementById("waitimg3").style.visibility='visible' ;
	}	
}


function GetXmlHttpObject()
{
	var xmlHttp=null;
	try
	{
	 // Firefox, Opera 8.0+, Safari
	 xmlHttp=new XMLHttpRequest();
	}
	catch (e)
	{
	 //Internet Explorer
		try
		{
			xmlHttp=new ActiveXObject("Msxml2.XMLHTTP");
		}
		 catch (e)
		{
			xmlHttp=new ActiveXObject("Microsoft.XMLHTTP");
		}
	}
	return xmlHttp;
}

function submitgroupSearch()
{
  var srchword = trim(document.getElementById('srchword').value) ;
  if(srchword=="")
  {
	document.getElementById('srchword').focus();
	alert("Please enter search keyword");
	return false;
  }
  var query1 = org_domain+"/groups/search/" + encodeURIComponent(srchword) ; 
  document.groups_srchform.action= query1  ;
  document.groups_srchform.submit();
  return false;
}




function showsource(ob,dvnm) 
{
	var data="<p align=right ><span title='Close' onclick='this.parentNode.parentNode.style.display=\"none\"' class='close' ><b>X</b>&nbsp;</span></p>";
	ob.parentNode.nextSibling.innerHTML = data + document.getElementById(dvnm).innerHTML  ;
	ob.parentNode.nextSibling.style.display='block';
}
function showothersources(ob,divm)
{
	ob.style.visibility = "hidden";
	ob.style.display = "none";
	document.getElementById("sources_"+divm).innerHTML = document.getElementById("sources_"+divm).innerHTML + document.getElementById("others_"+divm).innerHTML;
	//document.getElementById(divm).style.visibility = "visible";
	//document.getElementById(divm).style.display = "block";
}

function slideAd()
{	
	var toppos = parseInt(document.getElementById('toprdiv').style.height) ;
	if(toppos<150)
	{
		document.getElementById('toprdiv').style.height= parseInt(toppos+3) + 'px' ;
		window.setTimeout("slideAd()",10);
	}
}

/*
function slideAd(ht)
{	
	var toppos = parseInt(document.getElementById('toprdiv').style.height) ;
	if(toppos<ht)
	{
		document.getElementById('toprdiv').style.height= parseInt(toppos+3) + 'px' ;
		window.setTimeout("slideAd("+ht+")",10);
	}
}
*/

var tipmsg=new Array("<b>What is RealTime News?</b><br/>Rediff RealTime puts together the top news topics from across 200 news sources","<b>What is Citizen Journalist?</b><br/>Got an issue to highlight?<br>Share your story with the world. Email your photos, videos and stories to <a href='mailto:citizen.reporter@rediffmail.com'>citizen.reporter@rediffmail.com</a>","<b>How to upload?</b><br/>text for how to upload","<b>Stars spotted</b><br/>Met a celebrity? Email the photo or video to <a href='mailto:moviesreview@rediff.co.in' >moviesreview@rediff.co.in</a> and get featured here","<b>How to mail us?</b><br/>text for how to mail","<b>Investment story</b><br/>Share your investment stories with us. Let others in on what the markets have taught you. Email your stories to <a href='mailto:money@rediff.co.in' >money@rediff.co.in</a>","<b>Stars spotted</b><br/>Met your favourite sports star? Email the photo or video to <a href='mailto:sportsdesk@rediff.co.in' >sportsdesk@rediff.co.in</a> & get featured here","<b>What is Voters' Voices?</b><br/>Email election stories, photos and videos to <a href='mailto:indiavotes2009@rediffmail.com'>indiavotes2009@rediffmail.com</a> - we shall feature them right here","<b>Group Privacy Settings</b><p><b>Public - </b>Anyone can join the group, no approval required from the group owner.</p><p><b>Private - </b>Membership requests are subject to the approval of the group owner.</p>");

function showBubbleTip(tblid,tblid1,x,y,arrow,pos,msg)
{
		var curleft = 0;
		var curtop = 0;
		
		var obj = tblid;
		
		if (obj.offsetParent)
		{
			while (obj.offsetParent)
			{
				curleft += obj.offsetLeft
				obj = obj.offsetParent;
			}
		}
		else if (obj.x)
		curleft += obj.x;

		document.getElementById(tblid1).style.left= parseInt(curleft + x) + 'px' ;

		var obj1 = tblid;
		if (obj1.offsetParent)
		{
			while (obj1.offsetParent)
			{
				curtop += obj1.offsetTop
				obj1 = obj1.offsetParent;
			}
		}
		else if (obj1.y)
			curtop += obj1.y;

		document.getElementById(tblid1).style.top=parseInt(curtop + y) + 'px' ;
		if(pos=="top")
		{
			document.getElementById(tblid1).childNodes[4].innerHTML = msg ;
			document.getElementById(tblid1).childNodes[9].className = arrow ;
		}
		else
		{
			document.getElementById(tblid1).childNodes[5].innerHTML = msg ;
			document.getElementById(tblid1).childNodes[0].className = arrow ;
		}
		document.getElementById(tblid1).style.display='block';
}


function submitprofileSearch()
{
  var srchword = trim(document.getElementById('srchword').value) ;
  if(srchword=="")
  {
	document.getElementById('srchword').focus();
	alert("Please enter search keyword");
	return false;
  }
  var query1 = org_domain+"/profile/search/" + encodeURIComponent(srchword) ; 
  document.profilesearch.action= query1  ;
  document.profilesearch.submit();
  return false;
}

function validateSignupForm(n)
{
	switch (n)
	{
	case 1 :	 
		if(trim(document.getElementById('fullname').value)!= "" )
		{
			document.getElementById('tick1').className='greentick' ;
			document.getElementById('msgtip1').innerHTML="" ;
		}
		else
		{
			document.getElementById('fullname').focus() ;
			document.getElementById('msgtip1').innerHTML='<span class=red>* </span>Please enter you full name' ;
			return false ;
		}
		break ;
	case 2 :	
		if(trim(document.getElementById('pass').value)!= "" )
		{
			document.getElementById('tick2').className='greentick' ;
			document.getElementById('msgtip2').innerHTML="" ;
		}
		else
		{
			document.getElementById('pass').focus() ;
			document.getElementById('msgtip2').innerHTML='<span class=red>* </span>Please enter password' ;
			return false ;
		}
		break ;
	case 3 :	
		if(trim(document.getElementById('pass').value) == trim(document.getElementById('repass').value) )
		{
			document.getElementById('tick3').className='greentick' ;
			document.getElementById('msgtip3').innerHTML="" ;
		}
		else
		{
			document.getElementById('repass').focus() ;
			document.getElementById('msgtip3').innerHTML='<span class=red>* </span>Passwords do not match' ;
			return false ;
		}
		break ;
	case 4 :	
		if(trim(document.getElementById('signup_city').value) != "" )
		{
			document.getElementById('tick4').className='greentick' ;
			document.getElementById('msgtip4').innerHTML="" ;
		}
		else
		{
			document.getElementById('signup_city').focus() ;
			document.getElementById('msgtip4').innerHTML='<span class=red>* </span>City where you live now, e.g. San Fransisco ' ;
			return false ;
		}
		break ;
	case 5 :	
		if(trim(document.getElementById('school').value) != "" )
		{
			document.getElementById('tick5').className='greentick' ;
			document.getElementById('msgtip5').innerHTML="" ;
		}
		else
		{
			document.getElementById('school').focus() ;
			document.getElementById('msgtip5').innerHTML='<span class=red>* </span>Please enter you school name' ;
			return false ;
		}
		break ;
	case 6 :	
		if(trim(document.getElementById('college').value) != "" )
		{
			document.getElementById('tick6').className='greentick' ;
			document.getElementById('msgtip6').innerHTML="" ;
		}
		else
		{
			document.getElementById('college').focus() ;
			document.getElementById('msgtip6').innerHTML='<span class=red>* </span>Please enter you college name' ;
			return false ;
		}
		break ;
	case 7 :	
		if( validEmail(document.getElementById('emailid').value) )
		{
			document.getElementById('tick7').className='greentick' ;
			document.getElementById('msgtip7').innerHTML="" ;
		}
		else
		{
			document.getElementById('emailid').focus() ;
			document.getElementById('msgtip7').innerHTML='<span class=red>* </span>Not a valid email ID' ;
			return false ;
		}
		break ;
	}
}
function submitNewsSearch()
{
	for (var i=0; i < document.srchform.srch_in.length; i++)
	{
		if (document.srchform.srch_in[i].checked)
		{
			var rad_val = document.srchform.srch_in[i].value;
		}
	}

  var srchword = trim(document.getElementById('srchword').value) ;
  if(srchword=="")
  {
	document.getElementById('srchword').focus();
	alert("Please enter search keyword");
	return false;
  }
  if( rad_val == "web" )
  {
	var newsquery = "http://search1.rediff.com/dirsrch/default.asp?src=web&MT="+srchword ; 
  }
  else
  {
	var newsquery = "http://search.rediff.com/dirsrch/default.asp?MT="+srchword+"&search=site" ;
  }
  document.srchform.action= newsquery  ;
  document.srchform.submit();
  return false;
}