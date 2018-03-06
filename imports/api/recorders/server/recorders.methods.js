
import {recordersMongo} from "./../recorders.js";

Meteor.methods({
	getRecordersKeys : function(){
		var recordersKeys = [];
		for (var key in recordersMongo.findOne({})){
			recordersKeys.push(key)
		};
		return recordersKeys;
	}
})
    