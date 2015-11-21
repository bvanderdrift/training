Template.plan.onRendered(function(){
	Session.setDefault("fromStation", Stations[0]);
	Session.setDefault("toStation", Stations[1]);
	Session.setDefault("departTime", "11:00");
	Session.setDefault("arriveTime", "12:00");

	//Setup the timepickers
	this.$('#departTimePicker').datetimepicker();
	this.$('#arriveTimePicker').datetimepicker();
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
		return lessons.find({});
	}
});