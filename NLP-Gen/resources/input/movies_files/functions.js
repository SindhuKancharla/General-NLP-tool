/*
	+=======================================================================================================================+
	|																	                                                    |
	|-----------------------------------------------------------------------------------------------------------------------|
	|	Project Name :  NDTV Convergence: Ndtv Imagine																		|
	|-----------------------------------------------------------------------------------------------------------------------|
	|	Dated 		 :  2nd Feb 2008																					    |
	|-----------------------------------------------------------------------------------------------------------------------|
	|	Author		 : Virendra Kumar(viren.it@gmail.com)														            |
	|-----------------------------------------------------------------------------------------------------------------------|
	|	Purpose		 : This script provides the some common functions.  This file is used by both sections					|
	|-----------------------------------------------------------------------------------------------------------------------|
	|   Include Files:  																									|
	|-----------------------------------------------------------------------------------------------------------------------|
	|	Last updated :																										|
	|-----------------------------------------------------------------------------------------------------------------------|
	|	Updation done:																										|
	+=======================================================================================================================+
*/
function trim(st)
{
	if(st.length > 0)
	{
		re = / +$/g; 
		newval = st.replace(re,"");
		re = /^ +/g;
		newvala = newval.replace(re,"");
		return newvala;
	}
	return "";
}
function IsDate(mMonth, mDay, mYear)
{
	mMonth = parseInt(mMonth);
	mDay = parseInt(mDay);
	mYear = parseInt(mYear);
	var mLeap = false;
	if ( mYear%4 == 0 )
		mLeap = true;
	if ( mMonth == 1 )
	{
		if ( mDay < 1 || mDay > 31 )
			return false;
		else
			return true;
	}
	else if ( mMonth == 2 )
	{
		if ( mLeap )
		{
			if ( mDay < 1 || mDay > 29 )
				return false;
			else
				return true;
		}
		else
		{
			if ( mDay < 1 || mDay > 28 )
				return false;
			else
				return true;
		}
	}
	else if ( mMonth == 3 )
	{
		if ( mDay < 1 || mDay > 31 )
			return false;
		else
			return true;
	}
	else if ( mMonth == 4 )
	{
		if ( mDay < 1 || mDay > 30 )
			return false;
		else
			return true;
	}
	else if ( mMonth == 5 )
	{
		if ( mDay < 1 || mDay > 31 )
			return false;
		else
			return true;
	}
	else if ( mMonth == 6 )
	{
		if ( mDay < 1 || mDay > 30 )
			return false;
		else
			return true;
	}
	else if ( mMonth == 7 )
	{
		if ( mDay < 1 || mDay > 31 )
			return false;
		else
			return true;
	}
	else if ( mMonth == 8 )
	{
		if ( mDay < 1 || mDay > 31 )
			return false;
		else
			return true;
	}
	else if ( mMonth == 9 )
	{
		if ( mDay < 1 || mDay > 30 )
			return false;
		else
			return true;
	}
	else if ( mMonth == 10 )
	{
		if ( mDay < 1 || mDay > 31 )
			return false;
		else
			return true;
	}
	else if ( mMonth == 11 )
	{
		if ( mDay < 1 || mDay > 30 )
			return false;
		else
			return true;
	}
	else if ( mMonth == 12 )
	{
		if ( mDay < 1 || mDay > 31 )
			return false;
		else
			return true;
	}
	else
	{
		return false;
	}
}
function PopWindow(URL,height,width)
 {
   hWindow = window.open(URL,height+width,"width="+width+",height="+height+",'NDTV',resize=no,resizable=no,scrollbars=yes,menubar=no,status=no");
   hWindow.focus();
}
// this function opens the popoup window
function WinOpenS(winname,w,h,leftcor,topcor,pname)
{
	window.open( pname , winname, "scrollbars=1,statusbar=no,menubar=no,toolbar=no,resize=null,top=" + topcor + ",left=" + leftcor + ",width=" + w + ",height="+h ).focus();
}
// this function opens the popoup window
function WinOpenFull(winname,w,h,leftcor,topcor,pname)
{
	window.open( pname , winname, "scrollbars=0,statusbar=no,menubar=no,toolbar=no,resizable=no,top=" + topcor + ",left=" + leftcor + ",width=" + w + ",height="+h ).focus();
}
//This For Pop Up With ScrollBar
function WinOpen_withScroll(pageTitle,_width,_height,leftcor,topcor,pageSRC)
{
	window.open( pageSRC , pageTitle, "scrollbars=1,statusbar=no,menubar=no,toolbar=no,resize=null,top=" + topcor + ",left=" + leftcor + ",width=" + _width + ",height="+_height ).focus();
}
//This For Pop Up Without ScrollBar
function WinOpen_Full(pageTitle,_width,_height,leftcor,topcor,pageSRC)
{
	window.open( pageSRC , pageTitle, "scrollbars=0,statusbar=no,menubar=no,toolbar=no,resizable=no,top=" + topcor + ",left=" + leftcor + ",width=" + _width + ",height="+_height ).focus();
}

function IsEmailValid(email)
{
	email = trim(email);
	valid_chars_for_email = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789_-@.";
	if ( email == "" )			// pending Email validation
	{
		return false;
	}
	for ( i=0; i < email.length; i++ )
	{
		ch =  "" + email.charAt(i);
		num = valid_chars_for_email.indexOf(ch);
		if ( num == -1 )
		{
			return false;
		}
	}
	if ( email.indexOf('@') == -1 )
	{
		return false;
	}
	if ( email.indexOf('.') == -1 )
	{
		return false;
	}
	return true;
}

function CompareDate(day1, month1, year1, day2, month2, year2)
{
	day1 = day1 * 1;
	month1 = month1 * 1;
	year1 = year1 * 1;
	day2 = day2 * 1;
	month2 = month2 * 1;
	year2 = year2 * 1;
	if ( (year2 == year1) && (month2 == month1) && (day2 == day1) )
	{
		return 0;			// Equal
	}
	else if ( ((year2 > year1)) || ( (year2 == year1) && (month2 > month1) ) || ( (year2 == year1) && (month2 == month1) && (day2 > day1)) )
	{
		return 2;			//  The second date is greater
	}
	else
	{
		return 1;			// The First Date is greater
	}
}


function ValidateNumeric( ctrl )
{
	var mVal = ctrl.value;
	mVal = trim(mVal);
	if ( isNaN(mVal) || mVal == "" )
	{
		alert (ctrl.title + " Must Be A Numeric Value");
		ctrl.focus();
		return false;
	}
	else 
	{
		return true;
	}
}

function ValidateEmpty( ctrl )
{
	var mVal = ctrl.value;
	mVal = trim(mVal);
	if ( mVal == "" )
	{
		alert ( ctrl.title + " cannot be left blank");
		ctrl.focus();
		return false;
	}
	else 
	{
		return true;
	}
}
function ValidateImage(ctrl)
{
	if (ctrl.value.length)
	{
		var iPos = ctrl.value.lastIndexOf(".")
		var sExt = ctrl.value.substring(iPos);
//		if((sExt.toUpperCase()=='.JPEG') || (sExt.toUpperCase()=='.JPG') || (sExt.toUpperCase()=='.GIF') || (sExt.toUpperCase()=='.BMP') || (sExt.toUpperCase()=='.PNG') )
		if((sExt.toUpperCase()=='.JPEG') || (sExt.toUpperCase()=='.JPG') || (sExt.toUpperCase()=='.GIF') || (sExt.toUpperCase()=='.BMP') || (sExt.toUpperCase()=='.PNG') )
		{
			return true;
		}
		else
		{
			alert("Please enter valid image.");
			ctrl.focus();
			ctrl.select();
			return false;
		}                       
	}
	else
	{
		alert("Please select the file to be uploaded");
		ctrl.focus();
		ctrl.select();
		return false;
	}
}

function ClearCombo(ctrl)
{
	len = ctrl.options.length;
	for ( i = 0; i < len; i++ )
		ctrl.options[0] = null;
}

	//   Returns the digits after Decimal
function DigitsAfterDecimal(Num)
{
	Num = Num + "";
	Digits = 0;
	Flag = false;
	for ( i=0; i < Num.length; i++ )
	{
		if (Flag)
		{
			Digits++;
		}
		if (Num.charAt(i) == ".")
		{
			Flag = true;
		}
	}
	return Digits;
}

function IfContainsDecimal(Num)
{
	Num = Num + "";
	var mFlag = false;
	for ( i=0; i < Num.length; i++ )
	{
		if (Num.charAt(i) == ".")
		{
			mFlag = true;
		}
	}
	return mFlag;
}

function ShowPicture( imgctrl, ctrl )
{
	imgctrl.style.visibility = "visible";
	imgctrl.src = "file://" + ctrl.value;
}

//This function moves selected Item from List to Another
function MoveSelectedItem ( lstSource, lstTarget )
{
	if (lstSource.selectedIndex != -1)
	{
		
			var value = lstSource.options[lstSource.selectedIndex].value;
			var text =  lstSource.options[lstSource.selectedIndex].text;
			lstSource.options[lstSource.selectedIndex] = null;
			lstTarget.options[lstTarget.options.length] = new Option(text, value, null ,null );
			
	}
	else
	{
		alert("First select an Item");
	}
}

		//  This function moves all the items from a list to another
function MoveAllItems ( lstSource, lstTarget )
{
	var Slen = lstSource.options.length;
	var Tlen = lstTarget.options.length;
	if ( Slen )
	{
		for ( i=0; i < Slen; i++ )
		{
			var value = lstSource.options[0].value;
			var text =  lstSource.options[0].text;
			lstSource.options[0] = null;
			lstTarget.options[Tlen + i] = new Option(text, value, null ,null );
		}
	}
	else
	{
		alert("Source List doesnt have any Item");
	}
}

			//   This function returns the Values of a Listbox in a format of
			//		v1,v2,v2,v4,vn.
function GetListValues( lstctrl  )
{
	
	var len = lstctrl.options.length;
	var str = "";
	for( i=0; i < len; i++ )
	{
		str = str + lstctrl.options[i].value + ",";
	}
	return str;
}

function NewsletterSubmitForm()
{
	var mFlag = true;
	if ( ! IsEmailValid(document.frm_newsletter.txt_email.value) )
	{
		alert("Please write valid Email");
		mFlag = false;
		document.frm_newsletter.txt_email.focus();
	}
	return mFlag;
}

function SubmitLoginForm()
{
	var mFlag = true;
	if ( mFlag && ! ValidateEmpty(document.forms[0].txt_username) )
	{
		mFlag = false;
	}
	if ( mFlag && ! ValidateEmpty(document.forms[0].txt_password) )
	{
		mFlag = false;
	}
	//return mFlag;
	if ( mFlag )
	{
		document.forms[0].action = "login.aspx";
		document.forms[0].__VIEWSTATE.name = "__null";	
		document.forms[0].submit();
	
	}
}
//


function SubmitLoginForms(event)
{

 if (event.keyCode == 13)
	{
		event.returnValue=false;
			event.cancel = true;
	var mFlag = true;
	if ( mFlag && ! ValidateEmpty(document.forms[0].txt_username) )
	 {
		mFlag = false;
	 }
	if ( mFlag && ! ValidateEmpty(document.forms[0].txt_password) )
	 {
		mFlag = false;
	 }
	
	if ( mFlag )
	 {
		document.forms[0].action = "login.aspx";
		document.forms[0].__VIEWSTATE.name = "__null";	
		document.forms[0].submit();
	 }
	}
}

//
function addOnCon(objfrom,objto)
{
    
	
	var index = parseInt(objfrom.selectedIndex);
	
	
	if (index<0)
	{	
		return false;
	}
	index2 = parseInt(objto.length);
	
	if (index2==0)
	{
		/*
		var newopt = new Option;
		newopt.value = objfrom[index].value;
		newopt.text = objfrom[index].text;
		objto.options[0] = newopt;	
		//objto.options[0].selected = true;	
		*/
		for (var i = objfrom.options.length - 1; i >= 0; i--)
			{
				if (objfrom.options[i].selected)
				{
					var option = document.createElement("option");
					objto.options[objto.length] = option;
					option.text = objfrom.options[i].text;
					option.value = objfrom.options[i].value;
					
				}
			}
	}	
	
	if (index2>0)
	{
		//New Code......
		for(j=0;j<=objfrom.options.length-1;j++)
		{
			var values = objfrom[j].value;
			var txxt = objfrom[j].text;
		
			if(objfrom.options[j].selected)
			{
				for(i=0; i<=objto.length-1;i++)
				{			
					//alert(objto[i].value);
					//alert(values);
					
					if(objto[i].value==values)
					{	
						alert(''+ txxt +' :   Already Exist in List');
						return false;
					}					
				}
			}
		}	
		//New Code......
		
		
		/* Viren + Bunty Code
		var values = objfrom[index].value;
		var txxt = objfrom[index].text;
		for(i=0; i<=objto.length-1;i++)
		{			
			if(objto[i].value==values)
			{	
				alert(''+ txxt +' :   Already Exist in List');
				return false;
			}					
		}
		*/	
		
		/* Old Code		
		var newopt = new Option;
		newopt.value=objfrom[index].value;
		newopt.text=objfrom[index].text;			
		objto.options[index2] = newopt;
		//objto.options[index2].selected = true;
		*/
			for (var i = objfrom.options.length - 1; i >= 0; i--)
			{
				if (objfrom.options[i].selected)
				{
					var option = document.createElement("option");
					objto.options[objto.length] = option;
					option.text = objfrom.options[i].text;
					option.value = objfrom.options[i].value;
					
				}
			}
	}	
	
}

function removeOnCon(objto)
{
	
	var indexRemove = parseInt(objto.selectedIndex);
	if (indexRemove<0)
	{	
		alert("Please Select The Module.")
		objto.focus();
		return false;
	}
	for (var i = objto.options.length - 1; i >= 0; i--)
	{
		if (objto.options[i].selected)
		{
			objto.remove(i);
		}
	}
	
}

/*
function GetListValues( lstctrl  )
{
	
   var len = lstctrl.options.length;
   var str = "";
   for( i=0; i < len; i++ )
   {
      str = str +	.options[i].value + ",";
   }
   return str;
}
*/



function PollOptionCheck()
{
	var pollopt =0;
	var opt=0;
	for (var x = 0; x < document.forms[0].pollanswer.length; x++)
	{
		if (document.forms[0].pollanswer[x].checked)
			{
			opt= document.forms[0].pollanswer[x].value;
			pollopt=1;
			}
	}
	
	if (pollopt==0)
	{
		alert("Please Select Atleast One Answer.");
	}
	else
	{
			
		var Hiddenpollqid = ""; 
		Hiddenpollqid = document.forms[0].HiddenPollQuestion.value ;				
		window.open("ThanksPollResponse.aspx?qid=" + Hiddenpollqid + "&opt=" + opt ,"Poll","top=5,left=30,toolbars=no,maximize=yes,resize=yes,width=400,height=170,location=no,directories=no,scrollbars=no");
		
	}	
}



function Pollresult()
{
	var HiddenPollQuestion = ""; 
	HiddenPollQuestion = document.forms[0].HiddenPollQuestion.value ;		
	
	var HiddenPollQuestionText = "";
	HiddenPollQuestionText = document.forms[0].HiddenPollQuestionText.value ;					
	//window.open("Pollresult.aspx?HiddenPollQuestion=" + HiddenPollQuestion + "&HiddenPollQuestionText=" + HiddenPollQuestionText ,"Poll","top=5,left=30,toolbars=no,maximize=yes,resize=yes,width=400,height=450,location=no,directories=no,scrollbars=no");
	window.open("ShowPoll.aspx?HiddenPollQuestion=" + HiddenPollQuestion + "&HiddenPollQuestionText=" + HiddenPollQuestionText ,"Poll","top=5,left=30,toolbars=no,maximize=yes,resize=yes,width=380,height=280,location=no,directories=no,scrollbars=no");
		
}



function ValidationOptionCheck()
{
	var pollopt =0;
	var opt=0;
	for (var x = 0; x < document.forms[0].radiobutton.length; x++)
	{
		if (document.forms[0].radiobutton[x].checked)
			{
			opt= document.forms[0].radiobutton[x].value;
			pollopt=1;
			}
	}
	
	if (pollopt==0)
	{
		alert("Please Select Atleast One Answer.");
		return false;
	}
	else
	{
		
		return true;	
		//var Hiddenpollqid = ""; 
		//Hiddenpollqid = document.forms[0].HiddenPollQuestion.value ;				
		//window.open("ThanksPollResponse.aspx?qid=" + Hiddenpollqid + "&opt=" + opt ,"Poll","top=5,left=30,toolbars=no,maximize=yes,resize=yes,width=400,height=250,location=no,directories=no,scrollbars=no");
		
		}	
}


function ValidationOptionCheckBox()
{
	var pollopt =0;
	var opt=0;
	for (var x = 0; x < document.forms[0].chkb.length; x++)
	{
		if (document.forms[0].chkb[x].checked)
			{
			opt= document.forms[0].chkb[x].value;
			pollopt=1;
			}
	}
	
	if (pollopt==0)
	{
		alert("Please Select Atleast One Answer.");
		return false;
	}
	else
	{
		
		return true;	
		//var Hiddenpollqid = ""; 
		//Hiddenpollqid = document.forms[0].HiddenPollQuestion.value ;				
		//window.open("ThanksPollResponse.aspx?qid=" + Hiddenpollqid + "&opt=" + opt ,"Poll","top=5,left=30,toolbars=no,maximize=yes,resize=yes,width=400,height=250,location=no,directories=no,scrollbars=no");
		
		}	
}

        //For Login
		function Validatelogin(sesval)
		{
			//var page = page;
			
			if(sesval != "" && parseInt(sesval)>0)
			{
				return true;
			}
			else
			{
				//WinOpenS('Validate', 500, 350, 0, 0, 'validate_popup.aspx')
				var response = confirm (" You need to login to view this page.Click \"OK\" to proceed")
				if (response == false)
				{
				    document.getElementById('UserHeaderControl1_txt_userid').focus();
					return false;
				}
				else
				{
					window.location.href='login.aspx';
					//window.location.href='new-user-registration.aspx?send=yes';
					return false;
				}
			}
		}
		
		
		// this function opens the popoup window
function WinOpenSS(winname,w,h,leftcor,topcor,pname)
{
	window.open( pname , winname, "scrollbars=1,statusbar=no,menubar=no,toolbar=no,resize=yes,top=" + topcor + ",left=" + leftcor + ",width=" + w + ",height="+h ).focus();
}

		//new by pradeep
		function Roundof(val)
		{
		var dd = val ;
		
		return Math.round(dd*100)/100;
		}
		
	
 function KeyDownHandler(btn)
   {  
        // process only the Enter key
        if (event.keyCode == 13)
        {
            // cancel the default submit
            event.returnValue=false;
            event.cancel = true;
            // submit the form by programmatically clicking the specified button
            btn.click();
        }
    }
    
