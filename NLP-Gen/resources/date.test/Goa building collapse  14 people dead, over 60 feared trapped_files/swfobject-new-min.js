if(typeof deconcept=="undefined"){var deconcept=new Object()}if(typeof deconcept.util=="undefined"){deconcept.util=new Object()}if(typeof deconcept.SWFObjectUtil=="undefined"){deconcept.SWFObjectUtil=new Object()}deconcept.SWFObject=function(D,F,B,C,A,E){if(!document.createElement||!document.getElementById){return }this.params=new Object();this.variables=new Object();this.attributes=new Array();if(D){this.setAttribute("swf",D)}if(F){this.setAttribute("id",F)}if(B){this.setAttribute("width",B)}if(C){this.setAttribute("height",C)}if(A){this.setAttribute("version",new deconcept.PlayerVersion(A.toString().split(".")))}if(E){this.addParam("bgcolor",E)}};deconcept.SWFObject.prototype={setAttribute:function(A,B){this.attributes[A]=B},getAttribute:function(A){return this.attributes[A]},addParam:function(A,B){this.params[A]=B},getParams:function(){return this.params},addVariable:function(A,B){this.variables[A]=B},getVariable:function(A){return this.variables[A]},getVariables:function(){return this.variables},getVariablePairs:function(){var A=new Array();var B;var C=this.getVariables();for(B in C){A.push(B+"="+C[B])}return A},getSWFHTML:function(){var D="";if(navigator.plugins&&navigator.mimeTypes&&navigator.mimeTypes.length){D='<embed type="application/x-shockwave-flash" src="'+this.getAttribute("swf")+'" width="'+this.getAttribute("width")+'" height="'+this.getAttribute("height")+'"';D+=' id="'+this.getAttribute("id")+'" name="'+this.getAttribute("id")+'" ';var C=this.getParams();for(var A in C){D+=[A]+'="'+C[A]+'" '}var B=this.getVariablePairs().join("&");if(B.length>0){D+='flashvars="'+B+'"'}D+="/>"}else{if(this.getAttribute("doExpressInstall")){this.addVariable("MMplayerType","ActiveX")}D='<object id="'+this.getAttribute("id")+'" classid="clsid:d27cdb6e-ae6d-11cf-96b8-444553540000" width="'+this.getAttribute("width")+'" height="'+this.getAttribute("height")+'">';D+='<param name="movie" value="'+this.getAttribute("swf")+'" />';var C=this.getParams();for(var A in C){D+='<param name="'+A+'" value="'+C[A]+'" />'}var B=this.getVariablePairs().join("&");if(B.length>0){D+='<param name="flashvars" value="'+B+'" />'}D+="</object>"}return D},write:function(A){var B=(typeof A=="string")?document.getElementById(A):A;B.innerHTML=this.getSWFHTML();return true}};deconcept.SWFObjectUtil.getPlayerVersion=function(G,E){var B=new deconcept.PlayerVersion([0,0,0]);if(navigator.plugins&&navigator.mimeTypes.length){var A=navigator.plugins["Shockwave Flash"];if(A&&A.description){B=new deconcept.PlayerVersion(A.description.replace(/([a-z]|[A-Z]|\s)+/,"").replace(/(\s+r|\s+b[0-9]+)/,".").split("."))}}else{try{var D=new ActiveXObject("ShockwaveFlash.ShockwaveFlash");for(var C=3;D!=null;C++){D=new ActiveXObject("ShockwaveFlash.ShockwaveFlash."+C);B=new deconcept.PlayerVersion([C,0,0])}}catch(F){}if(G&&B.major>G.major){return B}if(!G||((G.minor!=0||G.rev!=0)&&B.major==G.major)||B.major>=8||E){try{B=new deconcept.PlayerVersion(D.GetVariable("$version").split(" ")[1].split(","))}catch(F){}}}return B};deconcept.PlayerVersion=function(A){this.major=parseInt(A[0])!=null?parseInt(A[0]):0;this.minor=parseInt(A[1])||0;this.rev=parseInt(A[2])||0};deconcept.PlayerVersion.prototype.versionIsValid=function(A){if(this.major<A.major){return false}if(this.major>A.major){return true}if(this.minor<A.minor){return false}if(this.minor>A.minor){return true}if(this.rev<A.rev){return false}return true};deconcept.util={getRequestParameter:function(D){var B=document.location.search||document.location.hash;if(B){var C=B.indexOf(D+"=");var A=(B.indexOf("&",C)>-1)?B.indexOf("&",C):B.length;if(B.length>1&&C>-1){return B.substring(B.indexOf("=",C)+1,A)}}return""}};deconcept.SWFObjectUtil.cleanupSWFs=function(){var C=document.getElementsByTagName("OBJECT");for(var B=0;B<C.length;B++){for(var A in C[B]){if(typeof C[B][A]=="function"){C[B][A]=null}}}};if(typeof window.onunload=="function"){var oldunload=window.onunload;window.onunload=function(){deconcept.SWFObjectUtil.cleanupSWFs();oldunload()}}else{window.onunload=deconcept.SWFObjectUtil.cleanupSWFs}if(Array.prototype.push==null){Array.prototype.push=function(A){this[this.length]=A;return this.length}}var getQueryParamValue=deconcept.util.getRequestParameter;var FlashObject=deconcept.SWFObject;var SWFObject=deconcept.SWFObject;