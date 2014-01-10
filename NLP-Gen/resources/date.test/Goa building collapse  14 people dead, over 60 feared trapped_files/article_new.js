function loadComments(P,N,M,J,L,K){
    var O="/api/web18/apiFetchIBNComments_new.2.php";
    var I="content_id="+N+"&topic_id="+P+"&type="+M+"&offset="+J+"&total_comments="+K;
    $("load-"+J+"-more").html("<div align='center'><img src='http://static.ibnlive.com/pix/comments-cmsmodule/loadinfo.net.gif' border='0'></div>");
    $.ajax({
        type:"GET",
        url:O,
        data:I,
        success:function(B,A,C){
            document.getElementById("load-"+J+"-more").style.display="none";
            document.getElementById(L).style.display="block";
            document.getElementById(L).innerHTML=B
            }
        })
}
function getDefaultEvent(){
    var N=get_cookie("MESSAGE_POSTID");
    var K=get_cookie("MESSAGE_EVENT");
    var I=new Date();
    document.cookie="MESSAGE_POSTID=1;expires="+I.toGMTString()+";;";
    document.cookie="MESSAGE_EVENT=1;expires="+I.toGMTString()+";;";
    if(errorCookie!=""){
        var J="popUpLogin"+N;
        var M="/conversations/popuploginArticle.php";
        var H="post_id="+N+"&element="+K+"&errorMessage="+errorCookie;
        $.ajax({
            type:"POST",
            url:M,
            data:H,
            success:function(A){
                document.getElementById(J).style.display="block";
                document.getElementById(J).innerHTML=A
                }
            })
    }else{
    if(N==0){
        window.location.href="/conversations/post/####TOPIC_ID####.html"
        }else{
        if(N>0){
            var L=get_cookie("POST_DATA_IBN");
            if(L!=""){
                if(K==5){
                    J="####DEFAULT_FIELD####";
                    document.getElementById(J).style.display="block"
                    }else{
                    M="####DEFAULT_FILE####";
                    H="####DEFAULT_URL####";
                    $.ajax({
                        type:"POST",
                        url:M,
                        data:H,
                        success:function(A){
                            document.getElementById("####DEFAULT_FIELD####").style.display="block";
                            document.getElementById("####DEFAULT_FIELD####").innerHTML=A
                            }
                        })
                }
            }else{
        document.getElementById("####DEFAULT_FIELD####").style.display="block"
        }
    }
}
}
}
function loadLoginContainer(D,C){
    if(get_cookie("POST_DATA_IBN")==""){
        url="/conversations/popuploginArticle.php";
        parametri="topic_id="+C+"&post_id="+D+"&element=0";
        field="popUpLogin"+D;
        $.ajax({
            type:"POST",
            url:url,
            data:parametri,
            success:function(A){
                document.getElementById(field).innerHTML=A
                }
            });
    return false
    }
}
function validateCookie(K,G,I,H,L){
    var J=get_cookie("POST_DATA_IBN");
    $("div[id^=popUpReplyPost]").hide();
    $("div[id^=popUpRating]").hide();
    $("div[id^=popUpTrackBorder]").hide();
    $("div[id^=popUpOffensive]").hide();
    $("div[id^=popUpTrackTopic]").hide();
    $("div[id^=popUpLogin]").hide();
    $("div[id^=popUpError]").hide();
    $("#popUpReplyPost0").show();
    if(J==null){
        url="/conversations/popuploginArticle.php";
        parametri="topic_id="+L+"&post_id="+K+"&element="+G;
        field="popUpLogin"+K;
        $.ajax({
            type:"POST",
            url:url,
            data:parametri,
            success:function(A){
                document.getElementById(field).style.display="block";
                document.getElementById(field).innerHTML=A
                }
            });
    return false
    }
    switch(G){
    case 1:
        url="/conversations/replypostArticle_new.php";
        parametri="post_id="+K+"&web18_user_id="+I+"&web18_user_name="+H+"&TOPIC_ID="+L;
        field="popUpReplyPost"+K;
        field2="popUpOffensive"+K;
        break;
    case 2:
        url="/conversations/rating.php";
        parametri="post_id="+K+"&web18_user_id="+I+"&web18_user_name="+H+"&TOPIC_ID="+L;
        field="popUpRating"+K;
        break;
    case 3:
        url="/conversations/tracking.php";
        parametri="post_id="+K+"&web18_user_id="+I+"&web18_user_name="+H+"&TOPIC_ID="+L;
        field="layer"+K;
        break;
    case 4:
        url="/conversations/offensive_article.php";
        parametri="post_id="+K+"&web18_user_id="+I+"&web18_user_name="+H+"&TOPIC_ID="+L;
        field="popUpOffensive"+K;
        field2="popUpReplyPost"+K;
        break;
    case 5:
        document.getElementById("layer").style.display="block";
        return ;
        break;
    case 6:
        window.location.href="/conversations/post/"+L+".html";
        return ;
        break
        }
        $.ajax({
    type:"POST",
    url:url,
    data:parametri,
    success:function(A){
        $("#"+field2).hide();
        document.getElementById(field).style.display="block";
        document.getElementById(field).innerHTML=A
        }
    })
}
function procesareForm(a,Q,W,U,Y,S,Z){
    if((get_cookie("POST_DATA_IBN")=="")&&(Q==0)){
        $("#popUpReplyPost0").hide();
        $("#popUpLogin0").show();
        $("#popUpReplyPost0").slideDown("slow");
        return false
        }
        var T=Array("/conversations/submitReplyPost.php","/conversations/submitOfRating.php","/conversations/submitTrackBorder.php","/conversations/submitOffensive.php","/conversations/submitTrackTopic.php");
    var R=Array("popUpReplyPost","popUpRating","popUpTrackBorder","popUpOffensive","popUpTrackTopic");
    if(a==3||a==4||a==5){
        var b="";
        var O=document.getElementsByName(S);
        for(var P=0;P<O.length;P++){
            if((O[P].checked)==true){
                b=O[P].value;
                continue
            }
        }
        if(b==""){
        alert("Please select an option");
        return false
        }
        S=b
    }
    if(a==5){
    var V=R[a-1]
    }else{
    var V=R[a-1]+Q
    }
    var X="post_id="+Q+"&web18_user_id="+W+"&web18_user_name="+U+"&topic_id="+Y+"&arg="+escape(S);
if((a==1)&&(document.getElementById("post_text"+Q).value=="")){
    alert("Please Put some comments");
    document.getElementById("post_text"+Q).focus()
    }else{
    if(a==3){
        document.getElementById("layer"+Q).style.display="none";
        document.getElementById("popUpTrackBorder"+Q).style.display="block"
        }
        if(a==5){
        document.getElementById("layer").style.display="none";
        document.getElementById("popUpTrackTopic").style.display="block"
        }
        $.ajax({
        type:"POST",
        url:T[a-1],
        data:X,
        success:function(A){
            $("#"+V).attr("innerHTML",A)
            }
        });
return false
}
return false
}
function procesareFormTag(M,N,T,R,V,P,L){
    if((get_cookie("POST_DATA_IBN")=="")&&(N==0)){
        $("#popUpReplyPost0").hide();
        $("#popUpLogin0").show();
        $("#popUpReplyPost0").slideDown("slow");
        return false
        }
        var Q=Array("/conversations/submitReplyPostTag.php","/conversations/submitTrackTopic.php");
    var O=Array("popUpReplyPost","popUpTrackTopic");
    var S=O[M-1]+N;
    var U="post_id="+N+"&topic_id="+V+"&arg="+escape(P);
    if((M==1)&&(document.getElementById("post_text"+N).value=="")){
        alert("Please Put some comments");
        document.getElementById("post_text"+N).focus()
        }else{
        $.ajax({
            type:"POST",
            url:Q[M-1],
            data:U,
            success:function(A){
                $("#"+S).attr("innerHTML",A)
                }
            });
    return false
    }
    return false
}
function validateLogin(K,M,L,O){
    var P=document.getElementById("login"+M).value;
    var N=document.getElementById("password"+M).value;
    if(P==""){
        alert("Login should not be blank");
        document.getElementById("login"+M).focus();
        return false
        }
        if(N==""){
        alert("Password should not be blank");
        document.getElementById("password"+M).focus();
        return false
        }
        $("#popUpError"+M).html("<div align='center'><img src='http://static.ibnlive.com/pix/comments-cmsmodule/loadinfo.net.gif' border='0'></div>");
    $.ajax({
        type:"POST",
        url:"/ibnregistration/loginverifyAjax.php",
        data:"login="+P+"&password="+N,
        success:function(A){
            if(A=="1"){
                var B=get_cookie_variable(get_cookie("POST_DATA_IBN"),1);
                var C=get_cookie_variable(get_cookie("POST_DATA_IBN"),0);
                $("#popUpError"+M).html("<div align='center' class='fL btxt12' style='padding:5px 0px 0px 10px;'><b><a href='/conversations/user/"+C+".html'>Welcome "+B+"</a> | <a href='/ibnregistration/logout.php' target='_top'>Logout</a></b></div>");
                $("#popUpLogin"+M).hide();
                $("#popUpReplyPost"+M).show()
                }else{
                $("#popUpError"+M).html("<div align='center' class='btxt12'><b>Error : username/password not matched</b></div>")
                }
            }
    });
var I=new Date();
I.setTime(I.getTime());
var J=new Date(I.getTime()+(20*1000));
document.cookie="MESSAGE_POSTID="+M+";expires="+J.toGMTString();
document.cookie="MESSAGE_EVENT="+L+";expires="+J.toGMTString();
return false
}
function checkMaxInput(E,F,D){
    if(get_cookie("POST_DATA_IBN")!=""){
        maxLen=2000;
        if(document.getElementById(F).value.length>maxLen){
            document.getElementById(F).value=document.getElementById(F).value.substr(0,maxLen)
            }else{
            document.getElementById("counterid").value=maxLen-document.getElementById(F).value.length
            }
        }else{
    window.location.href="http://ibnlive.in.com/ibnregistration/login.php?url_path="+window.location.href
    }
}
function funcPolling(I,J,F){
    var G=document.getElementsByName("poll");
    for(var H=0;H<G.length;H++){
        if(G[H].checked==true){
            $.ajax({
                type:"POST",
                url:"/conversations/poll_submit.php",
                data:"arg1="+G[H].value+"&arg2="+J+"&topic_id="+F,
                success:function(A){
                    $("#ajax_poll").attr("innerHTML",A)
                    }
                });
        return false
        }
    }
    alert("Please select a poll option");
return false
}
var state="none";
function changeImage(imgName,thread_box){
    if(document[imgName].alt=="less"){
        document[imgName].alt="more";
        document[imgName].src="/pix/conversion/plus.gif";
        state="none"
        }else{
        document[imgName].alt="less";
        document[imgName].src="/pix/conversion/minus.gif";
        state="block"
        }
        if(document.all){
        eval("document.all."+thread_box+".style.display = state")
        }
        if(document.layers){
        document.layers[thread_box].display=state
        }
        if(document.getElementById&&!document.all){
        hza=document.getElementById(thread_box);
        hza.style.display=state
        }
    }
function changeTopicType(F,D){
    var E="";
    switch(F){
        case"withthreading":
            E="/conversations/thread/"+D+".html";
            break;
        case"nothreading":
            E="/conversations/thread/flat/"+D+".html";
            break;
        case"oldestfirst":
            E="/conversations/thread/flat-asc/"+D+".html";
            break;
        case"toprated":
            E="/conversations/thread/rate/"+D+".html";
            break
            }
            window.location.href=E
    }
    function funcOpenTrending(B){
    $("div[id^=arrow] img").attr({
        src:"http://static.ibnlive.com/pix/ibnhome/wt_hs_icon2.gif"
    });
    $("div[id^=widget]").hide();
    $("#widget_"+B).show();
    $("div#arrow-"+B+" img").attr({
        src:"http://static.ibnlive.com/pix/ibnhome/wt_hs_icon.gif"
    })
    }
    function showplayer(){
    $("#player1").hide();
    $("#player2").show(1500)
    }
    function hidevideodiv(){
    $("#player2").hide("slow");
    $("#player1").show(1000)
    }
    function subscribe_unsubscribe(D){
    var C=/^([a-zA-Z0-9_.-])+@(([a-zA-Z0-9-])+.)+([a-zA-Z0-9]{2,4})+$/;
    if(!C.test($("#email").val())){
        $("#error").text("Please provide a valid email address");
        email1.focus
        }else{
        if($("#newsletter:checked").val()==undefined&&$("#breaking:checked").val()==undefined){
            $("#error").text("Please select at least one option (either newsletter or breaking news) ")
            }else{
            $.post("/api/web18/newsletter_action.php",$("#myform").serialize()+"&type="+D,function(A){
                alert(A);
                if(D=="subscribe"){
                    $("#emailtext").html("<p>"+A+"</p>")
                    }else{
                    if(D=="unsubscribe"){
                        $("#emailtext").html("<p>"+A+"</p>")
                        }
                    }
            })
    }
}
}
function showfacebook(){
    $(".dohide").hide("slow");
    document.getElementById("facebook").style.display="block";
    $.post("/api/ibnhome/facebook.php",{
        m:"1"
    },function(B){
        $("#facebook").html(B)
        })
    }
    function showtwitter(){
    $(".dohide").hide("slow");
    document.getElementById("twitter").style.display="block";
    $.post("/api/ibnhome/twitter.php",{
        m:"1"
    },function(B){
        $("#twitter").html(B)
        })
    }
    function showappimg(C,D){
    $(".dohide").hide("slow");
    document.getElementById(C).style.display="block";
    $.post("/api/ibnhome/buzz.php",{
        m:D
    },function(A){
        $("#"+C).html(A)
        })
    }
    function loadVoting(E,D,F){
    $.post("/voting/getBox_New.php",{
        content_id:E,
        site_id:D,
        story_type:F
    },function(A){
        $("#vote_"+E+"_"+F).html(A)
        })
    }
    var cssmenuids=["cssmenu1","cssmenu3"];
var csssubmenuoffset=-1;
var timeout=200;
var closetimer=0;
var ddmenuitem=0;
function mopen(B){
    mcancelclosetime();
    if(ddmenuitem){
        ddmenuitem.style.visibility="hidden"
        }
        ddmenuitem=document.getElementById(B);
    ddmenuitem.style.visibility="visible"
    }
    function mclose(){
    if(ddmenuitem){
        ddmenuitem.style.visibility="hidden"
        }
    }
function mclosetime(){
    closetimer=window.setTimeout(mclose,timeout)
    }
    function mcancelclosetime(){
    if(closetimer){
        window.clearTimeout(closetimer);
        closetimer=null
        }
    }
document.onclick=mclose;
function createObject(){
    var A=null;
    if(navigator.userAgent.indexOf("Opera")>=0){
        A=new XMLHttpRequest();
        return A
        }
        if(navigator.userAgent.indexOf("MSIE")>=0){
        var B="Msxml2.XMLHTTP";
        if(navigator.appVersion.indexOf("MSIE 5.5")>=0){
            B="Microsoft.XMLHTTP"
            }
            try{
            A=new ActiveXObject(B);
            return A
            }catch(C){
            alert("Error. Scripting for ActiveX might be disabled");
            return
        }
    }
    if(navigator.userAgent.indexOf("Mozilla")>=0){
    A=new XMLHttpRequest();
    return A
    }
}
var http_request=createObject();
var xmlhttp=createObject();
function funcLoading(C,A){
    var A=A;
    var B="parameter="+C;
    if(http_request.overrideMimeType){
        http_request.overrideMimeType("text/xml")
        }
        if(!http_request){
        return false
        }
        http_request.open("GET",A+"?"+B,true);
    http_request.send(null)
    }
    function collapse(A){
    document.getElementById("flash_big").style.display="none";
    document.getElementById("flash_big").style.visibility="hidden";
    document.getElementById("flash_big").style.zIndex="999999"
    }
    function expand(){
    document.getElementById("flash_big").style.display="block";
    document.getElementById("flash_big").style.visibility="visible"
    }
    function flashResizer_big_DoFSCommand(B,A){
    if(B=="collapse"){
        collapse()
        }
    }
var xmlHttp;
function LTrim(B){
    var A=/\s*((\S+\s*)*)/;
    return B.replace(A,"$1")
    }
    function RTrim(B){
    var A=/((\s*\S+)*)\s*/;
    return B.replace(A,"$1")
    }
    function getVote(C,B){
    xmlHttp=GetXmlHttpObject();
    if(xmlHttp==null){
        alert("Browser does not support HTTP Request");
        return
    }
    var A="/poll/poll_vote_new.php?cod="+C+"&id="+B;
    xmlHttp.onreadystatechange=stateChanged;
    xmlHttp.open("GET",A,true);
    xmlHttp.send(null)
    }
    function stateChanged(){
    var B;
    if(xmlHttp.readyState==4||xmlHttp.readyState=="complete"){
        B=xmlHttp.responseText;
        arr=B.split("***---***");
        var C=LTrim(RTrim(arr[0]));
        var A=unescape(arr[1]);
        document.getElementById("poll"+C).innerHTML=A
        }
    }
function GetXmlHttpObject(){
    var A=null;
    if(window.XMLHttpRequest){
        A=new XMLHttpRequest()
        }else{
        if(window.ActiveXObject){
            A=new ActiveXObject("Microsoft.XMLHTTP")
            }
        }
    return A
}
if(!xmlhttp&&typeof XMLHttpRequest!="undefined"){
    try{
        xmlhttp=new XMLHttpRequest()
            }catch(e){
        xmlhttp=false
            }
        }
function myXMLHttpRequest(){
    var C;
    try{
        C=new ActiveXObject("Msxml2.XMLHTTP")
        }catch(B){
        try{
            C=new ActiveXObject("Microsoft.XMLHTTP")
            }catch(A){
            C=false
            }
        }
    if(!C&&typeof XMLHttpRequest!="undefined"){
    try{
        var C=new XMLHttpRequest()
        }catch(B){
        var C=false;
        alert("couldn't create xmlhttp object")
        }
    }
return(C)
}
function showheadline(){
    $("#headlinebox").slideDown(500)
    }
    function hideheadline(){
    $("#headlinebox").slideUp(500)
    }
    if(typeof deconcept=="undefined"){
    var deconcept=new Object()
    }
    if(typeof deconcept.util=="undefined"){
    deconcept.util=new Object()
        }
        if(typeof deconcept.SWFObjectUtil=="undefined"){
    deconcept.SWFObjectUtil=new Object()
        }
        deconcept.SWFObject=function(D,F,B,C,A,E){
    if(!document.createElement||!document.getElementById){
        return
    }
    this.params=new Object();
    this.variables=new Object();
    this.attributes=new Array();
    if(D){
        this.setAttribute("swf",D)
        }
        if(F){
        this.setAttribute("id",F)
        }
        if(B){
        this.setAttribute("width",B)
        }
        if(C){
        this.setAttribute("height",C)
        }
        if(A){
        this.setAttribute("version",new deconcept.PlayerVersion(A.toString().split(".")))
        }
        if(E){
        this.addParam("bgcolor",E)
        }
    };

deconcept.SWFObject.prototype={
    setAttribute:function(A,B){
        this.attributes[A]=B
        },
    getAttribute:function(A){
        return this.attributes[A]
        },
    addParam:function(A,B){
        this.params[A]=B
        },
    getParams:function(){
        return this.params
        },
    addVariable:function(A,B){
        this.variables[A]=B
        },
    getVariable:function(A){
        return this.variables[A]
        },
    getVariables:function(){
        return this.variables
        },
    getVariablePairs:function(){
        var A=new Array();
        var B;
        var C=this.getVariables();
        for(B in C){
            A.push(B+"="+C[B])
            }
            return A
        },
    getSWFHTML:function(){
        var D="";
        if(navigator.plugins&&navigator.mimeTypes&&navigator.mimeTypes.length){
            D='<embed type="application/x-shockwave-flash" src="'+this.getAttribute("swf")+'" width="'+this.getAttribute("width")+'" height="'+this.getAttribute("height")+'"';
            D+=' id="'+this.getAttribute("id")+'" name="'+this.getAttribute("id")+'" ';
            var C=this.getParams();
            for(var A in C){
                D+=[A]+'="'+C[A]+'" '
                }
                var B=this.getVariablePairs().join("&");
            if(B.length>0){
                D+='flashvars="'+B+'"'
                }
                D+="/>"
            }else{
            if(this.getAttribute("doExpressInstall")){
                this.addVariable("MMplayerType","ActiveX")
                }
                D='<object id="'+this.getAttribute("id")+'" classid="clsid:d27cdb6e-ae6d-11cf-96b8-444553540000" width="'+this.getAttribute("width")+'" height="'+this.getAttribute("height")+'">';
            D+='<param name="movie" value="'+this.getAttribute("swf")+'" />';
            var C=this.getParams();
            for(var A in C){
                D+='<param name="'+A+'" value="'+C[A]+'" />'
                }
                var B=this.getVariablePairs().join("&");
            if(B.length>0){
                D+='<param name="flashvars" value="'+B+'" />'
                }
                D+="</object>"
            }
            return D
        },
    write:function(A){
        var B=(typeof A=="string")?document.getElementById(A):A;
        B.innerHTML=this.getSWFHTML();
        return true
        }
    };

deconcept.SWFObjectUtil.getPlayerVersion=function(G,E){
    var B=new deconcept.PlayerVersion([0,0,0]);
    if(navigator.plugins&&navigator.mimeTypes.length){
        var A=navigator.plugins["Shockwave Flash"];
        if(A&&A.description){
            B=new deconcept.PlayerVersion(A.description.replace(/([a-z]|[A-Z]|\s)+/,"").replace(/(\s+r|\s+b[0-9]+)/,".").split("."))
            }
        }else{
    try{
        var D=new ActiveXObject("ShockwaveFlash.ShockwaveFlash");
        for(var C=3;D!=null;C++){
            D=new ActiveXObject("ShockwaveFlash.ShockwaveFlash."+C);
            B=new deconcept.PlayerVersion([C,0,0])
            }
        }catch(F){}
    if(G&&B.major>G.major){
    return B
    }
    if(!G||((G.minor!=0||G.rev!=0)&&B.major==G.major)||B.major>=8||E){
    try{
        B=new deconcept.PlayerVersion(D.GetVariable("$version").split(" ")[1].split(","))
        }catch(F){}
}
}
return B
};

deconcept.PlayerVersion=function(A){
    this.major=parseInt(A[0])!=null?parseInt(A[0]):0;
    this.minor=parseInt(A[1])||0;
    this.rev=parseInt(A[2])||0
    };
    
deconcept.PlayerVersion.prototype.versionIsValid=function(A){
    if(this.major<A.major){
        return false
        }
        if(this.major>A.major){
        return true
        }
        if(this.minor<A.minor){
        return false
        }
        if(this.minor>A.minor){
        return true
        }
        if(this.rev<A.rev){
        return false
        }
        return true
    };
    
deconcept.util={
    getRequestParameter:function(D){
        var B=document.location.search||document.location.hash;
        if(B){
            var C=B.indexOf(D+"=");
            var A=(B.indexOf("&",C)>-1)?B.indexOf("&",C):B.length;
            if(B.length>1&&C>-1){
                return B.substring(B.indexOf("=",C)+1,A)
                }
            }
        return""
    }
};

deconcept.SWFObjectUtil.cleanupSWFs=function(){
    var C=document.getElementsByTagName("OBJECT");
    for(var B=0;B<C.length;B++){
        for(var A in C[B]){
            if(typeof C[B][A]=="function"){
                C[B][A]=null
                }
            }
        }
    };

if(typeof window.onunload=="function"){
    var oldunload=window.onunload;
    window.onunload=function(){
        deconcept.SWFObjectUtil.cleanupSWFs();
        oldunload()
        }
    }else{
    window.onunload=deconcept.SWFObjectUtil.cleanupSWFs
        }
        if(Array.prototype.push==null){
    Array.prototype.push=function(A){
        this[this.length]=A;
        return this.length
        }
    }
    var getQueryParamValue=deconcept.util.getRequestParameter;
var FlashObject=deconcept.SWFObject;
var SWFObject=deconcept.SWFObject;
$(function(){
    var A=$.browser=="msie"&&$.browser.version<7;
    if(!A){
        var B=$("#comment").offset().top-parseFloat($("#comment").css("margin-top").replace(/auto/,0));
        $(window).scroll(function(C){
            var D=$(this).scrollTop();
            if(D>=B){
                $("#comment").addClass("fixed")
                }else{
                $("#comment").removeClass("fixed")
                }
            })
    }
});

	function showloadedad(source,target){
 			try{
			
 				var ad_div = document.getElementById(source);
 				var target_div = document.getElementById(target);
 				if(ad_div!=null || target_div!=null){
 					//target_div.style.display='block';
 					var ele_array = new Array();
 					for (i=0;i<ad_div.childNodes.length;i++){
 						if(ad_div.childNodes[i].tagName != '!' && ad_div.childNodes[i].tagName != 'SCRIPT'){
 						ele_array[ele_array.length] = ad_div.childNodes[i];
 						}
 					}
 					for (i=0;i<ele_array.length;i++){
					//alert(ele_array[i]);
 						target_div.appendChild(ele_array[i]);
							
 					}
 				}
 			}catch(err){
 				alert(err);
 			}
 		}