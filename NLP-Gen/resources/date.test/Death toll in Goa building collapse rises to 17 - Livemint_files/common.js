// function to convert the first letter of words in uppercase
function cnvrt2Upper(str)
{ 
    return str.toLowerCase().replace(/\b[a-z]/g,cnvrt);
    function cnvrt()
     { 
       return arguments[0].toUpperCase(); 
     }
}
// function to use select the menu tab on load
function onLoadMenuSelect(str)
{
//alert(str)
	var stringSplitArray = str.split("/");
	var strname = stringSplitArray[stringSplitArray.length-1];
	var re = /\$|,|@|#|~|`|\/|\+|\=|\[|\-|\_|\]|\[|\}|\{|\;|\:|\'|\"|\<|\>|\||\\|\!|\$|\./g;
	str = cnvrt2Upper(strname.replace(re,""));
    if(str == 'mitem/' || str == '' || str == 'Home Page')
	{
	  $("#mitemHome").removeClass();
	  $("#mitemHome").addClass('active');
	}
	else
	{ 
	$("#mitemHome").removeClass();
	  $("#mitem"+str).removeClass();
	  $("#mitem"+str).addClass('active');
	}
}

function ga(title,category,action)
	{
    _gaq.push(['_trackEvent',category, action, title]);
	}
function onClickChangeURLVideos(title)
{
        ga(title,"Videos","Play");

}


function onClickChangeURLTrack(title,type)
{
    ga(title,"Small Picture",type);
}


//function to show the menu tab 
function ShowTab(name,id,title,defaultValue)
{
	$("a[id^=mitem]").removeClass();
	var tag=name+"_"+id;
	document.getElementById(tag).style.display = "block";   
}
// function to hide the menu tab
function HideTab(name,id,title,defaultValue)
{
//alert(title)
var tab = title;
if(tab=='search_box')
	{
	//$("#"+tab).attr("id","search_box");
	
	//$("#search_box1").addClass('active');
	}
	var stringSplitArray = defaultValue.split("/");
	var strname = stringSplitArray[stringSplitArray.length-1];
	var re = /\$|,|@|#|~|`|\/|\+|\=|\[|\-|\_|\]|\[|\}|\{|\;|\:|\'|\"|\<|\>|\||\\|\!|\$|\./g;
	var str = cnvrt2Upper(strname.replace(re,""));
	if((title=="mitem"+str) || (title=="mitemHome")){$("#"+title).addClass("active");}
	var tag=name+"_"+id;
	document.getElementById(tag).style.display = 'none';
	//alert(defaultValue);
	onLoadMenuSelect(defaultValue);      
}
function ShowTabBox(name,id,tab,defaultValue)
{

	$("#"+tab).removeClass();
	$("a[id^=mitem]").removeClass();
	if(tab=='search_box')
	{
	$("#"+tab).attr("id","search_box1");
	$("#search_box1").addClass('active');
	}
	else
	{$("#"+tab).addClass('active');}
	var tag=name+"_"+id;
	document.getElementById(tag).style.display = 'block';
}
// function to hide the menu tab
function HideTabBox(name,id,tab,defaultValue)
{
  if(tab=='search_box')
	{
	$("#search_box1").attr("id","search_box");
	$("#search_box").removeClass();
	}
	else
	{
	$("#"+tab).removeClass();
	}
	var tag=name+"_"+id;
	document.getElementById(tag).style.display = 'none';    
	onLoadMenuSelect(defaultValue);
}
//check browser
var Browser = {
  Version: function() {
    var version = 999; // we assume a sane browser
    if (navigator.appVersion.indexOf("MSIE") != -1)
      // bah, IE again, lets downgrade version number
      version = parseFloat(navigator.appVersion.split("MSIE")[1]);
    return version;
  }
}

function checkIEBrowser()
{ 
	if (/MSIE (\d+\.\d+);/.test(navigator.userAgent))
	{ 
	 var ieversion=new Number(RegExp.$1) // capture x.x portion and store as a number	 
	 var v_no = 'f';
	 }
	else
	{
	var v_no = 't';
	}
	
	return v_no;
}

function validate_email(str) 
{
	var reg = /^([A-Za-z0-9_\-\.])+\@([A-Za-z0-9_\-\.])+\.([A-Za-z]{2,4})$/;
	var email = str;
	if(reg.test(email) == false) 
	{
		alert('Please enter a valid email ID');
		document.getElementById("destAddresses").focus();
		return false;
	}
}
function printpage(url)
{
	newwindow=window.open(url,'name','height=500,width=790,scrollbars=yes');
	if (window.focus) {newwindow.focus()}
	return false;
}
function emailpage(url)
{
	newwindow=window.open(url,'name','height=500,width=840,scrollbars=yes');
	if (window.focus) {newwindow.focus()}
	return false;
}
function forgot_details(str,divid)
{
	if(str == '1')
	{
		$("#"+divid).hide();
		$("#"+divid+"open").show("slow");
	}
	else if(str == '2')
	{
		$("#"+divid+"open").hide("slow");
		$("#"+divid).show("slow");
	}
}
function validate_frm()
{
	if(document.frm1.username.value == "") 
	{
		alert('User name should not be empty');
		document.frm1.username.focus();
		return false;
	}
	if(document.frm1.password.value == "") 
	{
		alert('Password should not be empty');
		document.frm1.password.focus();
		return false;
	}
	return true;
}

function cpwdValidation()
{
	if(document.cPwdLogin.cpass.value == "") 
	{
		alert('Password should not be empty');
		document.cPwdLogin.cpass.focus();
		return false;
	}
	if(document.cPwdLogin.cmpass.value == "") 
	{
		alert('Confirm Password should not be empty');
		document.cPwdLogin.cmpass.focus();
		return false;
	}
	if(document.cPwdLogin.cmpass.value != document.cPwdLogin.cpass.value) 
	{
		alert("Confirm Password doesn't match");
		document.cPwdLogin.cmpass.focus();
		return false;
	}
	
	return true;

}
function fuidValidation(url)
{
		var reg = /^([A-Za-z0-9_\-\.])+\@([A-Za-z0-9_\-\.])+\.([A-Za-z]{2,4})$/;
		var address = document.rmbuidLogin.email.value;
		
		if(address == '')
		{
			alert("Please enter your email-ID");
			document.rmbuidLogin.email.focus();
			return false;
		}
		
		if(test(reg.address) == false)
		{
			alert("Please enter your correct email-ID");
			document.rmbuidLogin.email.focus();
			return false;
		}
		
        return true;
 
}
function fpasswordValidation(url)
{
		var reg = /^([A-Za-z0-9_\-\.])+\@([A-Za-z0-9_\-\.])+\.([A-Za-z]{2,4})$/;
		var address = document.rmbPwdLogin.username.value;
		
		if(address == '')
		{
			alert("Please enter your User ID");
			document.rmbPwdLogin.username.focus();
			return false;
		}
		
        return true;
 
}
function converdatetoTimestamp(strDate){

//	var datum = Date.parse(strDate);
   var datum = Date.parse(strDate.replace(/\-/ig, '/').split('.')[0]);

	//alert(datum);
	return datum/1000;
}
function validate_login_frm() 
{
	var reg = /^([A-Za-z0-9_\-\.])+\@([A-Za-z0-9_\-\.])+\.([A-Za-z]{2,4})$/;
	var address = document.login_frm.email.value;
	if(document.login_frm.firstname.value == "") 
	{
		alert('First name should not be empty');
		document.login_frm.firstname.focus();
		return false;
	}
	if(document.login_frm.lastname.value == "") 
	{
		alert('Last name should not be empty');
		document.login_frm.lastname.focus();
		return false;
	}  
		if(document.login_frm.birthDate1.value == "") 
	{
		alert('DOB should not be empty');
		document.login_frm.birthDate1.focus();
		return false;
	}
	
	if(document.login_frm.birthDate1.value != "") 
	{
	        var bValue = document.login_frm.birthDate1.value;
			var d = bValue.match(/\d+/g);
			//document.login_frm.birthDate.value = +new Date(d[0], d[1] - 1, d[2]) / 1000;
			//alert(converdatetoTimestamp(document.login_frm.birthDate1.value));
			document.login_frm.birthDate.value = converdatetoTimestamp(document.login_frm.birthDate1.value);
			//return false;
	}
	if(document.login_frm.cellNumber.value != "") 
	{
	  if(isNaN(document.login_frm.cellNumber.value))
	  {
	alert("Mobile number should be numeric");
    return false;	  
	}
/*		else
		{
			var phone = document.login_frm.cellNumber.value;
		    var reg_phone=/^([0-9)( \-+]){10}$/;
	     if( !reg_phone.test( phone))
			    {
			    alert("please enter the 10 digit numeric value");
			    document.login_frm.cellNumber.value;
			    return false;
			    }
		
		}
	*/
	
	}
		
	if(document.login_frm.username.value == "") 
	{
		alert('User name should not be empty');
		document.login_frm.username.focus();
		return false;
	}
	if(address == '')
	{
		alert("Please enter your email ID");
		document.login_frm.email.focus();
		return false;
	}
	if(reg.test(address) == false) 
	{
		alert('Please enter a valid email ID');
		document.login_frm.email.focus();
		return false;
	}
	if(document.login_frm.password.value == "") 
	{
		alert('Password should not be empty');
		document.login_frm.password.focus();
		return false;
	}
	if(document.login_frm.password2.value == "") 
	{
		alert('Confirm password should not be empty');
		document.login_frm.password2.focus();
		return false;
	}
	if(document.login_frm.password.value != document.login_frm.password2.value) 
	{
		alert("Confirm Password doesn't match");
		document.login_frm.password2.focus();
		return false;
	}

	if(!document.login_frm.lm_agree.checked) 
	{
		alert("You must agree to the terms & conditions");
		document.login_frm.lm_agree.focus();
		return false;
	}
}

function validate_login_frmasia(str) 
{

	var reg = /^([A-Za-z0-9_\-\.])+\@([A-Za-z0-9_\-\.])+\.([A-Za-z]{2,4})$/;
	var address = document.login_frm.email.value;
	if(document.login_frm.firstname.value == "" || document.login_frm.firstname.value == "First Name") 
	{
		alert('First name should not be empty');
		document.login_frm.firstname.focus();
		return false;
	}
	if(document.login_frm.lastname.value == "" || document.login_frm.lastname.value == "Last Name") 
	{
		alert('Last name should not be empty');
		document.login_frm.lastname.focus();
		return false;
	}  
		if(document.login_frm.birthDate1.value == "") 
	{
		alert('DOB should not be empty');
		document.login_frm.birthDate1.focus();
		return false;
	}
	
	if(document.login_frm.birthDate1.value != "") 
	{
	        var bValue = document.login_frm.birthDate1.value;
			var d = bValue.match(/\d+/g);
			//document.login_frm.birthDate.value = +new Date(d[0], d[1] - 1, d[2]) / 1000;
			//alert(converdatetoTimestamp(document.login_frm.birthDate1.value));
			document.login_frm.birthDate.value = converdatetoTimestamp(document.login_frm.birthDate1.value);
			//return false;
	}
	
	if((document.login_frm.phoneNumber.value == "" || document.login_frm.phoneNumber.value == "Land Phone") && (document.login_frm.cellNumber.value == "" || document.login_frm.cellNumber.value == "Hand Phone"))
	{
	        alert('Contact number should not be empty');
		    document.login_frm.phoneNumber.focus();
			return false;
	}
	

   if(document.login_frm.cellNumber.value != "" && document.login_frm.cellNumber.value != "Hand Phone")
	{
	   if(isNaN(document.login_frm.cellNumber.value))
	    {
			alert("Hand phone number should be numeric");
			document.login_frm.cellNumber.focus();
		    return false;	  
		}

	}	

   if(document.login_frm.phoneNumber.value != "" && document.login_frm.phoneNumber.value != "Land Phone")
	{
	   if(isNaN(document.login_frm.phoneNumber.value))
	    {
			alert("Land phone number should be numeric");
			document.login_frm.phoneNumber.focus();
		    return false;	  
		}

	}	

	
	if(address == '')
	{
		alert("Please enter your email ID");
		document.login_frm.email.focus();
		return false;
	}
	if(reg.test(address) == false) 
	{
		alert('Please enter a valid email ID');
		document.login_frm.email.focus();
		return false;
	}

	if(document.login_frm.password.value == "") 
	{
		alert('Password should not be empty');
		document.login_frm.password.focus();
		return false;
	}
	if(document.login_frm.password2.value == "") 
	{
		alert('Confirm password should not be empty');
		document.login_frm.password2.focus();
		return false;
	}
	if(document.login_frm.password.value != document.login_frm.password2.value) 
	{
		alert("Confirm Password doesn't match");
		document.login_frm.password2.focus();
		return false;
	}
	
	if(document.login_frm.addressLine1.value == "") 
	{
		alert('Address1 should not be empty');
		document.login_frm.addressLine1.focus();
		return false;
	}
	
	if(document.login_frm.zipCode.value == "") 
	{
		alert('zipcode should not be empty');
		document.login_frm.zipCode.focus();
		return false;
	}
	if(document.login_frm.zipCode.value != "")
		{
		   if(isNaN(document.login_frm.zipCode.value))
		    {
				alert("zipcode should be numeric");
			    return false;	  
			}
		}

if(str == 'offline')
{
              if(document.login_frm.info1.value == "") 
		{
			alert('Receipt Number should not be empty');
			document.login_frm.info1.focus();
			return false;
		}
}

	if(!document.login_frm.lm_agree.checked) 
	{
		alert("You must agree to the terms & conditions");
		document.login_frm.lm_agree.focus();
		return false;
	}
	
	
	document.login_frm.birthDate.value = converdatetoTimestamp(document.login_frm.birthDate1.value);
	if(document.login_frm.phoneNumber.value == "Land Phone")
	{
	document.login_frm.phoneNumber.value = "";
	}
	if(document.login_frm.cellNumber.value == "Hand Phone")
	{
	document.login_frm.cellNumber.value = "";
	}
	var r;
	if(str == 'offline')
	{
		r=confirm("Your entered details would now be submitted for approval. Do you wish to continue? Click 'OK' to confirm or 'Cancel' to edit entered details.");
	} else {
		r=confirm("You will redirected to payment gateway after validating the entered information. Do you wish to continue and make the payment now? Click 'OK' to confirm or 'Cancel' to discontinue.");
	}
	if (r==true)
  	{
	  document.getElementById('Continue').disabled = '1';
	  login_frm.submit();
  	} else {
  	}
}

function validate_login_frmasia_update() 
{

	if(document.login_frm.firstname.value == "" || document.login_frm.firstname.value == "First Name") 
	{
		alert('First name should not be empty');
		document.login_frm.firstname.focus();
		return false;
	}
	if(document.login_frm.lastname.value == "" || document.login_frm.lastname.value == "Last Name") 
	{
		alert('Last name should not be empty');
		document.login_frm.lastname.focus();
		return false;
	}  
	
	
	if((document.login_frm.phoneNumber.value == "" || document.login_frm.phoneNumber.value == "Land Phone") && (document.login_frm.cellNumber.value == "" || document.login_frm.cellNumber.value == "Hand Phone"))
	{
	        alert('Contact number should not be empty');
		    document.login_frm.phoneNumber.focus();
			return false;
	}
	

   if(document.login_frm.cellNumber.value != "" && document.login_frm.cellNumber.value != "Hand Phone")
	{
	   if(isNaN(document.login_frm.cellNumber.value))
	    {
			alert("Hand phone number should be numeric");
			document.login_frm.cellNumber.focus();
		    return false;	  
		}

	}	

   if(document.login_frm.phoneNumber.value != "" && document.login_frm.phoneNumber.value != "Land Phone")
	{
	   if(isNaN(document.login_frm.phoneNumber.value))
	    {
			alert("Land phone number should be numeric");
			document.login_frm.phoneNumber.focus();
		    return false;	  
		}

	}	

	
		if(document.login_frm.addressLine1.value == "") 
	{
		alert('Address1 should not be empty');
		document.login_frm.addressLine1.focus();
		return false;
	}
	
	if(document.login_frm.zipCode.value == "") 
	{
		alert('zipcode should not be empty');
		document.login_frm.zipCode.focus();
		return false;
	}
	if(document.login_frm.zipCode.value != "")
		{
		   if(isNaN(document.login_frm.zipCode.value))
		    {
				alert("zipcode should be numeric");
			    return false;	  
			}
		}

	if(!document.login_frm.lm_agree.checked) 
	{
		alert("You must agree to the terms & conditions");
		document.login_frm.lm_agree.focus();
		return false;
	}
	
	
	if(document.login_frm.phoneNumber.value == "Land Phone")
	{
	document.login_frm.phoneNumber.value = "";
	}
	if(document.login_frm.cellNumber.value == "Hand Phone")
	{
	document.login_frm.cellNumber.value = "";
	}
	
	
}


function validate_subscription_frm() 
{
	var reg = /^([A-Za-z0-9_\-\.])+\@([A-Za-z0-9_\-\.])+\.([A-Za-z]{2,4})$/;
	var address = document.subscribe.email.value;
	if(document.subscribe.firstname.value == "") 
	{
		alert('First name should not be empty');
		document.subscribe.firstname.focus();
		return false;
	}
	if(document.subscribe.lastname.value == "") 
	{
		alert('Last name should not be empty');
		document.subscribe.lastname.focus();
		return false;
	}  
	if(document.subscribe.city.value == "") 
	{
		alert('City should not be empty');
		document.subscribe.city.focus();
		return false;
	}  
	if(document.subscribe.pincode.value == "") 
	{
		alert('Pincode should not be empty');
		document.subscribe.pincode.focus();
		return false;
	}  
	if(reg.test(address) == false) 
	{
		alert('Please enter a valid email ID');
		document.subscribe.email.focus();
		return false;
	}
	if(document.subscribe.mobileno.value == "" || (document.subscribe.mobileno.value != "" && (isNaN(document.subscribe.mobileno.value)))) 
	{
		alert("Mobile number should be numeric, without any country code and should have no space.");
		document.subscribe.mobileno.focus();
	    return false;	  
	}
	

	


}


function sendMail(url)
{
	var reg = /^([A-Za-z0-9_\-\.])+\@([A-Za-z0-9_\-\.])+\.([A-Za-z]{2,4})$/;
	var email = str;
	var destAddresses = document.getElementById("destAddresses");
	var storyLoid = document.getElementById("storyLoid").value;
	var messageSourceName = document.getElementById("messageSourceName").value.trim();
	var messageSourceAddress = document.getElementById("messageSourceAddress").value.trim();
	var sourceName = document.getElementById("messageSourceName").value.trim();
	var subject = document.getElementById("subject").value.trim();
	//var sourceAddress = document.getElementById("messageSourceAddress").value.trim();
	var sourceAddress = "admin@livemint.com";
	var destName = document.getElementById("destName");
	var content = document.getElementById("content").value.trim();
	var destAddressesArray = destAddresses.value.split(",");
	var destNameArray = destName.value.split(",");
	var x = '0';	
	if(messageSourceName == "") 
	{
		alert('Please enter your name');
		document.getElementById("messageSourceName").focus();
		return false;
	} 
	if(messageSourceAddress == "") 
	{
		alert('Please enter your email-id');
		document.getElementById("messageSourceAddress").focus();
		return false;
	} 
   if(reg.test(messageSourceAddress) == false) 
	{
		alert('Please enter your correct email-id');
		document.getElementById("messageSourceAddress").focus();
		return false;
	}
	
	if(destName.value.trim() == "") 
	{
		alert("Please enter the receiver's name (comma separated)");
		document.getElementById("destName").focus();
		return false;
	}  
	if(destAddresses.value.trim() == "") 
	{
		alert("Please enter the receiver's email address (comma separated)");
		document.getElementById("destAddresses").focus();
		return false;
	}  
	for (var i = 0; i < destAddressesArray.length; i++ )
	{
	var str = validate_email(destAddressesArray[i].trim());
   // alert(str);
    if(str==false){return false;}
	}
	
	for (var i = 0; i < destAddressesArray.length; i++ )
	{
		$.post(url,{'destAddress':destAddressesArray[i].trim(),'storyLoid':storyLoid,'sourceName':sourceName,'sourceAddress':sourceAddress,'messageSourceName':messageSourceName,'messageSourceAddress':messageSourceAddress,'destName':destNameArray[i].trim(),'content':content,'subject':subject}, function(data) {
		//alert("Emails sent");
		x = '1';
		document.getElementById("sourceName").value = "";
		document.getElementById("destName").value = "";
		document.getElementById("destAddresses").value = "";
		document.getElementById("content").value = "";
		$("#msg").html("Email has been sent");
		$("#tdata").hide();
		});
	}
	alert("Email has been sent");
	window.close();
}
function show_follow_button(div_id,str)
{
if(str == '1')
{
  $("[id^=follow_]").hide();
  $("[id^=twimg_]").show();
  $("#twimg_"+div_id).hide();
  $("#follow_"+div_id).show();

}
if(str == '2')
{
$("#follow_"+div_id).hide();
  $("#twimg_"+div_id).show();
  

}

}	

//menu basic search
function basicSearch(e,inputId)
{
		   if(e != '1')
					{
						if (e.keyCode == 13)
						 {
						var tb = document.getElementById(inputId);
						  if(tb.value == "" || tb.value == null)
						  {
						  alert("Please enter the keyword");
						    tb.focus();
						    return false;
						  }
						  else
						  {
						    top.location.href = "/Search/Link/Keyword/"+tb.value;
						    return false;
						  }
					 	}
				   	}
				else
					{
					var tb = document.getElementById(inputId);
					if(tb.value == "" || tb.value == null || tb.value == 'Search')
					  {
						  alert("Please enter the keyword");
						    tb.focus();
						    return false;
					  }
					  else
					 {
					

					    location.href = "/Search/Link/Keyword/"+tb.value;
					}
					}		
}
function errorSearch(e)
			{
			   if(e != '1')
					{
						if (e.keyCode == 13)
						 {
						var tb = document.getElementById("esearch");
						location.href = "/Search/Link/Keyword/"+tb.value;
					 	}
				   	}
				else
					{
					var tb = document.getElementById("esearch");
					location.href = "/Search/Link/Keyword/"+tb.value;
					
					}
		
			}		
			
			
	
// function to scroll the menu bar
(function($){
	$.fn.scrollFixed = function(params){
	params = $.extend( {appearAfterDiv: 0, hideBeforeDiv: 0}, params);
	var element = $(this);
	var b = checkIEBrowser();
	//alert(b)

	if(params.appearAfterDiv)
		var distanceTop = element.offset().top + $(params.appearAfterDiv).outerHeight(true) + element.outerHeight(true);
	else
		var distanceTop = element.offset().top;

	if(params.hideBeforeDiv)
		var bottom = $(params.hideBeforeDiv).offset().top - element.outerHeight(true) - 10;
	else
		var bottom = 200000;
		
	if(b=='f')
	{
	// IE Browser
	var ieversion=Browser.Version() // capture x.x portion and store as a number
	
			$(window).scroll(function(){	
					if( $(window).scrollTop() > distanceTop && $(window).scrollTop() < bottom ){ 	
					      if(ieversion>=8)
					      {
					      element.css({'position':'fixed', 'top':'0px','z-index':'9999','margin-left':'-0px'});
					      }
					      else if(ieversion==7)
					      {
                                element.css({'position':'fixed', 'top':'0px','z-index':'9999','margin-left':'-980px'});					      }
						 else
					    {					
						   element.css({'position':'fixed', 'top':'0px','z-index':'9999','margin-left':'-0px'});
						 }						
						//element.css({'position':'fixed', 'top':'0px','z-index':'9999','margin-left':'-0px'});
						}
					else{
						element.css({'position':'static','margin-left':'-0px'});
						}				
				});
	}
	else
	{
		$(window).scroll(function(){	
					if( $(window).scrollTop() > distanceTop && $(window).scrollTop() < bottom ) 		
						element.css({'position':'fixed', 'top':'0px','z-index':'9999'});
					else
						element.css({'position':'static'});				
				});
	}				
	
					  
	};
})(jQuery);


$(document).ready(function()
{ 
//document.body.innerHTML = document.body.innerHTML.replace(/\`/g, '&#8377;');
 });

function Get_Cookie( name ) {

var start = document.cookie.indexOf( name + "=" );
var len = start + name.length + 1;
if ( ( !start ) &&
( name != document.cookie.substring( 0, name.length ) ) )
{
return null;
}
if ( start == -1 ) return null;
var end = document.cookie.indexOf( ";", len );
if ( end == -1 ) end = document.cookie.length;
return unescape( document.cookie.substring( len, end ) );
}

function logout()
{
document.cookie = 'EOMUSERNAME' + '=; expires=Thu, 01 Jan 1970 00:00:01 GMT;';
document.cookie = 'EOMSSOTOKEN' + '=; expires=Thu, 01 Jan 1970 00:00:01 GMT;';
top.location.href = '/Logout';
}
function getLoginName(str)
{
var username=Get_Cookie("EOMUSERNAME");
if (username!=null && username!="" && Get_Cookie("EOMSSOTOKEN") != null )
  {
  document.getElementById("sign_in_box").innerHTML = '<div class="sign_out"><span class="flt_lft"><a href="/Signup"><img src="'+str+'" alt="Edit Profile" /></a></span><span class="flt_lft">&nbsp;'+username+'&nbsp;|&nbsp;<a onClick = "javascript:logout();" style = "cursor:pointer;">Sign out</a></span></div><div class="clr_both"></div>';
  }
else 
  {
 document.getElementById("sign_in_box").innerHTML = '<div class="sign_in"><a href="/Signup">Sign in</a></div><div class="clr_both"></div>';
  }
}

	function go(loc)
	{
	  loc = loc.replace("http://youtu.be/","http://www.youtube.com/v/");
	  loc = loc + '?version=3&mapf=videos&app=youtube_gdata&autoplay=1';
	  document.getElementById('mediaplayersmall').src = loc;
	  $("#mediaplayersmall").show();
	  $("#mediaplayersmallclose").show();
	  document.getElementById('mediaplayersmall').scrollIntoView(true);
	}

function close_iframe(str)
{go('about:blank');$("#"+str).hide();$("#"+str+"close").hide();}

function currentDate()
{
		var m = $("meta[name=eomportal-lastUpdate]");    
		var d = m.attr("content");
		var n=d.split(" "); 
		var month=new Array(12);
		month["Jan"]="January";
		month["Feb"]="February";
		month["Mar"]="March";
		month["Apr"]="April";
		month["May"]="May";
		month["Jun"]="June";
		month["Jul"]="July";
		month["Aug"]="August";
		month["Sep"]="September";
		month["Oct"]="October";
		month["Nov"]="November";
		month["Dec"]="December";
		document.getElementById("currentDate").innerHTML = n[2]+" "+month[n[1]]+" "+n[5];
}

function currentDateNew()
{
		var m = $("meta[name=eomportal-lastUpdate]");    
		var d = m.attr("content");
		var n=d.split(" "); 
		var month=new Array(12);
		month["Jan"]="January";
		month["Feb"]="February";
		month["Mar"]="March";
		month["Apr"]="April";
		month["May"]="May";
		month["Jun"]="June";
		month["Jul"]="July";
		month["Aug"]="August";
		month["Sep"]="September";
		month["Oct"]="October";
		month["Nov"]="November";
		month["Dec"]="December";
		document.getElementById("currentDateNew").innerHTML = n[2]+" "+month[n[1]]+" "+n[5];
		
}
var ajax_page_flag=1;
if(parseInt($(window).scrollTop()) == '0')
{lazyupload();}
else
{

$(window).scroll(function () { 

     var scrollposition=parseInt($(window).height())+parseInt($(window).scrollTop())+450;
	 if($(window).height()<=scrollposition){
		if(ajax_page_flag=='1')
		{
			ajax_page_flag=0;
	        lazyupload();
		}
 }});
}

function lazyupload(){
jQuery(function() {
    jQuery("img.lazy").lazyload({
    	skip_invisible : true,
        failure_limit : 50,
        effect : "fadeIn"
    });
});   

}

function loadFloatingSocial()
{
//this is the floating content
	var $floatingbox = $('#sty_floating_box');
 
	if($('#body_text').length > 0){
 
	  var bodyY = parseInt($('#body_text').offset().top) - 80;
	  var originalX = $floatingbox.css('margin-left');
      var b = checkIEBrowser();
      var ieversion=Browser.Version();
 
	   if(ieversion == 7)
	   {
			   $(window).scroll(function () { 
			   var scrollY = $(window).scrollTop();
			   var isfixed = $floatingbox.css('position') == 'fixed';
				 	   if($floatingbox.length > 0)
				 	   {
						    if ( scrollY > bodyY && !isfixed) 
						    {
								$floatingbox.stop().css({position: 'fixed',left: '50%',top: 20,marginLeft: -632}).show();
							} 
							else if ( scrollY < bodyY && isfixed)
							 {
							$floatingbox.stop().css({position: 'fixed',left: '50%',top: bodyY+30,marginLeft: -632}).show();
		//					 	  $floatingbox.css({position: 'relative',left: 0,top: 0,marginLeft: originalX}).show();
						     }		
					   }
		       });
	   }
	   else
	   {
		   $(window).scroll(function () { 
		   var scrollY = $(window).scrollTop();
		   var isfixed = $floatingbox.css('position') == 'fixed';
			 	   if($floatingbox.length > 0)
			 	   {
					    if ( scrollY > bodyY && !isfixed) 
					    {
							$floatingbox.stop().css({position: 'fixed',left: '50%',top: 20,marginLeft: -632});
						} 
						else if ( scrollY < bodyY && isfixed)
						 {
						 	  $floatingbox.css({position: 'relative',left: 0,top: 0,marginLeft: originalX});
					     }		
				   }
	       });
	   }
	
     }
}


 function fb_share_popup(url)
      {
       window.open('https://www.facebook.com/sharer/sharer.php?u='+url,'facebook-share-dialog', 'width=626,height=436'); 
       return false;
      }
function replaceURLWithHTMLLinks(text) {
    var exp = /(\b(https?|ftp|file):\/\/[-A-Z0-9+&@#\/%?=~_|!:,.;]*[-A-Z0-9+&@#\/%=~_|])/ig;
    return text.replace(exp,"<a href='$1'>$1</a>"); 
}