
import {recordersMongo} from "./../recorders.js";
import getRecordersDefaults from "./recorders.defaults.js";


loadRecorders = function(number){
	 if (recordersMongo.find({}).fetch().length === 0) {
		 let recordersDefaults = getRecordersDefaults(number)
		 recordersDefaults.forEach((item, index)=>{
	     	recordersMongo.insert(recordersDefaults[index]); 
		 })
   }
}
    