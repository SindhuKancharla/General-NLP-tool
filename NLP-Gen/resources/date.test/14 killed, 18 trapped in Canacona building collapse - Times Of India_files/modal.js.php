var mLd = false;
var isGallery = false;
var contentId = 45881453;
var propertyId = 'TimesofIndia';
var jumpMaxThumb = 10;

function getImg() {
    var id = document.getElementById("mod-article-image");
    if (id == null) return null;
    var image = id.getElementsByTagName("img");
    if (image == null || image.length == 0) return null;
    return image[0];
}
function aIH() {
    var il = document.getElementById("mod-article-image-link");
   
    if (il == null) return false; // no link
 
    if (il.addEventListener) il.addEventListener('click', lJQ, true);
    else if (il.attachEvent) il.attachEvent('onclick', lJQ); 
    
    return false;
}
function lJQ() {
    if (mLd) { // thickbox auto loads on click now
        sM();
        return false;
    }
    LazyLoad.js('http://ajax.googleapis.com/ajax/libs/jquery/1.5.1/jquery.min.js', lTB); 
    mLd = true;
}
function lTB() {
    $.noConflict();
    var css = (isGallery ? 'gallery-modal.css' : 'thickbox.css');
    var js = (isGallery ? 'gallery-modal-compressed.js' : 'thickbox-compressed.js');
    
    LazyLoad.css('/modal/css/' + css + '?de4fa8f0729aea8130695e6bdcb41d92fc074bf7');
    LazyLoad.js('/modal/js/' + js + '?de4fa8f0729aea8130695e6bdcb41d92fc074bf7', sM); 
}
function sM() {
    var il = document.getElementById("mod-article-image-link");
    tb_show(il.title, jQuery("#mod-article-image-link img")[0].src, false);
}
aIH();
