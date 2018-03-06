
import {seriesMongo} from "./../series.js";


Meteor.publish("series", function() {
	return  seriesMongo.find({});
});

Meteor.publish("seriesList", function() {
	return  seriesMongo.find({}, {fields : {
		name : 1,
		startedAt : 1,
	}});
});

Meteor.publish("oneSeries", function(seriesId) { 
	return  seriesMongo.find({_id : seriesId});
});
    