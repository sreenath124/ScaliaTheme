$(document).ready(function() {
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

    $(document).on('scroll', function() {
       if($(window).scrollTop()>=10){
        $('header').addClass('scrolled_header');
        $('.logo').addClass('scrolled_logo');
        $('#menu_btn').addClass('scrolled_menu');
        $('.nav_links').addClass('scrolled_nav_links');
       }
       else{
        $('header').removeClass('scrolled_header');
        $('.logo').removeClass('scrolled_logo');
        $('#menu_btn').removeClass('scrolled_menu');
        $('.nav_links').removeClass('scrolled_nav_links');
       }
    });



});