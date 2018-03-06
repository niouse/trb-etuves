
import {seriesMongo} from "./../series.js";

Meteor.methods({
	getSeriesKeys : function(){
		var seriesKeys = [];
		for (var key in seriesMongo.findOne({})){
			seriesKeys.push(key)
		};
		return seriesKeys;
	}
})
    