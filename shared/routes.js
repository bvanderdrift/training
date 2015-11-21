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