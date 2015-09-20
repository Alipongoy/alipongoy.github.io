// Global variables
var currentScrollPosition, lastScrollPosition;
var windowLocation;

$(document).ready(function() {

	// Sets nav color on start
	var $windowHash = $("a" + window.location.hash + "-button");
	$windowHash.addClass("selected");

	// Sets nav color on change
	var topHeight = $("#top").offset().top;
	var aboutHeight = $("#about").offset().top;
	var projectsHeight = $("#projects").offset().top;
	var contactHeight = $("#contact").offset().top;

	// initializes the currentScollPosition
	currentScrollPosition = $(window).scrollTop();


	function changeColor(navClass) {
		$(".nav li a").removeClass("selected");
		$(navClass).addClass("selected");
	}

	// Checks if currentScrollposition is less than lastScrollPosition.
	// Returns true if going down, returns false if going up
	function isUpOrDown() {
		lastScrollPosition = currentScrollPosition;
		currentScrollPosition = $(window).scrollTop();

		//If scrolling down
		if (currentScrollPosition > lastScrollPosition) {
			return true;
		}

		//If scrolling up
		else if (currentScrollPosition < lastScrollPosition) {
			return false;
		}

		else if (currentScollPosition === lastScrollPosition) {
			console.log("no change detected.");
		}

		else {
			console.log("error.");
		}


	}

	// Runs if scrolling
	$(window).scroll(function() {


			if ($(window).scrollTop() < aboutHeight) {
				changeColor("a" + "#top" + "-button", "#top");
			}

			else if ($(window).scrollTop() >= aboutHeight && $(window).scrollTop() < projectsHeight) {
				changeColor("a" + "#about" + "-button", "#about");
			}

			else if ($(window).scrollTop() >= projectsHeight && $(window).scrollTop() < contactHeight) {
				changeColor("a" + "#projects" + "-button", "#projects");
			}

			else if ($(window).scrollTop() >= contactHeight) {
				changeColor("a" + "#contact" + "-button", "#contact");
			}

			else {
				console.log("error.");
			}

	});




	// Nav color setter
	var $nava = $(".nav li a");
	$nava.click(function() {
		$(".nav li a").removeClass("selected");
		$(this).addClass("selected");
	});

});

// Runs when everything is loaded
$(window).load(function() {

	// About h1 word setter
	// var words = ["We are a diversified construction company","We are a God rooted company","We are a quality based company"];
	// var $aboutH1 = $("#about h1");
	// $aboutH1.css("width", "0");
	// var wordCounter = 0;
	// if ($aboutH1.width() === 0) {
	// 	$aboutH1.addClass("isChanged");
	// 	if ($aboutH1.hasClass("isChanged") === true) {
	// 		console.log("hi");
	// 		setTimeout(function() {
	// 			console.log("test");
	// 			while($aboutH1.width() !== 0) {
	// 				if ($aboutH1.width() === 0) {
	// 					console.log("mofo");
	// 					if (wordCounter === words.length) {
	// 						wordCounter = 0;
	// 					}

	// 					else {
	// 						wordCounter++;
	// 					}

	// 					$aboutH1.text(words[wordCounter]);
	// 					$aboutH1.removeClass("isChanged");
	// 				}
	// 			}
	// 		},5000);
	// 	}
	// }


	// Sets window location to be selected class of a 
	windowLocation = $($(".selected").attr("href")).offset().top;
	console.log($($(".selected").attr("href")));

	// Lightbox (Oh boy)
	$(".project-pictures img").click(function(event) {
		event.preventDefault();
		$(window).scrollTop($("#projects").offset().top);
		var $lightbox = $(document.createElement("div"));
		var $lightboxContent = $(document.createElement("div"));
		var $projects = $("#projects");
		var $imageText = $(document.createElement("p"));
		var lightboxImage = $(document.createElement("img"));
		var text = $(this).attr("alt");
		$imageText.text(text);
		lightboxImage.attr("src", $(this).attr("src"));
		$lightbox.addClass("lightbox");
		$lightboxContent.addClass("lightbox-content");
		$("body").css("overflow-y", "hidden");
		$(".header-bar").addClass("hidden");
		$lightbox.append($lightboxContent);
		$lightboxContent.append(lightboxImage);
		$lightboxContent.append($imageText);

		$projects.append($lightbox);

		//Executes when lightbox is clicked
		$lightbox.click(function() {
			lightboxImage.remove();
			$lightbox.remove();
			$("body").css("overflow-y", "initial");
			$(".header-bar").removeClass("hidden");
		});
		});

});

