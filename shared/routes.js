Router.onBeforeAction(function() {
	if(Meteor.userId()){
		this.next();
	}else{
		this.render('loginScreen');
	}
});

Router.configure({
	layoutTemplate: 'mainLayout'
});

Router.route('/', {
	name: 'home',
	template: 'home'
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

Router.route('create/lesson', {
	name: 'createLesson',
	template: 'createLesson'
});

Router.route('/(.*)', function(){
	this.render('notFound');
})