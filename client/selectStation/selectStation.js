Template.selectStation.onRendered(function(){
	currentStation = this.data;
});

Template.selectStation.helpers({
	stations: function(){
		var stations = [];

		for (var i = Stations.length - 1; i >= 0; i--) {
			stations.push({name: Stations[i]});
		}

		return stations;
	}
});

Template.selectStation.events({
	'click button': function(e){
		Session.set(currentStation, e.currentTarget.innerHTML);
		history.back();
	}
});