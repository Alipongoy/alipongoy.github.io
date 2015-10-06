// Loads when page is loaded
$(document).ready(function() {

	//Variable Declarations
	var $faBars = $(".fa-bars");
	
	// Toggles nav when clicked
	$faBars.click(function() {
		$(".header-nav").toggleClass("hidden");
	}); 
});