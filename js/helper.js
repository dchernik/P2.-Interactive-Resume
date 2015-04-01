/*

This file contains all of the code running in the background that makes resumeBuilder.js possible. We call these helper functions because they support your code in this course.

Don't worry, you'll learn what's going on in this file throughout the course. You won't need to make any changes to it until you start experimenting with inserting a Google Map in Problem Set 3.

Cameron Pittman
*/


/*
These are HTML strings. As part of the course, you'll be using JavaScript functions
replace the %data% placeholder text you see in them.
*/
var HTMLnameAndRole = '<div id="name-and-role"></div>';
var HTMLheaderName = '<h1 id="name" class="animated">%data% </h1>'; // Space is intentional
var HTMLheaderRole = '<h1><span id="role">%data%</span></h1>';
var HTMLmenuContainer = '<div id="menu-container"></div>';
var HTMLmenuButton = '<paper-icon-button id="menu-btn" onclick="helpers.navToggle()" icon="menu"></paper-icon-button>';

var HTMLcontactGeneric = '<li class="flex-item"><span class="contact-type">%contact%</span><span class="white-text">%data%</span></li>';
var HTMLmobile = '<li class="flex-item"><span class="contact-type">mobile</span><span class="white-text">%data%</span></li>';
var HTMLemail = '<li class="flex-item"><span class="contact-type">email</span><span class="white-text">%data%</span></li>';
var HTMLtwitter = '<li class="flex-item"><span class="contact-type">twitter</span><span class="white-text">%data%</span></li>';
var HTMLgithub = '<li class="flex-item"><span class="contact-type">github</span><span class="white-text">%data%</span></li>';
var HTMLblog = '<li class="flex-item"><span class="contact-type">blog</span><span class="white-text">%data%</span></li>';
var HTMLlocation = '<li class="flex-item"><span class="contact-type">location</span><span class="white-text">%data%</span></li>';

var HTMLbioPic = '<img src="%data%" class="biopic">';
var HTMLWelcomeMsg = '<span class="welcome-message">%data%</span>';

var HTMLskillsStart = '<h3 id="skillsH3">Skills at a Glance:</h3><ul id="skills" class="flex-box"></ul>';
var HTMLskills = '<li class="flex-item"><span class="white-text">%data%</span></li>';

var HTMLworkStart = '<div class="work-entry"></div>';
var HTMLworkEmployer = '<a href="#">%data%';
var HTMLworkTitle = ' - %data%</a>';
var HTMLworkDates = '<div class="date-text">%data%</div>';
var HTMLworkLocation = '<div class="location-text">%data%</div>';
var HTMLworkDescription = '<p><br>%data%</p>';

var HTMLprojectStart = '<div class="project-entry"></div>';
var HTMLprojectTitle = '<a href="#">%data%</a>';
var HTMLprojectDates = '<div class="date-text">%data%</div>';
var HTMLprojectDescription = '<p><br>%data%</p>';
var HTMLprojectImage = '<img src="%data%">';

var HTMLschoolStart = '<div class="education-entry"></div>';
var HTMLschoolName = '<a href="#">%data%';
var HTMLschoolDegree = ' -- %data%</a>';
var HTMLschoolDates = '<div class="date-text">%data%</div>';
var HTMLschoolLocation = '<div class="location-text">%data%</div>';
var HTMLschoolMajor = '<em><br>Major: %data%</em>';

var HTMLonlineClasses = '<h3>Online Classes</h3>';
var HTMLonlineTitle = '<a href="#">%data%';
var HTMLonlineSchool = ' - %data%</a>';
var HTMLonlineDates = '<div class="date-text">%data%</div>';
var HTMLonlineURL = '<br><a href="#">%data%</a>';

var internationalizeButton = '<paper-button id="intern-btn" raised><core-icon icon="language"></core-icon>Internationalize</paper-button>';
var toggleCssButton = '<paper-button id="toggle-css-btn" raised><core-icon icon="refresh"></core-icon>Toggle CSS</paper-button>';
var googleMap = '<div id="map"></div>';


/*
The International Name challenge in Lesson 2 where you'll create a function that will need this helper code to run. Don't delete! It hooks up your code to the button you'll be appending.
*/
$(document).ready(function() {
	$("#intern-btn").click(function() {
		var iName = helpers.inName() || function(){};
		$("#name").html(iName);

		// $("#name").addClass("rubberBand");
		helpers.animate("#name", "rubberBand");
		$("#intern-btn").remove();

		$(".fixed-header").prepend(toggleCssButton);
		$("#toggle-css-btn").click(helpers.toggleCSS);
	});
});

/*
The next few lines about clicks are for the Collecting Click Locations quiz in Lesson 2.
*/
clickLocations = [];

function logClicks(x,y) {
	clickLocations.push(
		{
			x: x,
			y: y
		}
	);
	console.log('x location: ' + x + '; y location: ' + y);
}

$(document).click(function(loc) {
	// your code goes here!
	logClicks(loc.pageX, loc.pageY);
});

/*
This is the fun part. Here's where we generate the custom Google Map for the website.
See the documentation below for more details.
https://developers.google.com/maps/documentation/javascript/reference
*/
var map;    // declares a global map variable

/*
Start here! initializeMap() is called when page is loaded.
*/
function initializeMap() {

	var locations;

	var mapOptions = {
		minZoom: 2,
		panControl: false,
		zoomControlOptions: {
			style: google.maps.ZoomControlStyle.SMALL
		}
	};

	// This next line makes `map` a new Google Map JavaScript Object and attaches it to
	// <div id="map">, which is appended as part of an exercise late in the course.
	map = new google.maps.Map(document.querySelector('#map'), mapOptions);


	/*
	locationFinder() returns an array of every location string from the JSONs
	written for bio, education, and work.
	*/
	function locationFinder() {

		// initializes an empty array
		var locations = [];

		// adds the single location property from bio to the locations array
		locations.push(bio.contacts.location);

		// iterates through school locations and appends each location to
		// the locations array
		for (var school in education.schools) {
			locations.push(education.schools[school].location);
		}

		// iterates through work locations and appends each location to
		// the locations array
		for (var job in work.jobs) {
			locations.push(work.jobs[job].location);
		}

		return locations;
	}

	/*
	createMapMarker(placeData) reads Google Places search results to create map pins.
	placeData is the object returned from search results containing information
	about a single location.
	*/
	function createMapMarker(placeData) {

		// The next lines save location data from the search result object to local variables
		var lat = placeData.geometry.location.lat();  // latitude from the place service
		var lon = placeData.geometry.location.lng();  // longitude from the place service
		var name = placeData.formatted_address;   // name of the place from the place service
		var bounds = window.mapBounds;            // current boundaries of the map window

		// marker is an object with additional data about the pin for a single location
		var marker = new google.maps.Marker({
			map: map,
			position: placeData.geometry.location,
			title: name
		});

		// infoWindows are the little helper windows that open when you click
		// or hover over a pin on a map. They usually contain more information
		// about a location.
		var infoWindow = new google.maps.InfoWindow({
			content: name
		});

		// hmmmm, I wonder what this is about...
		google.maps.event.addListener(marker, 'click', function() {
			// your code goes here!
			infoWindow.open(map,marker);
		});

		// this is where the pin actually gets added to the map.
		// bounds.extend() takes in a map location object
		bounds.extend(new google.maps.LatLng(lat, lon));
		// fit the map to the new marker
		map.fitBounds(bounds);
		// center the map
		map.setCenter(bounds.getCenter());
	}

	/*
	callback(results, status) makes sure the search returned results for a location.
	If so, it creates a new map marker for that location.
	*/
	function callback(results, status) {
		if (status == google.maps.places.PlacesServiceStatus.OK) {
			createMapMarker(results[0]);
		}
	}

	/*
	pinPoster(locations) takes in the array of locations created by locationFinder()
	and fires off Google place searches for each location
	*/
	function pinPoster(locations) {

		// creates a Google place search service object. PlacesService does the work of
		// actually searching for location data.
		var service = new google.maps.places.PlacesService(map);

		// Iterates through the array of locations, creates a search object for each location
		for (var place in locations) {

			// the search request object
			var request = {
				query: locations[place]
			};

			// Actually searches the Google Maps API for location data and runs the callback
			// function with the search results after each search.
			service.textSearch(request, callback);
		}
	}

	// Sets the boundaries of the map based on pin locations
	window.mapBounds = new google.maps.LatLngBounds();

	// locations is an array of location strings returned from locationFinder()
	locations = locationFinder();

	// pinPoster(locations) creates pins on the map for each location in
	// the locations array
	pinPoster(locations);

	// Create div for the button and add to the map
	var fitControlDiv = document.createElement('div');
	var fitControl = new fitLocations(fitControlDiv, map);

	fitControlDiv.index = 1;
	map.controls[google.maps.ControlPosition.RIGHT_BOTTOM].push(fitControlDiv);

	// Vanilla JS way to listen for resizing of the window
	// and adjust map bounds
	window.addEventListener('resize', function(e) {
		// Make sure the map bounds get updated on page resize
		map.fitBounds(mapBounds);
	});
}

// Button to fit map's bounds to loacations
function fitLocations(controlDiv, map) {
	// Set CSS for the control border
	var controlUI = document.createElement('div');
	controlUI.style.backgroundColor = '#fff';
	controlUI.style.border = '2px solid #fff';
	controlUI.style.borderRadius = '3px';
	controlUI.style.boxShadow = '0 2px 6px rgba(0,0,0,.3)';
	controlUI.style.cursor = 'pointer';
	controlUI.style.marginBottom = '22px';
	controlUI.style.marginRight = '10px';
	controlUI.style.textAlign = 'center';
	controlUI.title = 'Click to fit places into map';
	controlDiv.appendChild(controlUI);

	// Set CSS for the control interior
	var controlText = document.createElement('div');
	controlText.style.color = 'rgb(25,25,25)';
	controlText.style.fontFamily = 'Roboto,Arial,sans-serif';
	controlText.style.fontSize = '16px';
	controlText.style.lineHeight = '38px';
	controlText.style.paddingLeft = '5px';
	controlText.style.paddingRight = '5px';
	controlText.innerHTML = 'Fit Locations';
	controlUI.appendChild(controlText);

	// Setup the click event listeners to fit locations' markers
	google.maps.event.addDomListener(controlUI, 'click', function() {
		map.fitBounds(mapBounds);
	});
}

// Calls the initializeMap() function when the page loads
window.addEventListener('load', initializeMap);