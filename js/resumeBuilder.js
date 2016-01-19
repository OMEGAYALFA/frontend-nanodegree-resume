var bio = {
    "name": "Akim George",
    "role": "Web Developer",
    "contacts": {
        "mobile": "732.555.1234",
        "email": "akim.george@mail.com",
        "github": "ag005b",
        "twitter": "@akim",
        "location": "Bedminster, New Jersey"
    },
    "welcomeMessage": 'Web developer with technical expertise in ' +
        'developing advanced websites and standard-based ' +
        'web applications. Adept in web design projects; ' +
        'maintains existing websites and upgrades ' +
        'newly-acquired regularly with new applications ' +
        'as needed.',
    "skills": ["Programming", "Network Management", "Project Management",
        "Software Testing"
    ],
    "biopic": "images/AGeorge.jpg"
};

var education = {
    "schools": [{
        "name": "University of Lafayette",
        "location": "Lafayette, LA",
        "degree": "Bachelors of Science",
        "majors": ["Electrical Engineering"],
        "dates": "2005-2009",
        "url": "http://www.louisiana.edu/"
    }],
    "onlineCourses": [{
        "title": "Front End Devlopment",
        "school": "Udacity",
        "date": "2016",
        "url": "https://www.udacity.com/front-end-web-developer-nanodegree--nd001"
    }, {
        "title": "Intro to Programming",
        "school": "Udacity",
        "date": "2015",
        "url": "https://www.udacity.com/intro-to-programming-nanodegree--nd000"
    }],
};

var work = {
    "jobs": [{
        "title": "FrontEnd Web Developer",
        "employer": "ATT Inc.",
        "location": "Bedminster, NJ",
        "dates": "2015-Present",
        "description": 'Combine the art of design with the art of programming. ' +
            'Responsibilities includes translation of the UI/UX design ' +
            'wireframes to actual code that will produce visual elements of ' +
            'the application. Works with the UI/UX designer and bridges the gap ' +
            'between graphical design and technical implementation. Takes an ' +
            'active role on both sides and defining how the application looks ' +
            'as well as how it works.',

    }, {
        "title": "Network Operations Support Specialist",
        "employer": "ATT Inc.",
        "location": "Bedminster, NJ",
        "dates": "2010-2015",
        "description": 'Effectively manages and supports all AT&T switched-voice ' +
            'traffic (wire line), technical restoration, repair process, and ' +
            'communication of information within and across AT&T for any customer ' +
            'affecting outages or hazardous conditions that have the potential of ' +
            'affecting the AT&T global network. Provides technical troubleshooting ' +
            'and leadership required to recover from the most complex network ' +
            'problems. Identification of root cause, resolution, testing and ' +
            'implementation of vendor/IT fixes or design changes. ',

    }, {
        "title": "Software Engineer",
        "employer": "Whirlpool Inc.",
        "location": "St. Joseph, MI",
        "dates": "2007, 2008",
        "description": 'Aided with the research and development of E-Field sensor for sensing ' +
            'material presence and type that essentially decreases cost of production ' +
            'by hundreds and increases the energy rating of the appliance. Assisted ' +
            'in the development of algorithms (Lid Lock and Add-a-Garment) from ' +
            'ideation to implementation, considering different Failure Modes and ' +
            'Effects for projects to be launched. Created and complete tests plan to ' +
            'demonstrate the proper algorithm functionalities.',

    }]
};

var projects = {
    "projects": [{
        "title": "Traffic Pattern Analysis",
        "dates": "2015",
        "description": 'Intercepting and examining daily traffic data and usage rates to detrmine optimal ' +
            'network capabilities.',
        "images": ['https://encrypted-tbn3.gstatic.com/images?q=tbn:ANd9GcTc7EWpTKu3N49ViH0hjGXbGAPuZjtX8G' +
            '-KeNQIiEEM3jCD7aapAQ',
            'https://encrypted-tbn3.gstatic.com/images?q=tbn:ANd9GcQksj2YMfvj3U4-yxrkZJogBaLSkX3mfR' +
            '9wYPjZ0ditoq2yEAIVqQ',
            'https://encrypted-tbn3.gstatic.com/images?q=tbn:ANd9GcQMMukaROu6fNt1FwsHhu3_DPWohOvE9k' +
            'p9OcFWdSWcYKO_1MM46g',
            'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSVQh77qBUQgw5Mx8NFM3DsCWYKX_2Wxe' +
            'miQs5HSqm63FB5UbKm'
        ]
    }, {
        "title": "Portfolio",
        "dates": "2015",
        "description": 'My online portfolio provides a way to reveal my credentials to the world. It allows ' +
            'packages the best evidence of my candidacy for employment such as my resume, ' +
            'design work, artwork, reports, lesson plans, transcripts, certifications, articles, ' +
            'letters, and more in a form easily accessible via the Internet. It is a good way to ' +
            'show the scope and quality of my experience and training, and to demonstrate my ' +
            'talent and my ability to produce high-quality work in Web Development.',
        "images": ['images/Portfolio.png']
    }]
};

bio.display = function() {
    //Adds name & role to header
    var data = '%data%';
    var $header = $('#header');
    var $topContacts = $('#topContacts');
    var $footerContacts = $('#footerContacts');

    var formattedName = HTMLheaderName.replace(data, bio.name);
    $header.prepend(formattedRole);
    var formattedRole = HTMLheaderRole.replace(data, bio.role);
    $header.prepend(formattedName);

    //Formats contact info
    var formattedContactMobile = HTMLmobile.replace(data, bio.contacts.mobile);
    $topContacts.append(formattedContactMobile);
    $footerContacts.append(formattedContactMobile);

    var formattedContactEmail = HTMLemail.replace(data, bio.contacts.email);
    $topContacts.append(formattedContactEmail);
    $footerContacts.append(formattedContactEmail);

    var formattedContactGithub = HTMLgithub.replace(data, bio.contacts.github);
    $topContacts.append(formattedContactGithub);
    $footerContacts.append(formattedContactGithub);

    var formattedContactTwitter = HTMLtwitter.replace(data, bio.contacts.twitter);
    $topContacts.append(formattedContactTwitter);
    $footerContacts.append(formattedContactTwitter);

    var formattedContactLocation = HTMLlocation.replace(data, bio.contacts.location);
    $topContacts.append(formattedContactLocation);
    $footerContacts.append(formattedContactLocation);

    var formattedBiopic = HTMLbioPic.replace(data, bio.biopic);
    $header.append(formattedBiopic);

    var formattedWelcomeMsg = HTMLwelcomeMsg.replace(data, bio.welcomeMessage);
    $header.append(formattedWelcomeMsg);

    //Formatting and adding Skills
    if (bio.skills.length > 0) {
        $header.append(HTMLskillsStart);
        var formattedSkills = [];
        for (var i = bio.skills.length - 1; i >= 0; i--) {
            formattedSkills[i] = HTMLskills.replace(data, bio.skills[i]);
            $('#skills').prepend(formattedSkills[i]);
        }
    }
};

work.display = function() {
    var data = '%data%';

    for (var i = 0; i < work.jobs.length; i++) {
        // create new div for work experience
        $("#workExperience").append(HTMLworkStart);

        var formattedTitle = HTMLworkTitle.replace(data, work.jobs[i].title);
        var formattedEmployer = HTMLworkEmployer.replace(data, work.jobs[i].employer);
        var formattedEmployerTitle = formattedEmployer + formattedTitle; // concat employer and title
        $(".work-entry:last").append(formattedEmployerTitle);

        var formattedDates = HTMLworkDates.replace(data, work.jobs[i].dates);
        $(".work-entry:last").append(formattedDates);

        var formattedDescription = HTMLworkDescription.replace(data, work.jobs[i].description);
        $(".work-entry:last").append(formattedDescription);
    }
};

projects.display = function() {
    var data = '%data%';

    for (var i = 0; i < projects.projects.length; i++) {
        // create new div for work experience
        $("#projects").append(HTMLprojectStart);

        var formattedProjTitle = HTMLprojectTitle.replace(data, projects.projects[i].title);
        $(".project-entry:last").append(formattedProjTitle);

        var formattedProjDates = HTMLprojectDates.replace(data, projects.projects[i].dates);
        $(".project-entry:last").append(formattedProjDates);

        var formattedProjDescription = HTMLprojectDescription.replace(data, projects.projects[i].description);
        $(".project-entry:last").append(formattedProjDescription);

        if (projects.projects[i].images.length > 0) {
            for (var p = 0; p < projects.projects[i].images.length; p++) {
                var formattedProjImage = HTMLprojectImage.replace(data, projects.projects[i].images[p]);
                $(".project-entry:last").append(formattedProjImage);
            }
        }
    }
};

education.display = function() {
    var data = '%data%';

    for (var i = 0; i < education.schools.length; i++) {
        $("#education").append(HTMLschoolStart);

        var formattedSchoolName = HTMLschoolName.replace(data, education.schools[i].name);
        var formattedSchoolDegree = HTMLschoolDegree.replace(data, education.schools[i].degree);
        var formattedSchoolNameDegree = formattedSchoolName + formattedSchoolDegree;
        $(".education-entry:last").append(formattedSchoolNameDegree); // concat School name and Degree

        var formattedSchoolDates = HTMLschoolDates.replace(data, education.schools[i].dates);
        $(".education-entry:last").append(formattedSchoolDates);
        var formattedSchoolLocation = HTMLschoolLocation.replace(data, education.schools[i].location);
        $(".education-entry:last").append(formattedSchoolLocation);
        var formattedSchoolMajor = HTMLschoolMajor.replace(data, education.schools[i].majors);
        $(".education-entry:last").append(formattedSchoolMajor);
    }

    $(".education-entry:last").append(HTMLonlineClasses);
    if (education.onlineCourses.length > 0) {
        for (i = 0; i < education.onlineCourses.length; i++) {
            var formattedOnlineTitle = HTMLonlineTitle.replace(data, education.onlineCourses[i].title);
            var formattedOnlineSchool = HTMLonlineSchool.replace(data, education.onlineCourses[i].school);
            var formattedOnlineTitleSchool = formattedOnlineTitle + formattedOnlineSchool;
            $(".education-entry:last").append(formattedOnlineTitleSchool); // concat Online Course title and online school

            var formattedOnlineDates = HTMLonlineDates.replace(data, education.onlineCourses[i].date);
            $(".education-entry:last").append(formattedOnlineDates);
            var formattedOnlineURL = HTMLonlineURL.replace(data, education.onlineCourses[i].url);
            $(".education-entry:last").append(formattedOnlineURL);
        }
    }

};

bio.display();
work.display();
projects.display();
education.display();

//Function to Internationalize name (format: First LAST)
function inName(name) {
    name = bio.name.trim().split(" ");
    name[1] = name[1].toUpperCase();
    name[0] = name[0].slice(0, 1).toUpperCase() + name[0].slice(1).toLowerCase();
    return name[0] + " " + name[1];
}

// this button capitalizes the last name
$("#main").append(internationalizeButton);

//Adds map to the page
$("#mapDiv").append(googleMap);