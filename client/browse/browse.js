Session.set("filter", {});

Template.browse.helpers({
	lessons: function(){
		var query = {};

		if(Session.get("searchInput")){
			var regex = new RegExp(".*" + Session.get("searchInput") + ".*", "i");
		
			query["$or"] = [
				{title: regex},
				{description: regex},
				{category: regex},
				{teacher: regex},
			];
		};

		return lessons.find(query);
	}
});

Template.browse.events({
	'keyup #searchField': function(e){
		e.preventDefault();

		Session.set("searchInput", $("#searchField").val());
	}
});