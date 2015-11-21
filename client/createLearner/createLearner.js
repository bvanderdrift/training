Template.createLearner.helpers({
	categories: function(){
		return [
			{name: "Languages"},
			{name: "Art"},
			{name: "Music"},
			{name: "Soft-skills"},
			{name: "Advisory"}
		]
	}
});

Template.createLearner.events({
	"submit #categoryForm": function(e){
		e.preventDefault();

		interestedCats = getCheckedCheckboxesValues($(".categoryCB"));

		console.log(interestedCats);
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