//  Copyright (c) 2000-2013 ZEDO Inc. All Rights Reserved.
var z16="http://axp.zedo.com/asw";var d13=new function(){var q3=this;
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

if(typeof zflag_vals!='undefined'&&typeof zflag_vals.c!='undefined'){
var zflag_cid=zflag_vals.c;}
if(typeof zflag_vals!='undefined'&&typeof zflag_vals.s!='undefined'){
var zflag_sid=zflag_vals.s;}
var n11=0;var a0='';var a6=0;var a6=0;var p48;var q46;var q47;var e48;var a47;var o47;var o48='';var r16='0';var i13=0;var p30='';var zd_$='';var a7=0;var r26='';
var z30='';var n37="";var d34='';var a36='';var o18=new Array();var c13='';var p34=0;var n30='';var y10="";var c30="";var o30="";var e17="";var v29="";var q24="";var i31="";var a24=new Array();
var e38=new Array();var o22=new Array();var y32=0;var r19="";var q19="";var p36="";
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

z0=z16+'/fm.js?c='+r16+'&a='+p34+'&f='+a36+'&n='+n11
+'&r='+d14+'&d='+i13+'&adm='+e17+'&q='+p30+'&$='+zd_$+y10+c30+'&s='+a6+r26+n37+z30+d34+n30+
'&ct='+p36+i31+'&z='+Math.random()+'&tt=0'+v29+'&tz='+y32+'&pu='+((r19!='')?encodeURI(r19.split("?")[0]):U22(true))+'&ru='+((q19!='')?encodeURI(q19.split("?")[0]):B19(true));
z0='<scr'+'ipt language="javascript" src="'+z0+'" '+a0+'></scr'+'ipt>';
var v19=B0("ZEDOIDA");
if(!(v19=="OPT_OUT"&&i13==15)){
document.write(z0);
}