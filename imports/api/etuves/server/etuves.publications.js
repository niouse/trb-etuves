import {etuvesMongo} from "./../etuves.js";


Meteor.publish("etuves", function() {
	return  etuvesMongo.find({});
});

Meteor.publish("etuvesList", function() {
	return  etuvesMongo.find({}, {fields : {
		name : 1,
		status : 1,
		dateShow : 1,
		country : 1
	}});
});

Meteor.publish("oneetuves", function(etuvesId) { 
	return  etuvesMongo.find({_id : etuvesId});
});
    