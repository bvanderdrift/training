Session.set("filter", {});

Template.browse.helpers({
	lessons: function(){
		var regex = new RegExp(".*" + Session.get("searchInput") + ".*", "i");
		return lessons.find({
			$or: [
				{title: regex},
				{description: regex},
				{category: regex},
				{teacher: regex},
			]
		});
	}
});

Template.browse.events({
	'keyup #searchField': function(e){
		e.preventDefault();

		Session.set("searchInput", $("#searchField").val());
	}
});