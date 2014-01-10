//  Copyright (c) 2000-2013 ZEDO Inc. All Rights Reserved.
var zflag_vals={};var d13=new function(){var q3=this;
q3.a7=false;
var zzDtctRules=[{"name":"ShockwaveFlash.ShockwaveFlash.7"},{"name":"ShockwaveFlash.ShockwaveFlash.6"},{"name":"ShockwaveFlash.ShockwaveFlash"}];var zzgetXObj=function(name){var c23=-1;
try{
c23=new ActiveXObject(name);
}
catch(err)
{
c23={
zzactiveXError:true};
}
return c23;
};
q3.d13=function(){
if(navigator.plugins&&navigator.plugins.length>0){
var d1='application/x-shockwave-flash';var c6=navigator.mimeTypes;
if(c6&&c6[d1]&&c6[d1].enabledPlugin&&c6[d1].enabledPlugin.description){
q3.a7=true;
}
}else if(navigator.appVersion.indexOf("Mac")==-1&&window.execScript){
var p44=-1;
for(var i=0;i<zzDtctRules.length&&p44==-1;i++){
var c23=zzgetXObj(zzDtctRules[i].name);
if(!c23.zzactiveXError){
q3.a7=true;
}}}
}();
};
get_flash_bit=function(){
var i4=navigator.userAgent.toLowerCase();var c21=(i4.indexOf('mac')!=-1);var i21=parseInt(navigator.appVersion);
var p22=(!c21&&(i4.indexOf('opera')==-1)&&(i4.indexOf('msie')!=-1)&&(i21>=4)&&(i4.indexOf('webtv')==-1
)&&(i4.indexOf('msie 4')==-1));
var p19=navigator.javaEnabled();var t4=1;
if(p19){t4 |=4;}
if(d13.a7){t4 |=8;}
if(p22){
if(document.documentElement){
document.documentElement.style.behavior='url(#default#clientCaps)';
if(document.documentElement.connectionType=='lan'){
t4 |=16;
}}
else if(document.body){
document.body.style.behavior='url(#default#clientCaps)';
if(document.body.connectionType=='lan'){
t4 |=16;
}}}
return t4;
};
var d14=get_flash_bit();
if(d14==null){
d14='';
}

/*
* Changed to fix inview issue-Declaire xxHStim outside function. Put a try catch around complete function and retry.
* Also commented out last if condition which was putting infinite loop in failure cases.
* Issue was-parent.frames["zedoHS_provider"]not available. Unhandled exception was aborting ff2 response execution. 
*/
var zzHStim=0;
function zzHSPost(hsad,mt){
if(typeof mt!='undefined'&&mt=='2'){
try{
var e8=hsad;var t45=decodeURIComponent(document.location.hash).replace(/^#/,'');
Sender.postMessage(e8,t45,parent);
}catch(e){
if(zzHStim<20){
setTimeout(function(){zzHSPost(hsad,mt);},500);
zzHStim++;
}}
}else{
try{
var zzfrmmsg=parent.frames["zedoHS_provider"].zzpostmsg;
if(zzHStim<20&&(zzfrmmsg==undefined||zzfrmmsg=="")){
parent.frames["zedoHS_provider"].zzpostmsg=hsad;
}
if(zzHStim<20){
setTimeout("zzHSPost('"+hsad+"')",500);
zzHStim++;
}
}catch(e){
if(zzHStim<20){
setTimeout("zzHSPost('"+hsad+"')",500);
zzHStim++;
}}}}
var o13="";var e39='_';var c36=new Array();
function U49(name,loadAdRef){
o13+=name+e39;
c36[c36.length]=loadAdRef;
}
var z0;
function U43(loadAdRef){
loadAdRef();
}
(function(){
var z16="http://xp2.zedo.com/asw";var p32=100;var r25=50;var p23="ZZRSYNC";var d19="ZZMFRM";var o15='_';var d42=100;var c44=300;var r36=100;var y40=5*60*1000;var o40=5*60*1000;var t38=false;
function B1(zMsg){
if(t38){
try{
console.log(zMsg);
}
catch(err){
}}}
function F19(str){
if(t38){
try{
console.timeStamp(str);
}
catch(err){
}}}
function F23(value,cookieName){
value=value+"_";
c=U1(cookieName);
if(c.indexOf(value)==0){
c=c.substr(value.length);
}else{
c=c.replace(new RegExp("_"+value,"gm"),"_");
}
F11(cookieName+"="+c);
B1("F23 on Unloaded "+cookieName+"="+c);
}
function B36(cookieName){
c=U1(cookieName);
idx=c.indexOf(o15);
c=c.substring(idx+1);
F11(cookieName+"="+c);
B1("removedLock "+cookieName+"="+c);
}
/**
* New waiting function for firefox. Instead of calling setTimeOut this function registers a call on master.
* The first frame hitting this call will register itself as master and proceeds with the call.Anyother script coming in function
* will check if there is already a master..if there is then it will find the master I frame from page and register own id
* to receive a call back. Iframes within in same domain can only do this so a26 cookie is set in document.domain
*/
function B33(loadAdFunction,zd_master_cookie_name){
var y13=U1(zd_master_cookie_name);
if(y13==null){
var y13="zzFFMaster"+U26();
this.name=y13;
var o46=zd_master_cookie_name+"="+y13;
B49(o46);
B1("Master Script id:"+y13);
window.onload=function(){F16(d19);};
window.onunload=function(){F16(d19);};
loadAdFunction();
}
else{
this.name="zzFF"+U26();
B1("Setting call back for:"+this.name);
var y13=U1(zd_master_cookie_name);var a26=U25(y13);
if(a26!=null&&a26!=undefined){
a26.window.U49(this.name,loadAdFunction);
}
B1("history after setting call back:"+window.history.length);
}}
function F20(loadAdFunction,no,cookieName,cnt){
cnt++;
if(U42(no,cookieName)||cnt>d42){
B1("READY Lock "+no);
loadAdFunction();
}else{
setTimeout(function(){
F20(loadAdFunction,no,cookieName,cnt);
},B60());
}}
function U42(no,cookieName){
c=U1(cookieName);
firstno=c.substring(0,c.indexOf(o15));
if(no+''==firstno){
return true;
}
return false;
}
function F40(randomNumber,cookieName){
c=U1(cookieName);
if(c==null){
c="";
}
str=cookieName+"="+c+randomNumber+o15;
F11(str);
return randomNumber;
}
function B60(){
return Math.floor(Math.random()*(c44-r36))
+r36;
}
function U26(){
return Math.floor(Math.random()* 10000000);
}
function U56(cookieName){
strVal=U1(cookieName);
if(strVal!=null&&strVal.lastIndexOf(o15)>0){
nos=strVal.split(o15);
return parseInt(nos[nos.length-2])+1;
}
return 1;
}
function U1(cookieName){
var y42=cookieName+"=";var ca=document.cookie.split(';');
for(var i=0;i<ca.length;i++){
var c=ca[i];
while(c.charAt(0)==' ')
c=c.substring(1,c.length);
if(c.indexOf(y42)==0)
return c.substring(y42.length,c.length);
}
return null;
}
function F16(zd_name){
var r8=new Date();
r8.setTime(r8.getTime()-1);
document.cookie=zd_name+"="+""+';expires='+r8.toGMTString()+';path=/;domain='+document.domain;
}
function B49(strVal){
var r8=new Date();
r8.setTime(r8.getTime()+o40);
document.cookie=strVal+';expires='+r8.toGMTString()+';path=/;domain='+document.domain;
}
function F11(strVal){
var r8=new Date();
r8.setTime(r8.getTime()+y40);
document.cookie=strVal+';expires='+r8.toGMTString()+';path=/;domain=.zedo.com';
}
var o0={};
(function(){
var e,
a=/\+/g,
r=/([^;=]+)=?([^;]*)/g,
d=function(s){return decodeURIComponent(s.replace(a," "));},
q=window.location.search.substring(1);
while(e=r.exec(q))
if(!o0[d(e[1])]||0==o0[d(e[1])].length){
o0[d(e[1])]=d(e[2]);
}
})();
var zflag_nid=o0["n"];var zflag_cid=o0["c"];var zflag_width=o0["w"];var zflag_height=o0["h"];var zflag_sz=o0["d"];var zflag_sid=o0["s"];var zflag_charset=o0["s"];var zflag_pbnw=o0["pn"];
var zflag_6=o0["6"];var zflag_pbad=o0["pa"];var zflag_pbch=o0["pc"];var zflag_pbr=o0["pr"];var zflag_pbsid=o0["ps"];var zflag_tmy=o0["tmy"];var zflag_chanlimits=o0["a"];var zflag_kw=o0["q"];
var zflag_$=o0["$"];var zflag_geo=o0["gc"];var zflag_param=o0["p"];var zflag_click=o0["l"];var zflag_ad_title=o0["t"];var zflag_message_transport=o0["mt"];var zflag_multi_param=o0["mp"];
var zflag_ck=0;var zz_exp_publisher=o0["e"];var zflag_smooth=o0["ssm"];var zflag_slide_speed=o0["ssp"];var zflag_slider_close_text=o0["sct"];
if(typeof zz_exp_publisher!='undefined'){
zz_exp_publisher=unescape(zz_exp_publisher);
zz_exp_publisher=zz_exp_publisher.replace(/\s/g,"")
zz_exp_publisher=zz_exp_publisher.replace(/'/g,"")
}else{
zz_exp_publisher='';
}
var zflag_page=o0["pu"];var zflag_ref=o0["ru"];var zflag_d1=o0["d1"];var zflag_d2=o0["d2"];var zflag_d3=o0["d3"];var zflag_d4=o0["d4"];var zflag_d5=o0["d5"];var zflag_d6=o0["d6"];
var zflag_d7=o0["d7"];var zflag_d8=o0["d8"];var zflag_d9=o0["d9"];var zflag_da=o0["da"];var zflag_db=o0["db"];var zflag_dc=o0["dc"];var zflag_dd=o0["dd"];var zflag_de=o0["de"];var zflag_df=o0["df"];
var zflag_ct=o0["ct"];var w47=new function(){var q3=this;
q3.isFirefox=(navigator.userAgent.indexOf("Firefox")!=-1?true:false);
}
var dt=new Date();
dt.setTime(dt.getTime()+(1*24*60*60*1000));
document.cookie="ZCBC=1;expires="+dt.toGMTString()+";path=/;domain=.zedo.com";
var n11=0;var a0='';var a6=0;var a6=0;var p48;var q46;var q47;var e48;var a47;var o47;var o48='';var r16='0';var i13=0;var p30='';var zd_$='';var a7=0;var r26='';var z30='';var n37="";var d34='';
var a36='';var o18=new Array();var c13='';var p34=0;var n30='';var y10="";var c30="";var o30="";var e17="";var v29="";var q24="";var i31="";var a24=new Array();var e38=new Array();var o22=new Array();
var y32=0;var r19="";var q19="";var p36="";
if(typeof zflag_ct!='undefined'){
p36=encodeURI(zflag_ct);
zflag_ct="";
}
if(typeof zflag_nid!='undefined'){
n11=zflag_nid;
zflag_nid=0;
}
if(typeof zflag_charset!='undefined'){
a0="charset="+zflag_charset;
zflag_charset="";
}
if(typeof zflag_sid!='undefined'){
a6=zflag_sid;
}
if(typeof zflag_pbnw!='undefined'){
y10+="&pn="+zflag_pbnw;
zflag_pbnw=0;
}
if(typeof zflag_6!='undefined'){
y10+="&6="+zflag_6;
zflag_6=0;
}
if(typeof zflag_pbad!='undefined'){
y10+="&pa="+zflag_pbad;
zflag_pbad=0;
}
if(typeof zflag_pbch!='undefined'){
if(zflag_pbch.indexOf("/")!=-1){
var w45=zflag_pbch.substr(0,zflag_pbch.indexOf("/"));
y10+="&pc="+w45;
}
else{
y10+="&pc="+zflag_pbch;
}
zflag_pbch="0";
}
if(typeof zflag_pbr!='undefined'){
y10+="&pr="+zflag_pbr;
zflag_pbr=0;
}
if(typeof zflag_pbsid!='undefined'){
y10+="&ps="+zflag_pbsid;
}
if(typeof zflag_tmy!='undefined'){
c30+="&tmy="+zflag_tmy;
zflag_tmy=0;
}
if(typeof zflag_cid!='undefined'){
r16=zflag_cid;
if(r16<0||r16>999999){
r16=0;
}}
if(typeof zflag_chanlimits!='undefined'){
p34=zflag_chanlimits;
zflag_chanlimits=0;
}
if(typeof zflag_sz!='undefined'){
i13=zflag_sz;
if(i13<0||i13>95){
i13=0;
}
zflag_sz=0;
}
if(typeof zflag_alter_sz!='undefined'){
e17=zflag_alter_sz;
if(e17<0||e17>95){
e17=0;
}
zflag_alter_sz=0;
}
if(typeof zflag_kw!='undefined'){
zflag_kw=zflag_kw.replace(/&/g,'zzazz');
p30=zflag_kw;
zflag_kw="";
}
if(typeof zflag_$!='undefined'){
zd_$=zflag_$;
zflag_$='';
}
if(typeof zflag_geo!='undefined'){
if(!isNaN(zflag_geo)){
r26="&gc="+zflag_geo;
zflag_geo=0;
}}
if(typeof zflag_param!='undefined'){
n37="&p="+zflag_param;
zflag_param="";
}
if(typeof zflag_click!='undefined'){
zzTrd=encodeURIComponent(zflag_click);
z30='&l='+zzTrd;
zflag_click="";
}
if(typeof zflag_ad_title!='undefined'){
zzTitle=escape(zflag_ad_title);
n30='&t='+zzTitle;
zflag_ad_title="";
}
if(typeof zflag_hasAd!='undefined'){
d34='&y='+zflag_hasAd;
}
if(typeof zflag_num!='undefined'){
a36=zflag_num;
zflag_num=0;
}
if(typeof zflag_ck!='undefined'){
c13='&ck='+zflag_ck;
zflag_ck=0;
}
if(typeof zflag_message_transport!='undefined'){
o30=zflag_message_transport;
zflag_message_transport=0;
}
if(typeof zflag_multi_param!='undefined'){
v29="&mp="+zflag_multi_param;
zflag_multi_param="";
}
if(typeof zflag_smooth!='undefined'){
q24+="&ssm="+zflag_smooth;
}
if(typeof zflag_slide_speed!='undefined'){
q24+="&ssp="+zflag_slide_speed;
}
if(typeof zflag_slider_close_text!='undefined'){
q24+="&sct="+zflag_slider_close_text;
}
if(typeof zflag_page!='undefined'){
r19=zflag_page;
zflag_page=='';
}
if(typeof zflag_ref!='undefined'){
q19=zflag_ref;
zflag_ref='';
}
var o18="d1,d2,d3,d4,d5,d6,d7,d8,d9,da,db,dc,dd,de,df".split(",");
function U14(){
var a19=new Array();
for(var i=0;i<o18.length;i++){
a19[i]=o18[i].substring(1);
}
return a19;
}
function B12(){
var d25=o18;var n6=new Array();var t13=new RegExp(",","g");
for(var i=0;i<d25.length;i++){
if(eval('typeof(zflag_'+o18[i]+')!="undefined"')){
n6[i]=eval('zflag_'+o18[i]);
if(n6[i]!=""){
n6[i]=n6[i].replace(t13,"Z");
}}}
return n6;
}
e38=U14();
o22=B12();
for(var i=0;i<o22.length;i++){
if(o22[i]!=""&&typeof o22[i]!='undefined'){
a24[a24.length]=e38[i]+":"+o22[i];
}}
if(a24.length!=0){
i31='&dm='+a24;
}
var zzStr='';
if(typeof zzCountry=='undefined'){
var zzCountry=255;}
if(typeof zzMetro=='undefined'){
var zzMetro=0;}
if(typeof zzState=='undefined'){
var zzState=0;}var zzSection=a6;var zzPbNId=q46;var zzPbEId=q47;var zzPbAId=e48;var zzPbCId=a47;var zzPbGeoLvl=o47;var zzPbk=o48;
if(typeof zzPbk=='undefined'){
zzPbk=-1;
}
var zzPbSId=p48;var zzD=window.document;var zzRand=(Math.floor(Math.random()* 1000000)% 10000);var zzCustom='';var zzPat='';var zzSkip='';var zzExp='';var zzTrd='';var zzPos=0;var zzNw=0;var zzCh=0;
var zzDmCodes=new Array();var zzDmValues=new Array();var zzBr=99;var zzLang=99;var zzAGrp=0;var zzAct=new Array();var zzActVal=new Array();
if(d14<0||d14>31){
d14=1;
}
var w10=new Array();
function B0(zp_label){
if(!w10[zp_label]){
var i35=document.cookie;var o7=new Array();var d15=new Array();
o7=i35.split(';');
var y33=(o7!=null)?o7.length:0;
for(var i=0;i<y33;i++){
o7[i]=o7[i].replace(/^\s/,'');
d15=o7[i].split('=');
w10[d15[0]]=d15[1];
}}
if(w10[zp_label]){
return w10[zp_label];
}else{
return '';
}}
function U59(){
var w42=new Date();var t48=new Date(w42.getFullYear(),0,1,0,0,0,0);var w44=new Date(w42.getFullYear(),6,1,0,0,0,0);var p47=Math.max(t48.getTimezoneOffset(),w44.getTimezoneOffset());
return-p47/60;
}
y32=U59();
function U22(isJSTag){
var w30='';
try{
if(isJSTag){
w30=(typeof(location.href)=='undefined'?"":encodeURIComponent(location.href.split("?")[0]));
}else{
w30=(typeof(document.referrer)=='undefined'?"":encodeURIComponent(document.referrer.split("?")[0]));
}
}catch(err){}
return w30;
}
function B19(isJSTag){
var c38='';
try{
if(isJSTag){
c38=(typeof(document.referrer)=='undefined'?"":encodeURIComponent(document.referrer.split("?")[0]));
}
}catch(e){}
return c38;
}
if(o30==2){
document.write('<SCR'+'IPT LANGUAGE="JavaScript" SRC="http://xp2.zedo.com/client/xp2/utils/Sender.js"><\/scr'+'ipt>');
}
z0=z16+'/fmr.js?c='+r16+'&a='+p34+'&f='+a36+'&n='+n11
+'&r='+d14+'&d='+i13+'&adm='+e17+'&q='+p30+'&$='+zd_$+y10+c30+'&s='+a6+r26+n37+z30+d34+n30+
i31+'&ct='+p36+'&mt='+o30+'&z='+Math.random()+'&tt=1'+v29+q24+'&tz='+y32+'&pu='+((r19!='')?encodeURI(r19.split("?")[0]):U22(false))+'&ru='+((q19!='')?encodeURI(q19.split("?")[0]):B19(false))
;
function U9(){
if(w47.isFirefox){
var t47='480,729,824';var o39=new Array();
o39=t47.split(",");
return(o39.indexOf(n11)>-1);
}
return false;
}
function B27()
{
var r30=(navigator.cookieEnabled)?true:false;
if(typeof navigator.cookieEnabled=="undefined"&&!r30)
{
document.cookie='ZTCEC=1;path=/;domain=.zedo.com';
r30=(document.cookie.indexOf("ZTCEC=1")!=-1)?true:false;
}
return(r30);
}
function U37(e6,zd_frame_name){
try{
if(e6!=null&&(e6!=undefined||typeof e6=="undefined")
&&e6.window!=null&&e6.window.name==zd_frame_name){
return true;
}else{
return false;
}
}catch(ex){
return false;
}}
function B25(zd_node,zd_frame_name){
if(zd_node!=null&&zd_node!=undefined&&zd_node.window!=null&&zd_node.window!=undefined){
var e6=null;
for(var i=0;i<zd_node.window.frames.length;i++)
{
e6=zd_node.window.frames[i];
if(U37(e6,zd_frame_name)){
return e6;
}
else
{
e6=B25(e6,zd_frame_name);
if(e6!=null&&e6!=undefined){
return e6;
}}}}
return null;
}
function U25(zd_frame_name){
return B25(top.parent,zd_frame_name);
}
if(B27()==false){
F17(z0);
}
else{
if(U9()){
try{
B33(function(){F17(z0);},d19);
}catch(e){
if(document.cookie.indexOf('FFERROR')==-1){
var t21=new Image();var y21='Error in loading ads for firefox.Error:'+e.e8;
t21.src='http://r1.zedo.com/log/ERR.gif?v=v02-13;'
+y21+'b='+navigator.userAgent;
document.cookie="FFERROR=0";
}}
}else{
zSyncNumber=F40(U56(p23),p23);
window.onunload=function(){B29(zSyncNumber,p23);};
F20(function(){F17(z0);},zSyncNumber,p23,0);
}}
function B29(no,cookieName){
F23(no,cookieName);
}
function F17(z0){
var v19=B0("ZEDOIDA");
if(!(v19=="OPT_OUT"&&i13==15)){
if(p32<=10||r25<=10){
setTimeout(function(){
F24(z0);
},Math.random()*(p32-r25)+r25);
}
else{
F24(z0);
}}}
function U32(){
var i=0;
B1("callback needed for:"+o13);
while(o13!=""&&o13!=null){
var w38=o13.indexOf(e39);var a40=o13.substring(0,w38);var c47=U25(a40);
c47.window.U43(c36[i]);
o13=o13.substring(w38+1);
B1("callback done for:"+a40);
i++;
}
var n47=U1(d19);
if(n47==this.name){
F16(d19);
window.onunload=null;
window.onload=null;
}}
function F24(zDocSrc){
var v14;z0='<scr'+'ipt language="javascript" src="'+z0+'" '+a0+'></scr'+'ipt>';
try{
v14=new XMLHttpRequest();
}catch(e){
try{
v14=new ActiveXObject('Msxml2.XMLHTTP');
}catch(e){
try{
v14=new ActiveXObject('Microsoft.XMLHTTP');
}catch(e){
if(document.cookie.indexOf('FFERROR')==-1){
var t21=new Image();var y21='Your browser does not support AJAX!';
t21.src='http://r1.zedo.com/log/ERR.gif?v=v02-13;'
+y21+'b='+navigator.userAgent;
document.cookie="FFERROR=0";
}
return false;
}}}
v14.open('GET',zDocSrc,false);
v14.send(null);
if(v14.status==200){
if(B27()&&U9()==false){
B36(p23);
}
if(U9()==false){
window.onunload=null;
}
try{
F19("evalStart"+zDocSrc);
B64(v14.responseText);
F19("evalEnd "+zDocSrc);
if(U9()){
U32();
}
}catch(ex){
document.cookie="FFERROR=0";
}}
function B64(result){
eval(result);
eval("document.close();");
}}
})();
