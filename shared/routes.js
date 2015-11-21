Router.configure({
	layoutTemplate: 'mainLayout'
});

Router.route('/', {
	template: 'home'
});

Router.route('/browse', {
	template: 'browse'
});