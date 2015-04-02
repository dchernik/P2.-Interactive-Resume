var bio = {
	"name": "John Doe",
	"role": "Web Developer",
	"contacts": {
		"mobile": "1 (555) 555-5555",
		"email": "JohnDoe@email.com",
		"github": "JohnDoe",
		"twitter": "@JohnDoe",
		"location": "San Francisco"
	},
	"welcomeMessage": "Lorem ipsum dolor sit amet etc etc etc.",
	"skills": [
		"Awesomeness", "Delivering things", "Cryogenic sleep",
		"Saving the universe"
	],
	"biopic": "images/fry.jpg",
	"display": function() {
		var formattedName = HTMLheaderName.replace("%data%", bio.name);
		var formattedRole = HTMLheaderRole.replace("%data%", bio.role);

		$(".fixed-header").prepend(internationalizeButton);
		$(".fixed-header").append(HTMLnameAndRole);
		$(".fixed-header").append(HTMLmenuContainer);
		$("#name-and-role").append(formattedName);
		$("#name-and-role").append(formattedRole);
		$("#menu-container").append(HTMLmenuButton);

		// contact info
		for (var contact in bio.contacts) {
			if (bio.contacts.hasOwnProperty(contact)) {
				var formattedContact = HTMLcontactGeneric.replace(/%contact%|%data%/g, function(match) {
					if (match === "%contact%") {
						return contact;
					}
					else if (match === "%data%") {
						return bio.contacts[contact];
					}
					});
				$("#topContacts").append(formattedContact);
				$("#footerContacts").append(formattedContact);
			}
		}

		var formattedPic = HTMLbioPic.replace("%data%", bio.biopic);
		var formattedMsg = HTMLWelcomeMsg.replace("%data%", bio.welcomeMessage);
		$("#static-header").append(formattedPic);
		$("#static-header").append(formattedMsg);

		$("#static-header").append(HTMLskillsStart);
		for (var i = 0, len = bio.skills.length; i < len; i++) {
			var formattedSkill = HTMLskills.replace("%data%", bio.skills[i]);
			$("#skills").append(formattedSkill);
		}

		$("#static-header").prepend("<hr>");
	}
};

var education = {
	"schools": [
		{
			"name": "Nova Southeastern University",
			"location": "Fort Lauderdale, Fl, US",
			"degree": "Masters",
			"majors": ["CS"],
			"dates": 2013,
			"url": "http://example.com"
		},
		{
			"name": "Eckerd College",
			"location": "Saint Petersburg, Fl, US",
			"degree": "BA",
			"majors": ["CS", "Web Development"],
			"dates": 2003,
			"url": "http://example.com"
		}
	],
	"onlineCourses": [
		{
			"title": "Intro to jQuery",
			"school": "Udaciry",
			"date": 2015,
			"url": "http://www.udacity.com/course/ud245"
		},
		{
			"title": "How to Use Git and GitHub",
			"school": "Udaciry",
			"date": 2015,
			"url": "http://www.udacity.com/course/ud775"
		},
		{
			"title": "JavaScript Crash Course",
			"school": "Udaciry",
			"date": 2014,
			"url": "http://www.udacity.com/course/ud804"
		}
	],
	"display": function() {
		// Schools
		for (var i = 0, len = education.schools.length; i < len; i++) {
			$("#education").append(HTMLschoolStart);

			var school = '';
			school += HTMLschoolName.replace("%data%", education.schools[i].name);
			school += HTMLschoolDegree.replace("%data%", education.schools[i].degree);
			school += HTMLschoolDates.replace("%data%", education.schools[i].dates);
			school += HTMLworkLocation.replace("%data%", education.schools[i].location);
			school += HTMLschoolMajor.replace("%data%", education.schools[i].majors.join(", "));

			$(".education-entry:last").append(school);
		}

		// Online classes
		$("#education").append(HTMLonlineClasses);
		for (var j = 0, oclen = education.onlineCourses.length; j < oclen; j++) {
			$("#education").append(HTMLschoolStart);
			var onlineClass = '';
			onlineClass += HTMLonlineTitle.replace("%data%", education.onlineCourses[i].title);
			onlineClass += HTMLonlineSchool.replace("%data%", education.onlineCourses[i].school);
			onlineClass += HTMLonlineDates.replace("%data%", education.onlineCourses[i].date);
			onlineClass += HTMLonlineURL.replace("%data%", education.onlineCourses[i].url);

			$(".education-entry:last").append(onlineClass);
		}
	}
};

var work = {
	"jobs": [
		{
			"employer": "Planet Express",
			"title": "Delivery Boy",
			"location": "Brooklyn, NY",
			"dates": "January 3000 - Future",
			"description": "Who moved my cheese cheesecake stinking bishop." +
				"Dolcelatte danish fontina dolcelatte camembert de normandie" +
				"airedale goat pecorino brie. Mozzarella cauliflower cheese" +
				"chalk and cheese cheddar smelly cheese say cheese who moved" +
				"my cheese blue castello. Cheddar smelly cheese cheese triangles" +
				"brie pecorino jarlsberg stinking bishop cheese and biscuits." +
				"Danish fontina blue castello bavarian bergkase blue castello."
		},
		{
			"employer": "Panucci's Pizza",
			"title": "Delivery Boy",
			"location": "Manhattan, NY",
			"dates": "1998 - December 31, 1999",
			"description": "Who moved my cheese cheesecake stinking bishop." +
				"Dolcelatte danish fontina dolcelatte camembert de normandie" +
				"airedale goat pecorino brie. Mozzarella cauliflower cheese" +
				"chalk and cheese cheddar smelly cheese say cheese who moved" +
				"my cheese blue castello. Cheddar smelly cheese cheese triangles" +
				"brie pecorino jarlsberg stinking bishop cheese and biscuits." +
				"Danish fontina blue castello bavarian bergkase blue castello."
		}
	],
	"display": function() {
		for (var i = 0, len = work.jobs.length; i < len; i++) {
			$("#workExperience").append(HTMLworkStart);

			var job = '';
			job += HTMLworkEmployer.replace("%data%", work.jobs[i].employer);
			job += HTMLworkTitle.replace("%data%", work.jobs[i].title);
			job += HTMLworkDates.replace("%data%", work.jobs[i].dates);
			job += HTMLworkLocation.replace("%data%", work.jobs[i].location);
			job += HTMLworkDescription.replace("%data%", work.jobs[i].description);

			$(".work-entry:last").append(job);
		}
	}
};

var projects = {
	"projects": [{
			"title": "Sample Project 1",
			"dates": "2014",
			"description": "Who moved my cheese cheesecake stinking bishop." +
				"Dolcelatte danish fontina dolcelatte camembert de normandie" +
				"airedale goat pecorino brie. Mozzarella cauliflower cheese" +
				"chalk and cheese cheddar smelly cheese say cheese who moved" +
				"my cheese blue castello. Cheddar smelly cheese cheese triangles" +
				"brie pecorino jarlsberg stinking bishop cheese and biscuits." +
				"Danish fontina blue castello bavarian bergkase blue castello.",
			"images": [
				"http://placekitten.com/197/148",
				"http://placekitten.com/197/148"
			]},
		{
			"title": "Sample Project 2",
			"dates": "2013",
			"description": "Who moved my cheese cheesecake stinking bishop." +
				"Dolcelatte danish fontina dolcelatte camembert de normandie" +
				"airedale goat pecorino brie. Mozzarella cauliflower cheese" +
				"chalk and cheese cheddar smelly cheese say cheese who moved" +
				"my cheese blue castello. Cheddar smelly cheese cheese triangles" +
				"brie pecorino jarlsberg stinking bishop cheese and biscuits." +
				"Danish fontina blue castello bavarian bergkase blue castello.",
			"images": [
				"http://placekitten.com/197/148",
				"http://placekitten.com/197/148"
			]
		}],
	"display": function() {
		for (var i = 0, len = projects.projects.length; i < len; i++) {
			$("#projects").append(HTMLprojectStart);

			var project = '';
			project += HTMLprojectTitle.replace("%data%", projects.projects[i].title);
			project += HTMLprojectDates.replace("%data%", projects.projects[i].dates);
			project += HTMLprojectDescription.replace("%data%", projects.projects[i].description);

			var pics = '';
			for (var j = 0, imgslen = projects.projects[i].images.length; j < imgslen; j++ ) {
				pics += HTMLprojectImage.replace("%data%", projects.projects[i].images[j]);
			}
			project += pics;

			$(".project-entry:last").append(project);
		}
	}
};

/*
	consolidates helper functions used in the project
*/
var helpers = {
	"inName": function() {
		finalName = bio.name[0].toUpperCase() + bio.name.substring(1, bio.name.indexOf(" ")).toLowerCase() +
			bio.name.substring(bio.name.indexOf(" ")).toUpperCase();

		return finalName;
	},
	"toggleCSS": function() {
		if($("#mystyle").length) {
			$("#mystyle").remove();
		}
		else {
			$("head").append('<link id="mystyle" href="css/style.css" rel="stylesheet">');
		}

		// unAnimate name
		$("#name").removeClass("rubberBand");

		helpers.animate("body", "bounceIn");
	},
	"navToggle": function() {
		if ($(".fixed-header").hasClass("fadeOut")) {
			return;
		}

		$("nav").toggleClass("show-nav");
	},
	"hideMenu": function() {
		$("nav").removeClass("show-nav");
	},
	"animate": function(element, animation) {
		var animationEnd = "webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend";

		$(element).addClass("animated " + animation).one(animationEnd, function() {
			$(this).removeClass("animated " + animation);
		});
	},
	"setListeners": function() {
		/*
			hide fixed header when navigation is used to
			switch sections of resume, and animate that section.
		*/
		$(".hide-header").click(
			function() {
				$(".fixed-header").addClass("fadeOut");
				$(".fixed-header").addClass("hide");

				// animate selected element
				var elmt = this.href.substring(this.href.indexOf("#")) + ">h2";
				helpers.animate(elmt, "flash");
			}
		);

		/*
			hide mobile menu on scroll and clicks outside of it
		*/
		$(window).scroll(helpers.hideMenu);
		$("#static-header, main, nav a").click(helpers.hideMenu);
	}
};

bio.display();
work.display();
projects.display();
education.display();
helpers.setListeners();
$("#mapDiv").append(googleMap);

/*
	animates .fixed-header
*/
(function() {
	var header = new Headroom(document.querySelector(".fixed-header"), {
		tolerance: 10,
		offset : 0,
		classes: {
			initial: "animated",
			unpinned: "fadeOut"
		},
		onPin: function() {
			var $self = $(".fixed-header");

			if ($self.hasClass("hide")) {
				$self.addClass("fadeOut");
				$self.removeClass("hide fadeIn");
			}
			else {
				$self.addClass("fadeIn");
			}
		}
	});
	header.init();

	var navigation = new Headroom(document.querySelector("#nav-bar"), {
			tolerance: 0,
			offset : 237.406,
			classes: {
				top: "normal-nav",
				notTop: "fixed-nav"
			}
	});
	navigation.init();
}());
