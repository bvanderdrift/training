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
	Meteor.users.update(Meteor.userId(), {$set: {profile: {accountType: type}}});
}