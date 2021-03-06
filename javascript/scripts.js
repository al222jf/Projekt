$('body').mousedown(function(e){if(e.button==1)return false});
//Verticall scroll 
$(document).ready(function(){
	$('a[href^="#"]').on('click',function (e) {
	    e.preventDefault();

	    var target = this.hash,
	    $target = $(target);

        $('#content').stop().animate({
	        'scrollTop': $target.offset().top + $("#content").scrollTop()
	    }, 900, 'swing', function () {
	        window.location.hash = target;
	    });
	});

$(".imgChange").on("click", function(e){
    {
        e.preventDefault();
        var imageSrc = $(this).find("img").attr("src");
        imageSrc = imageSrc.replace("Mini", "");
        $('#page1').css("background-image", "url("+imageSrc+")"); //   Correct the path to your image
    }

});

});
//Horizontal scroll
$(function() {
    $('a[class^="contactInfo"]').bind('click',function(event){
        var $anchor = $(this);
        /*
        if you want to use one of the easing effects:
        $('html, body').stop().animate({
            scrollLeft: $($anchor.attr('href')).offset().left
        }, 1500,'easeInOutExpo');
        */
        $('html, body').stop().animate({
            scrollLeft: $($anchor.attr('href')).offset().left
        }, 1000);
        event.preventDefault();
    });
});

$(function() {
    $('a[class^="horiScroll"]').bind('click',function(event){
        var $anchor = $(this);
        /*
        if you want to use one of the easing effects:
        $('html, body').stop().animate({
            scrollLeft: $($anchor.attr('href')).offset().left
        }, 1500,'easeInOutExpo');
        */    
        $('html, body').stop().animate({
            scrollright: $($anchor.attr('href')).offset().right
        }, 1000);
        event.preventDefault();
    });
});
