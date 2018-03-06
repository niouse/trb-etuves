
import {seriesMongo} from "./../series.js";
import seriesDefaults from "./series.defaults.js";


loadSeries = function(){
	 if (seriesMongo.find({}).fetch().length === 0) {
		 seriesDefaults.forEach((item, index)=>{
	     	seriesMongo.insert(seriesDefaults[index]); 
		 })
   }
}
    