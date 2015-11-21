lessons = new Meteor.Collection('lessons');

if (Meteor.isServer) {
  Meteor.startup(function () {
    if(lessons.find({}).count() == 0){
		lessons.insert(mockupLessons());
	}
  });
}

//Return a single mockup lesson right now for development purposes
function mockupLessons(){
	return {
		title: "Superawesome French Lessons",
		category: "languages/french",
		description: "Hi, I'm really into French and would like to learn you new stuff",
		hourlyPrice: 15,
		teacher: "Madame French"
	}
}