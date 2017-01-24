$(document).ready(function() {
     $(window).on('load scroll resize orientationchange', function() {
       setHeaderColor();
    });


	$('.flexslider').flexslider({
        animation: "slide",
        animationLoop: true,
        itemWidth:340,
        itemMargin:10,
        slideshow: true,
        slideshowSpeed: 6000,
        controlNav: true,
        directionNav: true,
        maxItems:5
    });

    $('.flexslider_splash').flexslider({
        animation: "slide",
        animationLoop: true,
        itemWidth:200,
        itemMargin:20,
        slideshow: true,
        slideshowSpeed: 6000,
        controlNav: false,
        directionNav: false,
        maxItems:3
    });

    $('.flex_slider_news').flexslider({
        animation: "slide",
        animationLoop: true,
        itemWidth:420,
        itemMargin:10,
        slideshow: true,
        slideshowSpeed: 6000,
        controlNav: false,
        directionNav: false,
        maxItems:3
    });

    $('.flexslider_client').flexslider({
        animation: "slide",
        animationLoop: true,
        itemWidth:400,
        itemMargin:30,
        slideshow: true,
        slideshowSpeed: 4000,
        controlNav: true,
        directionNav: false,
        maxItems:1
    });

    $('.flexslider_authors').flexslider({
        animation:'slide',
        animationLoop: true,
        controlNav: true,
        directionNav: true,
        maxItems:1
    });




  

    function setHeaderColor(){
        if($(window).scrollTop()>=10) {
             $('header').addClass('scrolled_header');
        $('.logo').addClass('scrolled_logo');
        $('#menu_btn').addClass('scrolled_menu');
        $('.nav_links').addClass('scrolled_nav_links');
        }
        else {
            $('header').removeClass('scrolled_header');
        $('.logo').removeClass('scrolled_logo');
        $('#menu_btn').removeClass('scrolled_menu');
        $('.nav_links').removeClass('scrolled_nav_links');
        }
    }


});