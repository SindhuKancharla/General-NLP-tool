var page_url = document.location;
str = new String(page_url);
var temp_RSHOP = "";
var temp_no_of_items = "";
temp_RSHOP = getCookie('RSHOP');
temp_no_of_items = getCookie('no_of_items');
var OAS_cat="&OAS_cat=NS";
OAS_url='http://ads.rediff.com/RealMedia/ads/';
var OAS_query="";
OAS_query=getCookie('Rp');
OAS_loc=getCookie('RLOC');
var glb_uagent = navigator.userAgent.toLowerCase();
var p_agent = "";
if(glb_uagent.search("ipad") > -1)
{
	p_agent = "ipad";
}
else if(glb_uagent.search("iphone") > -1)
{
	p_agent = "iphone";
}
else if(glb_uagent.search("blackberry") > -1)
{
	p_agent = "blackberry";
}
else if(glb_uagent.search("windows ce") > -1)
{
	p_agent = "winmob";
}
else if(glb_uagent.search("android") > -1)
{
	p_agent = "android";
}
else if(glb_uagent.search("webkit") > -1)
{
	p_agent = "webkit";
}
if(document.referrer)
{
	if((OAS_query)||(OAS_query != ''))
	{
		OAS_query+='&REFERER='+document.referrer;

	}
	else
	{
		OAS_query='REFERER='+document.referrer;

	}
}
if((OAS_loc)||(OAS_loc != ''))
{
	if((OAS_query)||(OAS_query != ''))
	{
		OAS_query+='&RLOC='+OAS_loc;
	}
	else
	{
		OAS_query='RLOC='+OAS_loc;
	}

	if (OAS_query)
	{
		OAS_query += '&PURL=' + encodeURIComponent(str)+'&p_agent='+p_agent;
	}
	else
	{
		OAS_query = 'PURL=' + encodeURIComponent(str)+'&p_agent='+p_agent;
	}
	
	if((temp_RSHOP) || (temp_no_of_items))
	{
		if((temp_RSHOP != "") || (temp_no_of_items != ""))
		{
			if(OAS_query)
			{
				OAS_query += '&shop=1';
			}
			else
			{
				OAS_query += 'shop=1';
			}
		}
	}
	

}
OAS_version=10;
OAS_rn='001234567890';
OAS_rns='1234567890';
OAS_rn=new String(Math.random());
OAS_rns=OAS_rn.substring(2,11);
OAS_version=11;
if(navigator.userAgent.indexOf('Mozilla/3')!=-1)
OAS_version=10;
if(OAS_version>=11)
var xyz = '<SC'+'RIPT LANGUAGE=JavaScript1.1 SRC="'+OAS_url+'adstream_mjx.ads/'+OAS_sitepage+'/1'+OAS_rns+'@'+OAS_listpos+'?'+OAS_query+OAS_cat+'"><\/SCRIPT>';
document.write('<SC'+'RIPT LANGUAGE=JavaScript1.1 SRC="'+OAS_url+'adstream_mjx.ads/'+OAS_sitepage+'/1'+OAS_rns+'@'+OAS_listpos+'?'+OAS_query+OAS_cat+'"><\/SCRIPT>');

function OAS_NORMAL(pos)
{
	document.write('<A HREF="'+OAS_url+'click_nx.ads/'+OAS_sitepage+'/1'+OAS_rns+'@'+OAS_listpos+'!'+pos+'?'+OAS_query+OAS_cat+'" TARGET=_top>');
	document.write('<IMG SRC="'+OAS_url+'adstream_nx.ads/'+OAS_sitepage+'/1'+OAS_rns+'@'+OAS_listpos+'!'+pos+'?'+OAS_query+OAS_cat+'" BORDER=0 ALT="Click!"></A>');
}

function getCookie(name)
{
	var dc=document.cookie;
	var prefix=name+"=";
	var begin=dc.indexOf("; "+prefix);
	if(begin==-1){
		begin=dc.indexOf(prefix);if(begin!=0)return null;
	}
else
begin+=2;var end=document.cookie.indexOf(";",begin);if(end==-1)
end=dc.length;return unescape(dc.substring(begin+prefix.length,end));}


function OAS_AD(pos)
{
	if(OAS_version>=11&&typeof(OAS_RICH)!='undefined')
		OAS_RICH(pos);
	else
		OAS_NORMAL(pos);
}

function copyInnerHtml(from_ad, to_ad) {
	if(navigator.userAgent.indexOf("MSIE") > -1 && from_ad.innerHTML.indexOf("third_party") > -1) {
		for(i=0; i < from_ad.childNodes.length; i++) {
			var node = from_ad.childNodes[i];
			if (node == null || node.nodeName == "undefined" ) {
				continue;
			}

			if(node.nodeName.toLowerCase() != "script") {
				to_ad.appendChild(node);
			}
		}
	}
	else {
			to_ad.innerHTML = from_ad.innerHTML;
			from_ad.innerHTML = "";
	}
}