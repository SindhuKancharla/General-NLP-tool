    var page = 0;
    var pagethumb=0;
    var pageslide=0;
    var slideshow_id;
function onClickSliderUL(direction,divid,leftmargin,noofitem,timer)
{
    var count = $('ul.slider_'+divid+' > li');
    var counter=Math.ceil(count.length/noofitem);    
    page=parseInt(page)+parseInt(direction);
    if(page<0)
    {
	    page=0;
	    $('#blurid_'+divid).css({"opacity":"0.2"});
	    $('#blurid_'+divid).attr('disabled');
	    return;
    }
    else
    {
	    $('#blurid_'+divid).css({"opacity":"1"});
	    $('#blurid_'+divid).removeAttr('disabled');
    }
    if(page>=counter)
    {
        page=0;
        $('#blurid_'+divid).css({"opacity":"0.2"});
        $('#blurid_'+divid).attr('disabled');
    }
    if(page==0)
    {
	     $('#blurid_'+divid).css({"opacity":"0.2"});
	     $('#blurid_'+divid).attr('disabled');
    }
     $('.slider_'+divid).animate({'margin-left': -(parseInt(leftmargin) * parseInt(page))}, timer, function() {});
      onClickAds("drawbridge_ad");
      ga(parent.document.title,'Slider','Click');
}



function onClickSliderMultimedia(direction,divid,leftmargin,noofitem,timer)
{
       
    var count = $('ul.slider_'+divid+' > li');
   // alert(count.length)
    var counter=Math.ceil(count.length/noofitem);
    //alert(counter)

    page=parseInt(page)+parseInt(direction);
    //alert(page)
    if(page<0)
    {
    page=0;
    $('#blurid_'+divid).css({"opacity":"0.2"});
    $('#blurid_'+divid).attr('disabled');
    return;
    }
    else
    {
    $('#blurid_'+divid).css({"opacity":"1"});
    $('#blurid_'+divid).removeAttr('disabled');
    }


    if(page>=counter)
    {
       page=0;
        $('#blurid_'+divid).css({"opacity":"0.2"});
        $('#blurid_'+divid).attr('disabled');

    }

    if(page==0)
    {
     $('#blurid_'+divid).css({"opacity":"0.2"});
     $('#blurid_'+divid).attr('disabled');
    }
   //alert(page)
$('.slider_'+divid).animate({'margin-left': -(parseInt(leftmargin)*parseInt(page))}, timer, function() {});
   //$('.slider_'+divid).animate({'margin-left': -(parseInt(leftmargin)*parseInt(page)),}, timer, function() {});
    ga(parent.document.title,'Multimedia Slider','Click');
}

function onClickSliderQueryMultimedia(direction,divid,leftmargin,noofitem,timer,title)
{
       
    var count = $('ul.slider_'+divid+'_'+title+' > li');
    var counter=Math.ceil(count.length/noofitem);
    page=parseInt(page)+parseInt(direction);
    if(page<0)
    {
    page=0;
    $('#blurid_'+divid+'_'+title).css({"opacity":"0.2"});
    $('#blurid_'+divid+'_'+title).attr('disabled');
    return;
    }
    else
    {
    $('#blurid_'+divid+'_'+title).css({"opacity":"1"});
    $('#blurid_'+divid+'_'+title).removeAttr('disabled');
    }


    if(page>=counter)
    {
       page=0;
        $('#blurid_'+divid+'_'+title).css({"opacity":"0.2"});
        $('#blurid_'+divid+'_'+title).attr('disabled');

    }

    if(page==0)
    {
     $('#blurid_'+divid+'_'+title).css({"opacity":"0.2"});
     $('#blurid_'+divid+'_'+title).attr('disabled');
    }
   $('.slider_'+divid+'_'+title).animate({'margin-left': -(parseInt(leftmargin)*parseInt(page))}, timer, function() {});
    //ga(parent.document.title,'Multimedia Slider','Click');
}

function autoSliderUL(direction,divid,leftmargin,noofitem,timer)
{

    var count = $('ul.slider_'+divid+' > li');
    var counter=Math.ceil(count.length/noofitem);
    page=parseInt(page)+parseInt(direction);
    if(page<0)
    {
	    page=0;
	    $('#blurid_'+divid).css({"opacity":"0.2"});
	    $('#blurid_'+divid).attr('disabled');
	    return;
    }
    else
    {
	    $('#blurid_'+divid).css({"opacity":"1"});
	    $('#blurid_'+divid).removeAttr('disabled');
	    }


    if(page>=counter)
    {
       page=0;
        $('#blurid_'+divid).css({"opacity":"0.2"});
        $('#blurid_'+divid).attr('disabled');

    }

    if(page==0)
    {
     $('#blurid_'+divid).css({"opacity":"0.2"});
     $('#blurid_'+divid).attr('disabled');
    }
    $('.slider_'+divid).animate({'margin-left': -(parseInt(leftmargin)*parseInt(page))}, timer, function() {});
   //$('.slider_'+divid).animate({'margin-left': -(parseInt(leftmargin)*parseInt(page)),}, timer, function() {});

}

function thumbImages(str,divid,timer,width)
{
	var count = $('ul.slider_'+divid+' > li');
	var thumbdata = "";
	for(var i = 1;i<=count.length;i++)
		  {
		  
			  var j = i - 1;
			//  var idata = $("#t"+i).html();
			var chartArea = document.getElementById('t'+i); 
			//alert(chartArea);
            var idata = chartArea.innerHTML;   
          //  alert(idata)
			  var imgCaption = $("#t"+i+" div").html();
			  //alert(i+"--"+imgCaption)
					idata = idata.replace('class=""','onclick="slidesty('+j+','+timer+','+width+')"');
					idata = idata.replace('height="414" width="621"','height="60" width = "90" alt = "'+imgCaption+'" title = "'+imgCaption+'" style = "cursor:pointer;"');
					idata = idata.replace('div', 'div style = "display:none;"');
			  // alert(idata);
			  if(j=='0')
			  {
			  //alert(j);
			    thumbdata +=  "<li id = 'thumb_li_"+j+"' style = 'opacity:0.5;'>"+idata+"</li>";
			  }
			  else
			  {
			    thumbdata +=  "<li id = 'thumb_li_"+j+"'>"+idata+"</li>";
		      }
		  }
		  //alert(thumbdata);
          $("#"+str).html(thumbdata);
          if(count.length=='5')
          {
             $('#blurid_thumb_next').css({"opacity":"0.2"});
	         $('#blurid_thumb_next').removeAttr('disabled');
	      }
          
}  

function slidesty(page,timer,width){ thumbRotate(page,timer,width); onClickChangeURL(page,'Slideshow','Click');
}
function slidestystory(page,timer,width,slideshow_id){  thumbRotateStory(page,timer,width,slideshow_id); onClickChangeURL(page,'Slideshow','Click');
}

var pageslide = 0;
function thumbRotate(page,timer,width)
   { 
      $('.slider_sty').animate({'margin-left': -(width)*page}, timer, function()
       {
            $("li[id^=thumb_li_]").css({"opacity":"1"});
            $('#thumb_li_'+page).css({"opacity":"0.5"});
            $('#thumb_li_'+page).attr('disabled');
            
            if(page != '0')
            {
            $('#blurid_thumb').css({"opacity":"1"});
	        $('#blurid_thumb').removeAttr('disabled');
	        $('#prev_sty').show();
            }
            //onClickAds("mm_ad");
           
            pageslide = page;
            pagethumb = page;
            
            return;
 	});

}
function thumbRotateStory(page,timer,width,slideshow_id)
   { 
      $('.slider_sty_'+slideshow_id).animate({'margin-left': -(width)*page}, timer, function()
       {
            $("li[id^=thumb_li_"+slideshow_id+"]").css({"opacity":"1"});
            $('#thumb_li_'+slideshow_id+"_"+page).css({"opacity":"0.5"});
            $('#thumb_li_'+slideshow_id+"_"+page).attr('disabled');
            
            if(page != '0')
            {
            $('#blurid_thumb_'+slideshow_id).css({"opacity":"1"});
	        $('#blurid_thumb_'+slideshow_id).removeAttr('disabled');
	        $('#prev_sty_'+slideshow_id).show();
            }
           // onClickAds("mm_ad");
            pageslide = page;
            pagethumb = page;
            
            return;
 	});

}

	

function onClickChangeURL(page,category,action)
{
        var currentTitle = parent.document.title;
        var currentURL = window.location.href;
        var slide = currentURL.split('-').length - 1;
		currentURL = currentURL.split('/');	
		var n = currentURL[currentURL.length-1].split('.'); 	
		var sName = n[0];
		if(currentURL[currentURL.length-1] != '')
		{ 
	        currentURL.push('');
		}
        if(slide)
		{
			 currentURL.splice(-2,2,'');	
			 var newHref=sName+".html?p="+parseInt(page+1);
		}
		else
		{
			var newhref=currentURL[currentURL.length-1].split('.');
			var newHref=sName+".html?p="+parseInt(page+1);
			currentURL.splice(-2,2,'');
        }
        if(history.pushState)
		{ 
			var newtitle = parent.document.title.split("|");
			newtitle = newtitle['0'] + " | " + parseInt(page+1);
         history.pushState({'i':i},  newtitle ,currentURL.join('/')+newHref);
        } 
		else 
		{		 
				window.location.hash = newHref;
        }
        ga(newtitle,category,action);
}

function onClickSliderULSlideshow(direction,divid,leftmargin,noofitem,timer)
{

  var count = $('ul.slider_'+divid+' > li');
  
  var counter=Math.ceil(count.length/noofitem);
  if(pageslide != '0')
  {
    page=parseInt(pageslide)+parseInt(direction);
  }
  else
  {
    page=parseInt(page)+parseInt(direction);
  }
 // alert(page)
    $("li[id^=thumb_li_]").css({"opacity":"1"});
    $('#thumb_li_'+page).css({"opacity":"0.5"});
    $('#thumb_li_'+page).attr('disabled');
    
    if(page > 4 && direction == 1)
    {
      onClickSliderULThumb('1','thumb','118','1','500');
    }
    if(page < 4 && direction == -1)
    {
      onClickSliderULThumb('-1','thumb','118','1','500');
    }

    if(page<0)
    {
	    page=0;
	    $('#blurid_'+divid).css({"opacity":"0.2"});
	    $('#blurid_'+divid).attr('disabled');
	    return;
    }
    else
    {
	    $('#blurid_'+divid).css({"opacity":"1"});
	    $('#blurid_'+divid).removeAttr('disabled');
    }

   if(page==(counter-1)){$('#next_'+divid).show();}else{$('#prev_'+divid).show();}
    
    if(page>=counter)
    {
        page=0;
        $('#blurid_'+divid).css({"opacity":"0.2"});
        $('#blurid_'+divid).attr('disabled');
    }
    

    if(page==0)
    {
     $('#blurid_'+divid).css({"opacity":"0.2"});
     $('#blurid_'+divid).attr('disabled');
    }
   // onClickAds("mm_ad");
    $('.slider_'+divid).animate({'margin-left': -(parseInt(leftmargin)*parseInt(page))}, timer, function() {pageslide=0;});
   //$('.slider_'+divid).animate({'margin-left': -(parseInt(leftmargin)*parseInt(page)),}, timer, function() {pageslide=0;});
   
  onClickChangeURL(page,'Slideshow','Click');
}

var slideShowId;
function onClickSliderULSlideshowStory(direction,divid,leftmargin,noofitem,timer,slideshow_id)
{
	if (slideShowId != slideshow_id) {
		page = 0;
		slideShowId = slideshow_id;
	}
		

  var count = $('ul.slider_'+divid+'_'+slideshow_id+' > li');
  var counter=Math.ceil(count.length/noofitem);
  if(pageslide != '0')
  {
    page=parseInt(pageslide)+parseInt(direction);
  }
  else
  {
    page=parseInt(page)+parseInt(direction);
  }
  //alert(page)
    $("li[id^=thumb_li_"+slideshow_id+"]").css({"opacity":"1"});
    $('#thumb_li_'+slideshow_id+'_'+page).css({"opacity":"0.5"});
    $('#thumb_li_'+slideshow_id+'_'+page).attr('disabled');
    
    if(page > 4 && direction == 1)
    {
      onClickSliderULThumbStory('1','thumb','118','1','500',slideshow_id);
    }
    if(page < 4 && direction == -1)
    {
      onClickSliderULThumbStory('-1','thumb','118','1','500',slideshow_id);
    }

    if(page<0)
    {
	    page=0;
	    $('#blurid_'+divid+'_'+slideshow_id).css({"opacity":"0.2"});
	    $('#blurid_'+divid+'_'+slideshow_id).attr('disabled');
	    return;
    }
    else
    {
	    $('#blurid_'+divid+'_'+slideshow_id).css({"opacity":"1"});
	    $('#blurid_'+divid+'_'+slideshow_id).removeAttr('disabled');
    }

   if(page==(counter-1)){$('#next_'+divid+'_'+slideshow_id).show();}else{$('#prev_'+divid+'_'+slideshow_id).show();}
    
    if(page>=counter)
    {
        page=0;
        $('#blurid_'+divid+'_'+slideshow_id).css({"opacity":"0.2"});
        $('#blurid_'+divid+'_'+slideshow_id).attr('disabled');
    }
    

    if(page==0)
    {
     $('#blurid_'+divid+'_'+slideshow_id).css({"opacity":"0.2"});
     $('#blurid_'+divid+'_'+slideshow_id).attr('disabled');
    }
   // onClickAds("mm_ad");
    ga(parent.document.title,'Story Multimedia Slider','Click');
    $('.slider_'+divid+'_'+slideshow_id).animate({'margin-left': -(parseInt(leftmargin)*parseInt(page))}, timer, function() {pageslide=0;});
   //$('.slider_'+divid+'_'+slideshow_id).animate({'margin-left': -(parseInt(leftmargin)*parseInt(page)),}, timer, function() {pageslide=0;});
   
  // onClickChangeURL(page);
}

function onClickSliderULThumb(directionthumb,divid,leftmarginthumb,noofitemthumb,timerthumb)
{


    var countthumb = $('ul.slider_'+divid+' > li');
    var counterthumb=Math.ceil(countthumb.length/noofitemthumb);
    //alert(counterthumb);

    counterthumb = counterthumb - 4;
    pagethumb=parseInt(pagethumb)+parseInt(directionthumb);
  
    if(pagethumb<0)
    {
      pagethumb=0;
      $('#blurid_'+divid).css({"opacity":"0.2"});
      $('#blurid_'+divid).attr('disabled');
    return;
    }
    else
    {
    $('#blurid_'+divid).css({"opacity":"1"});
    $('#blurid_'+divid).removeAttr('disabled');
    }


    if(pagethumb>=counterthumb)
    {
       pagethumb=0;
        $('#blurid_'+divid).css({"opacity":"0.2"});
        $('#blurid_'+divid).attr('disabled');

    }
    if(pagethumb==0)
    {
     $('#blurid_'+divid).css({"opacity":"0.2"});
     $('#blurid_'+divid).attr('disabled');
    }
   // onClickAds("mm_ad");

$('.slider_'+divid).animate({'margin-left': -(parseInt(leftmarginthumb)*parseInt(pagethumb))}, timerthumb, function()
   //$('.slider_'+divid).animate({'margin-left': -(parseInt(leftmarginthumb)*parseInt(pagethumb)),}, timerthumb, function()
    {});
   //   ga(parent.document.title,'Thumbnail Slider','Click');
}
function onClickSliderULThumbStory(directionthumb,divid,leftmarginthumb,noofitemthumb,timerthumb,slideshow_id)
{

//alert(slideshow_id);
    var countthumb = $('ul.slider_'+divid+'_'+slideshow_id+' > li');
// alert('ul.slider_'+divid+'_'+slideshow_id+' > li')
    var counterthumb=Math.ceil(countthumb.length/noofitemthumb);
  //alert(counterthumb);

    counterthumb = counterthumb - 4;
    pagethumb=parseInt(pagethumb)+parseInt(directionthumb);
  
    if(pagethumb<0)
    {
      pagethumb=0;
      $('#blurid_'+divid+'_'+slideshow_id).css({"opacity":"0.2"});
      $('#blurid_'+divid+'_'+slideshow_id).attr('disabled');
    return;
    }
    else
    {
    $('#blurid_'+divid+'_'+slideshow_id).css({"opacity":"1"});
    $('#blurid_'+divid+'_'+slideshow_id).removeAttr('disabled');
    }


    if(pagethumb>=counterthumb)
    {
       pagethumb=0;
        $('#blurid_'+divid+'_'+slideshow_id).css({"opacity":"0.2"});
        $('#blurid_'+divid+'_'+slideshow_id).attr('disabled');

    }

    if(pagethumb==0)
    {
     $('#blurid_'+divid+'_'+slideshow_id).css({"opacity":"0.2"});
     $('#blurid_'+divid+'_'+slideshow_id).attr('disabled');
    }
//onClickAds("mm_ad");
//ga(parent.document.title,'Story Thumbnail Slider','Click');

$('.slider_'+divid+'_'+slideshow_id).animate({'margin-left': -(parseInt(leftmarginthumb)*parseInt(pagethumb))}, timerthumb, function()
   //$('.slider_'+divid).animate({'margin-left': -(parseInt(leftmarginthumb)*parseInt(pagethumb)),}, timerthumb, function()
    {});

}

var myWidth;
var myHeight;

// jw player
function playVideo(url) {
myWidth = window.innerWidth;
myHeight = window.innerHeight; 
//alert(myWidth)
if(myWidth > 1 && myWidth <= 230)
{
jwplayer("mediaplayer").setup({
			flashplayer: "/r/SysConfig/WebPortal/LiveMint/static_content/js/jwplayer/player_nw.swf",
			file: url,
			height: 190,
			width: 179,
			skin: "/r/SysConfig/WebPortal/LiveMint/static_content/js/jwplayer/glow_nw.zip",
			'plugins': 'audiodescription,captions'
		});
}
else if(myWidth > 230 && myWidth <= 239)
{
jwplayer("mediaplayer").setup({
			flashplayer: "/r/SysConfig/WebPortal/LiveMint/static_content/js/jwplayer/player_nw.swf",
			file: url,
			height: 175,
			width: 204,
			skin: "/r/SysConfig/WebPortal/LiveMint/static_content/js/jwplayer/glow_nw.zip",
			'plugins': 'audiodescription,captions'
		});
}
else if(myWidth > 239 && myWidth <= 281)
{
jwplayer("mediaplayer").setup({
			flashplayer: "/r/SysConfig/WebPortal/LiveMint/static_content/js/jwplayer/player_nw.swf",
			file: url,
			height: 190,
			width: 226,
			skin: "/r/SysConfig/WebPortal/LiveMint/static_content/js/jwplayer/glow_nw.zip",
			'plugins': 'audiodescription,captions'
		});
}
else if(myWidth > 281 && myWidth <= 312)
{
jwplayer("mediaplayer").setup({
			flashplayer: "/r/SysConfig/WebPortal/LiveMint/static_content/js/jwplayer/player_nw.swf",
			file: url,
			height: 200,
			width: 265,
			skin: "/r/SysConfig/WebPortal/LiveMint/static_content/js/jwplayer/glow_nw.zip",
			'plugins': 'audiodescription,captions'
		});
}
else if(myWidth > 312 && myWidth <= 360)
{
//alert("asdf");
jwplayer("mediaplayer").setup({
			flashplayer: "/r/SysConfig/WebPortal/LiveMint/static_content/js/jwplayer/player_nw.swf",
			file: url,
			height: 200,
			width: 299,
			skin: "/r/SysConfig/WebPortal/LiveMint/static_content/js/jwplayer/glow_nw.zip",
			'plugins': 'audiodescription,captions'
		});
}
else if(myWidth > 360 && myWidth <= 400)
{
//alert("asdf");
jwplayer("mediaplayer").setup({
			flashplayer: "/r/SysConfig/WebPortal/LiveMint/static_content/js/jwplayer/player_nw.swf",
			file: url,
			height: 215,
			width: 346,
			skin: "/r/SysConfig/WebPortal/LiveMint/static_content/js/jwplayer/glow_nw.zip",
			'plugins': 'audiodescription,captions'
		});
}
else if(myWidth > 400 && myWidth <= 426)
{
//alert("asdf");
jwplayer("mediaplayer").setup({
			flashplayer: "/r/SysConfig/WebPortal/LiveMint/static_content/js/jwplayer/player_nw.swf",
			file: url,
			height: 235,
			width: 367,
			skin: "/r/SysConfig/WebPortal/LiveMint/static_content/js/jwplayer/glow_nw.zip",
			'plugins': 'audiodescription,captions'
		});
}
else if(myWidth > 426 && myWidth <= 480)
{
//alert("asdf");
jwplayer("mediaplayer").setup({
			flashplayer: "/r/SysConfig/WebPortal/LiveMint/static_content/js/jwplayer/player_nw.swf",
			file: url,
			height: 275,
			width: 413,
			skin: "/r/SysConfig/WebPortal/LiveMint/static_content/js/jwplayer/glow_nw.zip",
			'plugins': 'audiodescription,captions'
		});
}
else if(myWidth > 480 && myWidth <= 539)
{
//alert("asdf");
jwplayer("mediaplayer").setup({
			flashplayer: "/r/SysConfig/WebPortal/LiveMint/static_content/js/jwplayer/player_nw.swf",
			file: url,
			height: 300,
			width: 466,
			skin: "/r/SysConfig/WebPortal/LiveMint/static_content/js/jwplayer/glow_nw.zip",
			'plugins': 'audiodescription,captions'
		});
}
else if(myWidth > 539 && myWidth <= 599)
{
jwplayer("mediaplayer").setup({
			flashplayer: "/r/SysConfig/WebPortal/LiveMint/static_content/js/jwplayer/player_nw.swf",
			file: url,
			height: 360,
			width: 526,
			skin: "/r/SysConfig/WebPortal/LiveMint/static_content/js/jwplayer/glow_nw.zip",
			'plugins': 'audiodescription,captions'
		});
}
else if(myWidth > 599 && myWidth <= 639)
{
jwplayer("mediaplayer").setup({
			flashplayer: "/r/SysConfig/WebPortal/LiveMint/static_content/js/jwplayer/player_nw.swf",
			file: url,
			height: 400,
			width: 586,
			skin: "/r/SysConfig/WebPortal/LiveMint/static_content/js/jwplayer/glow_nw.zip",
			'plugins': 'audiodescription,captions'
		});
}
else if(myWidth > 639 && myWidth <= 767)
{
jwplayer("mediaplayer").setup({
			flashplayer: "/r/SysConfig/WebPortal/LiveMint/static_content/js/jwplayer/player_nw.swf",
			file: url,
			height: 400,
			width: 626,
			skin: "/r/SysConfig/WebPortal/LiveMint/static_content/js/jwplayer/glow_nw.zip",
			'plugins': 'audiodescription,captions'
		});
}
else if(myWidth > 767 && myWidth <= 799)
{
jwplayer("mediaplayer").setup({
			flashplayer: "/r/SysConfig/WebPortal/LiveMint/static_content/js/jwplayer/player_nw.swf",
			file: url,
			height: 550,
			width: 758,
			skin: "/r/SysConfig/WebPortal/LiveMint/static_content/js/jwplayer/glow_nw.zip",
			'plugins': 'audiodescription,captions'
		});
}
else if(myWidth > 799 && myWidth <= 1023)
{

jwplayer("mediaplayer").setup({
			flashplayer: "/r/SysConfig/WebPortal/LiveMint/static_content/js/jwplayer/player_nw.swf",
			file: url,
			height: 550,
			width: 786,
			skin: "/r/SysConfig/WebPortal/LiveMint/static_content/js/jwplayer/glow_nw.zip",
			'plugins': 'audiodescription,captions'
		});
}
else
{

 jwplayer("mediaplayer").setup({
			flashplayer: "/r/SysConfig/WebPortal/LiveMint/static_content/js/jwplayer/player_nw.swf",
			file: url,
			height: 450,
			width: 660,
			skin: "/r/SysConfig/WebPortal/LiveMint/static_content/js/jwplayer/glow_nw.zip",
			'plugins': 'audiodescription,captions'
		});
}
		}	
		//drawbridge
		function drawbridge(url) {
		$("#mediaplayer").html('<img src="'+url+'"/>');			
		}		
function mostViewed(url,adstr,mm_headline)
	 {
	   document.getElementById('mm_headline').innerHTML=mm_headline;
	   onClickAds(adstr);
	   playVideo(url);
	  }	
	 function onClickAds(adstr)
     {  
	var adcode = $("#"+adstr).html();
	var div = document.getElementById( adstr );
	//alert(adcode);
	if( div ){div.innerHTML = adcode;}
}
function slidestystory_3Columns(page,timer,width,slideshow_id){  thumbRotateStory_3Columns(page,timer,width,slideshow_id); onClickChangeURL(page,'Slideshow','Click');
}


function thumbRotateStory_3Columns(page,timer,width,slideshow_id)
   { 
      $('.slider_sty_'+slideshow_id).animate({'margin-left': -(width)*page}, timer, function()
       {
            $("li[id^=thumb_li_"+slideshow_id+"]").css({"opacity":"1"});
            $('#thumb_li_'+slideshow_id+"_"+page).css({"opacity":"0.5"});
            $('#thumb_li_'+slideshow_id+"_"+page).attr('disabled');
            
            if(page != '0')
            {
            $('#blurid_thumb_'+slideshow_id).css({"opacity":"1"});
	        $('#blurid_thumb_'+slideshow_id).removeAttr('disabled');
	        $('#prev_sty_'+slideshow_id).show();
            }
        //    onClickAds("mm_ad");
            pageslide = page;
            pagethumb = page;
            
            return;
 	});

}

function onClickSliderULSlideshowStory_3Columns(direction,divid,leftmargin,noofitem,timer,slideshow_id)
{
	if (slideShowId != slideshow_id) {
		page = 0;
		slideShowId = slideshow_id;
	}
		

  var count = $('ul.slider_'+divid+'_'+slideshow_id+' > li');
  var counter=Math.ceil(count.length/noofitem);
  //alert(counter);
  if(pageslide != '0')
  {
    page=parseInt(pageslide)+parseInt(direction);
  }
  else
  {
    page=parseInt(page)+parseInt(direction);
  }
  //alert(page);
    $("li[id^=thumb_li_"+slideshow_id+"]").css({"opacity":"1"});
    $('#thumb_li_'+slideshow_id+'_'+page).css({"opacity":"0.5"});
    $('#thumb_li_'+slideshow_id+'_'+page).attr('disabled');
    
    if(page > 3 && direction == 1)
    {
      onClickSliderULThumbStory_3Columns('1','thumb','108','1','500',slideshow_id);
    }
    if(page < 3 && direction == -1)
    {
      onClickSliderULThumbStory_3Columns('-1','thumb','108','1','500',slideshow_id);
    }

    if(page<0)
    {
	    page=0;
	    $('#blurid_'+divid+'_'+slideshow_id).css({"opacity":"0.2"});
	    $('#blurid_'+divid+'_'+slideshow_id).attr('disabled');
	    return;
    }
    else
    {
	    $('#blurid_'+divid+'_'+slideshow_id).css({"opacity":"1"});
	    $('#blurid_'+divid+'_'+slideshow_id).removeAttr('disabled');
    }

   if(page==(counter-1)){$('#next_'+divid+'_'+slideshow_id).show();}else{$('#prev_'+divid+'_'+slideshow_id).show();}
    
    if(page>=counter)
    {
        page=0;
        $('#blurid_'+divid+'_'+slideshow_id).css({"opacity":"0.2"});
        $('#blurid_'+divid+'_'+slideshow_id).attr('disabled');
    }
    

    if(page==0)
    {
     $('#blurid_'+divid+'_'+slideshow_id).css({"opacity":"0.2"});
     $('#blurid_'+divid+'_'+slideshow_id).attr('disabled');
    }
    //onClickAds("mm_ad");
    ga(parent.document.title,'Story Multimedia Slider','Click');
    $('.slider_'+divid+'_'+slideshow_id).animate({'margin-left': -(parseInt(leftmargin)*parseInt(page))}, timer, function() {pageslide=0;});
   //$('.slider_'+divid+'_'+slideshow_id).animate({'margin-left': -(parseInt(leftmargin)*parseInt(page)),}, timer, function() {pageslide=0;});
   
  // onClickChangeURL(page);
}

function onClickSliderULThumbStory_3Columns(directionthumb,divid,leftmarginthumb,noofitemthumb,timerthumb,slideshow_id)
{
    var countthumb = $('ul.slider_'+divid+'_'+slideshow_id+' > li');
    var counterthumb=Math.ceil(countthumb.length/noofitemthumb);

    counterthumb = counterthumb - 3;
    pagethumb=parseInt(pagethumb)+parseInt(directionthumb);
 // alert(pagethumb);
    if(pagethumb<0)
    {
      pagethumb=0;
      $('#blurid_'+divid+'_'+slideshow_id).css({"opacity":"0.2"});
      $('#blurid_'+divid+'_'+slideshow_id).attr('disabled');
    return;
    }
    else
    {
    $('#blurid_'+divid+'_'+slideshow_id).css({"opacity":"1"});
    $('#blurid_'+divid+'_'+slideshow_id).removeAttr('disabled');
    }


    if(pagethumb>=counterthumb)
    {
       pagethumb=0;
        $('#blurid_'+divid+'_'+slideshow_id).css({"opacity":"0.2"});
        $('#blurid_'+divid+'_'+slideshow_id).attr('disabled');

    }

    if(pagethumb==0)
    {
     $('#blurid_'+divid+'_'+slideshow_id).css({"opacity":"0.2"});
     $('#blurid_'+divid+'_'+slideshow_id).attr('disabled');
    }
$('.slider_'+divid+'_'+slideshow_id).animate({'margin-left': -(parseInt(leftmarginthumb)*parseInt(pagethumb))}, timerthumb, function()
    {});

}
