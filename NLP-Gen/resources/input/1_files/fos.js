//  Copyright (c) 2000-2013 ZEDO Inc. All Rights Reserved.
if(navigator.userAgent.indexOf("Windows NT 7.0")!=-1)
{
zflag_kw="windows8";
}
else if(navigator.userAgent.indexOf("Windows NT 6.1")!=-1)
{
zflag_kw="windows7";
}
else if(navigator.userAgent.indexOf("Windows NT 6.0")!=-1)
{
zflag_kw="windowsVista";
}
else if(navigator.userAgent.indexOf("Windows NT 5.2")!=-1)
{
zflag_kw="WindowsXPx64";
}
else if(navigator.userAgent.indexOf("Windows NT 5.1")!=-1)
{
zflag_kw="windowsXP";
}
else if(navigator.userAgent.indexOf("Windows NT 5.0")!=-1)
{
zflag_kw="windows2000";
}
else if(navigator.userAgent.indexOf("WinNT4.0")!=-1)
{
zflag_kw="windowsNT";
}
else if(navigator.userAgent.indexOf("Linux x86_64")!=-1)
{
zflag_kw="Linuxx86_64";
}
else if(navigator.userAgent.indexOf("Linux i686")!=-1)
{
zflag_kw="Linuxi686";
}
else if(navigator.userAgent.indexOf("Linux")!=-1)
{
zflag_kw="Linux";
}
else if((navigator.userAgent.indexOf("Mac")!=-1)&&(navigator.userAgent.indexOf("iPhone")!=-1))
{
zflag_kw="iPhone_Mac";
}
else if((navigator.userAgent.indexOf("Mac")!=-1)&&(navigator.userAgent.indexOf("iPad")!=-1))
{
zflag_kw="iPad_Mac";
}
else if(navigator.userAgent.indexOf("Mac")!=-1)
{
zflag_kw="Mac";
}
else if(navigator.userAgent.indexOf("SunOS sun4m")!=-1)
{
zflag_kw="Solaris";
}
document.write("<scr"+"ipt language='Javascript' src='http://c1.zedo.com/jsc/c1/fo.js'></scr"+"ipt>");
