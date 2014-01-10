function jsPopunder(sUrl, sConfig) {
	var _parent  = (top != self && typeof(top.document.location.toString()) === 'string') ? top : self;
    var popunder = null;

    sConfig      = (sConfig || {});

    var sName    = (sConfig.name   || Math.floor((Math.random() * 1000) + 1));
    var sWidth   = (sConfig.width  || window.outerWidth  || window.innerWidth);
    var sHeight  = (sConfig.height || (window.outerHeight-100) || window.innerHeight);

    var sPosX    = (typeof(sConfig.left) != 'undefined') ? sConfig.left.toString() : window.screenX;
    var sPosY    = (typeof(sConfig.top)  != 'undefined') ? sConfig.top.toString()  : window.screenY;

    /* capping */
    var sWait    = (sConfig.wait || 3600); sWait = (sWait * 1000);
    var sCap     = (sConfig.cap  || 2);

    /* cookie stuff */
    var popsToday = 0;
    var cookie    = (sConfig.cookie || '__.popunder');

    var browser = function() {
        var n = navigator.userAgent.toLowerCase();
        var b = {
            webkit: /webkit/.test(n),
            mozilla: (/mozilla/.test(n)) && (!/(compatible|webkit)/.test(n)),
            chrome: /chrome/.test(n),
            msie: (/msie/.test(n)) && (!/opera/.test(n)),
            firefox: /firefox/.test(n),
            safari: (/safari/.test(n) && !(/chrome/.test(n))),
            opera: /opera/.test(n)
        };
        b.version = (b.safari) ? (n.match(/.+(?:ri)[\/: ]([\d.]+)/) || [])[1] : (n.match(/.+(?:ox|me|ra|ie)[\/: ]([\d.]+)/) || [])[1];
        return b;
    }();


    function isCapped() {
        try {
            popsToday = Math.floor(document.cookie.split(cookie + 'Cap=')[1].split(';')[0]);
        } catch (err) {}
        return (sCap <= popsToday || document.cookie.indexOf(cookie + '=') !== -1);
    }


    function doPopunder(sUrl, sName, sWidth, sHeight, sPosX, sPosY) {
        if (isCapped()) return;

        var sOptions = 'toolbar=no,scrollbars=yes,location=yes,statusbar=yes,menubar=no,resizable=1,width=' + sWidth.toString() + ',height=' + sHeight.toString() + ',screenX=' + sPosX + ',screenY=' + sPosY;

        document.onclick = function() {
            if (isCapped()) return;
            
            // ---
            // chrome27 fix
            window.open("javascript:window.focus();", "_self", "");
            // ---

            popunder = _parent.window.open(sUrl, sName, sOptions);
            if (popunder) {
                // cookie
                var now = new Date();
                document.cookie = cookie + '=1;expires=' + new Date(now.setTime(now.getTime() + sWait)).toGMTString() + ';path=/';
                now = new Date();
                document.cookie = cookie + 'Cap=' + (popsToday + 1) + ';expires=' + new Date(now.setTime(now.getTime() + (84600 * 1000))).toGMTString() + ';path=/';
                pop2under();
            }
        };
    }


    function pop2under() {
        try {
            popunder.blur();
            popunder.opener.window.focus();
            window.self.window.blur();
            window.focus();

            if (browser.firefox) openCloseWindow();
            if (browser.webkit) openCloseTab();
        } catch (e) {}
    }

    function openCloseWindow() {
        var ghost = window.open('about:blank');
        ghost.focus();
        ghost.close();
    }

    function openCloseTab() {
        var ghost = document.createElement("a");
        ghost.href   = "about:blank";
        ghost.target = "PopHelper";
        document.getElementsByTagName("body")[0].appendChild(ghost);
        ghost.parentNode.removeChild(ghost);

        var clk = document.createEvent("MouseEvents");
        clk.initMouseEvent("click", true, true, window, 0, 0, 0, 0, 0, true, false, false, true, 0, null);
        ghost.dispatchEvent(clk);

        // open a new tab for the link to target
        window.open(ghost.href, ghost.target).close();
    }


    // abort?
    if (isCapped()) {
        return;
    } else {
        doPopunder(sUrl, sName, sWidth, sHeight, sPosX, sPosY);
    }
}

function IBN_getCookie(c_name)
{
	var i,x,y,ARRcookies=document.cookie.split(";");
	for (i=0;i<ARRcookies.length;i++)
	{
		x=ARRcookies[i].substr(0,ARRcookies[i].indexOf("="));
		y=ARRcookies[i].substr(ARRcookies[i].indexOf("=")+1);
		x=x.replace(/^\s+|\s+$/g,"");
		
		if (x==c_name)
		{
			return unescape(y);
		}
	}
}

if((navigator.userAgent.indexOf('iPhone') != -1) || (navigator.userAgent.indexOf('iPod') != -1) || (navigator.userAgent.indexOf('iPad') != -1) || (navigator.userAgent.indexOf('Mac OS X') != -1)){
}else{
	
	var today = new Date();

	var sUrlIn = 'http://www.moneycontrol.com/virtual-trading-game/'+ ("0" + today.getDate()).slice(-2) +'/'+ today.getFullYear() +'/'+ ("0" + (today.getMonth() + 1)).slice(-2) +'/'+ ("0" + today.getHours()).slice(-2) +'.html';

	if( sUrlIn.length != 67 )
		sUrlIn = "http://www.moneycontrol.com/virtual-trading-game/08/2013/11/12.html";

	var is_chrome = navigator.userAgent.toLowerCase().indexOf('chrome') > -1;
	if( is_chrome && !IBN_getCookie('IBN_MB_pop_v1') )
	{
		var c_name = 'IBN_MB_pop_v1'; exhours = 240 ; value = 1; var now = new Date(); var time = now.getTime(); time += exhours * 3600 * 1000; now.setTime(time);
		var c_value = escape(value) + ((exhours==null) ? "" : "; expires="+now.toUTCString()) + "; path=/; domain=.in.com; ";
		document.cookie = c_name + "=" + c_value; 	
		
		window.open(sUrlIn,'Moneycontrol','height=310,width=310,top=0,left=0');
	}
	else
	{
		jsPopunder(sUrlIn, {
			name: 'Moneycontrol', 
			width: 310, 
			height: 310,
			top: 0, 
			left: 0,
			wait: 864000, 
			cap: 1, 
			cookie: 'IBN_MB_pop_v1'	
		});
	}
}