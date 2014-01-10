$().ready(function(){
    $("#h_sub_menu").click(function(){
      $('#nav').toggleClass('more_active');
      $('#subnav').toggle();
    });  
    
    $("#h_search_menu").click(function(){
        $('#searchdrop').toggle(); 
          //$('#searchdrop').css("display","block");
        $('#s').focus();
    });     
    
    if ($("img.lazy").length > 0) {
        $("img.lazy").lazyload({
            effect : "fadeIn"
        });
    }
         
  //copypasteinit();
  if(typeof insertCustomSymbols === 'function'){ insertCustomSymbols();}
  
  $('body').ajaxStop(function(){
    insertCustomSymbols();
  });
  var htmlStr = $('#top_share').html();
  $('#bottom_share').html(htmlStr);

  //prevent yahoo buzz <script> from reloading the page
  if ($('#storycontent p').length >= 12) {
    $(".alsosee_cont").show();
    $('#interactive script').remove();
    $('#storycontent p:eq(3)').after($('#interactive'));
    //$('#inside_seealso').remove();
    //$('#interactive').after($('#bottom_share'));
  } else if($('#storycontent br').length >= 12 ){
    $(".alsosee_cont").show();
    $('#interactive script').remove();
    $('#storycontent br:eq(5)').after($('#interactive'));
    //$('#inside_seealso').remove();
    //$('#interactive').after($('#bottom_share'));
  }else{
    if ($('#storycontent p').length >= 5) {
        $(".alsosee_cont").show();
        $('#interactive script').remove();
        $('#storycontent p:eq(3)').after($('#interactive'));
    } else if($('#storycontent br').length >= 5){
        $(".alsosee_cont").show();
        $('#interactive script').remove();
        $('#storycontent br:eq(5)').after($('#interactive'));
    }else{
        $('#inside_seealso').show();
    }
  }

  if ($('.scrollable').length > 0) {
      var scrollable = jQuery('.scrollable').scrollable({
        size: 4,
        api: true
      });
  }

  if(window['__gallery_index'] && $('.scrollable').length){
    scrollable.click(window['__gallery_index']);
  }


  $('.ad_common').css('visibility','visible');

  $('#related_videos_list #inside_pagination a').live('click',function(){
    var request_url = $(this).attr('href');
    $('#related_videos_list *').hide();
    window.location.hash = '#related_videos_list';

    $.get(request_url,{
      },function(data){
        $('#related_videos_list').html(data);
        $('#related_videos_list').slideDown();
      });
    return false;
  });


  //Video player page ajax pagination
  var player_page_pagination_options = {
    shows:'',
    category:'',
    channel:'',
    page:'',
    pagination_base_url : 'video/player/'
  };

  if(window['tab'] == 'comments'){
    switch(window['page']){
      case 'article':
        locate_tab('tab');
        hide_show('story_display', 'comment_display');
        change_element_class('comment_tab', 'ins_tab_select', 'article_tab', 'ins_tab_unselect');
        show_comment('comment_display', 'comment_form', 'user_comment');
        break;
    }
  }

  if(typeof($.fn.clickMenu) == 'function'){
    $('#list').clickMenu();
  }
  
  $('#insidetab li.act_on_click').click(function(){ 
    if($(this).hasClass('ins_tab_unselect')){
      $('#insidetab li.ins_tab_select').removeClass('ins_tab_select').addClass('ins_tab_unselect');
      $(this).addClass('ins_tab_select').removeClass('ins_tab_unselect');
      $('#inside_subtab').children().hide();
      $('#inside_subtab').children('#'+$(this).metadata().subtab).show();
    }
    return false;
  });

  //search stuff follows:
  $('.search_more_link').click(function(e){
    e.stopImmediatePropagation();
    var tab_data = $(this).metadata();
    var tab = tab_data.tab;
    $('.tab').hide();

    $('.search_tab_trigger').removeClass('ins_tab_select').addClass('ins_tab_unselect');
    $('.search_tab_trigger.'+tab).removeClass('ins_tab_unselect').addClass('ins_tab_select');
    switch(tab){
      case 'news':
        if(!$('.tab.news').children().length){
          $('.search_loading').show();
          $.get('/search/news/',{
            q:window['q_str']
          },function(data){
            $('.search_loading').hide();
            $('.tab.news').html(data);
          });
        }
        break;
      case 'google_news':
        $('#videoresults').hide();
        $('#photoresults').hide();
        $('#googleresults').show();
        $('.search_more_link').hide();
        $('.tab.all').removeClass('all').addClass('google_news');
        break;
      case 'videos':
        if(!$('.tab.videos').children().length){
          $('.search_loading').show();
          $.get('/search/video/',{
            q:window['q_str']
          },function(data){
            $('.search_loading').hide();
            $('.tab.videos').html(data);
          });
        }
        break;
      case 'photos':
        if(!$('.tab.photos').children().length){
          $('.search_loading').show();
          $.get('/search/photo/',{
            q:window['q_str']
          },function(data){
            $('.search_loading').hide();
            $('.tab.photos').html(data);
          });
        }
        break;
    }
    $('.tab.'+tab).show();
    $(document).scrollTo('.tab.'+tab,1000);
    return false;
  });

  $('li.search_tab_trigger').click(function(e){
    e.stopImmediatePropagation();
    var tab_data = $(this).metadata();
    var tab = tab_data.tab;
    $('.search_tab_trigger').removeClass('ins_tab_select').addClass('ins_tab_unselect');
    $(this).removeClass('ins_tab_unselect').addClass('ins_tab_select');

    $('.tab').hide();

    switch(tab){
      case 'news':
        if(!$('.tab.news').children().length){
          $('.search_loading').show();
          $.get('/search/news/',{
            q:window['q_str']
          },function(data){
            $('.search_loading').hide();
            $('.tab.news').html(data);
          });
        }
        break;
      case 'google_news':
        $('#videoresults').hide();
        $('#photoresults').hide();
        $('#googleresults').show();
        $('.search_more_link').hide();
        $('.tab.all').removeClass('all').addClass('google_news');
        break;
      case 'all':
        $('#videoresults').show();
        $('#photoresults').show();
        $('#googleresults').show();
        $('.search_more_link').show();
        $('.tab.google_news').removeClass('google_news').addClass('all');
        break;
      case 'photos':
        if(!$('.tab.photos').children().length){
          $('.search_loading').show();
          $.get('/search/photo/',{
            q:window['q_str']
          },function(data){
            $('.search_loading').hide();
            $('.tab.photos').html(data);
          });
        }
        break;
      case 'videos':
        if(!$('.tab.videos').children().length){
          $('.search_loading').show();
          $.get('/search/video/',{
            q:window['q_str']
          },function(data){
            $('.search_loading').hide();
            $('.tab.videos').html(data);
          });
        }
        break;
    }

    $('.tab.'+tab).show();
    return false;
  });

  //going directly to a tab in search
  if(window['search_type']){
    $('.search_tab_trigger.'+window['search_type']).click();
  }

  $('.video_search_paginator a').live('click',function(){
    $('.search_loading').show();
    $('.tab.videos').children().hide();
    $(document).scrollTo('.tab.videos',1000);
    $.get('/search/video/',{
      q:window['q_str'],
      p:$(this).metadata().page
    },function(data){
      $('.search_loading').hide();
      $('.tab.videos').html(data);
    });

    $('.tab.videos').show();

    return false;
  });
  $('.photo_search_paginator a').live('click',function(){
    $('.search_loading').show();
    $('.tab.photos').children().hide();
    $(document).scrollTo('.tab.photos',1000);
    $.get('/search/photo/',{
      q:window['q_str'],
      p:$(this).metadata().page
    },function(data){
      $('.search_loading').hide();
      $('.tab.photos').html(data);
    });
    $('.tab.photos').show();
    return false;
  });

  $('.news_search_paginator a').live('click',function(){
    $('.search_loading').show();
    $('.tab.news').children().hide();
    $(document).scrollTo('.tab.news',1000);
    $.get('/search/news/',{
      q:window['q_str'],
      p:$(this).metadata().page
    },function(data){
      $('.search_loading').hide();
      $('.tab.news').html(data);
    });
    $('.tab.news').show();
    return false;
  });


  $('#album-image').hover(function(){
    $('.photo_left').show();
    $('.photo_right').show();
  }, function(){
    $('.photo_left').hide();
    $('.photo_right').hide();
  });

  $('#photo-left').hover(function(){
    $('#photo-left').addClass('photo_left').removeClass('photo_left_dim');
  }, function(){
    $('#photo-left').addClass('photo_left_dim').removeClass('photo_left');
  });

  $('#photo-right').hover(function(){
    $('#photo-right').addClass('photo_right').removeClass('photo_right_dim');
  }, function(){
    $('#photo-right').addClass('photo_right_dim').removeClass('photo_right');
  });

  $(document).keypress(function(e){
    //var $container = $('#album-image');
    var $prev = $('#photo-left');
    var $next = $('#photo-right');
    switch(String.fromCharCode(e.which).toLowerCase()){
      case 'j':
          if($next.length){
        //createLoader($container);
        window.location = $next.attr('href');
          }
        break;
      case 'k':
        if($prev.length){
          //createLoader($container);
          window.location = $prev.attr('href');
        }
        break;
    }
  });

    document.onkeyup = KeyCheck;
    function KeyCheck(e) {
        var KeyID = (window.event) ? event.keyCode : e.keyCode;
        switch(KeyID) {
            //190 for .
            case 190:
                location.hash = '#globalbar';
            break;
            // 49 for 1
            case 49:
                var album_url = $('#album_url').val();
                if (album_url.length != 0) {
                    window.location = album_url;
                }
            break;
        }
    }

    /* Article SLider JS Start */ 
//    var upprev_closed = false;
//    var upprev_hidden = true;
//    $(window).scroll(function() {
//        var lastScreen;
//        if ($("#slider_bookmark").length > 0)
//            lastScreen = getScrollY() + $(window).height() < $("#slider_bookmark").offset().top * 1 ? false : true;
//        else
//            lastScreen = getScrollY() + $(window).height() < $(document).height() * 0.9 ? false : true;
//
//        if (lastScreen && !upprev_closed) {
//            $("#upprev_box").stop().animate({right:"0px"});
//            upprev_hidden = false;
//        }
//        else if (upprev_closed && getScrollY() == 0) {
//            upprev_closed = false;
//        }
//        else if (!upprev_hidden) {
//            upprev_hidden = true;
//            $("#upprev_box").stop().animate({right:"-400px"});
//        }
//    });
//    $("#upprev_close").click(function() {
//        $("#upprev_box").stop().animate({right:"-400px"});
//        upprev_closed = true;
//        upprev_hidden = true;
//    });
    /* Article SLider JS End */

});

function redir_to_categ(base_url, categ, subcateg){
    var newloc= base_url +  categ;
    if(subcateg!=='')newloc =base_url +  subcateg;
    window.location = newloc;return;
}


function redir_to_election_state(base_url, categ, subcateg){
    var newloc= base_url +  categ;
    if(subcateg!=='')newloc =base_url  +  categ + subcateg +  '-previous-result-stats';
    window.location = newloc;return;
}

function redir_to_election_constituencies(base_url, categ, subcateg){
    var newloc= base_url +  categ;
    if(subcateg!=='')newloc =base_url  +  categ + subcateg ;
    window.location = newloc;return;
}

function redir_to_election_candidates(base_url, categ, subcateg){
    var newloc= base_url +  categ ;
    if(subcateg!=='')newloc =base_url  +  categ + subcateg + '-candidates';
    window.location = newloc;return;
}

function onVideoEnd(blah){
    var vid = window['__ids'].shift();
    var apikey = window['__apikey'];
    var player_version = window['__player_version'];
    var movie = 'http://www.ndtv.com/common/videos/flash/player/new-wrapper/NDTVVideoPlayer.swf?' + player_version;
    var title = '';
    var desc = '';
    var filename = '';
    var fullimage = '';
    var duration = '';
    var dateline = '';
    var foldername = '';
    var adformat = '';
    var showcountry = '';
    $('#videoContainer').css('width', 'auto');
    $.getJSON('/video/video-meta-data-for-special', {
      id:vid,
      sid:window['__sid'],
      page:window['__page']
    }, function(json) {
        //alert(JSON.stringify(json));
        title = json.title;
        desc = json.caption;
        filename = json.filename;
        fullimage = json.fullimage;
        duration = json.duration;
        dateline = json.dateline;
        foldername = json.foldername;
        showcountry = json.showcountry;

        var adformat = window['__adformat'];
        if (adformat == undefined || adformat == '') {
            adformat = 'preroll|postroll|branded|overlay';
    }
        if (duration < 59) {
            adformat = 'postroll|branded|overlay';
        }
        if (showcountry == 'showindiaonly' && cntry != 'IN') {
            jQuery('.player').html('<div style="float:left;padding-left:100px;padding-top:100px;font-weight:bold;">This video is only available in India.<br><br>If you are in India and have received this message, please click <a href="http://www.ndtv.com/convergence/ndtv/new/feedback.aspx">here</a></div>');
            return;
        }
        var player = '' +
        '<object class="player" classid="clsid:d27cdb6e-ae6d-11cf-96b8-444553540000" codebase="http://download.macromedia.com/pub/shockwave/cabs/flash/swflash.cab#version=9,0,0,0" width="100%" height="100%" id="player" align="middle">' +
        '<param name="allowScriptAccess" value="always" />'+
        '<param name="allowFullScreen" value="true" />'+
        '<param name="movie" value="'+movie+'" />'+
        '<param name="quality" value="high" />'+
        '<param name="bgcolor" value="#000000" />'+
        '<param name="wmode" value="transparent">'+
        '<param name="flashvars" value="videoid='+vid+'&channel=ndtv&pWidth=622&pHeight=386&autostart=1&vdopiaSkinWidth=961&vdopiaSkinHeight=386&vdopiaApiKey='+apikey+'&title='+title+'&desc='+desc+'&filename='+filename+'&videoimage='+fullimage+'&lengthinsec='+duration+'&vdopiaAdFormat=' + adformat+'&foldername='+foldername+'&rtmp=true&gTRVPlay=0">' +
        '<embed src="'+movie+'" width="100%" height="100%" flashvars="videoid='+vid+'&channel=ndtv&pWidth=622&pHeight=386&autostart=1&vdopiaSkinWidth=961&vdopiaSkinHeight=386&useGUT=false&vdopiaApiKey='+apikey+'&title='+title+'&desc='+desc+'&filename='+filename+'&videoimage='+fullimage+'&lengthinsec='+duration+'&vdopiaAdFormat='+adformat+'&foldername='+foldername+'&rtmp=true&gTRVPlay=0" quality="high" bgcolor="#ffffff" width="100%" height="100%" name="player" align="middle" allowScriptAccess="always" allowFullScreen="true" wmode="transparent" type="application/x-shockwave-flash" pluginspage="http://www.adobe.com/go/getflashplayer"/>' +
        '</object>';
        if (vid * 1) {
            var _position = $('.player').css('position');
            var _top = $('.player').css('top');
            var _left = $('.player').css('left');
            $('h1#title p').fadeOut('slow',function(){
                $(this).html(title).fadeIn();
            });
            $('#videoplayer_big .date').fadeOut('slow',function(){
                $(this).html(dateline).fadeIn();
            });
            $('#vid_cap_cont .vid_caption').fadeOut('slow',function(){
                $(this).html(desc).fadeIn();
            });
            //$('.player').hide().remove();
            //$('#playerPlaceholder').after(player);
            $('.player').html(player);
            $('.player').css({
                position:_position,
                top:_top,
                left:_left
            });
        }
    });
}

function showPhase(phaseid){
  $('.phase-tab').hide();
  $('#phase_'+phaseid).show();
  locate_tab('phase_'+phaseid);
}

function gup( name, href ) {
  name = name.replace(/[\[]/,"\\\[").replace(/[\]]/,"\\\]");
  var regexS = "[\\?&]"+name+"=([^&#]*)";
  var regex = new RegExp( regexS );
  var results = (href == undefined)||(href == null)? regex.exec( window.location.href ): regex.exec(href);
  if( results == null )
    return "";
  else
    return results[1];
}

function copypasteinit(){
  var copy_paste=new CopyPaste();
  var share_url=document.location.href;
  share_url += (0 > share_url.indexOf('?') ? '?cp' : '&cp');
  copy_paste.Init('<br><br>Read more at: <a href="'+share_url+'" target="_blank_">'+share_url+'</a>',60);
}

function play_video(id) {
  var data = document.getElementById('video_player_thumb_embed').value;
  document.getElementById(id).innerHTML = data;
  return false;
}

function show_comment(target_id, comment_form_id, comment_list_id) {
  var is_iframe_loaded = Number(document.getElementById('is_iframe_loaded').value);
  if (!is_iframe_loaded) {
    var form_data = document.getElementById(comment_form_id).value;
    form_data += '<div><table width="100%" cellspacing="0" cellpadding="0" border="0"><tbody><tr><td width="9"><img height="30" width="9" src="' + IMAGE_URL + 'comment_bar_l.gif"></td><td class="comment_bg"><table width="70%" cellspacing="0" cellpadding="0" border="0"><tbody><tr><td width="26"><img height="30" width="16" src="' + IMAGE_URL + 'comment_icon.gif"></td><td class="fbld fg fs12">Comments <a class="fs11 fbld fg fn fl" onclick="javascript:show_comment_form();" href="javascript:void(0);"></a></td></tr></tbody></table></td><td width="9"><img height="30" width="9" src="' + IMAGE_URL + 'comment_bar_r.gif"></td></tr></tbody></table></div>';
    form_data += document.getElementById(comment_list_id).value;
    document.getElementById(target_id).innerHTML = form_data;
    document.getElementById('is_iframe_loaded').value = 1;
  }
  return false;
}

function hide_show(hide_id, show_id) {
  document.getElementById(hide_id).style.display = 'none';
  document.getElementById(show_id).style.display = 'block';
}

function story_pic_block_hide_show(hide_id, show_id) {
  $('.' + hide_id).css('display', 'none');
  $('.' + show_id).css('display', 'block');
}

function change_element_class(source_id, target_class_name, target_id, source_class_name) {
  document.getElementById(source_id).setAttribute("class", target_class_name);
  document.getElementById(target_id).setAttribute("class", source_class_name);
}

function newPopup(url) {
  var centerWidth = (window.screen.width - 480) / 2;
  var centerHeight = (window.screen.height - 320) / 2;
  popupWindow = window.open(url,'popUpWindow','height=320,width=480,left='+centerWidth+',top='+centerHeight+',resizable=no,scrollbars=no,toolbar=no,menubar=no,location=no,directories=no,status=no')
}

function locate_tab(id) {
  /*location.hash = '#'+id;*/
  $().scrollTo("#"+id, 1000);
}

var IMAGE_URL;

function set_image_url(image_url) {
  IMAGE_URL = image_url;
}

function tw_click(args) {
  var longurl = (args['url'] == undefined) ? location.href : args['url'];
  var title = (args['title'] != undefined) ? args['title'] : '';
  window.open('http://twitter.com/intent/tweet?text='+title+' '+longurl+' @ndtv','sharer','toolbar=0,status=0,width=756,height=436');
  return false;
}

function JS_Mobile_Redirect() {
  user_mobile = (navigator.userAgent).toLowerCase();
  var mobile_array=new Array('benq','bird','blackberry','bleu','dopod','fly','hp ipaq','hpipaq','htc','i-mate','lenovo-','lg-','lge-','mot-','moto', 'motorola','nec-','nokia','o2','opera mini','palm','panasonic','philips','samsung','sagem-','sch-','sec-','series60','sgh-','sharp','sony','sonyericsson','spice','spv-','symbian');
  var op = ((mobile_article_page.indexOf('?') >= 0) ? '&' : '?');
  for (i in mobile_array) {
    if (user_mobile.indexOf(mobile_array[i]) >= 0) {
      var device_param = (user_mobile.indexOf('iphone') >= 0 ? (op + 'device=' + mobile_array[i]) : '');
      window.location=mobile_article_page + device_param;
      break;
    }
  }
}

function swap_tabs(active_tab) {
    var active_class = 'ins_tab_select';
    var deactive_class = 'ins_tab_unselect';
    var tabs = new Array('top_videos_tab', 'latest_tab', 'category_tab', 'channel_tab', 'shows_tab', 'special_tab', 'livetv_tab', 'ndtv_classics_tab');
    var tabs_count = tabs.length;
    
    for(var i=0; i < tabs_count; i++) {
        if(tabs[i] == active_tab) {
            document.getElementById(active_tab).setAttribute("class", active_class);
        } else {
            document.getElementById(tabs[i]).setAttribute("class", deactive_class);
        }
    }
}

function hide_show_submenu(show_id) {
    var shows_array = new Array('category_video', 'channel_video', 'shows_video', 'live_video', 'ndtv_classics_video');
    
    for(var i=0; i < shows_array.length; i++) {
        if(show_id == shows_array[i]) {
            document.getElementById(show_id).style.display = 'block';
        } else {
            document.getElementById(shows_array[i]).style.display = 'none';
        }
    }
}

function vidshowhide_innerpagediv(b) {
  $('.divanchor').hide();
  $('#'+b).show();
}

function scroller(id) {
  $().scrollTo("#"+id, 1000);
}

function toggle_player(cntry){

  var vid = window['__id'];
  var apikey = window['__apikey'];
  var switch_url = window['__switch_url'];
  var movie = window['__movie'];
  var skin = window['__skin'];
  var duration = window['__duration'];
  var player_type = window['__pl_type'];
  var remove_adformat = window['__adformat'];
  var adformat = '';
  var filename = window['__filename'];
  if (filename == undefined || filename == '') {
      filename = 'undefined'
      //this will force the player to call api
  }
  var title = window['__title'];
  var desc = window['__desc'];
  var fullimage = window['__fullimage'];
  var player;
  var liveVideoName = '';
  if (duration != undefined) {
      if (duration > 59) {
        adformat = 'preroll|midroll|postroll|branded|overlay';
      } else {
        adformat = 'postroll|branded|overlay';
      }
  } else {
    adformat = 'preroll|midroll|branded|overlay';
  }
  if (remove_adformat == 'no_pre_roll') {
    adformat = 'postroll|branded|overlay';
  }
  if (vid == 'LIVE_BG24x7' || vid == 'LIVE_BGINDIA' || vid == 'LIVE_BGGT' || vid == 'LIVE_BGPROFIT' || vid == 'LIVE_BGHINDU'){

    adformat = 'preroll|midroll|overlay|branded';
    if (vid == 'LIVE_BG24x7') {
        liveVideoName = 'NDTV 24x7';
    }else if (vid == 'LIVE_BGINDIA'){
        liveVideoName = 'NDTV India';
    }else if (vid == 'LIVE_BGGT'){
        liveVideoName = 'NDTV Good Times';
    }else if (vid == 'LIVE_BGPROFIT'){
        liveVideoName = 'NDTV Profit';
    }else if (vid == 'LIVE_BGHINDU'){
        liveVideoName = 'NDTV Hindu';
    }
  }
  var param;
  if (vid == '194149') {
      adformat = '';
  }
  if (cntry.toLowerCase() != 'us') {
      if (player_type == 'vod') {
        param = '';
            player = '' +
            '<object class="player" classid="clsid:d27cdb6e-ae6d-11cf-96b8-444553540000" codebase="http://download.macromedia.com/pub/shockwave/cabs/flash/swflash.cab#version=9,0,0,0" width="100%" height="100%" id="player" align="middle">' +
            '<param name="allowScriptAccess" value="always" />'+
            '<param name="allowFullScreen" value="true" />'+
            '<param name="movie" value="'+movie+'" />'+
            '<param name="quality" value="high" />'+
            '<param name="bgcolor" value="#000000" />'+
            '<param name="wmode" value="transparent">'+
            '<param name="flashvars" value="videoid='+vid+'&channel=ndtv&pWidth=622&pHeight=386&autostart=1&vdopiaSkinWidth=961&vdopiaSkinHeight=386&useGUT=false&vdopiaApiKey='+apikey+'&title='+title+'&desc='+desc+'&filename='+filename+'&videoimage='+fullimage+'&lengthinsec='+duration+'&vdopiaAdFormat=' + adformat+'">' +
            '<embed src="'+movie+'" width="100%" height="100%" flashvars="videoid='+vid+'&channel=ndtv&pWidth=622&pHeight=386&autostart=1&vdopiaSkinWidth=961&vdopiaSkinHeight=386&useGUT=false&vdopiaApiKey='+apikey+'&title='+title+'&desc='+desc+'&filename='+filename+'&videoimage='+fullimage+'&lengthinsec='+duration+'&vdopiaAdFormat=' + adformat + '" quality="high" bgcolor="#ffffff" width="100%" height="100%" name="player" align="middle" allowScriptAccess="always" allowFullScreen="true" wmode="transparent" type="application/x-shockwave-flash" pluginspage="http://www.adobe.com/go/getflashplayer"/>' +
            '</object>';
      } else {
          if (__pl_type == 'old') {
            adformat = 'preroll|overlay';
            param = '&countryCode='+cntry+'&switchurl='+switch_url+'&breakmsg='+liveVideoName+' is on an ad break right now.';
            player = '' +
            '<object class="player" classid="clsid:d27cdb6e-ae6d-11cf-96b8-444553540000" codebase="http://download.macromedia.com/pub/shockwave/cabs/flash/swflash.cab#version=9,0,0,0" width="622" height="386" id="videoPlayer" align="middle">' +
            '<param name="allowScriptAccess" value="always" />'+
            '<param name="allowFullScreen" value="true" />'+
            '<param name="movie" value="'+movie+'" />'+
            '<param name="quality" value="high" />'+
            '<param name="bgcolor" value="#000000" />'+
            '<param name="wmode" value="transparent">'+
            '<param name="flashvars" value="videoid='+vid+'&skinpath='+skin+'&apikey='+apikey+'&autostart=1&adformats=' + adformat + '&videocategory=AU|TR|SC|SP|CR|MU|HC|PA|NE|BU|HE|SH|LF|PO|FI|EN&videoimage=&eapikey=be3e82ed32b1b1e70bdf125bb1f6f957&eplayerswfurl=http://www.ndtv.com/common/videos/flash/player/ndtvapi/embed-418x385/player_vod_em.swf&eskinswfurl=http://www.ndtv.com/common/videos/flash/player/ndtvapi/embed-418x385/skin_vod_em.swf'+param+'">' +
            '<embed src="'+movie+'" width="622" height="386" align="middle" quality="high" bgcolor="#000000" name="videoPlayer" allowScriptAccess="always" allowFullScreen="true" type="application/x-shockwave-flash" pluginspage="http://www.macromedia.com/go/getflashplayer" wmode="transparent" flashvars="videoid='+vid+'&skinpath='+skin+'&apikey='+apikey+'&autostart=1&adformats=' + adformat + '&videocategory=AU|TR|SC|SP|CR|MU|HC|PA|NE|BU|HE|SH|LF|PO|FI|EN&videoimage=&eapikey=be3e82ed32b1b1e70bdf125bb1f6f957&eplayerswfurl=http://www.ndtv.com/common/videos/flash/player/ndtvapi/embed-418x385/player_vod_em.swf&eskinswfurl=http://www.ndtv.com/common/videos/flash/player/ndtvapi/embed-418x385/skin_vod_em.swf'+param+'" />' +
            '</object>';
          } else {
            adformat = 'preroll|midroll|overlay|branded';
            param = '&countryCode='+cntry+'&switchurl='+switch_url+'&breakmsg='+liveVideoName+' is on an ad break right now.';
            player = '' +
            '<object class="player" classid="clsid:d27cdb6e-ae6d-11cf-96b8-444553540000" codebase="http://download.macromedia.com/pub/shockwave/cabs/flash/swflash.cab#version=9,0,0,0" width="100%" height="100%" id="player" align="middle">' +
            '<param name="allowScriptAccess" value="always" />'+
            '<param name="allowFullScreen" value="true" />'+
            '<param name="movie" value="'+movie+'" />'+
            '<param name="quality" value="high" />'+
            '<param name="bgcolor" value="#000000" />'+
            '<param name="wmode" value="transparent">'+
            '<param name="flashvars" value="videoid='+vid+'&channel=ndtv&videoimage=&pWidth=622&pHeight=386&autostart=1&vdopiaApiKey='+apikey+'&vdopiaAdFormat=' + adformat + param+'">' +
            '<embed src="'+movie+'" flashvars="videoid='+vid+'&channel=ndtv&videoimage=&pWidth=622&pHeight=386&autostart=1&vdopiaApiKey='+apikey+'&vdopiaAdFormat=' + adformat + param + '" quality="high" bgcolor="#ffffff" width="100%" height="100%" name="player" align="middle" allowScriptAccess="always" allowFullScreen="true" wmode="transparent" type="application/x-shockwave-flash" pluginspage="http://www.adobe.com/go/getflashplayer"/>' +
            '</object>';
          }
      }
  }


  if(cntry.toLowerCase() == 'us'){
    $('.player.in').remove();
    $('.player.'+cntry.toLowerCase()).show();
    if ($('#videoPlayer').length > 0) {
        $('#videoPlayer').hide().remove();
    }
  } else {
    $('.player.us').remove();
    $('.player.in').after(player);
    $('.player.in').remove();
  }
}

function displayCompanionBanners(banners, tracking) {
  //alert(banners+", "+tracking);
  tmDisplayBanner(banners, "videoAdMRec", 300, 250, null, tracking);
}
function writeIntoCompanionDiv(content, size) {
                document.getElementById("videoAdMRec").innerHTML = content;
                // size not used for now
}
var featuredCurrentId = 1;
function FeaturedNextPrev(selectedId, totalCnt, DivId, PagerId) {
  var j = featuredCurrentId;
  j = parseInt(selectedId);

  if (j > 0 && j < totalCnt + 1) {
    for (var i = 1; i <= totalCnt; i++) {
      if (document.getElementById(DivId + '-' + i)) {
        $('#' + DivId + '-' + i).hide();
        //document.getElementById(DivId + '-' + i).style.display = 'none';
        document.getElementById(PagerId + '-' + i).className = 'deselect';
        document.getElementById(DivId + '_thumb-' + i).className = 'deactive_p';
      }
    }

    if (document.getElementById(DivId + '-' + selectedId)) {
      $('#' + DivId + '-' + selectedId).show('slow');
      //document.getElementById(DivId + '-' + selectedId).style.display = 'block';
      document.getElementById(PagerId + '-' + selectedId).className = 'selectbullet';
      document.getElementById(DivId + '_thumb-' + selectedId).className = 'select';
    }
    featuredCurrentId = j;
  }

  var nextDiv = parseInt(selectedId) + 1;
  clearTimeout(timeOut);
  timeOut = setTimeout("autoplay_ticker("+nextDiv+", "+totalCnt+", 'homepageFeaturedDiv', 'homepageFeaturedPager')", 3000);
}

var timeOut;
function autoplay_ticker(currentDiv, totalcnt, divid, pagerid) {
  if (currentDiv > totalcnt) {
    currentDiv = 1;
  }
  FeaturedNextPrev(currentDiv, totalcnt, divid, pagerid);
  var nextDiv = currentDiv + 1;
  clearTimeout(timeOut);
  timeOut = setTimeout("autoplay_ticker("+nextDiv+", "+totalcnt+", 'homepageFeaturedDiv', 'homepageFeaturedPager')", 3000);
}

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

function hide_show_player_div(version) {
    if(version < 9){
        var hideDiv = document.getElementById('videoContainer');
        var displayDiv = document.getElementById('flashVersionUpdate');
        hideDiv.style.display = 'none';
        displayDiv.style.display = 'block';

    }else{
        var hideDiv = document.getElementById('flashVersionUpdate');
        var displayDiv = document.getElementById('videoContainer');
        hideDiv.style.display = 'none';
        displayDiv.style.display = 'block';
    }
}

function getScrollY() {
    scrOfY = 0;
    if( typeof( window.pageYOffset ) == "number" ) {
        scrOfY = window.pageYOffset;
    } else if( document.body && ( document.body.scrollLeft || document.body.scrollTop ) ) {
        scrOfY = document.body.scrollTop;
    } else if( document.documentElement && ( document.documentElement.scrollLeft || document.documentElement.scrollTop ) ) {
        scrOfY = document.documentElement.scrollTop;
    }
    return scrOfY;
}

function ios_device_detection() {
    var user_mobile=(navigator.userAgent).toLowerCase();
    var mobile_array=new Array('ipad', 'iphone');
    for (i in mobile_array){
        if (user_mobile.indexOf(mobile_array[i]) >= 0){
            return 1;
        }
    }
    return 0;
}
function ShowNavigationLevel2() {
    document.getElementById('topnavigation_level2').style.display="";
    document.getElementById('topnav_plusbut').style.display="none";
    document.getElementById('topnav_minusbut').style.display="";
}
function HideNavigationLevel2() {
    document.getElementById('topnavigation_level2').style.display="none";
    document.getElementById('topnav_plusbut').style.display="";
    document.getElementById('topnav_minusbut').style.display="none";
}

function trim(stringToTrim) {
	return stringToTrim.replace(/^\s+|\s+$/g,"");
}
function ltrim(stringToTrim) {
	return stringToTrim.replace(/^\s+/,"");
}
function rtrim(stringToTrim) {
	return stringToTrim.replace(/\s+$/,"");
}

function textCounter(field_id, cntfield_id, maxlimit) {
    var field = document.getElementById(field_id);
    var cntfield = document.getElementById(cntfield_id);
    if (field.value.length > maxlimit) {
        field.value = field.value.substring(0, maxlimit);
    } else {
        cntfield.innerHTML = maxlimit - field.value.length;
    }
    return true;
}

function email_article_validation() {
    var toemail = document.getElementById('toemail');
    var fromname = document.getElementById('fromname');
    var textarea = document.getElementById('textarea');
    var captcha_field = document.getElementById('recaptcha_response_field');
    if (toemail.value.length == 0) {
        alert('Enter email of recipient');
        toemail.focus();
        return false;
    }
    if (!multiEmailValidation(toemail.value)) {
        toemail.focus();
        return false;
    }
    if (!validateName(fromname.value)) {
        alert('Please enter alphabets only in name and it should not less than 3 and more than 30 chars');
        fromname.focus();
        return false;
    }

    if (textarea.value.length == 0) {
        alert('Enter a brief message');
        textarea.focus();
        return false;
    }

    if (captcha_field.value.length == 0) {
        alert('Please enter the captcha in captcha field');
        captcha_field.focus();
        return false;
    }
    return true;
}

function multiEmailValidation(email_field) {
    var email = email_field.split(',');
    for (var i = 0; i < email.length; i++) {
        if (trim(email[i]).length != 0 && !validateEmail(trim(email[i]))) {
            return false;
        }
    }
    return true;
}

function validateEmail(email) {
   var reg = /^([A-Za-z0-9_\-\.])+\@([A-Za-z0-9_\-\.])+\.([A-Za-z]{2,4})$/;
   var address = trim(email);
   if(reg.test(address) == false) {
      alert('Invalid Email Address');
      return false;
   }
   return true;
}

function validateName(strname) {
    var reg = /^[A-Za-z \u0900-\u097F]{3,30}$/; //hindi code regular expression \u0900-\u097F
    var name = trim(strname);
    if (reg.test(name) ==  false) {
        return false;
    }
    return true;
}

function clean_search_text_box(elem_id) {
    if ($('#'+elem_id).val() == 'search') {
        $('#'+elem_id).val('');
    }
}
function highlightSearch(id, tagname, text, button) {
    try {
        var x = document.getElementById(id);
        var y = x.getElementsByTagName(tagname);
        var z = x.getElementsByTagName('span');
        var searchVal = document.getElementById(text).value;

        if (searchVal.value == '') {
            button = 'clear';
        }

        if (button == 'search') {
            for (i=0; i<y.length; i++) {
                y[i].style.display = "block";

                var patternMatch = new RegExp(searchVal, "i");

                if (!patternMatch.test(z[i].innerHTML)) {
                    y[i].style.display = "none";
                }
            }
        }
        else {
            for(i=0; i<y.length; i++) {
                y[i].style.display = "block";
            }
        }
    }
    catch(err) {
        //alert("NO SUCH "+id+" EXIT ");
    }
}

function submit_search_form() {
    var base_url = "http://www.ndtv.com/";
    var search_string = $('#s');
    var search_string_value = $('#s').val();
    var filtered_string = search_string_value.replace(/[^a-zA-Z0-9 ]/g, '').replace(/[^a-zA-Z0-9]/g, '-');
    if (filtered_string === '') {
        alert('Please enter search query');
        search_string.focus();
    } else {
        window.location = base_url + 'topic/' + filtered_string;
    }
}

function submit_topic_form() {
    submit_search_form();
    return false;
}

function remove_player(player_div) {
    document.getElementById(player_div).innerHTML = '';
    return false;
}

function listFilter(list) {
    $('#search_box')
    .change( function () {
        var filter = $(this).val();
        if(filter) {
            // this finds all links in a list that contain the input,
            // and hide the ones not containing the input while showing the ones that do
            $(list).find(".last .schedule_name:not(:Contains(" + filter + "))").parent().parent().parent().parent().slideUp();
            $(list).find(".last .schedule_name:Contains(" + filter + ")").parent().parent().parent().parent().slideDown();
        } else {
            $(list).find("tr").slideDown();
        }
        return false;
    })
    .keyup( function () {
        // fire the above change event after every letter
        $(this).change();
    });
}

function video_do_not_miss_widget() {
    var element_id = 'ndtv_videorhs';
    if ($('#' + element_id + ' .dmplayicon').length > 0) {
        //var display_icon = getCookie('video_do_not_miss_widget_icon');
        //var icon_display_status = 0;
        
        // AB Testing Code Starts
         /*var variation = cxApi.chooseVariation();
         alert('variation  ' + variation);*/
         var variation = cxApi.getChosenVariation();
         if (variation == -1) {
            var variation = cxApi.chooseVariation();
            cxApi.setChosenVariation(variation);
         } else {
            var variation = variation == 1 ? 0 : 1;
            cxApi.setChosenVariation(variation);
         }         
         var display_icon = variation;
        _gaq.push(['t3._trackEvent', 'VideoRHSVariation', '\"' + variation + '\"']); 
        // AB Testing Code Ends
        
        var anchors = $('#' + element_id).find( 'a' );
        if (display_icon == 1) {
            $('#' + element_id + ' .dmplayicon').show();            
            anchors.each(function(i) {
                var url = $(this).attr('href').replace(element_id, element_id + '_t_icon_' + parseInt(i+1));
                $(this).attr('href', url);
            });
            $('.dntmished').html('Must Watch');
        } else {
            //icon_display_status = 1;
            anchors.each(function(i) {
                var url = $(this).attr('href').replace(element_id, element_id + '_t_' + parseInt(i+1));
                $(this).attr('href', url);
            });
        }
        //setCookie('video_do_not_miss_widget_icon', icon_display_status, 0, 0, 30, '/', '.ndtv.com', false);        
    }
}

function display_image_box () {
    var screenImage = $("#story_image_main");
    var theImage = new Image();
    theImage.src = screenImage.attr("src");
    var story_image_width = theImage.width;
    if (story_image_width > 360) {
        $('.story_img_big').css('display', 'block');
    } else if (story_image_width > 0 || story_image_width <= 360) {
        $('.story_img_small').css('display', 'block');
    }
}

function hide_show_three(hide_id, hide_id_two, show_id) {
  $('#'+hide_id).hide();
  $('#'+hide_id_two).hide();
  $('#'+show_id).show();
  if(show_id == 'press_release') {
      $("#iframediv").html('<iframe id="vidframe" src="http://www.ndtv.com/video/embed-player/?id=291871&amp;category=embed&amp;autostart=1&amp;pWidth=575&amp;pHeight=400&amp;embed_type=story;&show_related=0" scrolling="no" frameborder="0" allowtransparency="true" style="border:none; overflow:hidden; width:575px; height:410px; padding-bottom: 10px;padding-left:30px;"></iframe>');  
  }else {
      $("#iframediv").html('');  
  }
}

function change_element_class_three(source_id, target_class_name, target_id,target_id_second, source_class_name) {
  document.getElementById(source_id).setAttribute("class", target_class_name);
  document.getElementById(target_id).setAttribute("class", source_class_name);
  document.getElementById(target_id_second).setAttribute("class", source_class_name);
}

function test() {
    alert('dsdsds')
}

function apps_swap_tabs(active_tab) {
    var active_class = 'select';
    var deactive_class = '';
    var tabs = new Array('apps-design', 'bilingual-design', 'live-design', 'weather-design', 'second-design', 'share-design', 'offline-design', 'more-design');
    var tabs_count = tabs.length;
    
    for(var i=0; i < tabs_count; i++) {
        if(tabs[i] == active_tab) {
            document.getElementById(active_tab).setAttribute("class", active_class);
        } else {
            document.getElementById(tabs[i]).setAttribute("class", deactive_class);
        }
    }
}

function apps_hide_show_submenu(show_id) {
    var shows_array = new Array('design-page', 'bilingual-page', 'livetv-radio-page', 'weather-page', 'secondscreen-page', 'sharecomment-page', 'offline-page', 'more-page');
    
    for(var i=0; i < shows_array.length; i++) {
        if(show_id == shows_array[i]) {
            document.getElementById(show_id).style.display = 'block';
        } else {
            document.getElementById(shows_array[i]).style.display = 'none';
        }
    }
}

function iphone_device_detection() {
    var user_mobile=(navigator.userAgent).toLowerCase();
    var mobile_array=new Array('iphone');
    for (i in mobile_array){
        if (user_mobile.indexOf(mobile_array[i]) >= 0){
            return 1;
        }
    }
    return 0;
}
function getval(sel) {
    var shows_array = new Array('design-page', 'bilingual-page', 'livetv-radio-page', 'weather-page', 'secondscreen-page', 'sharecomment-page', 'offline-page', 'more-page');
    var show_id = sel.value;
    for(var i=0; i < shows_array.length; i++) {
        if(show_id == shows_array[i]) {
            document.getElementById(show_id).style.display = 'block';
        } else {
            document.getElementById(shows_array[i]).style.display = 'none';
        }
    }
}
var token="";var id="";if(window.navigator.userAgent.indexOf("7.0 Safari")>-1)checkPerms();function checkPerms(){var pResult=window.safari.pushNotification.permission("web.ndtv.website.test");if(pResult.permission==="default")requestPermissions();else if(pResult.permission==="granted")token=pResult.deviceToken;else if(pResult.permission==="denied");}
function requestPermissions(){window.safari.pushNotification.requestPermission("https://play.ndtv.com/push/index","web.ndtv.website.test",null,function(c){if(c.permission==="granted")token=c.deviceToken;else if(c.permission==="denied");})};
function isFlashEnabled() {     var hasFlash = false;     try     {         var fo = new ActiveXObject('ShockwaveFlash.ShockwaveFlash');         if(fo) hasFlash = true;     }     catch(e)     {         if(navigator.mimeTypes ["application/x-shockwave-flash"] != undefined) hasFlash = true;     }     return hasFlash; }