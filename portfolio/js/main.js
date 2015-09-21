// Sidebar animation
$(".menu-arrow").click(function() {
	console.log("menu arrow is clicked");
	$(this).toggleClass("hidden");
	$(".sidebar").animate({
		width: "toggle"
	}, 300, "linear");
});

// When anchor link is clicked
$("a").click(function(event) {
	var $a = $(this);
	event.preventDefault();
	$("body").fadeOut(500, function() {
		window.location = $a.attr("href");
	});	
});

// Runs when document is ready
$(document).ready(function() {
	$("body").addClass("hidden");
	$("body").fadeIn(300, function() {
		console.log("Fading in");
	});
});
