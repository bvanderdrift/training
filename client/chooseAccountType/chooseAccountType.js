Template.chooseAccountType.onRendered(function(){
	InitializeCircles();
});

Template.chooseAccountType.events({
	"click #teacherBTN": function(e){
		e.preventDefault();
		SetAccountType(AccountType.TEACHER);
		Router.go('createTeacher');
	},
	"click #studentBTN": function(e){
		e.preventDefault();
		SetAccountType(AccountType.STUDENT);
		Router.go('createLearner');
	}
});

function SetAccountType(type){
	Meteor.users.update(Meteor.userId(), {$set: {"profile.accountType": type}});
}

function InitializeCircles(){
	var c1 = document.getElementById("circleCanvasTeacher");
	var c2 = document.getElementById("circleCanvasLearner");

	c1.width = 500;
	c1.height = c1.width;

	c2.width = 500
	c2.height = c2.width;

	DrawCircle(c1);
	DrawCircle(c2);
}

function DrawCircle(canvas){
	var context = canvas.getContext('2d');
	var centerX = canvas.width / 2;
	var centerY = canvas.height / 2;
	var radius = .9 * Math.min(centerX, centerY);

	context.beginPath();
	context.arc(centerX, centerY, radius, 0, 2 * Math.PI, false);
	context.fillStyle = '#e64c2e';
	context.fill();
}