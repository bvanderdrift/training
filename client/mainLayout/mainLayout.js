Template.mainLayout.helpers({
	profilePictureUrl: function(){
		if(Meteor.user()){
			return getProfileLink(Meteor.user());
		}else{
			return "https://upload.wikimedia.org/wikipedia/commons/4/44/Question_mark_(black_on_white).png";
		}
	}
});

function getProfileLink(user){
	return "http://graph.facebook.com/" + user.services.facebook.id + "/picture/?type=large";
}