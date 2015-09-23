
//Runs when everything is loaded
$(window).load(function() {

	//Semi global variable declarations
	var $pageOverlay = $(document.createElement("div"));
	$pageOverlay.addClass("dim");

	// Sidebar animation
	$(".menu-arrow").click(function() {
		console.log("menu arrow is clicked");
		$("body").append($pageOverlay);
		$pageOverlay.css("opacity", "0");
		$("header").toggleClass("blur");
		$pageOverlay.animate({
			opacity: 1
		},{
			duration: 500,
			queue: false,
			complete: function() {
				console.log("page overlay has completed");
			}
		});
		$(".sidebar").animate({
			width: "toggle"
		}, {
			duration: 500,
			queue: false,
			complete: function() {
				$(".sidebar").removeClass("hidden");
			}
		});

		// Closes the sidebar when header is clicked
		$pageOverlay.click(function() {
			console.log("header is clicked");
			console.log($(".sidebar").hasClass("hidden"));
			$("header").removeClass("blur");
			if ($(".sidebar").hasClass("hidden") === false) {
				$(".sidebar").css("display", "none");
				$(".sidebar").addClass("hidden");
				$pageOverlay.remove();
			}
		});
	});

		// Unselects selected class when hovered over
		var $headerSelected = $(".header-nav li a.selected");
		$(".header-nav li a").hover(function() {
			$(".header-nav li a").removeClass("selected");
		}, function() {
			$headerSelected.addClass("selected");
		});


	// Fades page in and out
	$(".sidebar li a, .header-nav li a").click(function(event) {
		var $a = $(this);
		event.preventDefault();
		$("body").fadeOut(500, "linear", function() {
			console.log("fading out");
			window.location.href = $a.attr("href");
		});	
	});

	$("body").fadeIn(700, "linear", function() {
		$("body").removeClass("hidden");
	});
});


// Runs when document is ready
$(document).ready(function() {

});

