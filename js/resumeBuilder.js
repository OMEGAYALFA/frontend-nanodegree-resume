/*
This is empty on purpose! Your code to build the resume will go here.
 */

 //---Appending to the main div---
 // $("#main").append("Akim George");
 
 //---Printing to the console--
 //var firstName = "james";
 //var age = 32;
 //console.log(firstName);

 //var awesomeThoughts = "I am Akim George and I am AWESOME!";
 //console.log(awesomeThoughts);

 //---learning to manipulate strings---
 //var email = "akim.george@att.com";
 //var newEmail = email.replace("att", "gmail");
 //console.log(email);
 //console.log(newEmail);

 //var awesomeThoughts = "I am Akim George and I am AWESOME!";
 //var funThoughts = awesomeThoughts.replace ("AWESOME", "FUN");
 //console.log(funThoughts);

 var name = "Akim George";
 var role = "Web Developer";
 var formattedName = HTMLheaderName.replace("%data%", name);
 var formattedRole = HTMLheaderRole.replace("%data%", role);

 $("#header").prepend(formattedRole);
 $("#header").prepend(formattedName);

var bio = {
	"name" : name,
	"role" : role,
	"contacts" : {
		"mobile" : "732.555.1234",
		"email" : "akim.george@mail.com",
		"github" : "ag005b",
		"twitter" : "@akim",
		"location" : "Bedminster, New Jersey"
	},	
	"welcomeMessage" : 'Web developer with technical expertise in ' + 
						'developing advanced websites and standard-based ' + 
						'web applications. Adept in web design projects; ' + 
						'maintains existing websites and upgrades ' +
						'newly-acquired regularly with new applications ' + 
						'as needed.',
	"skills" : ["Programming", "Network Management", "Project Management", 
				"Software Testing"],
	"biopic": "images/AGeorge.jpg"
}

var formattedContactMobile = HTMLmobile.replace("%data%", bio.contacts.mobile);
var formattedContactEmail = HTMLemail.replace("%data%", bio.contacts.email);
var formattedContactGithub = HTMLgithub.replace("%data%", bio.contacts.github);
var formattedContactTwitter = HTMLtwitter.replace("%data%", bio.contacts.twitter);
var formattedContactLocation = HTMLlocation.replace("%data%", bio.contacts.location);
var formattedBiopic = HTMLbioPic.replace("%data%", bio.biopic);
var formattedWelcomeMsg = HTMLwelcomeMsg.replace("%data%", bio.welcomeMessage);

$("#topContacts").append(formattedContactMobile);
$("#topContacts").append(formattedContactEmail);
$("#topContacts").append(formattedContactGithub);
$("#topContacts").append(formattedContactTwitter);
$("#topContacts").append(formattedContactLocation);
$("#header").append(formattedBiopic);
$("#header").append(formattedWelcomeMsg);


if (bio.skills.length > 0){
	$("#header").append(HTMLskillsStart);

	var formattedSkills = [];
	for (var i = bio.skills.length - 1; i >= 0; i--) {
		formattedSkills[i] = HTMLskills.replace("%data%", bio.skills[i]);
		$("#skills").prepend(formattedSkills[i]);
	};
}

var education = {
	"schools": [{
	 	"name" : "University of Lafayette",
	 	"location" : "Lafayette, LA",
	 	"degree" : "Bachelors of Science",
	 	"major" : ["Electrical Engineering"],
	 	"dates" : "2005-2009",
	 	"url" : "http://www.louisiana.edu/"
	 }],
	 "onlineCourses" : [{
	 	"title" : "Front End Devlopment",
	 	"school" : "Udacity",
	 	"dates" : "2015-2016",
	 	"url" : "https://www.udacity.com/front-end-web-developer-nanodegree--nd001"
	 }, {
	 	"title" : "Intro to Programming",
	 	"school" : "Udacity",
	 	"dates" : "2015",
	 	"url" : "https://www.udacity.com/intro-to-programming-nanodegree--nd000"
	 }]
}

var work = {
	"jobs" : [{
		"title" : "FrontEnd Web Developer",
		"employer" : "ATT Inc.",
		"location" : "Bedminster, NJ",
		"dates" : "2015-Present",
		"description" : "This job is awesome.",
		
	}, {
		"title" : "Network Operations Support Specialist",
		"employer" : "ATT Inc.",
		"location" : "Bedminster, NJ",
		"dates" : "2010-2015",
		"description" : "This job is fun.",
		
	}, {
		"title" : "Software Engineer",
		"employer" : "Whirlpool Inc.",
		"location" : "St. Joseph, MI",
		"dates" : "2007, 2008",
		"description" : "This job is exciting.",
		
	}]
}

var projects = {
	"projects": [{
	 	"title" : "Portfolio",
	 	"dates" : "2015",
	 	"description" : "......",
	 	"images" : []
	 }, {
	 	"title" : "Add My Notes Web application",
	 	"dates" : "2015",
	 	"description" : ".....",
	 	"images" : []
	 }]
}


function displayWork() {
	for (job in work.jobs) {
		// create new div for work experience
		$("#workExperience").append(HTMLworkStart);

		var formattedTitle = HTMLworkTitle.replace("%data%", work.jobs[job].title);
		var formattedEmployer = HTMLworkEmployer.replace("%data%", work.jobs[job].employer);
		var formattedEmployerTitle = formattedEmployer + formattedTitle; // concat employer and title
		$(".work-entry:last").append(formattedEmployerTitle);

		var formattedDates = HTMLworkDates.replace("%data%", work.jobs[job].dates);
		$(".work-entry:last").append(formattedDates);

		var formattedDescription = HTMLworkDescription.replace("%data%", work.jobs[job].description);
		$(".work-entry:last").append(formattedDescription);
	}
}

displayWork ();

//Function to Internationalize name (format: First LAST)
function inName(name) {
	var name = bio.name.trim().split(" ");
	name[1] = name[1].toUpperCase();
	name[0] = name[0].slice(0,1).toUpperCase() + name[0].slice(1).toLowerCase();
	return name[0] + " " + name[1];
}

// this button capitalizes the last name
$("#main").append(internationalizeButton);

projects.display = function() {
	for (project in projects.project) {
		$("#projects").append(HTMLprojectStart);

		var formattedProjTitle = HTMLprojectTitle.replace("%data%", projects.projects[project].title);
		$(".project-entry:last").append(formattedProjTitle);

		var formattedProjDates = HTMLprojectDates.replace("%data%", projects.projects[project].dates);
		$(".project-entry:last").append(formattedProjDates);

		var formattedProjDescription = HTMLprojectDescription.replace("%data", projects.projects[project].description);
		$(".project-entry:last").append(formattedProjDescription);

		if (projects.projects[project].images.length > 0) {
			for (image in projects.projects[project].images) {
				var formattedProjImage = HTMLprojectImage.replace("%data", projects.projects[project].images[image]);
				$(".project-entry:last").append(formattedProjImage);
			};
		};
	};
}

/*function locationizer(work) {
    var myLocation = [];
    
    for (job in work.jobs) {
        var newLocation = work.jobs[job].location;
        myLocation.push(newLocation);        
    }
    return myLocation;
}*/