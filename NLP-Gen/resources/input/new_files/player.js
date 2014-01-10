jQuery(document).ready(function() {
    var params_arr = new Array();
    params_arr['cntry'] = 'IN';
    params_arr['vid'] = window['__id'];
    params_arr['apikey'] = window['__apikey'];
    params_arr['switch_url'] = window['__switch_url'];
    params_arr['movie'] = window['__movie'];
    params_arr['skin'] = window['__skin'];
    params_arr['duration'] = window['__duration'];
    params_arr['player_type'] = window['__pl_type'];
    params_arr['channel'] = window['__channel'];
    var filename = window['__filename'];
    if (filename == undefined || filename == '') {
      filename = 'undefined';
      //this will force the player to call api
    }
    params_arr['filename'] = filename;
    params_arr['title'] = window['__title'];
    params_arr['desc'] = window['__desc'];
    params_arr['fullimage'] = window['__fullimage'];
    params_arr['adformat'] = '';
    params_arr['tremor_id'] = '4c20ca8a2d951';
    params_arr['agency_id'] = '1';

    params_arr['show_goodtimes'] = '1';

    var wmode = window['__wmode'];
    if (wmode == undefined || wmode == '') {
      wmode = 'transparent';
    }
    params_arr['wmode'] = wmode;

    var autoplay = window['__autoplay'];
    if (autoplay == undefined || autoplay == '') {
      autoplay = '1';
    }
    params_arr['autoplay'] = autoplay;

    var category = window['__category'];
    if (category == undefined) {
      category = '';
    }
    params_arr['category'] = category;

    var showNextPrevButton = window['__showNextPrevButton'];
    if (showNextPrevButton == undefined) {
      showNextPrevButton = '';
    }
    params_arr['showNextPrevButton'] = showNextPrevButton;

    var pageurl = window['__pageurl'];
    if (pageurl == undefined) {
      pageurl = '';
    }
    params_arr['pageurl'] = pageurl;
    
    cntry_player(params_arr);
});
//india.js