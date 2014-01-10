function determineFeaturedOrientation(id) {
    var ims = document.getElementById(id) == null ? null : document.getElementById(id).getElementsByTagName("img");
    if (ims == null || ims.length == 0 || ims[0].className == 'featured-logo') return;
    if ((ims[0].width / ims[0].height) > 1) ims[0].className = "featured-landscape-image";
    else ims[0].className = "featured-portrait-image";

    if (ims[0].height < 20) pm_imageFailedFeatured(ims[0]); 
    else {
        for (var x=0; x < 30 && ims[0].height < 150; x++) {
            if (ims[0].style.setAttribute) ims[0].style.setAttribute('width', ims[0].width + 5);
            else ims[0].style.width = (ims[0].width + 5) + 'px';
        }
    }
}
determineFeaturedOrientation('mod-article-image-lt');
