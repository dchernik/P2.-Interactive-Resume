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
		$("#header").prepend(formattedRole);
		$("#header").prepend(formattedName);

		// contact info
		for (var contact in bio.contacts) {
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

		var formattedPic = HTMLbioPic.replace("%data%", bio.biopic);
		var formattedMsg = HTMLWelcomeMsg.replace("%data%", bio.welcomeMessage);
		$("#header").append(formattedPic);
		$("#header").append(formattedMsg);

		$("#header").append(HTMLskillsStart);
		for (var i in bio.skills) {
			var formattedSkill = HTMLskills.replace("%data%", bio.skills[i]);
			$("#skills").append(formattedSkill);
		}
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
		// var HTMLonlineClasses = '<h3>Online Classes</h3>';
		// var HTMLonlineTitle = '<a href="#">%data%';
		// var HTMLonlineSchool = ' - %data%</a>';
		// var HTMLonlineDates = '<div class="date-text">%data%</div>';
		// var HTMLonlineURL = '<br><a href="#">%data%</a>';

		// Schools
		for (var i in education.schools) {
			$("#education").append(HTMLschoolStart);

			var school = '';
			school += HTMLschoolName.replace("%data%", education.schools[i].name);
			school += HTMLschoolDegree.replace("%data%", education.schools[i].degree);
			school += HTMLschoolDates.replace("%data%", education.schools[i].dates);
			school += HTMLworkLocation.replace("%data%", education.schools[i].location);
			school += HTMLschoolMajor.replace("%data%", education.schools[i].majors.join(", "));

			// NOTICE :last, so appends ONLY ofter LAST .education-entry div
			$(".education-entry:last").append(school);
		}

		// Online classes
		$("#education").append(HTMLonlineClasses);
		for (var i in education.onlineCourses) {
			$("#education").append(HTMLschoolStart);
			var onlineClass = '';
			onlineClass += HTMLonlineTitle.replace("%data%", education.onlineCourses[i].title);
			onlineClass += HTMLonlineSchool.replace("%data%", education.onlineCourses[i].school);
			onlineClass += HTMLonlineDates.replace("%data%", education.onlineCourses[i].date);
			onlineClass += HTMLonlineURL.replace("%data%", education.onlineCourses[i].url);

			// NOTICE :last, so appends ONLY ofter LAST .education-entry div
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
			"description": "Who moved my cheese cheesecake stinking bishop.\
				Dolcelatte danish fontina dolcelatte camembert de normandie\
				airedale goat pecorino brie. Mozzarella cauliflower cheese\
				chalk and cheese cheddar smelly cheese say cheese who moved\
				my cheese blue castello. Cheddar smelly cheese cheese triangles\
				brie pecorino jarlsberg stinking bishop cheese and biscuits.\
				Danish fontina blue castello bavarian bergkase blue castello."
		},
		{
			"employer": "Panucci's Pizza",
			"title": "Delivery Boy",
			"location": "Manhattan, NY",
			"dates": "1998 - December 31, 1999",
			"description": "Who moved my cheese cheesecake stinking bishop.\
				Dolcelatte danish fontina dolcelatte camembert de normandie\
				airedale goat pecorino brie. Mozzarella cauliflower cheese\
				chalk and cheese cheddar smelly cheese say cheese who moved\
				my cheese blue castello. Cheddar smelly cheese cheese triangles\
				brie pecorino jarlsberg stinking bishop cheese and biscuits.\
				Danish fontina blue castello bavarian bergkase blue castello."
		}
	],
	"display": function() {
		for (var i in work.jobs) {
			$("#workExperience").append(HTMLworkStart);

			var job = '';
			job += HTMLworkEmployer.replace("%data%", work.jobs[i].employer);
			job += HTMLworkTitle.replace("%data%", work.jobs[i].title);
			job += HTMLworkDates.replace("%data%", work.jobs[i].dates);
			job += HTMLworkLocation.replace("%data%", work.jobs[i].location);
			job += HTMLworkDescription.replace("%data%", work.jobs[i].description);

			// NOTICE :last, so appends ONLY ofter LAST .project-entry div
			$(".work-entry:last").append(job);
		}
	}
};


var projects = {
	"projects": [
		{
			"title": "Sample Project 1",
			"dates": "2014",
			"description": "Who moved my cheese cheesecake stinking bishop.\
				Dolcelatte danish fontina dolcelatte camembert de normandie\
				airedale goat pecorino brie. Mozzarella cauliflower cheese\
				chalk and cheese cheddar smelly cheese say cheese who moved\
				my cheese blue castello. Cheddar smelly cheese cheese triangles\
				brie pecorino jarlsberg stinking bishop cheese and biscuits.\
				Danish fontina blue castello bavarian bergkase blue castello.",
			"images": [
				"images/197x148.gif",
				"images/197x148.gif"
			]
		},
		{
			"title": "Sample Project 2",
			"dates": "2013",
			"description": "Who moved my cheese cheesecake stinking bishop.\
				Dolcelatte danish fontina dolcelatte camembert de normandie\
				airedale goat pecorino brie. Mozzarella cauliflower cheese\
				chalk and cheese cheddar smelly cheese say cheese who moved\
				my cheese blue castello. Cheddar smelly cheese cheese triangles\
				brie pecorino jarlsberg stinking bishop cheese and biscuits.\
				Danish fontina blue castello bavarian bergkase blue castello.",
			"images": [
				"images/197x148.gif",
				"images/197x148.gif"
			]
		}
	],
	"display": function() {

		// var HTMLprojectImage = '<img src="%data%">';
		for (var i in projects.projects) {
			$("#projects").append(HTMLprojectStart);

			var project = '';
			project += HTMLprojectTitle.replace("%data%", projects.projects[i].title);
			project += HTMLprojectDates.replace("%data%", projects.projects[i].dates);
			project += HTMLprojectDescription.replace("%data%", projects.projects[i].description);

			var pics = '';
			for (var j in projects.projects[i].images ) {
				pics += HTMLprojectImage.replace("%data%", projects.projects[i].images[j]);
			}
			project += pics;

			// NOTICE :last, so appends ONLY ofter LAST .project-entry div
			$(".project-entry:last").append(project);
		}
	}
};


bio.display();
work.display();
projects.display();
education.display();


// to see a map
$("#mapDiv").append(googleMap);

// change <Firstname Lastname> to <Firstame LASTNAME> im #header
function inName() {
	finalName = bio.name[0].toUpperCase() + bio.name.substring(1, bio.name.indexOf(" ")).toLowerCase() +
    	bio.name.substring(bio.name.indexOf(' ')).toUpperCase();

    return finalName;
}

$("#main").append(internationalizeButton);