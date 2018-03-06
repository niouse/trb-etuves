
import React, { Component } from 'react';
import {seriesSchema} from "./../series.schema.js";
import {seriesMongo} from "./../series.js";

export default function SeriesCrudService (){
	return (WrappedComponent)=>{
		var seriesCrudContext = seriesSchema.namedContext("seriesCrudOp")

		return class _SeriesCrudService extends Component {

			constructor(props){
				super(props);
			}

			createSerie(options , callback){
				seriesSchema.clean(options);
				if(seriesCrudContext.validate(options)){
					seriesMongo.insert(options, callback);
				}
				else {
					let err = {}
					let res = false
					err.reason = "Problematic keys :"+seriesCrudContext._invalidKeys.map((x)=>{return x.name}).toString()
					callback(err, res)
				}
			}

			readSerie(options , callback){

			}

			updateSerie(id, options , callback){
				seriesSchema.clean(options);
				if(seriesCrudContext.validate(options)){
					seriesMongo.update({_id : id}, {$set : options}, callback);
				}
				else {
					let err = {}
					let res = false
					err.reason = "Problematic keys :"+seriesCrudContext._invalidKeys.map((x)=>{return x.name}).toString()
					callback(err, res)
				}
			}

			deleteSerie(id , callback){
				seriesMongo.remove({_id : id}, callback);
			}

			render (){
				return (
					<WrappedComponent
						{...this.props}
						createSerie = {this.createSerie}
						readSerie = {this.readSerie}
						updateSerie = {this.updateSerie}
						deleteSerie = {this.deleteSerie}
					/>
				)
			}
		}
	}
}
