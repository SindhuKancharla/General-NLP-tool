var head = document.getElementsByTagName('head')[0];
var script = document.createElement('script');
script.type = 'text/javascript';
script.src = 'http://cdna.tremormedia.com/acudeo/banners.js?version=08-12-2011';

head.appendChild(script);

///////////////////// flash player use these code start //////////////////////////////

if(typeof device_detection != 'function') {
    function device_detection() {
        var user_mobile=(navigator.userAgent).toLowerCase();
        var mobile_array=new Array('ipad', 'iphone', 'android');
        for (i in mobile_array){
            if (user_mobile.indexOf(mobile_array[i]) >= 0){
                return mobile_array[i];
            }
        }
        return 0;
    }
}

if(typeof getFlashVersion != 'function') {
    function getFlashVersion(){
        // ie
        try {
            try {
                // avoid fp6 minor version lookup issues
                // see: http://blog.deconcept.com/2006/01/11/getvariable-setvariable-crash-internet-explorer-flash-6/
                var axo = new ActiveXObject('ShockwaveFlash.ShockwaveFlash.6');
                try {axo.AllowScriptAccess = 'always';}
                catch(e) {return '6,0,0';}
            } catch(e) {}
            return new ActiveXObject('ShockwaveFlash.ShockwaveFlash').GetVariable('$version').replace(/\D+/g, ',').match(/^,?(.+),?$/)[1];
            // other browsers
        } catch(e) {
            try {
                if(navigator.mimeTypes["application/x-shockwave-flash"].enabledPlugin){
                    return (navigator.plugins["Shockwave Flash 2.0"] || navigator.plugins["Shockwave Flash"]).description.replace(/\D+/g, ",").match(/^,?(.+),?$/)[1];
                }
            } catch(e) {}
        }
        return '0,0,0';
    }
}

var html5_player;
var html5_poster;

function getlivetv(str) {
    html5_player = str.stream;
    html5_poster = str.poster;
    render_player(html5_player, html5_poster);
}

function render_player(player_path, poster) {

    pwidth = pwidth ? pwidth : '622';
    pheight = pheight ? pheight : '386';
    autoplay = parseInt(autoplay) != 0 ? 'autoplay="autoplay"' : '';
    
    var html_str = '';
        html_str += '<div style="width:'+pwidth+'px;height:'+pheight+'px;">';
        html_str += '<video id="video_player" width="'+pwidth+'" height="'+pheight+'" controls="controls" '+autoplay+' poster="'+poster+'">';
        html_str += '<source src="'+player_path+'"/>';
        html_str += '<source type="video/mp4" src="'+player_path+'" />';
        html_str += '</video>';
        html_str += '</div>';
        document.getElementById('videoContainer').innerHTML = html_str;
        
        var video = document.getElementById('video_player');
        video.addEventListener('click',function(){
          video.play();
        },false);
        
        return;
}

var detectVideoSupport = function () {
    var detect = document.createElement('video') || false;
    this.html5 = detect && typeof detect.canPlayType !== "undefined";
    this.mp4 = this.html5 && (detect.canPlayType("video/mp4") === "maybe" || detect.canPlayType("video/mp4") === "probably");
    return this;
};

function livetv_data(device, channel) {
    var jquery_version = jQuery.fn.jquery;
    var url = 'http://www.ndtv.com/video/widget-livetv?device='+device+'&channel='+channel+'&callback=getlivetv&site=classic';
    if (jquery_version.indexOf("1.3") != -1) {
        jQuery.getJSON(url);
    } else {
        $.ajax({
            url: url,
            cache:true,
            dataType: "jsonp",
            jsonp : "callback",
            jsonpCallback: "getlivetv"
        });
    }
}


function writeIntoCompanionDivVPAID(content, w, h) {
    if (document.getElementById("videoAdMRec")) {
        var oDiv = document.getElementById("videoAdMRec");
        oDiv.style.width=w+"px";
        oDiv.style.height=h+"px";
        oDiv.innerHTML = content;
    }
}

function scalePlayer(w,h) {
    if (document.getElementById("videoContainer")) {
        var obj = getVPMovieName("videoContainer"); //Div Id
        obj.style.width=w+"px";
        obj.style.height=h+"px";
        obj.width=w;
        obj.height=h;
        if (document.getElementById("insiderightcont")) {
            /****/
            try { if (__a_rhsMarginTop == undefined) { __a_rhsMarginTop = 0; } }
            catch(e){ __a_rhsMarginTop = 0; }
            /****/
            var right_margin_top = window['__right_margin_top'];
            if (right_margin_top == undefined || right_margin_top == '') {
                right_margin_top = 440;
            }
            document.getElementById("insiderightcont").children[0].style.marginBottom = (parseInt(right_margin_top) + __a_rhsMarginTop) + 'px';
            if (typeof scalePlayerSiteWise == 'function') { 
                scalePlayerSiteWise();
            }
        }
    }
}

function getVPMovieName(movieName) {
    if (navigator.appName.indexOf("Microsoft") != -1) {
        return window[movieName];
    }else {
        return document.getElementById(movieName);
    }
}
function getInternetExplorerVersion() {
    // Returns the version of Windows Internet Explorer or a -1
    // (indicating the use of another browser).
    var rv = -1; // Return value assumes failure.
    if (navigator.appName == 'Microsoft Internet Explorer') {
        var ua = navigator.userAgent;
        var re  = new RegExp("MSIE ([0-9]{1,}[\.0-9]{0,})");
        if (re.exec(ua) != null)
         rv = parseFloat( RegExp.$1 );
    }
    return rv;
}

function getFlashMovie(movieName) {
    if (navigator.appName.indexOf("Microsoft") != -1) {
        var ver = getInternetExplorerVersion();
        if (ver < 9) {
            return window[movieName];
        } else {
            return document[movieName];
        }
    } else {
        if (document[movieName].length != undefined) {
            return document[movieName][1];
        }
        return document[movieName];
    }
}

var jsReady = false;
function videoPlayerReady() {
   jsReady = true;
}

function callToActionscript(flash, str) {
    if(jsReady){
        getFlashMovie(flash).sendToActionscript(str);
    }
}

function displayCompanionBanners(banners, tracking) {
    tmDisplayBanner(banners, "videoAdMRec", 300, 250, null, tracking);
}

//////////////////////////// flash player use these code end ///////////////////////////
var pheight;
var pwidth;
var autoplay;
var cntry;
function cntry_player(params) {
    if (params['movie'] == '' || params['movie'] == undefined) {
        params['movie'] = 'http://www.ndtv.com/common/videos/flash/player/new-wrapper/NDTVVideoPlayer.swf';
    }
    if (params['skin'] == '' || params['skin'] == undefined) {
        params['skin'] = 'http://www.ndtv.com/common/videos/flash/player/ndtvapi/vod-622x386/skin_vod.swf';
    }
    var player_version = window['__player_version'];
    var version =  (player_version == undefined || player_version == '') ? '12233444' : player_version;
    version = '?' + version;
    cntry = params['cntry'];
    var vid = params['vid'];
    var apikey = params['apikey'];
    var switch_url = params['switch_url'];
    var movie = params['movie'] + version;
    var skin = params['skin'] + version;
    var duration = params['duration'];
    var player_type = params['player_type'];
    var filename = params['filename'];
    var title = params['title'];
    var desc = params['desc'];
    var fullimage = params['fullimage'];
    var channel = params['channel'];
    var tremor_id = params['tremor_id'];
    var agency_id = 8; //params['agency_id'];
    var show_goodtimes = params['show_goodtimes'];
    var wmode = params['wmode'];
    autoplay = params['autoplay'];
    var category = params['category'];
    var showNextPrevButton = params['showNextPrevButton'];
    var video_page_url = window['__video_page_url'];
    if (video_page_url == undefined || video_page_url == '') {
        var pageurl = document.location.href;
    } else {
        var pageurl = video_page_url;
    }
    
    pageurl = pageurl.split('?')[0];
    var show_id = params['show_id'];
    
    
    if (autoplay == undefined || autoplay == '') {
      autoplay = '1';
    }

    if (showNextPrevButton == undefined) {
      showNextPrevButton = '';
    }

    if (wmode == undefined || wmode == '') {
      wmode = 'transparent';
    }

    var adformat = window['__adformat'];
    if (adformat == undefined || adformat == '') {
        //adformat = 'preroll|midroll|postroll|branded|overlay';
        adformat = 'preroll|postroll|branded|overlay';
    }
    
    var rtmp = window['__rtmp'];
    if (rtmp == undefined || rtmp == '') {
      rtmp = false;
    }

    pheight = window['__pheight'];
    if (pheight == undefined || pheight == '') {
      pheight = 386;
    }
    
    var related = window['__related'];
    if (related == undefined) {
      related = '';
    }

    pwidth = window['__pwidth'];
    if (pwidth == undefined || pwidth == '') {
      pwidth = 622;
    }
    
    var ndtvplay_foldername = params['foldername'];
    var foldername = window['__foldername'];
    if (ndtvplay_foldername != '' && ndtvplay_foldername != undefined && ndtvplay_foldername != null) {
        foldername = ndtvplay_foldername;
    }
    if (foldername == undefined) {
        foldername = '';
    }

    var isBannerType = window['__isBannerType'];
    if (isBannerType == undefined) {
        isBannerType = '0';
    }

    var mute = window['__mute'];
    if (mute == undefined) {
        mute = '0';
    }

    var show_country = window['__show_country'];
    if (show_country == undefined) {
        show_country = '';
    }
    var full_filepath = '';
    if (rtmp == 'true') {
        full_filepath = 'http://bitcast-b.bitgravity.com/ndtvod/23372/ndtv/'+filename;
    } else {
        full_filepath = 'http://bitcast-b.bitgravity.com/ndtvod/23372/ndtv/'+filename;
    }
    if (cntry == 'PK' && show_id == 519) {
        jQuery('.player').html('<div style="float:left;padding-left:100px;padding-top:100px;font-weight:bold;">This video is not available in Pakistan. <br><br>If you are not in Pakistan and have received this message, please click <a href="http://www.ndtv.com/convergence/ndtv/new/feedback.aspx">here.</a></div>');
        return;
    }

    if ( (channel == 'live_special' || channel == 'live-special' ) && adformat != 'no_ads') {
        adformat = 'preroll|midroll|overlay';
    }

    if (channel == 'ndtvgoodtimes' && (show_goodtimes == 0)) {
        jQuery('.player').html('<div style="float:left;padding-left:100px;padding-top:100px;font-weight:bold;">NDTV Good Times live video is only available in India.<br><br>If you are in India and have received this message, please click <a href="http://www.ndtv.com/convergence/ndtv/new/feedback.aspx">here</a></div>');
        return;
    }

    if (show_country == 'showindiaonly' && cntry != 'IN') {
        jQuery('.player').html('<div style="float:left;padding-left:100px;padding-top:100px;font-weight:bold;">This video is only available in India.<br><br>If you are in India and have received this message, please click <a href="http://www.ndtv.com/convergence/ndtv/new/feedback.aspx">here</a></div>');
        return;
    }

    var player;
    var liveVideoName = '';
    if (duration != undefined) {
      if (duration < 60 && adformat != 'no_ads') {
          adformat = 'postroll|branded|overlay';
      }
    }
    if (vid == 'LIVE_BG24x7' || vid == 'LIVE_BGINDIA' || vid == 'LIVE_BGGT' || vid == 'LIVE_BGPROFIT' || vid == 'LIVE_BGHINDU' || vid == 'LIVE_SPECIAL' || vid == 'LIVE-SPECIAL') {
        if ((device_type = device_detection()) != 0) {
            livetv_data(device_type, vid);
            return;
        }
        var new_fullimage;
        if (vid == 'LIVE_BG24x7') {
            liveVideoName = 'NDTV 24x7';
            new_fullimage = 'http://drop.ndtv.com/ndtv/apps/config/images/livetv/web/24x7.jpg';
        }else if (vid == 'LIVE_BGINDIA'){
            liveVideoName = 'NDTV India';
            new_fullimage = 'http://www.ndtv.com/common/videos/images/NDTVIndia.jpg';
        }else if (vid == 'LIVE_BGGT'){
            liveVideoName = 'NDTV Good Times';
            new_fullimage = 'http://drop.ndtv.com/ndtv/apps/config/images/livetv/webkit/ipad/goodtimes.jpg'; //TO DO
        }else if (vid == 'LIVE_BGPROFIT'){
            liveVideoName = 'NDTV Profit';
            new_fullimage = 'http://www.ndtv.com/common/videos/images/NDTVProfit.jpg';
        }else if (vid == 'LIVE_BGHINDU' || vid == 'LIVE_SPECIAL'){
            liveVideoName = 'NDTV Special';
            new_fullimage = 'http://drop.ndtv.com/ndtv/apps/config/images/livetv/web/special-ioy.jpg';
        }

    }
    var param;
    if (vid == '194149') {
      adformat = '';
    }

    if (fullimage == undefined || fullimage == '') {
      fullimage = new_fullimage;
    }
    
    if (player_type == 'vod') {
        if ((device_type = device_detection()) != 0) {
            render_player(full_filepath, fullimage);
            return;
        } else if (getFlashVersion().split(',').shift() == 0) {
            var video = detectVideoSupport();
            if (video.mp4) {
                render_player(full_filepath, fullimage);
            } else {
                var html_str = '<div id="flashVersionUpdate" class="clearAll" style="margin-bottom:15px;">';
                html_str += '<div>';
                html_str += '<h5><img src="http://www.ndtv.com/static/images/alert.gif" width="16" height="16" alt="Alert" />Please download the latest flash player to watch videos.</h5>';
                html_str += '<p class="vid_caption"><a href="http://www.adobe.com/go/getflashplayer"><img src="http://www.ndtv.com/static/images/get_flash_player.gif" alt="Get Adobe Flash Player" border="0" /></a></p>';
                html_str += '</div>';
                html_str += '</div>';
                document.getElementById('videoContainer').innerHTML = html_str;
            }
            return;
        }
        var currTime = '';
        var currTimeHashValue = parseInt(getHashValue('t'));
        if (currTimeHashValue >= 0 && currTimeHashValue <= duration) {
            currTime = currTimeHashValue;
        }
        
        param = '&countryCode='+cntry+'&category='+category+'&showNextPrevButton='+showNextPrevButton+'&pageurl='+pageurl+'&rtmp='+rtmp+'&foldername='+foldername+'&gTRVPlay=1&currTime=' + currTime;
        if (related != '') {
            param = param + '&related='+encodeURIComponent(JSON.stringify(related));
        }
        if (adformat == 'no_ads') {
            adformat = '';
        }
        player = '' +
        '<object classid="clsid:d27cdb6e-ae6d-11cf-96b8-444553540000" codebase="http://download.macromedia.com/pub/shockwave/cabs/flash/swflash.cab#version=9,0,0,0" width="100%" height="100%" id="player" align="middle">' +
        '<param name="allowScriptAccess" value="always" />'+
        '<param name="allowFullScreen" value="true" />'+
        '<param name="movie" value="'+movie+'" />'+
        '<param name="quality" value="high" />'+
        '<param name="bgcolor" value="#000000" />'+
        '<param name="wmode" value="'+wmode+'">'+
        '<param name="flashvars" value="tremorProgID='+tremor_id+'&videoid='+vid+'&agencyID='+agency_id+'&channel=ndtv&pWidth='+pwidth+'&pHeight='+pheight+'&autostart='+autoplay+'&vdopiaSkinWidth=961&vdopiaSkinHeight=386&useGUT=false&vdopiaApiKey='+apikey+'&title='+title+'&desc='+desc+'&filename='+filename+'&videoimage='+fullimage+'&lengthinsec='+duration+'&vdopiaAdFormat=' + adformat + param + '">' +
        '<embed src="'+movie+'" width="100%" height="100%" flashvars="tremorProgID='+tremor_id+'&videoid='+vid+'&agencyID='+agency_id+'&channel=ndtv&pWidth='+pwidth+'&pHeight='+pheight+'&autostart='+autoplay+'&vdopiaSkinWidth=961&vdopiaSkinHeight=386&useGUT=false&vdopiaApiKey='+apikey+'&title='+title+'&desc='+desc+'&filename='+filename+'&videoimage='+fullimage+'&lengthinsec='+duration+'&vdopiaAdFormat=' + adformat + param + '" quality="high" bgcolor="#ffffff" width="100%" height="100%" name="player" align="middle" allowScriptAccess="always" allowFullScreen="true" wmode="'+wmode+'" type="application/x-shockwave-flash" pluginspage="http://www.adobe.com/go/getflashplayer"/>' +
        '</object>';
    } else {
        //adformat = 'preroll|midroll|overlay|branded';
        if (adformat == 'no_ads') {
            adformat = '';
        } else if (adformat == '') {
            if ((vid == 'LIVE_BGINDIA') || (vid == 'LIVE_BG24x7') || (vid == 'LIVE_BGPROFIT')) {
                adformat = 'preroll|midroll|overlay|branded';
            } else {
                adformat = 'preroll|overlay|branded';
            }
            if(isBannerType==1){
                adformat = 'preroll|midroll';
            }
        }
        var breakmsg_new = liveVideoName+' is on an ad break right now.';
        if(vid == 'LIVE_BGHINDU' || vid == 'LIVE_SPECIAL'){
            breakmsg_new = 'This is an ad break. NDTV Indian Of The Year will resume shortly.';
        }
        param = '&countryCode='+cntry+'&category='+category+'&switchurl='+switch_url+'&breakmsg='+breakmsg_new+'&showNextPrevButton='+showNextPrevButton+'&pageurl='+pageurl+'&rtmp='+rtmp+'&gTRVPlay=1&isBannerType='+isBannerType+'&mute='+mute;
        player = '' +
        '<object classid="clsid:d27cdb6e-ae6d-11cf-96b8-444553540000" codebase="http://download.macromedia.com/pub/shockwave/cabs/flash/swflash.cab#version=9,0,0,0" width="100%" height="100%" id="player" align="middle">' +
        '<param name="allowScriptAccess" value="always" />'+
        '<param name="allowFullScreen" value="true" />'+
        '<param name="movie" value="'+movie+'" />'+
        '<param name="quality" value="high" />'+
        '<param name="bgcolor" value="#000000" />'+
        '<param name="wmode" value="'+wmode+'">'+
        '<param name="flashvars" value="tremorProgID='+tremor_id+'&videoid='+vid+'&agencyID='+agency_id+'&channel=ndtv&videoimage='+fullimage+'&pWidth='+pwidth+'&pHeight='+pheight+'&autostart='+autoplay+'&vdopiaApiKey='+apikey+'&vdopiaAdFormat=' + adformat + param+'">' +
        '<embed src="'+movie+'" flashvars="tremorProgID='+tremor_id+'&videoid='+vid+'&agencyID='+agency_id+'&channel=ndtv&videoimage='+fullimage+'&pWidth='+pwidth+'&pHeight='+pheight+'&autostart='+autoplay+'&vdopiaApiKey='+apikey+'&vdopiaAdFormat=' + adformat + param + '" quality="high" bgcolor="#ffffff" width="100%" height="100%" name="player" align="middle" allowScriptAccess="always" allowFullScreen="true" wmode="'+wmode+'" type="application/x-shockwave-flash" pluginspage="http://www.adobe.com/go/getflashplayer"/>' +
        '</object>';
    }
    jQuery('.player').html(player);
    jQuery('.player').css('height', '100%');
    jQuery('.player').css('width', '100%');

    //player.js
}

window.onbeforeunload = function (evt) {
    getFlashMovie("player").askBeforeQuit(); 
    //Here videoPlayer is the name or id from the player's object and embed code respectively
}

function updateTitle(p) {
    document.title = p;
}

function getHashValue(key) {
  var searched_value = location.hash.match(new RegExp(key+'=([^&]*)'));
  if (searched_value != null) {
    return searched_value[1];
  }
}


(function() {
  var gvn = document.createElement('script');
  gvn.src = document.location.protocol + '//s0.2mdn.net/instream/video/client.js';
  gvn.async = true;
  gvn.type = 'text/javascript';
  var s = document.getElementsByTagName('script')[0];
  s.parentNode.insertBefore(gvn, s);
})();
