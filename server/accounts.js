Accounts.onCreateUser(function(options, user){
	user.profile = defaultProfile();
	return user;
});

function defaultProfile(){
	return {
		accountType: undefined,
		interests: []
	};
}