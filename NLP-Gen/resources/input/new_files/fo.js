//  Copyright (c) 2000-2013 ZEDO Inc. All Rights Reserved.
function U1(){
var y0=navigator.userAgent.toLowerCase();var q4=(y0.indexOf('mac')!=-1);var r9=(y0.indexOf("android")!=-1);var w5=parseInt(navigator.appVersion);
var d3=(!q4&&(y0.indexOf('opera')==-1)&&(y0.indexOf('msie')!=-1)&&(w5>=4)&&(y0.indexOf('webtv')==-1)&&(y0.indexOf('msie 4')==-1));
if(d3){
document.writeln('<scr'+'ipt language=VBS'+'cript>');
document.writeln('on error resume next');
document.writeln('r0=IsObject(CreateObject("ShockwaveFlash.ShockwaveFlash.5"))');
document.writeln('if(r0<=0)then r0=IsObject(CreateObject("ShockwaveFlash.ShockwaveFlash.4"))');
document.writeln('</scr'+'ipt>');
}
else if(navigator.mimeTypes&&
navigator.mimeTypes["application/x-shockwave-flash"]&&
navigator.mimeTypes["application/x-shockwave-flash"].enabledPlugin){
if(navigator.plugins&&navigator.plugins["Shockwave Flash"]){
var d2=navigator.plugins["Shockwave Flash"].description;
if(parseInt(d2.substring(d2.indexOf(".")-2))>=4){
r0=1;
}}}
else if(r9){
if(navigator.plugins&&navigator.plugins.length){
var i2;
for(i2=0;i2<navigator.plugins.length;i2++){
if(navigator.plugins[i2].name.indexOf('Shockwave Flash')!=-1){
r0=1;
break;
}}}}
var i3=navigator.javaEnabled();var c0=1;
if(i3){c0 |=4;}
if(r0){c0 |=8;}
if(d3){
if(document.documentElement){
document.documentElement.style.behavior='url(#default#clientCaps)';
if(document.documentElement.connectionType=='lan'){
c0 |=16;
}}
else if(document.body){
document.body.style.behavior='url(#default#clientCaps)';
if(document.body.connectionType=='lan'){
c0 |=16;
}}}
return c0;
}
function B1(){
var o4=new Array('d1','d2','d3','d4','d5','d6','d7','d8','d9','da','db','dc','dd','de','df');
return o4;
}
var n0=0;var e6='';var z1=0;var z1=0;var d12;var n13;var e11;var c11;var c9;var r10;var p11='';var e0='0';var d0=0;var e4='';var c2='';var zd_$='';var r0=0;var i1='';var v1='';var n2='';var e2="";
var o3='';var r3='';var v0=new Array();var q0='';var c4=0;var w2='';var r1="";var t6='';var z7=true;
var r17="1354-110:111:129:159:162:157:152:14:6,1992-68:69:70:71:80:81:82:83:72:73:74:75:32:33:34:35:52:53:54:55:2:36:37:38:39:76:77:78:79:28:29:40:41:42:43:64:65:66:67:1:56:57:58:59:60:61:62:63:44:45:48:49:50:51:25";
var r15=r17.split(',');var v17=r15.length;
if(typeof zflag_nid!='undefined'){
n0=zflag_nid;
}
if(typeof zflag_cid!='undefined'){
e0=zflag_cid;
if(e0<0||e0>999999){
e0=0;
}
var a3=e0;var i9=a3.toString().indexOf('/');
if(i9!=-1){
a3=parseInt(a3.substr(0,i9));
}else{
a3=parseInt(a3);
}}
for(var p=0;p<v17;p++){
var c16=r15[p].split('-');
if(n0==c16[0]){
var r14=c16[1].split(':');
for(var q=0;q<r14.length;q++){
if(a3==r14[q]){
z7=false;
break;
}}}
if(!z7)break;
}
if(z7){
document.write('<scr'+'ipt language="javascript" src="http://axp.zedo.com/client/axp/fo.js"></scr'+'ipt>');
}else{
zflag_nid=0;
if(typeof zflag_charset!='undefined'){
e6="charset="+zflag_charset;
zflag_charset="";
}
if(typeof zflag_sid!='undefined'){
z1=zflag_sid;
}
if(typeof zflag_pbnw!='undefined'){
r1+="&pn="+zflag_pbnw;
zflag_pbnw=0;
}
if(typeof zflag_6!='undefined'){
r1+="&6="+zflag_6;
zflag_6=0;
}
if(typeof zflag_pbad!='undefined'){
r1+="&pa="+zflag_pbad;
zflag_pbad=0;
}
if(typeof zflag_pbch!='undefined'){
if(zflag_pbch.indexOf("/")!=-1){
var o13=zflag_pbch.substr(0,zflag_pbch.indexOf("/"));
r1+="&pc="+o13;
}
else{
r1+="&pc="+zflag_pbch;
}
zflag_pbch="0";
}
if(typeof zflag_pbr!='undefined'){
r1+="&pr="+zflag_pbr;
zflag_pbr=0;
}
if(typeof zflag_pbsid!='undefined'){
r1+="&ps="+zflag_pbsid;
}
if(typeof zflag_chanlimits!='undefined'){
c4=zflag_chanlimits;
zflag_chanlimits=0;
}
if(typeof zflag_sz!='undefined'){
d0=zflag_sz;
if(d0<0||d0>95){
d0=0;
}
zflag_sz=0;
}
if(typeof zflag_alter_sz!='undefined'){
e4=zflag_alter_sz;
if(e4<0||e4>95){
e4=0;
}
e4="&adm="+e4;
zflag_alter_sz=0;
}
if(typeof zflag_kw!='undefined'){
zflag_kw=zflag_kw.replace(/&/g,'zzazz');
c2=escape(zflag_kw);
zflag_kw="";
}
if(typeof zflag_$!='undefined'){
zd_$=zflag_$;
zflag_$='';
}
if(typeof zflag_geo!='undefined'){
if(!isNaN(zflag_geo)){
v1="&gc="+zflag_geo;
zflag_geo=0;
}}
if(typeof zflag_param!='undefined'){
e2="&p="+zflag_param;
zflag_param="";
}
if(typeof zflag_click!='undefined'){
zzTrd=escape(zflag_click);
n2='&l='+zzTrd;
zflag_click="";
}
if(typeof zflag_ad_title!='undefined'){
zzTitle=escape(zflag_ad_title);
w2='&t='+zzTitle;
zflag_ad_title="";
}
if(typeof zflag_hasAd!='undefined'){
o3='&y='+zflag_hasAd;
}
if(typeof zflag_num!='undefined'){
r3=zflag_num;
zflag_num=0;
}
if(typeof zflag_ck!='undefined'){
q0='&ck='+zflag_ck;
zflag_ck=0;
}
if(typeof zflag_smooth!='undefined'){
t6='&zsm='+zflag_smooth;
}else{
t6='&zsm=0';
}
v0=B1();
for(var i=0;i<v0.length;i++){
if(eval('typeof(zflag_'+v0[i]+')!="undefined"')){
q0=q0+'&'+v0[i]+'='+eval('zflag_'+v0[i]);
eval('zflag_'+v0[i]+'="";');
}}
var zzStr='';
if(typeof zzCountry=='undefined'){
var zzCountry=255;}
if(typeof zzMetro=='undefined'){
var zzMetro=0;}
if(typeof zzState=='undefined'){
var zzState=0;}var zzSection=z1;var zzPbNId=d12;var zzPbEId=e11;var zzPbAId=c11;var zzPbCId=c9;var zzPbGeoLvl=r10;var zzPbk=p11;
if(typeof zzPbk=='undefined'){
zzPbk=-1;
}
var zzPbSId=n13;var zzD=window.document;var zzRand=(Math.floor(Math.random()* 1000000)% 10000);var zzCustom='';var zzPat='';var zzSkip='';var zzExp='';var zzTrd='';var zzPos=0;var zzNw=0;var zzCh=0;
var zzDmCodes=new Array();var zzDmValues=new Array();var zzBr=99;var zzLang=99;var zzAGrp=0;var zzAct=new Array();var zzActVal=new Array();
i1=U1();
if(i1<0||i1>31){
i1=1;
}
a0='<scr'+'ipt language="javascript" src="http://d7.zedo.com/bar/v17-010/d2/jsc/fm.js?c='+e0+'&a='+c4+'&f='+r3+'&n='+n0+'&r='+i1+'&d='+d0+e4+'&q='+c2+'&$='+zd_$+r1+'&s='+z1+v1+e2+n2+o3+w2+q0+t6+'&z='+Math.random()+'" '+e6+'></scr'+'ipt>';
document.write(a0);
}