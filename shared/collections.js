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
  	}
  })
}

//Return a single mockup lesson right now for development purposes
function mockupLessons(){
	lessons.insert(mockupLesson("Superawesome French Lessons",
		"languages/french",
		"Hi, I'm really into French and would like to learn you new stuff",
		15,
		"Madame French"));
	lessons.insert(mockupLesson("Supercool Singing Lessons", "music/singing", "Ladiela", 10, "Isabelle"));
	lessons.insert(mockupLesson("Painting Is Cool", "art/paining", "Learn to draw beautiful little trees", 26, "Bob Ross"));
}

function mockupLesson(title, category, description, hourlyPrice, teacher){
	return {
		title: title,
		category: category,
		description: description,
		hourlyPrice: hourlyPrice,
		teacher: teacher
	};
}