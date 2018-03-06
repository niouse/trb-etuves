
import {etuvesMongo} from "./../etuves.js";

etuvesMongo.allow({
	insert : ()=>{
		return true
	},
	update : ()=>{
		return true
	},
	remove : ()=>{
		return true
	}
})
    