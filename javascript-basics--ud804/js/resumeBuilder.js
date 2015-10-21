
var bio = {
	'name' : 'Abhishek Aithal',
	'age' : 24,
	'role' : 'Web developer',
	'contacts' : {
		'email' : 'abhishek@ajackus.com',
		'location' : 'D.N. nagar, Andheri , Mumbai',
		'GitHub' : 'https://github.com/aithal_i2',
		'mobile' : '9969523377'
	}, 
	'welcome message' : 'welcome',
	'photo' : ' https://graph.facebook.com/1253935481/picture?type=normal',
	'skills' : ['C++','Java','HTML','CSS','JQuery']
}


var work = {
	'jobs' : [
		{ 
			'employer' : 'Ajackus',
	 		'title' : 'Web developer',
	 		'location' : 'Andheri Mumbai',
	 		'years' : 'from 11.07.2015',
	 		'description' : 'We Develop Websites'
		}
	]	
}

var education = {
	'schools' : [
	 	{
		'name' : 'Bhaktivedanta Swami Mission School',
		'years' : '2008 passed - out',
 		'location' : 'Juhu , Mumbai',
 		'degree' : 'ICSE'
 		}, 
 		{
		'name' : 'Jasudben M. L.',
		'years' : '2010 passed - out',
 		'location' : 'Khar West , Mumbai',
 		'degree' : 'ISC'
 		}
	]
}

var projects = { 
	'projects' : [
		{
			'title': 'Reminder',
		 	'description' : 'Time your to dos more efficiently',
		 	'years' : '2013',
		 	'url' : 'http://example1.com',
		 	"images" : ["images/reminders.png"]
		},
		{
			'title': 'Toddler App',
		 	'description' : 'Keep track off vacinations given to your child',
		 	'years' : '2015',
		 	'url' : 'http://webhost000.com/toddler',
		 	"images" : ["images/little_cute.jpg"]
		}
	]
}



projects.display = function() {
	for (project in projects.projects) {
		$('#projects').append(HTMLprojectStart);

		var formattedTitle = HTMLprojectTitle.replace
		("%data%", projects.projects[project].title);
		$(".project-entry:last").append(formattedTitle);

		var formattedDates = HTMLprojectDates.replace
		("%data%", projects.projects[project].years);
		$(".project-entry:last").append(formattedDates);

		var formattedDescription = HTMLprojectDescription.replace
		("%data%", projects.projects[project].description);
		$(".project-entry:last").append(formattedDescription);

		if (projects.projects[project].images.length > 0)
		{
			for (image in projects.projects[project].images)
			{
				var formattedImage = HTMLprojectImage.replace
				("%data%", projects.projects[project].images[image]);
				$(".project-entry:last").append(formattedImage);
			}		
		}
	} 
}	

projects.display()


function displayWork() {

		var formattedName = HTMLheaderName.replace('%data%',bio.name)
		var formattedRole = HTMLheaderRole.replace('%data%',bio.role)
		var formattedGit = HTMLgithub.replace('%data%',bio.contacts.GitHub)
		var formattedEmail = HTMLemail.replace('%data%',bio.contacts.email)
		var formattedMobile = HTMLmobile.replace('%data%',bio.contacts.mobile)
		var formattedLocation = HTMLlocation.replace('%data%',bio.contacts.location)

		$("#header").prepend([formattedRole]);
		$("#header").prepend([formattedName]);
		$("#topContacts").prepend([formattedLocation]);
		$("#topContacts").prepend([formattedGit]);
		$("#topContacts").prepend([formattedEmail]);
		$("#topContacts").prepend([formattedMobile]);
		$("#footerContacts").prepend([formattedLocation]);
		$("#footerContacts").prepend([formattedGit]);
		$("#footerContacts").prepend([formattedEmail]);
		$("#footerContacts").prepend([formattedMobile]);


		var formattedPic = HTMLbioPic.replace('%data%', bio.photo)
		$("#header").append([formattedPic]);

		$("#header").append(HTMLskillsStart);
		for (skill in bio.skills) {
			var formattedSkill = HTMLskills.replace("%data%", bio.skills[skill]);
			$("#skillsH3").append(formattedSkill);
		}


		for (job in work.jobs) {
			$('#workExperience').append(HTMLworkStart);

			var formattedEmployer = HTMLworkEmployer.replace('%data%', work.jobs[job].employer);
			var formattedTitle = HTMLworkTitle.replace('%data%', work.jobs[job].title);
			var formattedEmployerTitle = formattedEmployer + formattedTitle;
			$(".work-entry:last").append(formattedEmployerTitle);
			var formattedDates = HTMLworkDates.replace('%data%', work.jobs[job].years);
			var formattedLocation = HTMLworkLocation.replace('%data%', work.jobs[job].location);
			var formattedDescription = HTMLworkDescription.replace('%data%', work.jobs[job].description);
			$(".work-entry:last").append(formattedDates);
			$(".work-entry:last").append(formattedLocation);
			$(".work-entry:last").append(formattedDescription);

			}

			for (school in education.schools) {
			$('#education').append(HTMLschoolStart);
			var formattedName = HTMLschoolName.replace('%data%', education.schools[school].name);
			$(".education-entry:last").append(formattedName);
			var formattedDates = HTMLschoolDates.replace('%data%', education.schools[school].years);
			$(".education-entry:last").append(formattedDates);
			var formattedLocation = HTMLschoolLocation.replace('%data%', education.schools[school].location);
			$(".education-entry:last").append(formattedLocation);
			var formattedDegree = HTMLschoolDegree.replace('%data%', education.schools[school].degree);
			$(".education-entry:last").append(formattedDegree);
		}

}

displayWork();

function locationizer(work_obj) {
    var myLocations = [];
    for (var i in work_obj.jobs) {
        var loc = work_obj.jobs[i].location;
        myLocations.push(loc);
    }
    return myLocations;
}


function inName() {
	var oldName = bio.name;
    var finalName = oldName;
    array = oldName.split(' ');
    finalName = array[0][0].toUpperCase() + array[0].slice(1).toLowerCase() + ' ' + array[1].toUpperCase()
        return finalName;
}

$("#mapDiv").append(googleMap);