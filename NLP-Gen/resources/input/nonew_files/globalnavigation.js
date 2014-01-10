var TabNdtv = '';
var TabProfit = '';
var TabKhabar = '';
var TabMovies = '';
var TabCricket = '';
var TabGT = '';
var TabSocial = '';
var TabRecipes = '';
var TabTech = '';


eval('Tab' + tab + '= " class=\'current\'";');
 document.write('<link href="http://cdn.ndtv.com/common/css/commonhomepage.css?ver=0.01" rel="stylesheet" type="text/css" />');
document.write('<div class="globalnav" id="ndtv-global-nav" style="margin-bottom:0;display:none">');
document.write('<div class="globalbar clr"><div class="globalbar_wrap">');
document.write('<div class="globalbar_nav">');
document.write('<ul>');
           document.write('<li '+ TabNdtv +'><a href="http://www.ndtv.com/news/" title="NDTV">NDTV</a></li>');
           document.write('<li '+ TabProfit +'><a href="http://profit.ndtv.com/" title="Business">Business</a></li>');
           document.write('<li '+ TabKhabar +'><a href="http://khabar.ndtv.com/" title="Hindi">Hindi</a></li>');
           document.write('<li '+ TabMovies +'><a href="http://movies.ndtv.com/" title="Movies">Movies</a></li>');
           document.write('<li '+ TabCricket +'><a href="http://sports.ndtv.com/cricket" title="Cricket">Cricket</a></li>');
           document.write('<li '+ TabGT +'><a href="http://goodtimes.ndtv.com/" title="Good Times">Good Times</a></li>');
           //document.write('<li '+ TabSocial +' class="last"><a href="http://social.ndtv.com/home.php?from=insidePageNDTV" title="Social">Social</a></li>');
           document.write('<li '+ TabRecipes +'><a href="http://cooks.ndtv.com" title="Recipes">Recipes</a></li>');
           document.write('<li '+ TabTech +' class="last"><a href="http://gadgets.ndtv.com/" title="Tech">Tech</a></li>');

      document.write('</ul>');
      document.write('</div><div class="global_social" style="width:320px;"><!--span class="so_gmail"></span-->');
      document.write('<div style="float:left;"><!-- tweet start --><div class="divtwitter" id="divtwitter" style="width:190px;" ></div>');
      document.write('<!-- tweet Ends --><!-- recomend start --><div class="divfacebook" id="divfacebook" ></div>');
      document.write('<!-- recomend Ends --></div>');
     
      if(tab!='Tech')
      {
      document.write('<div style="float:right"><a href="http://www.ndtv.com/rss" ><span class="so_rss" ></span></a></div>');
      }
      document.write('<div style="clear:both;"></div></div></div></div></div>');


//window.onload = GB_ShowNav();
var t = setTimeout("GB_ShowNav()",3000);

function GB_ShowNav() {
  document.getElementById("ndtv-global-nav").style.display = "block" ;
  }



