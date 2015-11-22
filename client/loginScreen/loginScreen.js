Template.loginScreen.onRendered(function(){
	$("#login-buttons-facebook").hide();

	$("#sm-fb").click(function(){
		$("#login-buttons-facebook").click();
	});
});

Template.loginScreen.helpers({
	socialmedia: function(){
		return [
			{
				name: "Facebook",
				code: "fb"
			},
			{	
				name: "Twitter",
				code: "tw"
			},
			{
				name: "LinkedIn",
				code: "in"
			}
		];
	}
});