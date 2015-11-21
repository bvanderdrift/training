lessons = new Meteor.Collection('lessons');

if (Meteor.isServer) {
  Meteor.startup(function () {
    if(lessons.find({}).count() == 0){
		mockupLessons();
	}
  });

  Meteor.methods({
  	removeLessons: function(){
  		lessons.remove({});
  	},
  	removeUsers: function(){
  		Meteor.users.remove({});
  	}
  })
}

//Return a single mockup lesson right now for development purposes
function mockupLessons(){
	lessons.insert(mockupLesson("Superawesome French Lessons",
		"languages/french",
		"Hi, I'm really into French and would like to learn you new stuff",
		15,
		false,
		"Madame French",
		"women",
		Stations[0],
		"12:00",
		Stations[2],
		"13:00",
		Date.now()));
	lessons.insert(mockupLesson("Supercool Singing Lessons", 
		"music/singing", 
		"Ladiela", 
		10, 
		true, 
		"Isabelle", 
		"women",
		Stations[2],
		"12:00",
		Stations[3],
		"13:00",
		Date.now()));
	lessons.insert(mockupLesson("Painting Is Cool", 
		"art/paining", 
		"Learn to draw beautiful little trees", 
		26, 
		true, 
		"Bob Ross", 
		"men",
		Stations[1],
		"12:00",
		Stations[0],
		"13:00",
		Date.now()));
}

function mockupLesson(title, category, description, hourlyPrice, preperation, name, gender, depStation, depTime, arrStation, arrTime, firstTravelDate){
	var r = parseInt(Math.random() * 97);
	var profilePicURL = "http://api.randomuser.me/portraits/med/" + gender + "/" + r + ".jpg";
	return {
		title: title,
		category: category,
		description: description,
		hourlyPrice: hourlyPrice,
		preperation: preperation,
		teacher: {
			name: name,
			profilePicURL: profilePicURL
		},
		travel:
		{
			departion:{
				station: depStation,
				time: depTime
			},
			arrival:{
				station: arrStation,
				time: arrTime
			},
			firstTravelDate: firstTravelDate
		}
	};
}

//Non mongo collections

AccountType = {
	STUDENT: 1,
	TEACHER: 2,
	ADMIN: 3	
};

Stations = [
	"King's Cross",
	"Newcastle Station",
	"Liverpool Station",
	"Manchester Station"
];