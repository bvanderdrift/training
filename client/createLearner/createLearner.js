Template.createLearner.onRendered(function(){
	setCheckedCheckboxesValues($(".categoryCB"), Meteor.user().profile.interests);
});

Template.createLearner.helpers({
	categories: function(){
		var cats = [];

		for (var i = Categories.length - 1; i >= 0; i--) {
			cats.push({name: Categories[i]});
		}

		return cats;
	}
});

Template.createLearner.events({
	"submit #categoryForm": function(e){
		e.preventDefault();

		interestedCats = getCheckedCheckboxesValues($(".categoryCB"));

		Meteor.users.update(Meteor.userId(), {$set: {"profile.interests": interestedCats}});

		Router.go('plan');
	}
});

function getCheckedCheckboxesValues(checkboxes){
	var resultValues = [];

	for (var i = checkboxes.length - 1; i >= 0; i--) {
		var checkbox = checkboxes[i];

		if(checkbox.checked){
			resultValues.push(checkbox.value);
		}
	}

	return resultValues;
}

function setCheckedCheckboxesValues(checkboxes, values){
	var resultValues = [];

	for (var i = checkboxes.length - 1; i >= 0; i--) {
		var checkbox = checkboxes[i];

		if(values.indexOf(checkbox.value) >= 0){
			checkbox.checked = true;
		}
	}

	return resultValues;
}