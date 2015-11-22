Template.createLearner.onRendered(function(){
	setSelectorValues($(".category-selector"), Meteor.user().profile.interests);

	$("#profile-picture-img").height($("#profile-picture-img").width());
	$(".category-selector").height(1.3* $(".category-selector").width());
	$(".category-selector").click(function(){
		var selector = $(this);
		if(selector.hasClass('selected')){
			selector.removeClass('selected');
			selector.addClass('unselected');
		}else{
			selector.removeClass('unselected');
			selector.addClass('selected');
		}
	});

	$("#doneBTN").click(function(){
		interestedCats = getCheckedCheckboxesValues($(".category-selector"));
		Meteor.users.update(Meteor.userId(), {$set: {"profile.interests": interestedCats}});
		Router.go('plan');
	});
});

Template.createLearner.helpers({
	categories: function(){
		return Categories;
	}
});

function getCheckedCheckboxesValues(selectors){
	var resultValues = [];

	selectors.each(function(){
		var selector = $(this);

		if(selector.hasClass('selected')){
			resultValues.push(getSelectorValue(selector));
		}
	});

	return resultValues;
}

function setSelectorValues(selectors, values){
	selectors.each(function(){
		var selector = $(this);

		if(values.indexOf(getSelectorValue(selector)) >= 0){
			selector.addClass("selected");
		}else{
			selector.addClass("unselected");
		}
	});
}

function getSelectorValue(selector){
	return selector.find(".category-name-div").text();
}