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
		// Owl Hero Slider
		$("#owl-slider-one-img").owlCarousel({
			transitionStyle: "fade",
			autoHeight: true,
			navigation: false,
			slideSpeed: 300,
			singleItem: true,
			pagination: true,
			navigationText: ["<i class='fa fa-angle-left'></i>", "<i class='fa fa-angle-right'></i>"]	 
		});	
		
		var gmapDiv = $("#google-map");
		var gmapMarker = gmapDiv.attr("data-address");

		gmapDiv.gmap3({
			zoom: 18,
			address: gmapMarker,
			oomControl: true,
			navigationControl: true,
			scrollwheel: false,
			styles: [
			{
			"featureType":"all",
			"elementType":"all",
				"stylers":[
				{ "saturation":"-70" }
				]
			}]
		})
		.marker({
			address: gmapMarker,
			icon: assetsUrl + "/img/map_pin.png"
		})
		.infowindow({
			content: "Avenida 28 de Julio 895, Miraflores"
		})
		.then(function (infowindow) {
			var map = this.get(0);
			var marker = this.get(1);
			marker.addListener("click", function() {
			infowindow.open(map, marker);
			});
		});
		
	});

	
	/* Full Height Container 
    -------------------------------------------------------*/         
    $(window).resize(function(){    
		container_full_height_init();
		var windowWidth = $(window).width();
		if (windowWidth <= 974) {
            $(".dropdown-toggle").attr("data-toggle", "dropdown");
            $(".navigation").removeClass("sticky offset scrolling");
            $(".header ").find(".local-scroll-no-offset").removeClass("local-scroll-no-offset").addClass("local-scroll");
        }
        if (windowWidth > 974) {
            $(".dropdown-toggle").removeAttr("data-toggle", "dropdown");
            $(".dropdown").removeClass("open");
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
function container_full_height_init(){
	(function($){
		$(".container-full-height").height($(window).height());
	})(jQuery);
}

function initOnepagenav(){
        
	$(".navigation-overlay .navbar-collapse ul li a, .nav-type-4 .navbar-collapse ul li a").on("click",function() {
		$(".navbar-toggle:visible").click();
	});

	// Smooth Scroll Navigation
	$(".local-scroll").localScroll({offset: {top: -60},duration: 1500,easing:"easeInOutExpo"});
	$(".local-scroll-no-offset").localScroll({offset: {top: 0},duration: 1500,easing:"easeInOutExpo"});
}



