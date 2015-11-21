Session.setDefault("currentStationType", "unknown");

Template.selectStation.onRendered(function(){
	Session.set("currentStationType", this.data);
});

Template.selectStation.helpers({
	stations: function(){
		var stations = [];

		for (var i = Stations.length - 1; i >= 0; i--) {
			stations.push({name: Stations[i]});
		}

		if(Session.get("currentStationType") == "toStation"){
			stations.push({name: "Any"});
		}

		return stations;
	}
});

Template.selectStation.events({
	'click button': function(e){
		Session.set(Session.get("currentStationType"), e.currentTarget.innerHTML);
		history.back();
	}
});