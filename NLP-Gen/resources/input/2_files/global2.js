/* site cookie */

function setCookie(c_name,value,exdays){
var exdate=new Date();
exdate.setDate(exdate.getDate() + exdays);
var c_value=escape(value) + ((exdays==null) ? "" : "; expires="+exdate.toUTCString());
document.cookie=c_name + "=" + c_value;
}
setCookie('DNA','1','30');

/* mobile header*/

            $(document).ready(function(){
                var count1 = 0;
                var count2 = 0;
                $("#menu-mobile-button-dna").click(function() {
                    count1++;
                                $('.menu-mobile').css('display','none');
                                $('#menu-mobile-dna').css('display','block');
                    var isEven = function(someNumber) {
                        return (someNumber % 2 === 0) ? true : false;
                    };
                    if (isEven(count1) === false) {
                                        $('#menu-mobile-dna').css('display','block');
                        $('#content,#menu-mobile-buttons').animate({left: '12rem'}, 100 );
                                        $('html,body').css('overflow-x','hidden');
                                        $('#menu-mobile-button-dna').css('opacity','.5');
                    } else if (isEven(count1) === true) {
                        $('#content,#menu-mobile-buttons').animate({left: 0}, 100 );
                                        $('html,body').css('overflow-x','auto');
                                        $('#menu-mobile-button-dna').css('opacity','1');
                                        $('#menu-mobile-dna').css('display','none');
                    }
                    $("html, body").animate({ scrollTop: 0 }, "fast");
                });

                $("#menu-mobile-button-ind").click(function() {
                    count2++;
                                $('.menu-mobile').css('display','none');
                                $('#menu-mobile-ind').css('display','block');
                    var isEven2 = function(someNumber2) {
                        return (someNumber2 % 2 === 0) ? true : false;
                    };
                    if (isEven2(count2) === false) {
                                          $('#menu-mobile-ind').css('display','block');
                        $('#content,#menu-mobile-buttons').animate({left: '-10rem'}, 100 );
                                        $('html,body').css('overflow-x','hidden');
                                        $('#menu-mobile-button-ind').css('opacity','.8');
                    } else if (isEven2(count2) === true) {
                        $('#content,#menu-mobile-buttons').animate({left: '0rem'}, 100 );
                                        $('html,body').css('overflow-x','auto');
                                        $('#menu-mobile-button-ind').css('opacity','1');
                                $('#menu-mobile-ind').css('display','none');
                    }
                    $("html, body").animate({ scrollTop: 0 }, "fast");
                });
            });
$(window).resize(function() {
        if($(window).width()>=800){
                                $('#menu-mobile-dna').css('display','none');
                                $('#menu-mobile-ind').css('display','none');
        }
});

   
    /* Sticky header code (all pages) */
if($(window).width()<=1023){
    var header = $('#header');
    var start = $(header).offset().top;
    $.event.add(window, "scroll", function() {
        var p = $(window).scrollTop();
        $(header).css('position',((p)>start) ? 'fixed' : 'static');
        if(p>start){
		$('#midheader').addClass('midheader-min');
		$('.nav-ad').css('display', 'none');
	}else{
		$('#midheader').removeClass('midheader-min');
		$('.nav-ad').css('display', 'inline-block');
	}
        $(header).css('top',((p)>start) ? '0px' : '');
    });
}
    /* Function to move content blocks on homepage */
    var moved = false;
    function responsive(){
	   var winWidth = $(window).width();
	   if((winWidth <= 480)){
               moved = true;
		$('.topnews').hide();
		$('.topnews').insertAfter('.pod');
		$('.topnews').show();
  	   }else{
               if(moved){
		$('.topnews').hide();
		$('.topnews').insertBefore('.leadnews');
		$('.topnews').show();
		$('.leadnews').hide();
		$('.leadnews').insertBefore('.pod');
		$('.leadnews').show();
               }
           }
    }

    /* Code for popular tabs*/
    $(document).ready(function () {
        $('#popular').tabify();
    });


    /* Code to initialize slider*/
    
    $(document).ready(function(){
      $('.slider').bxSlider(
        {
            preloadImages: 'all',
            captions: 'true',
            pager:false,
            mode: 'horizontal',
            speed: '400',
            easing: 'easing-in',
            adaptiveHeight: 'true',
            useCSS: 'true',
            touchEnabled: 'true',
            swipeThreshold: '20',
            oneToOneTouch: 'true',
        }

      );
    });

				/* Code to switch big and small headers */
				
            $(document).ready(function(){
                  opacity = 0;
                  windowTop = $(window).scrollTop();
                  $(window).scroll(function() {
                  //console.log("windowTop:"+windowTop);
                  windowTop = $(window).scrollTop();
                    if(windowTop>=10 && windowTop<230){
                      var opacity = ((100-(((windowTop-80)*2)))/100)-.4;
                      $('#header').css('opacity', opacity);
                      $('.social-links').css('opacity', 1);
                      //console.log("windowTop1:"+windowTop);
                      //console.log("opacity:"+opacity);
                    }else{
                      $('#header').css('opacity', '1');
                      //console.log("windowTop2:"+windowTop);
                      //console.log("opacity:"+opacity);
                    }
                  }
            )
            });				    

    
            function pvc(id){
              dnahost = 'www.dnaindia.com';
              sessid = new Date();
              sessid = sessid.getTime();
              if(document.location.host==dnahost && document.location.protocol=='http:'){
              $.post("http://"+dnahost+"/system/pvc.php", { "cid": id, "sid": sessid },
               function(message) {
                 //console.log(message);
               });
              }
            }

var voted = new Array();

function answer(qtnno,opt){
  if (voted[qtnno] == 1){
  alert("No cheating!");
  return false;
  }
  voted[qtnno] = 1;
  //document.getElementById("ans"+qtnno).style.fontWeight = "Bold";
  //opt.style.fontWeight = "Bold";
  if(opt.value == 1){
    if(!document.getElementById("ans-div-"+qtnno)){
      document.getElementById("ans"+qtnno).style.color = "green";
    }
    if(document.getElementById("res-"+qtnno)){
      document.getElementById("res-"+qtnno).innerHTML = "Right answer!"+"&nbsp;";
    }
  }
  else{
    if(!document.getElementById("ans-div-"+qtnno)){
      document.getElementById("ans"+qtnno).style.color = "red";
    }
    if(document.getElementById("res-"+qtnno)){
      correct_answer = document.getElementById("ans"+qtnno).innerHTML;
      document.getElementById("res-"+qtnno).innerHTML = "Wrong answer!"+"&nbsp;";
      document.getElementById("res-"+qtnno).innerHTML = correct_answer+" is the right answer."+"&nbsp;";
    }
  }
  if(document.getElementById("info"+qtnno)){
    document.getElementById("info"+qtnno).style.display = "block";
  }
  if(document.getElementById("ans-div-"+qtnno)){
    document.getElementById("ans-div-"+qtnno).style.backgroundColor = "#eaeaea";
  }
}

function show_hl_share_buttons(id){
  $('#shares_'+id).hide();
  $('#shares_buttons_'+id).show();
}

function hide_hl_share_buttons(id){
  $('#shares_'+id).show();
  $('#shares_buttons_'+id).hide();
}

	//The pop-up function
	var matchClass=['popup_fb','popup_tw','popup_gp'];
	var popup_fb = 'width=400,height=300,toolbar=0,menubar=0,location=0,status=0,scrollbars=1,resizable=1,left=40,top=40';
	var popup_tw = 'width=400,height=480,toolbar=0,menubar=0,location=0,status=0,scrollbars=1,resizable=1,left=40,top=40';
	var popup_gp = 'width=400,height=490,toolbar=0,menubar=0,location=0,status=0,scrollbars=1,resizable=1,left=40,top=40';
	function tfpop(){
			var x = 0;
			var popClass;
			while(x < matchClass.length){
					popClass = "'."+matchClass[x]+"'";
					$(eval(popClass)).click(function() {
							var popurl = $(this).attr('href');
							var popupSpecs = $(this).attr('class');
							var popupName = Math.floor(Math.random()*10000001);
							newwindow=window.open(popurl,popupName,eval(popupSpecs));
							return false;
					});							
			x++;
			} 
	}
	$(function() {
		tfpop();
	});
