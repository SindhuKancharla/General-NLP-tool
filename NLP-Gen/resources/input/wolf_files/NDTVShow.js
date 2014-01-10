    var temptd=new Array();
    temptd[0]="na";
    temptd[1]="na";
    temptd[2]="na";
    temptd[3]="na";
    temptd[4]="na";
    temptd[5]="na";
    temptd[6]="na";

    var XMLHttp=null;
    var elementid=null;
    

    function XMLHttpfunction()
    {
        if (window.XMLHttpRequest)
          {
            XMLHttp=new XMLHttpRequest()
          }
        else if (window.ActiveXObject)
        { 
          XMLHttp=new ActiveXObject("Microsoft.XMLHTTP")
        }
        return XMLHttp;
    }

    function stateChanged() 
    {	
        //alert(elementid)
        if (XMLHttp.readyState==4 || XMLHttp.readyState=="complete")
        {   
            try
            {
                document.getElementById(elementid).innerHTML=XMLHttp.responseText; 
            }
            catch(ex)
            {
                alert(ex.message + "Id");
            }
        }
        else
        {   
            document.getElementById(elementid).innerHTML="<font face='arial' size=1>Loading data please wait.........</font>"; 
        } 
    } 

    function showHintPoll(qstr,getelementid,temptdpos)
    {	//alert(qstr)
        if (temptdpos!="-1"){
            temptd[temptdpos]="na";
        }	
        elementid=getelementid;
        //alert(elementid);
        XMLHttp=XMLHttpfunction();
        if (XMLHttp==null)
        {
            alert ("Browser does not support HTTP Request")
            return;
        } 

        var url=qstr;
        //url=url+"&ch="+Math.random();
        url=url;
        //url=url;
        //alert(url)
        XMLHttp.onreadystatechange=stateChanged; 
        XMLHttp.open("GET",url,true);
        XMLHttp.send(null);
    }
    function VotePoll_V(pagename,_pollopt,_PollID,_ResultDiv)
	{
	    var l_votes = "" ;   
	    var Myobj=document.getElementsByName(_pollopt);
	    //alert(_PollID);
	    for(i=0;i<Myobj.length;i++)
		{
			  if(Myobj[i].checked)
			  {
			      l_votes = Myobj[i].value;
			  }
		}
		if (l_votes == "")
		{
			alert("Please select an option!") ;
			return ;
		}
		l_id = document.getElementById(_PollID).value;
		//alert(l_id);
		showHintPoll(''+pagename+'?disstyle=1&opt='+l_votes+'&id='+l_id+'&',_ResultDiv,'-1');
	}
    
	function VotePoll_Show(pagename,_pollopt,_PollID,_ResultDiv)
	{
	    var l_votes = "" ;   
	    var Myobj=document.getElementsByName(_pollopt);
	    //alert(_PollID);
	    for(i=0;i<Myobj.length;i++)
		{
			  if(Myobj[i].checked)
			  {
			      l_votes = Myobj[i].value;
			  }
		}
		if (l_votes == "")
		{
			alert("Please select an option!") ;
			return ;
		}
		l_id = document.getElementById(_PollID).value;
		//alert(l_id);
		showHintPoll(''+pagename+'?opt='+l_votes+'&id='+l_id+'&',_ResultDiv,'-1');
	}
	function VotePoll_ThanxMsg(thanxmsg)
	{
	    var l_votes = "" ;   
	    var Myobj=document.getElementsByName("PollGB");
	    for(i=0;i<Myobj.length;i++)
		{
			  if(Myobj[i].checked)
			  {
			      l_votes = Myobj[i].value;
			  }
		}
		if (l_votes == "")
		{
			alert("Please select an option!") ;
			return ;
		}
		l_id = document.getElementById("PollID").value;
		showHintPoll('NdtvRprProcessPoll.aspx?opt='+l_votes+'&id='+l_id+'&thanxmsg='+thanxmsg+'&','divPoll1','-1');
	}
	//This is For Open / Close JS Function : By ViRenDra KuMAr : 4 Apr 2008
    function openclose(obj,dtcnt,zzone)
    {
        
        var cntt=dtcnt;
        for(i=0;i<cntt;i++)
        {
            DeSELECTED(zzone+'rw_'+i,obj);
        }
        var rw = document.getElementById(obj);
        var imgrw = document.getElementById('img'+obj);
        var ancrw = document.getElementById('anc'+obj);
        var tdrw = document.getElementById('td'+obj);

        if(rw.style.display =='none')
        {
	        rw.style.display='';
	        imgrw.src = 'NdtvShow/images/minus.gif';
	        ancrw.className="text4_Boldlink";
	        tdrw.className="";
        }
        else
        {
	        rw.style.display='none';
	        imgrw.src = 'NdtvShow/images/plus.gif';
	        ancrw.className="text3bold_link";
	        tdrw.className="GreyBG";
        }
    }
    
    //This is function for close all divs: Par wwwooo nahi joooo
    function DeSELECTED(obj,opObj)
    {
        var rw = document.getElementById(obj);
        var imgrw = document.getElementById('img'+obj);
        var ancrw = document.getElementById('anc'+obj);
        var tdrw = document.getElementById('td'+obj);
        if(obj!=opObj)
        {
            rw.style.display='none';
            imgrw.src = 'NdtvShow/images/plus.gif';
            ancrw.className="text3bold_link";
            tdrw.className="GreyBG";
        }
    }
    
    function showhide_tds(obj,zzone,dtcnt)
    {
        //alert(obj);
        //alert(dtcnt);
        //alert(zzone);
        var txtcnt='hidCurrpos_'+zzone;
        //alert(txtcnt);
        rownum=parseInt(document.getElementById(txtcnt).value);
        
	    if(obj=="1")
	    {
		    if(document.getElementById(txtcnt).value==dtcnt)
		    {
			    //alert("Row khattam");
			     //document.getElementById('imgPlus_'+zzone).style.display='none';
			     document.getElementById('imgPlus_'+zzone).src='NdtvShow/images/plusicon_gry.gif';
		    }
		    else
		    {
		        //document.getElementById('imgMinus_'+zzone).style.display='';
		        document.getElementById('imgMinus_'+zzone).src='NdtvShow/images/minusicon.gif';
			    rownum=parseInt(rownum)+1;
			    document.getElementById(txtcnt).value=rownum;
			    rowname=zzone+"_tr"+rownum;
			    document.getElementById(rowname).style.display='';
		    }
	    }
	    if(obj=="0")
	    {
		    if(document.getElementById(txtcnt).value=="1")
		    {
			    //alert("last Row");
			    //document.getElementById('imgMinus_'+zzone).style.display='none';
			    document.getElementById('imgMinus_'+zzone).src='NdtvShow/images/minusicon_gry.gif';
		    }
		    else
		    {
		        //document.getElementById('imgPlus_'+zzone).style.display='';
		        document.getElementById('imgPlus_'+zzone).src='NdtvShow/images/plusicon.gif';
			    document.getElementById(txtcnt).value=parseInt(rownum)-1;
			    document.getElementById(zzone+'_tr'+rownum).style.display='none';
		    }
	    }
    }