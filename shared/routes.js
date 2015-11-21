Router.onBeforeAction(function() {
	var user = Meteor.user();

	if(!user){
		this.render('loginScreen');
	}else if(!user.profile.accountType){
		this.render('chooseAccountType');
	}else{
		this.next();
	}
});

Router.configure({
	layoutTemplate: 'mainLayout'
});

Router.route('/', {
	name: 'plan',
	template: 'plan'
});

Router.route('/browse', {
	name: 'browse',
	template: 'browse'
});

Router.route('/lesson/:_id', {
	name: 'lesson',
	template: 'lesson',
	data: function(){
		return lessons.findOne({_id: this.params._id});
	}
});

Router.route('create/learner', {
	name: 'createLearner',
	template: 'createLearner'
});

Router.route('create/teacher', {
	name: 'createTeacher',
	template: 'createTeacher'
});

Router.route('create/lesson', {
	name: 'createLesson',
	template: 'createLesson'
});

Router.route('select/station/:stationType', {
	name: 'selectStation',
	template: 'selectStation',
	data: function(){
		return this.params.stationType;
	}
});

Router.route('/(.*)', function(){
	this.render('notFound');
})