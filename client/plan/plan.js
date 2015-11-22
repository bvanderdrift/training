Template.plan.onRendered(function(){
	Session.setDefault("fromStation", Stations[0]);
	Session.setDefault("toStation", Stations[1]);
	Session.setDefault("departTime", "11:00");
	Session.setDefault("arriveTime", "12:00");

	//Setup the timepickers
	this.$('#departTimePicker').datetimepicker();
	this.$('#arriveTimePicker').datetimepicker();

	$('#from-station-div').click(function(){
		Router.go('/select/station/fromStation');
	});

	$('#to-station-div').click(function(){
		Router.go('/select/station/toStation');
	});
});

Template.plan.helpers({
	fromStation: function(){
		return Session.get("fromStation");
	},

	toStation: function(){
		return Session.get("toStation");
	},

	departTime: function(){
		return Session.get("departTime");
	},

	arriveTime: function(){
		return Session.get("arriveTime");
	},

	relevantLessons: function(){
		var query = {}

		query["travel.depStation"] = Session.get("fromStation");

		if(Session.get("toStation") != AnyStation){
			query["travel.arrStation"] = Session.get("toStation");
		}

		return lessons.find(query);
	}
});