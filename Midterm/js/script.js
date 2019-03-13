// Because we have this "app.main" structure, everything that we want to load has to be inside the variable 'init'.

var app = app || {};
app.main = (function() {

	function loadData() { // This function grabs all the data from the colours JSON database.
		$.getJSON("js/colours.json", function(data){
			colours = data;
			generateAllColoursHTML(colours);
		});
	}

	function generateAllColoursHTML(data) { // This function loads the JSON data into the handlebars template.
		var list = $('.all-colours .colours-list');
		var source = $("#colours-template").html();
		var template = Handlebars.compile(source);
		list.append(template(data));
	}

	function getInfo(data) { // This function registers clicks on the WCAG button.
		$('#button-wcag').on('click', function(e) {
		    e.preventDefault();
		    console.log("You clicked the WCAG button!")
			window.location.hash = '#WCAGinfo';
		});
	}

	function renderWCAGinfo() { // This function activates the WCAG popup.
		var page = $('.WCAG'); // This is saying, get the element of the class named 'WCAG'...
		page.addClass('visible'); // ... and add 'visible' to that component.
		console.log('Showing WCAG info!');
	}

	function closeButton() { // This function closes the WCAG popup.
		$('.close').click(function (e) {
			e.preventDefault();
			window.location.hash = '#';
			$('.WCAG').removeClass('visible'); 
			console.log("You clicked to close.")
		});
	}

	function render(url) { // This function renders the different URL hashtags.
		var temp = url.split('/')[0]; // This is saying, after the URL, add a slash to split it, and add in the first element from our map array [0].
		$('.main-content .all-colours .page').removeClass('visible'); // Here, I'm trying to render everything that has the class 'main-content' and the class 'page', and remove the visible parts.
		var map = { // This is a map variable which holds a function that says, if my url is empty after the slash, then do this. I'm creating an array.
			//This is the landing page!
			'': function() {
				$('.main-content .all-colours').addClass('visible');
				console.log('Loading colours through render function!');
			},
			'#WCAGinfo': function() {
				renderWCAGinfo(); // Here I'm saying, if there is a class called WCAG, then render the class.
			}
		};
		map[temp](); // Here I'm saying that the elements of map are going to correspond with the elements of temp. Right now, map is an array with only one element.
	}

	function hoverColour() { // I'm trying to trigger a function when you hover over one of the colour list items. It's not working right now...
		var index = $('.colour-box').attr('data-index');
		$('li').click(function (e) {
		    console.log("You hovered!");
		});
	}

	var init = function(){ // Here, I am calling all the functions I wrote above.
		console.log('Initializing app.');
		loadData();
		getInfo();
		closeButton();
		hoverColour();

		$(window).on('hashchange', function() {
			render(decodeURI(window.location.hash)); // Here, I am specifically calling the render function above on every hash change.
		}).trigger('hashchange');
	};

	return {
		init: init
	};
})();

/* Wait for all elements on the page to load */
window.addEventListener('DOMContentLoaded', app.main.init);
