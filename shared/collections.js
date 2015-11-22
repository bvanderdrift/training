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
	lessons.insert(mockupLesson("FRENCH LESSON",
		Categories[3],
		"Hi, my name is Jamie and I'm a native French speaker living in Brussels. I'm able to give you an introduction to french without any preperation beforehand, are you already excited? Me too! See you on board of the train! Au revoir!",
		8,
		false,
		"Jamie Lebrun",
		"/ProfileMockImages/julie.jpg",
		Stations[5],
		Stations[6],
		"/LessonMockImages/paris.png",
		45));
	lessons.insert(mockupLesson("MAGIC CARDTRICKS", 
		Categories[7], 
		"Hello folks, I've been doing magic tricks since I'm 5 years old (pretty early huh), and now I'm ready to deliver you awesome tricks to impress the crowds!", 
		4, 
		false, 
		"Beer Potter", 
		"/ProfileMockImages/beer.jpg",
		Stations[0],
		Stations[3],
		"/LessonMockImages/potter.png",
		30));
	lessons.insert(mockupLesson("KNIT LESSON", 
		Categories[0], 
		"My grandmother has always been really skilled with knitting. It has been transferred onto me from generation to generation, and now I'd like to transfer the skill onto you.", 
		6, 
		true, 
		"Victor Yip", 
		"/ProfileMockImages/victor.jpg",
		Stations[0],
		Stations[1],
		"/LessonMockImages/knit.png",
		45));
};

function mockupLesson(title, category, description, hourlyPrice, preperation, name, profilePicURL, depStation, arrStation, backgroundImage, duration){
	return {
		title: title,
		category: category,
		description: description,
		hourlyPrice: hourlyPrice,
		preperation: preperation,
		duration: duration,
		backgroundImage: backgroundImage,
		teacher: {
			name: name,
			profilePicURL: profilePicURL
		},
		travel:
		{
			depStation: depStation,
			arrStation: arrStation,
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
	"Manchester Station",
	"Cambridge",
	"Oxford",
	"Paddington"
];

AnyStation = "Any";

Categories = [
	{
		code: "ah",
		description: "Arts & Humanities",
	},
	{
		code: "cs",
		description: "Computer Science",
	},
	{
		code: "ls",
		description: "Life Science",
	},
	{
		code: "la",
		description: "Language",
	},
	{
		code: "ml",
		description: "Math & Logic",
	},
	{
		code: "pd",
		description: "Personal Development",
	},
	{
		code: "pe",
		description: "Physical Science & Engineering",
	},
	{
		code: "ss",
		description: "Social Skills",
	}
]
