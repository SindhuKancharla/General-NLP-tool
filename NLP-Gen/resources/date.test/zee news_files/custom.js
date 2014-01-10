var search = false;
var subs = false;
(function($) {
  $(document).ready(function() {

    mainMenuLinks();

    headerSearchSubscribe();

    mostPopularOnHomepage();

    homepageMainCarouselTabs();

    carouselPaginationActiveClassToggle();

    swipeCarousel();

    sharebarOnFullstory();

    SharedViewedQuicktabs();

    showmenuonclick();

    showhidesearchblock();

    showhidesuscribeblock();

    bootstrapCarouselExtend();

    showhidesubnavmenu();

    youtubevideos();

    $.fn.carousel.defaults = {
      interval: false,
      pause: true
    }

    photosNumber();

    videosnumber();

    showbizfullscreen();

/**
 * IE Hack.
 */
  $('.page-slideshows .thumbnails .thumbnail:nth-child(3n+3), .page-wallpaper .thumbnails .thumbnail:nth-child(3n+3), .page-photos .thumbnail:nth-child(4n+4)').css('margin-right', '0');

  });

$(window).scroll(function () {
  var scrollAmount = $(window).scrollTop();
  if(scrollAmount > 100) {
    $('body').addClass('scrolled-top');
  }
  else {
    $('body,.navigation-bar,.headersection').removeClass('scrolled-top');
  }
});

  $(window).load(function() {
    adjustviewport();

    $(function() {
      $("img").unveil();
    });

    $('.addthis_floating_style').css('top', $('.headersection').height()+$('#navigation-bar').height()+80+'px');

    $('#footer-second').hide();

    adjustcarousel($(window).width());

    equalHeightBlocks();

    otherRandomthings();

    if ($('.article-slideshow').length > 0) {
      resizeToCover($('.article-slideshow .carousel-inner .item'), $('.article-slideshow .carousel-inner'));
    }

    scorebaordcarousel($(window).width());

    if (jQuery('#big-display-mode').length > 0) {
      $('#bb-bookblock .scroller').width($(window).width());
      var header= $('.headersection').height()+$('#navigation-bar').height();
      var height = $(window).height() - header;
      $('#bb-bookblock .scroller').height(height);
      $('#big-display-mode #container').css('top', header + 'px');

    }

  });

if($('html').hasClass('ie8') == false) {
  $(window).resize(function() {

  if (jQuery('#big-display-mode').length > 0) {
      $('#bb-bookblock .scroller').width($(window).width());
      var height = $(window).height() - ($('.headersection').height()+$('#navigation-bar').height());
      $('#bb-bookblock .scroller').height(height);
    }

    adjustviewport();

    adjustcarousel($(window).width());

    equalHeightBlocks();

    if (jQuery('#big-display-mode').length > 0) {
      resizeToCover($('.scroller'), $('#container'));
    }

    if($('.article-slideshow').length > 0) {
      resizeToCover($('.article-slideshow .carousel-inner .item'), $('.article-slideshow .carousel-inner'));
    }
  });
}

})($);


  function adjustviewport() {
  var flag = false;
    if ($(window).width() > 480 && $(window).width() < 800) {
      $('#right-sidebar').masonry({
        itemSelector: '.section'
      });
      $('.column-third').masonry({
        itemSelector: '[class*="block--"]'
      });
      flag = true;
    }
    if(flag && $(window).width() < 480 && $(window).width() > 800){
        $('#right-sidebar').masonry('destroy');
        $('.column-third').masonry('destroy');
        flag = false;
    }
  }

  function adjustcarousel(width) {
    if ( width < 480) {
      setfooter(2);
      photosCarousel(3);
      videosMainCarousel('hoz', 2);
      if (jQuery('.page-videos').length > 0) {
        videoPageContentareaCarousels(1, 1);
        var visiblewidth = $('.column-two').width();
        $('.column-two .thumbnails > li').outerWidth(visiblewidth);
      }
    }
    if (width >= 480 && width <= 600) {
      setfooter(3);
      photosCarousel(3);
      videosMainCarousel('hoz', 2);
      if (jQuery('.page-videos').length > 0) {
        videoPageContentareaCarousels(2, 2);
        var visiblewidth = $('.column-two').width()-10;
        var itemwidth = visiblewidth/2;
        $('.column-two .thumbnails > li').outerWidth(itemwidth);
        $('.page-videos .column-two .thumbnails li:nth-child(2n+2)').css('margin-right', '0');
      }
    }

    if (width > 600 && width <= 800) {
      setfooter(4);
      photosCarousel(4);
      videosMainCarousel('hoz', 3);
      if (jQuery('.page-videos').length > 0) {
        videoPageContentareaCarousels(2, 2);
        var visiblewidth = $('.column-two').width()-10;
        var itemwidth = visiblewidth/2;
        $('.column-two .thumbnails > li').outerWidth(itemwidth);
        $('.page-videos .column-two .thumbnails li:nth-child(2n+2)').css('margin-right', '0');
      }
    }
    if (width > 800 && width <= 1024) {
      setfooter(5);
      photosCarousel(6);
      videosMainCarousel('vert', 3);
      if (jQuery('.page-videos').length > 0) {
        videoPageContentareaCarousels(3, 3);
        var visiblewidth = $('.column-two').width()-20;
        var itemwidth = visiblewidth/3;
        $('.column-two .thumbnails > li').outerWidth(itemwidth);
        $('.page-videos .column-two .thumbnails li:nth-child(3n+3)').css('margin-right', '0');
      }
    }
    if (width > 1024) {
      setfooter(6);
      photosCarousel(6);
      videosMainCarousel('vert', 3);
      if (jQuery('.page-videos').length > 0) {
        videoPageContentareaCarousels(3, 3);
        var visiblewidth = $('.column-two').width()-20;
        var itemwidth = visiblewidth/3;
        $('.column-two .thumbnails > li').outerWidth(itemwidth);
        $('.page-videos .column-two .thumbnails li:nth-child(3n+3)').css('margin-right', '0');
      }
    }
  }

  function setfooter(visibleitems) {
    //$('#footer-second').hide();
    $('.footer-toggle-button').unbind('click');
    $('.footer-toggle-button').click(function() {
      $(this).toggleClass('active-footer')
      $('#footer-second').toggle();
      $('#footer-links-carousel').carouFredSel({
        circular: false,
        infinite: false,
        responsive: true,
        width: '100%',
        scroll: 1,
        auto: false,
        prev: '#prevfooter',
        next: '#nextfooter',
        items: {
          width: 400,
          //height: '100%',
          visible: visibleitems
        },
        swipe: {
          onMouse: true,
          onTouch: true
        }
      });
    });
  }

  function photosCarousel(visibleitems) {
    if ($('#photos-carousel-nav-images').length > 0) {
      $('#photos-carousel-nav-images').carouFredSel({
        circular: false,
        infinite: false,
        responsive: true,
        width: '100%',
        scroll: 1,
        auto: false,
        prev: '#prevphotos',
        next: '#nextphotos',
        items: {
          width: 400,
          //height: '100%',
          visible: visibleitems
        },
        swipe: {
          onMouse: true,
          onTouch: true
        }
      });

      $('#carousel-photos').on('slid', '', function() {
        var active = $(this).find('.carousel-inner .item.active');
        var items = active.parent().children();
        var activeIndex = items.index(active);
        // var indicators = ('#photos-carousel-nav-images').children('li');
        // indicators.removeClass('active');
        // indicators.find('a[data-slide-to="'+activeIndex+'"]').parent('li').addClass('active');

        // Numbering on photos page.
        photosNumber();
      });

      // Photos page small carousel on big carousel.
      $('.photos-carousel-list-items').css('position', 'absolute');
      $('#carousel-photos').on('slid', '', function() {
        var $this = $(this);
        $this.children('.carousel-control').show();
        if($('.carousel-inner .item:first').hasClass('active')) {
          $this.children('.left.carousel-control').hide();
        }
        else if($('.carousel-inner .item:last').hasClass('active')) {
          $this.children('.right.carousel-control').hide();
        }
      });

      $('#carousel-photos .carousel-control.left').click(function() {
        if($('#carousel-photos #prevphotos').hasClass('disabled') == false) {
          $('#carousel-photos #prevphotos').trigger('click');
        }
      });
      $('#carousel-photos .carousel-control.right').click(function() {
        if($('#carousel-photos #nextphotos').hasClass('disabled') == false) {
          $('#carousel-photos #nextphotos').trigger('click');
        }
      });
    }
  }

  function videosMainCarousel(direction, visibleitems) {
    if ($('#video-thumbnail-carousel').length > 0) {
      if (direction == 'hoz') {
        $('#video-thumbnail-carousel').carouFredSel({
          circular: false,
          infinite: false,
          responsive: true,
          width: '100%',
          scroll: 1,
          auto: false,
          items: {
              visible: visibleitems,
              width: '33%'
          },
          prev: '#prevvideos',
          next: '#nextvideos'
        });
      }
      if (direction == 'vert') {
        $('#video-thumbnail-carousel').carouFredSel({
          direction: "up",
          circular: false,
          infinite: false,
          responsive: true,
          width: '100%',
          height: '100%',
          scroll: 1,
          auto: false,
          items: {
              visible: visibleitems,
              width: '100%',
              height: '33%'
          },
          prev: '#prevvideos',
          next: '#nextvideos'
        });
      }
      // videos page top carousel active class toggling when click.
      var video_thumbnails = $('#video-thumbnail-carousel').find('.video-thumbnail');
      video_thumbnails.click(function() {
        video_thumbnails.removeClass('active');
        $(this).addClass('active');
      });
      if ($(window).width() > 600 && $(window).width() <= 800) {
        var visiblewidth = $('.carousel-videos-navigation').width();
        var itemwidth = visiblewidth/3;
        $('.carousel-videos-navigation .video-thumbnail').outerWidth(itemwidth);
      }
      if ($(window).width() < 600) {
        var visiblewidth = $('.carousel-videos-navigation').width();
        var itemwidth = visiblewidth/2;
        $('.carousel-videos-navigation .video-thumbnail').outerWidth(itemwidth);
      }
      // if ($(window).width() < 479) {
      //   var visiblewidth = $('.carousel-videos-navigation').width();
      //   $('.carousel-videos-navigation .video-thumbnail').outerWidth(visiblewidth);
      // }
    }
  }

  function videoPageContentareaCarousels(visibleitems, scroll) {
    $('#videopage-entertainment').carouFredSel({
      circular: false,
      infinite: false,
      responsive: true,
      width: '100%',
      scroll: scroll,
      prev: '#videopage-entertainment-prev',
      next: '#videopage-entertainment-next',
      auto: false,
      items: {
        visible: visibleitems,
        width: '33%'
      },
      swipe: true
    });
    $('#videopage-sports').carouFredSel({
      circular: false,
      infinite: false,
      responsive: true,
      width: '100%',
      scroll: scroll,
      prev: '#videopage-sports-prev',
      next: '#videopage-sports-next',
      auto: false,
      items: {
        visible: visibleitems,
        width: '33%'
      },
      swipe: true
    });
    $('#videopage-top-videos').carouFredSel({
      circular: false,
      infinite: false,
      responsive: true,
      width: '100%',
      scroll: scroll,
      prev: '#videopage-top-videos-prev',
      next: '#videopage-top-videos-next',
      auto: false,
      items: {
        visible: visibleitems,
        width: '33%'
      },
      swipe: true
    });
  }

  function mostPopularOnHomepage() {
    // Most-popular block on homepage.
    var tabs = $('.block--most--popular .nav-pills li');
    tabs.click(function() {
      tabs.removeClass('active');
      $(this).addClass('active');
      if($(this).find('a').attr('href') == '#shared') {
        $('.tab-content .tab-pane').removeClass('active in'); $('.block--most--popular #shared').addClass('active in');
      }
      if($(this).find('a').attr('href') == '#read') {
        $('.tab-content .tab-pane').removeClass('active in'); $('.block--most--popular #read').addClass('active in');
      }
      if($(this).find('a').attr('href') == '#viewed') {
        $('.tab-content .tab-pane').removeClass('active in'); $('.block--most--popular #viewed').addClass('active in');
      }
    });
  }

  function equalHeightBlocks() {
    $.fn.setAllToMaxHeight = function() {
      return this.height( Math.max.apply(this, $.map( this , function(e){ return $(e).height() }) ) );
    }
    $('.row--opinion-mouthfull > div, .carousel-homepage .equal-height, #carousel-slideshow-page .equal-height, #carousel-videos .equal-height, #carousel-score-board .score-block, .page-sports .row-column-four .block-inner, .page-showbiz .row-column-four .block-title-blackbg, #health-carousel-slideshow .equal-height, #full-coverge-carousel-slideshow .equal-height, .article-subheader > .btn').css('height', 'auto');
    $('.row--opinion-mouthfull > div').setAllToMaxHeight();
    $('.article-subheader > .btn').setAllToMaxHeight();
    $('.thumbnails').find('div.thumbnail').setAllToMaxHeight();
    $('#carousel-score-board').find('.score-block').setAllToMaxHeight();
    $('.page-sports .row-column-four').find('.block-inner').setAllToMaxHeight();
    $('.page-showbiz .row-column-four').find('.block-title-blackbg').setAllToMaxHeight();
    if ($(window).width() < 800) {
      $('.carousel-videos-navigation .video-thumbnail').css('height', 'auto');
      $('.carousel-videos-navigation .video-thumbnail').setAllToMaxHeight();
      $('.carousel-homepage, .article-slideshow').find('.equal-height').setAllToMaxHeight();
    }
    if($(window).width() > 800) {
      $('#carousel-slideshow-page').find('.equal-height').setAllToMaxHeight();
      $('#carousel-videos').find('.equal-height').setAllToMaxHeight();
      var visibleheight = $('.carousel-videos-navigation').height();
      var itemheight = visibleheight/3;
      $('.carousel-videos-navigation .video-thumbnail').outerHeight(itemheight);
      $('.carousel-homepage, .article-slideshow').find('.equal-height').setAllToMaxHeight();
    }
  }

  function sharebarOnFullstory() {
    if ($('body').hasClass('fullstory-page')) {
      $(window).scroll(function() {
        var commentOffset = $('#related-stories-block').offset().top;
        if ($(this).scrollTop() > commentOffset) {
          $('.share-left').hide();
        }
        else {
          $('.share-left').show();
        }
      }).scroll();
    }
  }

  function homepageMainCarouselTabs() {
    // Home page carousel change on regional tab click.
    $('.row--carousel--homepage .carousel-homepage').hide();
    allTab = $('.row-lang-switcher > li');
    currentTab = $('.row-lang-switcher > li.active').attr('data-toggle-to');
    $(currentTab).show();
    $(currentTab).css('visibility', 'visible');
    allTab.click(function() {
      $('.row--carousel--homepage .carousel-homepage').hide();
      $($(this).attr('data-toggle-to')).show();
      $($(this).attr('data-toggle-to')).css('visibility', 'visible');
    });
  }

  function headerSearchSubscribe() {
    $('.language-links  a.search-button').click(function() {
      $(this).css({"cursor":"default"});
      search = !search;
      if (subs) {
      $('.search-block').show();
      $('.logo img').attr('src',"../images/big-logo.png");
      $('.logo').css({"margin-top": "-30px"});
      $('.logo').addClass('open');
      $('.headersection').addClass('sectionopen');
      // $('.social-links').css({"margin-top": "0px","margin-bottom": "0px"});
      subs = !subs;
      }
      $('.search-bar').slideDown("slow");
      $('.logo img').attr('src',"../images/big-logo.png");
      $('.subscribe-block').hide();
      $('.search-block').show();
      $('.logo').addClass('open');
      $('.logo').css({"margin-top": "-30px"});
      $('.headersection,.navigation-bar').addClass('sectionopen');
    });

    $('.language-links  a.subcribe-button').click(function() {
      subs = !subs;
      if (search) {
      $('.subscribe-block').show();
      $('.logo img').attr('src',"../images/big-logo.png");
      $('.logo').css({"margin-top": "-30px"});
      $('.logo').addClass('open');
      $('.headersection,.navigation-bar').addClass('sectionopen');
      search = !search;
      }
      $(this).css({"cursor":"default"});
      $('.search-bar').slideDown("slow");
      $('.search-block').hide();
      $('.subscribe-block').show();
      $('.logo img').attr('src',"../images/big-logo.png");
      $('.logo').css({"margin-top": "-30px"});
      $('.headersection,.navigation-bar').addClass('sectionopen');
      $('.logo').addClass('open');
    });

    $('.search-bar .close').click(function(){
      var search = false;
      var subs = false;
      $(this).parent().slideUp("slow");
      $('.logo img').attr('src',"../images/logo.png");
      $('.logo').css({"margin-top": "5px"});
      // $('.social-links').css({"margin-top": "0px","margin-bottom": "0px"});
      $('.language-links  a.search-button').css({"cursor": "pointer"});
      $('.language-links  a.subcribe-button').css({"cursor": "pointer"});
      $('.logo').removeClass('open');
      $('.headersection,.navigation-bar').removeClass('sectionopen');
    });
  }

  function mainMenuLinks() {
    $('.main-navigation .more').click(function(){
     $('.more-navmenus').toggle();
    });

    $('.menu-button .btn').click(function(){
      $('.two-col-menu').slideToggle('slow');
    });

    $('.article-image .close').click(function() {
      $(this).parent().hide();

    });

    $('.phone-nav-bar li').click(function(){
      $(this).children('ul').toggle();
    });

    $('.main-navbar li.more').click(function(){
      $('.dropdown').toggle();
    });

    $('.parent-child-menu li.more').click(function(){
      $('.child-dropdown').toggle();
    });

    $('.section-menu-list-phone .more').click(function(){
      $('.section-menu-list-phone .more ul.menu').toggle();
    });
  }

  function SharedViewedQuicktabs() {
    $('.Quicktab-news-listing .read > a').click(function() {
      //$("a.left-rotate").attr('href',"#carousel-block-most-read");
      $('.Quicktab-news-listing .carousel-control').attr('href',"#carousel-block-most-read");
    });

    $('.Quicktab-news-listing .shared > a').click(function() {
      //$("a.left-rotate").attr('href',"#carousel-block-most-shared");
      $('.Quicktab-news-listing .carousel-control').attr('href',"#carousel-block-most-shared");
    });

    $('.Quicktab-news-listing .viewed > a').click(function() {
      //$("a.left-rotate").attr('href',"#carousel-block-most-viewed");
      $('.Quicktab-news-listing .carousel-control').attr('href',"#carousel-block-most-viewed");
    });
  }

  function carouselPaginationActiveClassToggle() {
    // Carousel Indicators for all carousels.
    $('.carousel').on('slid', '', function() {
      var active = $(this).find('.carousel-inner .item.active');
      var items = active.parent().children();
      var activeIndex = items.index(active);
      var indicators = $(this).find('.carousel-indicators').children('li');
      if(indicators.length > 0) {
        indicators.removeClass('active');
        var activeindicator = indicators.get(activeIndex);
        activeindicator.setAttribute('class', 'active');
      }
    });
    // Home, Health, Full coverage pagination active links on mobile.
    $('.homepage-carousel-pagination').children('li').first().addClass('active');

    $('.article-slideshow, .carousel-homepage').on('slid', '', function() {
      var active = $(this).find('.carousel-inner .item.active');
      var items = active.parent().children();
      var activeIndex = items.index(active);
      var indicators = $(this).find('.homepage-carousel-pagination').children('li');
      indicators.removeClass('active');
      var activeindicator = indicators.get(activeIndex);
      activeindicator.setAttribute('class', 'active');
    });
  }

  function swipeCarousel() {
    $('.carousel').swiperight(function() {
      $(this).carousel('prev');
    });
    $('.carousel').swipeleft(function() {
      $(this).carousel('next');
    });
  }

  function resizeToCover(viewport, container) {
    var min_w = 300; // minimum video width allowed
    // Get on screen image
    var screenImage = viewport.find('img');

    // Create new offscreen image to test
    var theImage = new Image();
    theImage.src = screenImage.attr("src");

    var vid_w_orig = theImage.width;
    var vid_h_orig = theImage.height;
    // set the video viewport to the window size
    viewport.width(container.width());
    viewport.height(container.height());

    // use largest scale factor of horizontal/vertical
    var scale_h = container.width() / vid_w_orig;
    var scale_v = container.height() / vid_h_orig;
    var scale = scale_h > scale_v ? scale_h : scale_v;

    // don't allow scaled width < minimum video width
    if (scale * vid_w_orig < min_w) {scale = min_w / vid_w_orig;};

    // now scale the video
    screenImage.width(scale * vid_w_orig);
    screenImage.height(scale * vid_h_orig);
    scrollleft = (screenImage.width() - container.width()) / 2;
    scrolltop = (screenImage.height() - container.height()) / 2;
    screenImage.css({
      position: 'relative',
      top: -scrolltop,
      left: -scrollleft
    });
  }

  function otherRandomthings() {
    // All carousel have to be paused.
    $('.carousel').carousel('pause');

    // Photos block on homepage and special block on sports page.
    $('#carousel-block-photos, .page-sports #carousel-block-special').carousel({
      interval: 2000,
      play: 'auto'
    });

    // Accordian.
    $('.accordion-toggle').addClass('collapsed');
    $('#accordion2 .accordion-toggle.first').removeClass('collapsed');
    $('.accordion-toggle').click(function() {
      $('.accordion-toggle').not($(this)).addClass('collapsed');
    });
  }

  function showmenuonclick() {
    $('.nation-menu a').click(function() {
      $(this).parent().toggleClass('active-menu')
      $('.nation-child-menu').slideToggle('fast');
    });
  }

  function showhidesearchblock() {
    $('.subcribe-button').click(function() {
      $('.suscribe-form-input').show();
      $('.search-form-input').hide();
    });
  }

  function showhidesuscribeblock(){
    $('.search-button-input').click(function() {
      $('.search-form-input').show();
      $('.suscribe-form-input').hide();
    });
  }

  function showhidesubnavmenu(){
    $('.sport-menu').hover(
      function(){
      $(this).addClass('active');
      $('.sports-child-menu').css('display','table');
    },
    function(){
       $(this).removeClass('active');
      $('.sports-child-menu').css('display','none');
    }
    );
  }

  function photosNumber() {
    if($('.page-photos').length > 0) {
      var active = $('#carousel-photos .carousel-inner .item.active');
      var items = active.parent().children();
      var activeIndex = items.index(active);
      var total = $('#carousel-photos .carousel-inner .item').length;
      var current = activeIndex+1;
      $('.counting-number').replaceWith('<span class="counting-number">Photo '+current+' of '+total+'</span>');
    }
  }

  function scorebaordcarousel(width) {
    if($('.row--scoreboard').length > 0) {
      if (width <= 480) {
        $('#sports-scorecard-carousel').carouFredSel({
          circular: true,
          infinite: true,
          responsive: true,
          width: '100%',
          scroll: 1,
          auto: false,
          prev: '#scorecardprev',
          next: '#scorecardnext',
          items: {
            width: 400,
            //height: '100%',
            visible: 1
          },
          swipe: {
            onMouse: true,
            onTouch: true
          }
        });
      }
      if (width > 480) {
        $('#sports-scorecard-carousel').carouFredSel({
          circular: true,
          infinite: true,
          responsive: true,
          width: '100%',
          scroll: 2,
          auto: false,
          prev: '#scorecardprev',
          next: '#scorecardnext',
          items: {
            width: 400,
            //height: '100%',
            visible: 2
          },
          swipe: {
            onMouse: true,
            onTouch: true
          }
        });
        var visiblewidth = $('#carousel-score-board').width()-10;
        var itemwidth = visiblewidth/2;
        $('#carousel-score-board > li').outerWidth(itemwidth);
        $('#carousel-score-board li:nth-child(2n+2)').css('margin-right', '0');
        var itemheight = $('.score-block').outerHeight()+15;
        $('#carousel-score-board, .caroufredsel_wrapper, #sports-scorecard-carousel').outerHeight(itemheight);
      }
    }
  }
  function youtubevideos() {
      $("#video-thumbnail-carousel").find(".video-thumbnail").click(function () {
          $("#carousel-videos .item").each(function () {
              var video = $(this).find('iframe');
              var src = video.attr('src');
              video.attr('src', '');
              video.attr('src', src);
          });
      });
  }

  function videosnumber() {
    if($('.page-videos').length > 0) {
      $('.column-two .list_carousel').each(function() {
        var total = $(this).find('li').length;
        var i=3;
        $(this).find('.next').click(function() {
          if((i+3)<total) {
          i=i+3;
        }
        else {
          i=total;
          $(this).hide();
        }
        var countspan = $(this).parent().find('.counting-number');
        countspan.replaceWith('<span class="counting-number">'+i+' of '+total+'</span>');
        });
        $(this).find('.prev').click(function() {
          if((i-3)>3) {
          i=i-3;
        }
        else {
          i=3;
        }
        $(this).parent().find('.next').show();
        var countspan = $(this).parent().find('.counting-number');
        countspan.replaceWith('<span class="counting-number">'+i+' of '+total+'</span>');
        });
        $(this).find('.counting-number').replaceWith('<span class="counting-number">'+i+' of '+total+'</span>');
      });
    }
  }
  function showbizfullscreen() {
    $('#bb-bookblock .scroller').each(function() {
        var img=$(this).find('img'),
            src=img.attr('src');
        img.css('opacity', '0');
        $(this).css({
          backgroundImage: "url("+src+")",
          backgroundSize: 'cover'
        });
    });
  }
  function bootstrapCarouselExtend() {
    var extensionMethods = {
        slide: function (type, next) {
          if(!$.support.transition && this.$element.hasClass('slide')) {
            this.$element.find('.item').stop(true, true); //Finish animation and jump to end.
          }
          var $active = this.$element.find('.carousel-inner .active')
            , $next = next || $active[type]()
            , isCycling = this.interval
            , direction = type == 'next' ? 'left' : 'right'
            , fallback  = type == 'next' ? 'first' : 'last'
            , that = this
            , e = $.Event('slide')
          this.sliding = true
          isCycling && this.pause()
          $next = $next.length ? $next : this.$element.find('.item')[fallback]()
          if ($next.hasClass('active')) return
          if ($.support.transition && this.$element.hasClass('slide')) {
            this.$element.trigger(e)
            if (e.isDefaultPrevented()) return
            $next.addClass(type)
            $next[0].offsetWidth // force reflow
            $active.addClass(direction)
            $next.addClass(direction)
            this.$element.one($.support.transition.end, function () {
              $next.removeClass([type, direction].join(' ')).addClass('active')
              $active.removeClass(['active', direction].join(' '))
              that.sliding = false
              setTimeout(function () { that.$element.trigger('slid') }, 0)
            })
          }else if(!$.support.transition && this.$element.hasClass('slide')) {
            this.$element.trigger(e)
            if (e.isDefaultPrevented()) return
            $active.animate({left: (direction == 'right' ? '100%' : '-100%')}, 600, function(){
                $active.removeClass('active')
                that.sliding = false
                setTimeout(function () { that.$element.trigger('slid') }, 0)
            })
            $next.addClass(type).css({left: (direction == 'right' ? '-100%' : '100%')}).animate({left: '0'}, 600,  function(){
                $next.removeClass(type).addClass('active')
            })
          } else {
            this.$element.trigger(e)
            if (e.isDefaultPrevented()) return
            $active.removeClass('active')
            $next.addClass('active')
            this.sliding = false
            this.$element.trigger('slid')
          }
          isCycling && this.cycle()
          return this
        }
    };
    $.extend(true, $[ "fn" ][ "carousel" ][ "Constructor" ].prototype, extensionMethods);
  }
