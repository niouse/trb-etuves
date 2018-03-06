
import React, { Component } from 'react';
import {recordersSchema} from "./../recorders.schema.js";
import {recordersMongo} from "./../recorders.js";

export default function RecordersCrudService(){
	var recordersCrudContext = recordersSchema.namedContext("recordersCrudOp")
	
	 return (WrappedComponent)=>{
		return class _RecordersCrudService extends Component {
			
			constructor(props){
				super(props);
			}

			createRecorder(options , callback){
				recordersSchema.clean(options);
				if(recordersCrudContext.validate(options)){
					recordersMongo.insert(options, callback);
				}
				else {
					let err = {}
					let res = false
					err.reason = "Problematic keys :"+recordersCrudContext._invalidKeys.map((x)=>{return x.name}).toString()
					callback(err, res)
				}
			}

			readRecorder(options , callback){

			}

			updateRecorderSerie(id, options , callback){
				if(recordersCrudContext.validateOne(options, "serie")){
					recordersMongo.update({_id : id}, {$set : {
							'serie.name' : options.serie.name,
							'serie.numMix' : options.serie.numMix,
							'serie.numDep' : options.serie.numDep,
                            'serie.variant' : options.serie.variant
						}}, callback);
				}
				else {
					let err = {}
					let res = false
					err.reason = "Problematic keys :"+recordersCrudContext._invalidKeys.map((x)=>{return x.name}).toString()
					callback(err, res)
				}
			}
			
			resetRecorderSerie(id, callback){
				recordersMongo.update({_id : id}, {$set : {
					'serie.data' : [],
				}}, callback);
			}
			
			updateRecorderStatus(id, status, callback){
				recordersMongo.update({_id : id}, {$set : {
					isOnRecord : status,
                    "serie.startedAt" : (new Date()).getTime(),
                    "serie.timeToMax" : 0,
                    "serie.maxValue" : 0
				}}, callback);
			}
			
			updateRecorder(id, options , callback){
				recordersSchema.clean(options);
				if(recordersCrudContext.validate(options)){
					recordersMongo.update({_id : id}, {$set : options}, callback);
				}
				else {
					let err = {}
					let res = false
					err.reason = "Problematic keys :"+recordersCrudContext._invalidKeys.map((x)=>{return x.name}).toString()
					callback(err, res)
				}
			}

			deleteRecorder(id , callback){
				recordersMongo.remove({_id : id}, callback);
			}

			render (){
				return (
					<WrappedComponent
						{...this.props}
						createRecorder = {this.createRecorder}
						readRecorder = {this.readRecorder}
						updateRecorder = {this.updateRecorder}
						updateRecorderSerie = {this.updateRecorderSerie}
						deleteRecorder = {this.deleteRecorder}
						updateRecorderStatus={this.updateRecorderStatus}
						resetRecorderSerie={this.resetRecorderSerie}
					/>
				)
			}
		}
	 }
}
