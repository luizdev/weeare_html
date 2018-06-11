// Browser detection for when you get desparate. A measure of last resort.
// http://rog.ie/post/9089341529/html5boilerplatejs

// var b = document.documentElement;
// b.setAttribute('data-useragent',  navigator.userAgent);
// b.setAttribute('data-platform', navigator.platform);

// sample CSS: html[data-useragent*='Chrome/13.0'] { ... }


// remap jQuery to $
(function( root, $, undefined ) {
	"use strict";
	
	$(function () {
		// DOM ready, take it away
		$(window).trigger("resize");
		initOnepagenav();

		$(document).on('hidden.bs.modal', function (event) {
			if ($('.modal:visible').length) {
				$('body').addClass('modal-open');
			}
		});

		$("#frmConctacto").submit(function(e) {

			//prevent Default functionality
			e.preventDefault();

			$('#mdlContacto').modal('hide');
			setTimeout( function(){$("#mdlThanks").modal('show')}, 400 );
	
			//get the action-url of the form
			//var actionurl = e.currentTarget.action;
	
			//do your own request an handle the results
			/*$.ajax({
					url: actionurl,
					type: 'post',
					dataType: 'application/json',
					data: $("#myform").serialize(),
					success: function(data) {
						
					}
			});*/	
		});

	});

	
	/* Full Height Container 
    -------------------------------------------------------*/         
    $(window).resize(function(){    
		var windowWidth = $(window).width();
		if (windowWidth <= 974) {
            $(".header ").find(".local-scroll-no-offset").removeClass("local-scroll-no-offset").addClass("local-scroll");
        }
        if (windowWidth > 974) {

            $(".header ").find(".local-scroll").removeClass("local-scroll").addClass("local-scroll-no-offset");
        }
	});
	
	$(window).on("load",function() {
        $(".loader").fadeOut();
        $(".loader-mask").delay(350).fadeOut("slow");
        $(window).trigger("resize");
	});
	

	

} ( this, jQuery ));

/* Full Height Container
-------------------------------------------------------*/

function initOnepagenav(){
        
	$(".navigation-overlay .navbar-collapse ul li a, .nav-type-4 .navbar-collapse ul li a").on("click",function() {
		$(".navbar-toggle:visible").click();
	});

	// Smooth Scroll Navigation
	$(".local-scroll").localScroll({
		offset: {top: -60},
		duration: 1500,
		easing:"easeInOutExpo",
		onBefore: function(e, anchor, $target) {
		}
	});
	$(".local-scroll-no-offset").localScroll({
		offset: {top: 0},
		duration: 1500,
		easing:"easeInOutExpo",
		onBefore: function(e, anchor, $target) {
			$("#header .menu li a").removeClass("active");
			$(e.currentTarget).addClass("active");
		}
	});
}




