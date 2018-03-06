
import {etuvesMongo} from "./../etuves.js";

Meteor.methods({
	getetuvesKeys : function(){
		var etuvesKeys = [];
		for (var key in etuvesMongo.findOne({})){
			etuvesKeys.push(key)
		};
		return etuvesKeys;
	}
})
    