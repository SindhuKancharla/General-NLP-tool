// textlinks.js

var tileRdm, tileLen, linkLen, linkRdm, textLen, textRdm, linkSet, i;
var insertLinks = function(section){
	switch(section) {
		case 'article':
			linkSet = textlinks_wp_articles;
			break;
		case 'homepage':
			linkSet = textlinks_wp_homepage;
			break;
		case "cityguide":
			linkSet = textlinks_cityguide;
			break;
		case "newsletter":
			linkSet = textlinks_newsletter_politics;
			break;
		case "blog":
			linkSet = textlinks_wp_blog;
			break;
		case "roll":
			linkSet = textlinks_wp_article_roll;
			break;
	}
  
  var $links = $(document.getElementById('wpni_adi_featured_links') || document.getElementById('slug_featured_links'));
	
	if (!$links.length) {
    return false;
	}
  
	
	var len = linkSet.length;
	
	if(!len){
		$('#slug_featured_links, #wpni_adi_featured_links').hide();
		return false;
	}
	
	//print opening section
	$links.append('<div><div id="textlinkWrapper" class="wp_textlinks hasTextLinks"><div><div class="header">Featured Advertiser Links</div><ul id="text_links">');

	for (i = 0;i < len; i++){
		
		//set tile, randomize if an array
		var tile = linkSet[i].tile;
		
		if (typeof tile === "object"){
			tileLen = tile.length;
			tileRdm = Math.floor(Math.random()*tileLen);
			tile = tile[tileRdm];
		}
		
		//set link
		var link = linkSet[i].link;
		//if tileRdm exists, match it
		if (typeof link === "object" && tileRdm !== undefined){
			link = link[tileRdm];
		}
		//if not, and this is an array randomize
		else if (typeof link === "object" && tileRdm === undefined){
			linkLen = link.length;
			linkRdm = Math.floor(Math.random()*linkLen);
			link = link[linkRdm];
		}
		//else, get the link
		else {
			link = linkSet[i].link;
		}
		
		//set text
		var text = linkSet[i].text;
		//if linkLen is defined and this is an array, match it to linkLen
		if (typeof text === "object" && linkRdm !== undefined){
			text = text[linkRdm];
		}
		//if linkLen is not defined and this is an array, randomize
		else if (typeof text === "object" && linkRdm === undefined){
			textLen = text.length;
			textRdm = Math.floor(Math.random()*textLen);
			text = text[textRdm];
		}
		//otherwise, just set text
		else {
			text = linkSet[i].text;
		}
		//create the textlinks, first if it has a tile, then if it doesnt.
		if (linkSet[i].hasOwnProperty('tile')){
			$('#text_links').append('<li><span class="on"><a href="' + link + '" target="_blank" rel="nofollow"><img src="' + tile + '" alt="Click Here!" style="border:0;" />' + text + '</a></span></li>');	
		}
		else {
			$('#text_links').append('<li><span class="on"><a href="' + link + '" target="_blank" rel="nofollow">' + text + '</a></span></li>');
		}
	}
	
	$('#slug_featured_links').css('display','block');
};