(function(){var l=this,aa=function(){},m=function(a){var c=typeof a;if("object"==c)if(a){if(a instanceof Array)return"array";if(a instanceof Object)return c;var b=Object.prototype.toString.call(a);if("[object Window]"==b)return"object";if("[object Array]"==b||"number"==typeof a.length&&"undefined"!=typeof a.splice&&"undefined"!=typeof a.propertyIsEnumerable&&!a.propertyIsEnumerable("splice"))return"array";if("[object Function]"==b||"undefined"!=typeof a.call&&"undefined"!=typeof a.propertyIsEnumerable&&!a.propertyIsEnumerable("call"))return"function"}else return"null";
else if("function"==c&&"undefined"==typeof a.call)return"object";return c},n=function(a){return void 0!==a},p=function(a){return"string"==typeof a},ba=function(a,c,b){return a.call.apply(a.bind,arguments)},ca=function(a,c,b){if(!a)throw Error();if(2<arguments.length){var d=Array.prototype.slice.call(arguments,2);return function(){var b=Array.prototype.slice.call(arguments);Array.prototype.unshift.apply(b,d);return a.apply(c,b)}}return function(){return a.apply(c,arguments)}},q=function(a,c,b){q=Function.prototype.bind&&
-1!=Function.prototype.bind.toString().indexOf("native code")?ba:ca;return q.apply(null,arguments)},s=Date.now||function(){return+new Date},t=function(a,c){var b,d=c,e=a.split(".");b=b||l;e[0]in b||!b.execScript||b.execScript("var "+e[0]);for(var f;e.length&&(f=e.shift());)e.length||void 0===d?b=b[f]?b[f]:b[f]={}:b[f]=d},u=function(a,c){function b(){}b.prototype=c.prototype;a.W=c.prototype;a.prototype=new b;a.X=function(a,b,f){var g=Array.prototype.slice.call(arguments,2);return c.prototype[b].apply(a,
g)}};var ea=function(a){var c=da;return-1!=c.indexOf(a)},fa=function(a,c){return a<c?-1:a>c?1:0};var v=Array.prototype,ga=v.indexOf?function(a,c,b){return v.indexOf.call(a,c,b)}:function(a,c,b){b=null==b?0:0>b?Math.max(0,a.length+b):b;if(p(a))return p(c)&&1==c.length?a.indexOf(c,b):-1;for(;b<a.length;b++)if(b in a&&a[b]===c)return b;return-1},ha=function(a){var c=a.length;if(0<c){for(var b=Array(c),d=0;d<c;d++)b[d]=a[d];return b}return[]},ia=ha,ja=function(a,c,b){return 2>=arguments.length?v.slice.call(a,c):v.slice.call(a,c,b)};var ka=function(a,c){this.x=n(a)?a:0;this.y=n(c)?c:0};ka.prototype.floor=function(){this.x=Math.floor(this.x);this.y=Math.floor(this.y);return this};ka.prototype.round=function(){this.x=Math.round(this.x);this.y=Math.round(this.y);return this};var la=function(a,c){var b,d;for(d in a)c.call(b,a[d],d,a)},ma=function(a,c){var b,d;for(d in a)if(c.call(b,a[d],d,a))return!0;return!1},na=function(a,c,b){if(c in a)throw Error('The object already contains the key "'+c+'"');a[c]=b},oa=function(a,c){var b=0;return c in a?a[c]:b},pa="constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf".split(" "),qa=function(a,c){for(var b,d,e=1;e<arguments.length;e++){d=arguments[e];for(b in d)a[b]=d[b];for(var f=0;f<pa.length;f++)b=
pa[f],Object.prototype.hasOwnProperty.call(d,b)&&(a[b]=d[b])}},ra=function(a){var c=arguments.length;if(1==c&&"array"==m(arguments[0]))return ra.apply(null,arguments[0]);for(var b={},d=0;d<c;d++)b[arguments[d]]=!0;return b};var w,x,y,sa,ta=function(){return l.navigator?l.navigator.userAgent:null};sa=y=x=w=!1;var da;if(da=ta()){var ua=l.navigator,va=da,wa="Opera";w=0==va.lastIndexOf(wa,0);x=!w&&(ea("MSIE")||ea("Trident"));y=!w&&ea("WebKit");sa=!w&&!y&&!x&&"Gecko"==ua.product}var xa=w,z=x,A=sa,B=y,ya=function(){var a=l.document;return a?a.documentMode:void 0},za;
t:{var C="",D;if(xa&&l.opera)var Aa=l.opera.version,C="function"==typeof Aa?Aa():Aa;else if(A?D=/rv\:([^\);]+)(\)|;)/:z?D=/\b(?:MSIE|rv)[: ]([^\);]+)(\)|;)/:B&&(D=/WebKit\/(\S+)/),D)var Ba=D.exec(ta()),C=Ba?Ba[1]:"";if(z){var Ca=ya();if(Ca>parseFloat(C)){za=String(Ca);break t}}za=C}
var Da=za,Ea={},E=function(a){var c;if(!(c=Ea[a])){c=Ea;var b=a,d=a;a=Da;var e=0;a=String(a).replace(/^[\s\xa0]+|[\s\xa0]+$/g,"").split(".");for(var d=String(d).replace(/^[\s\xa0]+|[\s\xa0]+$/g,"").split("."),f=Math.max(a.length,d.length),g=0;0==e&&g<f;g++){var h=a[g]||"",k=d[g]||"",r=RegExp("(\\d*)(\\D*)","g"),Db=RegExp("(\\d*)(\\D*)","g");do{var L=r.exec(h)||["","",""],M=Db.exec(k)||["","",""];if(0==L[0].length&&0==M[0].length)break;var e=0==L[1].length?0:parseInt(L[1],10),Eb=0==M[1].length?0:parseInt(M[1],
10),e=fa(e,Eb)||fa(0==L[2].length,0==M[2].length)||fa(L[2],M[2])}while(0==e)}a=e;c=c[b]=0<=a}return c},Ga=function(){var a=9;return z&&Fa>=a},Ha;var Ia=l.document;if(Ia&&z){var Ja=ya();Ha=Ja||("CSS1Compat"==Ia.compatMode?parseInt(Da,10):5)}else Ha=void 0;var Fa=Ha;!A&&!z||z&&Ga()||A&&E("1.9.1");z&&E("9");var F=function(a){return a?a.parentWindow||a.defaultView:window};var Ka=[],La=!1;var Ma=function(a){Ma[" "](a);return a};Ma[" "]=aa;var Na=!z||Ga(),Oa=z&&!E("9");!B||E("528");A&&E("1.9b")||z&&E("8")||xa&&E("9.5")||B&&E("528");A&&!E("8")||z&&E("9");var Pa=function(){};var G=function(a,c){this.type=a;this.currentTarget=this.target=c;this.defaultPrevented=this.i=!1;this.H=!0};G.prototype.preventDefault=function(){this.defaultPrevented=!0;this.H=!1};var H=function(a,c){G.call(this,a?a.type:"");this.relatedTarget=this.currentTarget=this.target=null;this.charCode=this.keyCode=this.button=this.screenY=this.screenX=this.clientY=this.clientX=this.offsetY=this.offsetX=0;this.metaKey=this.shiftKey=this.altKey=this.ctrlKey=!1;this.K=this.state=null;if(a){var b=a,d=c,e=this.type=b.type;this.target=b.target||b.srcElement;this.currentTarget=d;if(d=b.relatedTarget){if(A){var f;t:{var g="nodeName";try{Ma(d[g]);f=!0;break t}catch(h){}f=!1}f||(d=null)}}else"mouseover"==
e?d=b.fromElement:"mouseout"==e&&(d=b.toElement);this.relatedTarget=d;this.offsetX=B||void 0!==b.offsetX?b.offsetX:b.layerX;this.offsetY=B||void 0!==b.offsetY?b.offsetY:b.layerY;this.clientX=void 0!==b.clientX?b.clientX:b.pageX;this.clientY=void 0!==b.clientY?b.clientY:b.pageY;this.screenX=b.screenX||0;this.screenY=b.screenY||0;this.button=b.button;this.keyCode=b.keyCode||0;this.charCode=b.charCode||("keypress"==e?b.keyCode:0);this.ctrlKey=b.ctrlKey;this.altKey=b.altKey;this.shiftKey=b.shiftKey;this.metaKey=
b.metaKey;this.state=b.state;this.K=b;b.defaultPrevented&&this.preventDefault()}};u(H,G);H.prototype.preventDefault=function(){H.W.preventDefault.call(this);var a=this.K;if(a.preventDefault)a.preventDefault();else if(a.returnValue=!1,Oa)try{if(a.ctrlKey||112<=a.keyCode&&123>=a.keyCode)a.keyCode=-1}catch(c){}};var Qa="closure_listenable_"+(1E6*Math.random()|0),Ra=function(a){try{return!(!a||!a[Qa])}catch(c){return!1}},Sa=0;var Ta=function(a,c,b,d,e){var f=null;this.e=a;this.n=f;this.src=c;this.type=b;this.capture=!!d;this.m=e;this.key=++Sa;this.g=this.l=!1},Ua=function(a){a.g=!0;a.e=null;a.n=null;a.src=null;a.m=null};var I=function(a){this.src=a;this.b={};this.p=0};I.prototype.add=function(a,c,b,d,e){var f=this.b[a];f||(f=this.b[a]=[],this.p++);var g=Va(f,c,d,e);-1<g?(a=f[g],b||(a.l=!1)):(a=new Ta(c,this.src,a,!!d,e),a.l=b,f.push(a));return a};I.prototype.remove=function(a,c,b,d){if(!(a in this.b))return!1;var e=this.b[a];c=Va(e,c,b,d);return-1<c?(b=e[c],Ua(b),b=e,v.splice.call(b,c,1),0==e.length&&(delete this.b[a],this.p--),!0):!1};
var Wa=function(a,c){var b=c.type;if(b in a.b){var d,e=a.b[b],f=ga(e,c);(d=0<=f)&&v.splice.call(e,f,1);d&&(Ua(c),0==a.b[b].length&&(delete a.b[b],a.p--))}};I.prototype.G=function(a,c,b,d){a=this.b[a];var e=-1;a&&(e=Va(a,c,b,d));return-1<e?a[e]:null};var Va=function(a,c,b,d){for(var e=0;e<a.length;++e){var f=a[e];if(!f.g&&f.e==c&&f.capture==!!b&&f.m==d)return e}return-1};var Xa="closure_lm_"+(1E6*Math.random()|0),J={},Ya=0,K=function(a,c,b,d,e){if("array"==m(c))for(var f=0;f<c.length;f++)K(a,c[f],b,d,e);else if(b=Za(b),Ra(a))a.h.add(String(c),b,!1,d,e);else{var f=e,g=!1;if(!c)throw Error("Invalid event type");e=!!d;var h=N(a);h||(a[Xa]=h=new I(a));d=h.add(c,b,g,d,f);d.n||(b=$a(),d.n=b,b.src=a,b.e=d,a.addEventListener?a.addEventListener(c,b,e):a.attachEvent(c in J?J[c]:J[c]="on"+c,b),Ya++)}},$a=function(){var a=ab,c=Na?function(b){return a.call(c.src,c.e,b)}:function(b){b=
a.call(c.src,c.e,b);if(!b)return b};return c},bb=function(a,c,b,d,e){if("array"==m(c))for(var f=0;f<c.length;f++)bb(a,c[f],b,d,e);else b=Za(b),Ra(a)?a.h.remove(String(c),b,d,e):a&&(d=!!d,(a=N(a))&&(c=a.G(c,b,d,e))&&cb(c))},cb=function(a){if("number"!=typeof a&&a&&!a.g){var c=a.src;if(Ra(c))Wa(c.h,a);else{var b=a.type,d=a.n;c.removeEventListener?c.removeEventListener(b,d,a.capture):c.detachEvent&&c.detachEvent(b in J?J[b]:J[b]="on"+b,d);Ya--;(b=N(c))?(Wa(b,a),0==b.p&&(b.src=null,c[Xa]=null)):Ua(a)}}},
eb=function(a,c,b,d){var e=1;if(a=N(a))if(c=a.b[c])for(c=ia(c),a=0;a<c.length;a++){var f=c[a];f&&f.capture==b&&!f.g&&(e&=!1!==db(f,d))}return Boolean(e)},db=function(a,c){var b=a.e,d=a.m||a.src;a.l&&cb(a);return b.call(d,c)},ab=function(a,c){if(a.g)return!0;if(!Na){var b;if(!(b=c))t:{var d;b="window.event";b=b.split(".");d=d||l;for(var e;e=b.shift();)if(null!=d[e])d=d[e];else{b=null;break t}b=d}e=b;d=new H(e,this);b=!0;if(!(0>e.keyCode||void 0!=e.returnValue)){t:{var f=!1;if(0==e.keyCode)try{e.keyCode=
-1;break t}catch(g){f=!0}if(f||void 0==e.returnValue)e.returnValue=!0}e=[];for(f=d.currentTarget;f;f=f.parentNode)e.push(f);for(var f=a.type,h=e.length-1;!d.i&&0<=h;h--)d.currentTarget=e[h],b&=eb(e[h],f,!0,d);for(h=0;!d.i&&h<e.length;h++)d.currentTarget=e[h],b&=eb(e[h],f,!1,d)}return b}return db(a,new H(c,this))},N=function(a){a=a[Xa];return a instanceof I?a:null},fb="__closure_events_fn_"+(1E9*Math.random()>>>0),Za=function(a){return"function"==m(a)?a:a[fb]||(a[fb]=function(c){return a.handleEvent(c)})};
if(La)for(var O=0;O<Ka.length;O++)var gb=q(Ka[O].Z,Ka[O]),ab=gb(ab);var P=function(){this.h=new I(this);this.R=this};u(P,Pa);var hb=P;hb.prototype[Qa]=!0;P.prototype.J=null;P.prototype.addEventListener=function(a,c,b,d){K(this,a,c,b,d)};P.prototype.removeEventListener=function(a,c,b,d){bb(this,a,c,b,d)};
P.prototype.dispatchEvent=function(a){var c,b=this.J;if(b){c=[];for(var d=1;b;b=b.J)c.push(b),++d}b=this.R;d=a.type||a;if(p(a))a=new G(a,b);else if(a instanceof G)a.target=a.target||b;else{var e=a;a=new G(d,b);qa(a,e)}var e=!0,f;if(c)for(var g=c.length-1;!a.i&&0<=g;g--)f=a.currentTarget=c[g],e=Q(f,d,!0,a)&&e;a.i||(f=a.currentTarget=b,e=Q(f,d,!0,a)&&e,a.i||(e=Q(f,d,!1,a)&&e));if(c)for(g=0;!a.i&&g<c.length;g++)f=a.currentTarget=c[g],e=Q(f,d,!1,a)&&e;return b=e};
var Q=function(a,c,b,d){c=a.h.b[String(c)];if(!c)return!0;c=ia(c);for(var e=!0,f=0;f<c.length;++f){var g=c[f];if(g&&!g.g&&g.capture==b){var h=g.e,k=g.m||g.src;g.l&&Wa(a.h,g);e=!1!==h.call(k,d)&&e}}return e&&!1!=d.H};P.prototype.G=function(a,c,b,d){return this.h.G(String(a),c,b,d)};var R=function(a,c){P.call(this);this.q=a||1;this.r=c||l;this.D=q(this.P,this);this.F=s()};u(R,P);R.prototype.enabled=!1;var ib=0.8;R.prototype.f=null;R.prototype.P=function(){if(this.enabled){var a=s()-this.F;0<a&&a<this.q*ib?this.f=this.r.setTimeout(this.D,this.q-a):(this.f&&(this.r.clearTimeout(this.f),this.f=null),this.dispatchEvent("tick"),this.enabled&&(this.f=this.r.setTimeout(this.D,this.q),this.F=s()))}};
R.prototype.start=function(){this.enabled=!0;this.f||(this.f=this.r.setTimeout(this.D,this.q),this.F=s())};var S=null,jb=null;var kb=function(){};var T=function(){this.a=[];this.B=[];this.M=[];this.o=[];this.o[0]=128;for(var a=1;64>a;++a)this.o[a]=0;this.reset()};u(T,kb);T.prototype.reset=function(){this.a[0]=1732584193;this.a[1]=4023233417;this.a[2]=2562383102;this.a[3]=271733878;this.a[4]=3285377520;this.C=this.j=0};
var lb=function(a,c,b){b||(b=0);var d=a.M;if(p(c))for(var e=0;16>e;e++)d[e]=c.charCodeAt(b)<<24|c.charCodeAt(b+1)<<16|c.charCodeAt(b+2)<<8|c.charCodeAt(b+3),b+=4;else for(e=0;16>e;e++)d[e]=c[b]<<24|c[b+1]<<16|c[b+2]<<8|c[b+3],b+=4;for(e=16;80>e;e++){var f=d[e-3]^d[e-8]^d[e-14]^d[e-16];d[e]=(f<<1|f>>>31)&4294967295}c=a.a[0];b=a.a[1];for(var g=a.a[2],h=a.a[3],k=a.a[4],r,e=0;80>e;e++)40>e?20>e?(f=h^b&(g^h),r=1518500249):(f=b^g^h,r=1859775393):60>e?(f=b&g|h&(b|g),r=2400959708):(f=b^g^h,r=3395469782),
f=(c<<5|c>>>27)+f+k+r+d[e]&4294967295,k=h,h=g,g=(b<<30|b>>>2)&4294967295,b=c,c=f;a.a[0]=a.a[0]+c&4294967295;a.a[1]=a.a[1]+b&4294967295;a.a[2]=a.a[2]+g&4294967295;a.a[3]=a.a[3]+h&4294967295;a.a[4]=a.a[4]+k&4294967295};
T.prototype.update=function(a,c){n(c)||(c=a.length);for(var b=c-64,d=0,e=this.B,f=this.j;d<c;){if(0==f)for(;d<=b;)lb(this,a,d),d+=64;if(p(a))for(;d<c;){if(e[f]=a.charCodeAt(d),++f,++d,64==f){lb(this,e);f=0;break}}else for(;d<c;)if(e[f]=a[d],++f,++d,64==f){lb(this,e);f=0;break}}this.j=f;this.C+=c};var mb=function(a){if(/^\s*$/.test(a))return!1;var c=/\\["\\\/bfnrtu]/g,b=/"[^"\\\n\r\u2028\u2029\x00-\x08\x0a-\x1f]*"|true|false|null|-?\d+(?:\.\d*)?(?:[eE][+\-]?\d+)?/g,d=/(?:^|:|,)(?:[\s\u2028\u2029]*\[)+/g,e=/^[\],:{}\s\u2028\u2029]*$/;return e.test(a.replace(c,"@").replace(b,"]").replace(d,""))},nb=function(a){a=String(a);if(mb(a))try{return eval("("+a+")")}catch(c){}throw Error("Invalid JSON string: "+a);},ob=function(a){this.A=a},qb=function(a,c,b){switch(typeof c){case "string":pb(c,b);break;
case "number":b.push(isFinite(c)&&!isNaN(c)?c:"null");break;case "boolean":b.push(c);break;case "undefined":b.push("null");break;case "object":if(null==c){b.push("null");break}if("array"==m(c)){var d=a;a=c;c=a.length;b.push("[");for(var e="",f=0;f<c;f++)b.push(e),e=a[f],qb(d,d.A?d.A.call(a,String(f),e):e,b),e=",";b.push("]");break}b.push("{");f="";for(d in c)Object.prototype.hasOwnProperty.call(c,d)&&(e=c[d],"function"!=typeof e&&(b.push(f),pb(d,b),b.push(":"),qb(a,a.A?a.A.call(c,d,e):e,b),f=","));
b.push("}");break;case "function":break;default:throw Error("Unknown type: "+typeof c);}},rb={'"':'\\"',"\\":"\\\\","/":"\\/","\b":"\\b","\f":"\\f","\n":"\\n","\r":"\\r","\t":"\\t","\x0B":"\\u000b"},sb=/\uffff/.test("\uffff")?/[\\\"\x00-\x1f\x7f-\uffff]/g:/[\\\"\x00-\x1f\x7f-\xff]/g,pb=function(a,c){c.push('"',a.replace(sb,function(a){if(a in rb)return rb[a];var c=a.charCodeAt(0),e="\\u";16>c?e+="000":256>c?e+="00":4096>c&&(e+="0");return rb[a]=e+c.toString(16)}),'"')};var U=function(a){this.L=a},tb=/\s*;\s*/;U.prototype.isEnabled=function(){return navigator.cookieEnabled};U.prototype.set=function(a,c,b,d,e,f){if(/[;=\s]/.test(a))throw Error('Invalid cookie name "'+a+'"');if(/[;\r\n]/.test(c))throw Error('Invalid cookie value "'+c+'"');n(b)||(b=-1);e=e?";domain="+e:"";d=d?";path="+d:"";f=f?";secure":"";0>b?b="":(b=0==b?new Date(1970,1,1):new Date(s()+1E3*b),b=";expires="+b.toUTCString());this.L.cookie=a+"="+c+e+d+b+f};
U.prototype.get=function(a,c){for(var b=a+"=",d=(this.L.cookie||"").split(tb),e=0,f;f=d[e];e++){if(0==f.lastIndexOf(b,0))return f.substr(b.length);if(f==a)return""}return c};U.prototype.remove=function(a,c,b){var d=n(this.get(a));this.set(a,"",0,c,b);return d};var V=new U(document);V.Y=3950;var ub=RegExp("^(?:([^:/?#.]+):)?(?://(?:([^/?#]*)@)?([^/#?]*?)(?::([0-9]+))?(?=[/#?]|$))?([^?#]+)?(?:\\?([^#]*))?(?:#(.*))?$"),vb=B,wb=function(a,c){var b;b=c;if(vb){vb=!1;var d=l.location;if(d){var e=d.href;if(e&&(e=(e=wb(3,e))&&decodeURIComponent(e))&&e!=d.hostname)throw vb=!0,Error();}}b=b.match(ub);return b[a]||null};var W=function(){return Math.round(s()/1E3)},xb=function(a){return window.performance&&window.performance.timing&&window.performance.timing.domLoading&&0<window.performance.timing[a]?(a=s()-window.performance.timing[a],Math.round(a/1E3)):null},yb=function(){return[xb("domLoading"),xb("domComplete"),xb("unloadEventStart")]};var zb=ra("m","c","s","t"),Ab=function(a,c){this.I=a;this.k=W();this.O=c;this.c=[]};Ab.prototype.length=function(){return this.c.length};var Bb=function(a,c){var b=Math.floor((c-a.k)/a.I);return Math.max(0,b)};Ab.prototype.add=function(a,c){var b=W(),d=b,e=Bb(this,d),e=e+1-this.O;0==this.c.length?this.k=d:e>=this.c.length?(this.k=d,this.c=[]):0<e&&(this.c=ja(this.c,e),this.k+=e*this.I);var e=Bb(this,b),b=a,f=c,d=this.c[e];d||(d={},this.c[e]=d);b&&(e=f?f:1,d[b]=oa(d,b)+e)};
var Cb=function(a,c){la(a,function(a,d){c[d]=oa(c,d)+a})},Fb=function(a){a.add();for(var c=[],b=0;b<a.c.length;b++){var d;6>=a.c.length?d=b:(d=a.c.length-6,d=b<=d?0:b-d);c[d]||(c[d]={});Cb(a.c[b],c[d])}return c},Gb=function(a,c){var b;b=zb;b=a in b;var d="m"==a,e=d&&100<=c;return b&&(e||!d)&&0<c},Hb=function(a){var c="";la(a,function(a,d){c+=Gb(d,a)?d+a:""});return c},Ib=function(a){return!!a&&ma(a,function(a,b){return Gb(b,a)})};var Jb=window;var X=!1,Kb=function(a){if(a=a.match(/[\d]+/g))a.length=3};
if(navigator.plugins&&navigator.plugins.length){var Lb=navigator.plugins["Shockwave Flash"];Lb&&(X=!0,Lb.description&&Kb(Lb.description));navigator.plugins["Shockwave Flash 2.0"]&&(X=!0)}else if(navigator.mimeTypes&&navigator.mimeTypes.length){var Mb=navigator.mimeTypes["application/x-shockwave-flash"];(X=Mb&&Mb.enabledPlugin)&&Kb(Mb.enabledPlugin.description)}else try{var Nb=new ActiveXObject("ShockwaveFlash.ShockwaveFlash.7"),X=!0;Kb(Nb.GetVariable("$version"))}catch(Ob){try{Nb=new ActiveXObject("ShockwaveFlash.ShockwaveFlash.6"),
X=!0}catch(Pb){try{Nb=new ActiveXObject("ShockwaveFlash.ShockwaveFlash"),X=!0,Kb(Nb.GetVariable("$version"))}catch(Qb){}}};var Rb={},Sb=function(a,c){var b=Rb[a];"function"==m(b)&&b(c)};t("gteh",Sb);var Tb;var Ub=Jb.top;try{Tb=!!Ub.location.href||""===Ub.location.href}catch(Vb){Tb=!1}var Wb=!Tb;window.console&&"function"===typeof window.console.log&&q(window.console.log,window.console);var Y=function(a,c,b){this.d=b;this.v=null;this.s=0;this.N=500;this.w=null;Xb(this,a,c);b=document.documentElement;var d;try{if(Wb)d="2";else{var e;c=[];var f=F(b.ownerDocument);for(b=f;b!=f.top;b=b.parent)if(b.frameElement)c.push(b.frameElement);else break;d=(e=c)&&0!=e.length?"1":"0"}}catch(g){d="2"}try{if("1"==d){for(var h=a.parent;h!=a.top;h=h.parent)Xb(this,h,h.document);Xb(this,a.top,a.top.document)}}catch(k){}},Xb=function(a,c,b){K(b,"mousedown",q(a.S,a));K(c,"scroll",q(a.U,a));K(b,"touchstart",
q(a.V,a));K(b,"mousemove",q(a.T,a))};Y.prototype.V=function(){this.d&&this.d("t")};Y.prototype.S=function(){this.d&&this.d("c")};Y.prototype.U=function(){this.d&&this.d("s")};
Y.prototype.T=function(a){a=new ka(a.clientX,a.clientY);if(this.v){var c,b=this.v;c=b.x-a.x;b=b.y-a.y;c=Math.sqrt(c*c+b*b);this.s+=Math.round(c)}this.v=a;this.w&&l.clearTimeout(this.w);a=this.Q;c=this.N;if("function"==m(a))this&&(a=q(a,this));else if(a&&"function"==typeof a.handleEvent)a=q(a.handleEvent,a);else throw Error("Invalid listener argument");this.w=a=2147483647<c?-1:l.setTimeout(a,c||0)};Y.prototype.Q=function(){this.d&&this.d("m",this.s);this.v=this.w=null;this.s=0};var Yb=0,Z=null,Zb=function(){var a={},c=W()-Yb;a.tt=c;a.bs=10;var b=Z;if(b){var c=qa,d=a,e;e={};for(var b=Fb(b).reverse(),f=0;f<b.length;f++){var g=Hb(b[f]);g&&na(e,"ed"+f,g)}t:{for(f=0;f<b.length;f++)if(Ib(b[f])){b=f;break t}b=null}null!=b&&na(e,"es",b);c(d,e)}return a},$b=function(){var a=Zb(),c="",b;for(b in a)c+="_"+b+a[b];return c},ac=function(){Yb=W();Z=new Ab(10,12);new Y(F(),document,q(Z.add,Z))},bc=function(a,c){W=a;yb=c};var $=null,cc=null,dc=function(a,c,b,d,e){this.u=b;this.t=a;this.ed=c;this.nv=d;this.pl=e},ec=function(a){a=a.split("#")[0];var c=new T;c.update(a);a=c;var c=[],b=8*a.C;56>a.j?a.update(a.o,56-a.j):a.update(a.o,64-(a.j-56));for(var d=63;56<=d;d--)a.B[d]=b&255,b/=256;lb(a,a.B);for(d=b=0;5>d;d++)for(var e=24;0<=e;e-=8)c[b]=a.a[d]>>e&255,++b;a=c;var f,c=m(a),c="array"==c||"object"==c&&"number"==typeof a.length;if(!c)throw Error("encodeByteArray takes an array as a parameter");if(!S)for(S={},jb={},c=0;65>
c;c++)S[c]="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=".charAt(c),jb[c]="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789-_.".charAt(c);f=f?jb:S;c=[];for(d=0;d<a.length;d+=3){var g=a[d],h=(b=d+1<a.length)?a[d+1]:0,k=(e=d+2<a.length)?a[d+2]:0,r=g>>2,g=(g&3)<<4|h>>4,h=(h&15)<<2|k>>6,k=k&63;e||(k=64,b||(h=64));c.push(f[r],f[g],f[h],f[k])}a=c.join("");return a.slice(0,4)},gc=function(){var a=fc(),c=0,b;var d=fc();if(d&&d.t){b=yb()[2];var e=W(),d=d.t;b=b&&d>=e-b?!0:
8>=cc-d}else b=!1;t:{e=ec(document.URL);if($)for(d=0;d<$.length;d++)if($[d].u==e){e=!0;break t}e=!1}d=fc();d=!!d&&0<d.nv;(b=b&&!e&&!d)&&a&&a.pl&&(c=a.pl);return W()-Yb+c},hc=function(){var a=null;if(V.isEnabled()&&n(V.get("GED_PLAYLIST_ACTIVITY"))){var c=V.get("GED_PLAYLIST_ACTIVITY");if(c)try{a=nb(c)}catch(b){}}return a},ic=function(){if(!cc){cc=W();var a=hc();$=a}},fc=function(){if($)for(var a=ec(document.referrer),c=0;c<$.length;c++)if($[c].u==a)return $[c];return null},jc=function(a){if(V.isEnabled()){a=
$b()+a;var c=Z,b;if(b=!!c)t:{c=Fb(c).reverse();for(b=0;b<c.length&&2>b;b++)if(0<oa(c[b],"c")){b=!0;break t}b=!1}c=b;b=W();var d=gc();a=new dc(b,a,ec(document.URL),c?1:0,d);b=hc();c=[];if(b){c=ia(b);b=document.URL;b=ec(b);for(var d=W(),e=0;e<c.length;e++)if(c[e].u==b||1200<=d-c[e].t)c.splice(e,1),e--}a&&c.unshift(a);var c=c.slice(0,3),f;f=new ob(f);a=[];qb(f,c,a);f=a.join("");a=document.URL;a=wb(1,a);a="http"==a;V.set("GED_PLAYLIST_ACTIVITY",f,-1,"/",null,!a)}};var kc=function(a){var c="//googleads.g.doubleclick.net/pagead/gen_204?id=ged&it="+a+"&ged="+$b();"1"==a&&(a=(a=fc())?a.ed:null)&&(c+="&ck="+a);a=F();a.google_image_requests||(a.google_image_requests=[]);var b=a.document.createElement("img");b.src=c;a.google_image_requests.push(b)};(function(){function a(){kc("2");jc("")}function c(){var a=Zb(),b=gc();a.pd=b;return a}ac();F().onunload=a;try{ic(),kc("1")}catch(b){}var d=new R(1E3);d.start();K(d,"tick",function(){jc("_it3")});t("ima.video.client.getEData",c);t("ima.video.client.setupEDHooks",ac);t("ima.video.client.resetEDForTesting",bc)})();})()
