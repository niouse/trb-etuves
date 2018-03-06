import {etuvesMongo} from "./../etuves.js";
import etuvesDefaults from "./etuves.defaults.js";


loadEtuves = function(){
	 if (etuvesMongo.find({}).fetch().length === 0) {
		 etuvesDefaults.forEach((item, index)=>{
	     	etuvesMongo.insert(etuvesDefaults[index]); 
		 })
   }
}
    