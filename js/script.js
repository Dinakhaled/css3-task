$(function(){

	//smooth scroll    
    $(".navbar li a").click(function(){

		$('html,body').animate({

			scrollTop: $('#' + $(this).data('value')).offset().top

		},1000);

    });
    
    // links Add Active Class	

	$('.navbar li a').click(function() {

        $('.navbar li a.active').removeClass('active'); 
    
        $(this).addClass('active'); 
    
    });

    // Trigger nice scroll

    $('html').niceScroll({
        cursorcolor: "#76c38f",
        cursorwidth: "8px",
        cursorborder: "1px solid #76c38f",
        cursorborderradius :0
    });










});