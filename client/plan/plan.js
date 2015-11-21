Template.plan.onCreated(function(){
	Session.set("fromStation", Stations[0]);
	Session.set("toStation", Stations[1]);
	Session.set("departTime", "11:00");
	Session.set("arriveTime", "12:00");
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