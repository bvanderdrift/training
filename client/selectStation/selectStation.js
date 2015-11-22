Session.setDefault("currentStationType", "unknown");

var currentStationTypeDep = new Deps.Dependency;

updateSelectedItem = function(){
	currentStationTypeDep.depend();
	var selectedStation = Session.get(Session.get("currentStationType"));

	$(".item").each(function(){
		if(selectedStation == $(this).text().trim()){
			$(this).addClass('selected');
		}else{
			if($(this).hasClass('selected')){
				$(this).removeClass('selected');
			}
		}
	});
}

Deps.autorun(updateSelectedItem);

Template.selectStation.onRendered(function(){
	currentStationTypeDep.changed();
	Session.set("currentStationType", this.data);
});

Template.selectStation.helpers({
	stations: function(){
		var stations = [];

		var currentStationType = Session.get("currentStationType");
		var currentStation = Session.get(currentStationType);

		for (var i = Stations.length - 1; i >= 0; i--) {
			stations.push({
				name: Stations[i],
				selected: Stations[i] == currentStation
			});
		}

		if(currentStationType == "toStation"){
			stations.push({
				name: AnyStation,
				selected: Stations[i] == currentStation
			});
		}

		return stations;
	}
});

Template.selectStation.events({
	'click .item': function(e){
		Session.set(Session.get("currentStationType"), e.currentTarget.children[0].innerHTML);
		$(".back-button").click();
	}
});