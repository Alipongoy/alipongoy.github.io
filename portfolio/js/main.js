
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
		$pageOverlay.animate({
			opacity: 1
		},{
			duration: 300,
			queue: false,
			complete: function() {
				console.log("page overlay has completed");
			}
		});
		$(".sidebar").animate({
			width: "toggle"
		}, {
			duration: 300,
			queue: false,
			complete: function() {
				$(".sidebar").removeClass("hidden");
			}
		});

		// Closes the sidebar when header is clicked
		$pageOverlay.click(function() {
			console.log("header is clicked");
			console.log($(".sidebar").hasClass("hidden"));
			if ($(".sidebar").hasClass("hidden") === false) {
				$(".sidebar").css("display", "none");
				$(".sidebar").addClass("hidden");
				$pageOverlay.remove();
			}
		});

	});

	// Fades page in and out
	$(".sidebar li a, .header-nav li a").click(function(event) {
		var $a = $(this);
		event.preventDefault();
		$("body").fadeOut(300, function() {
			console.log("fading out");
			window.location = $a.attr("href");
		});	
	});
});


// Runs when document is ready
$(document).ready(function() {
	$("body").addClass("hidden");
	$("body").fadeIn(300, function() {
		$("body").removeClass("hidden");
	});
});

