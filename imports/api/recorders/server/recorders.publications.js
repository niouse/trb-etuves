
import {recordersMongo} from "./../recorders.js";


Meteor.publish("recorders", function() {
	return  recordersMongo.find({});
});

Meteor.publish("recordersList", function() {
	return  recordersMongo.find({}, {fields : {
		name : 1,
	}});
});

Meteor.publish("oneRecorder", function(recorderId) { 
	return  recordersMongo.find({_id : recorderId});
});
    