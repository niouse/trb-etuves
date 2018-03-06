import React, { Component } from 'react';
import {etuvesSchema} from "./../etuves.schema.js";
import {etuvesMongo} from "./../etuves.js";


export default function EtuvesCrudService(){

    return (WrappedComponent)=>{

        var etuvesCrudContext = etuvesSchema.namedContext("etuvesCrudOp")

        return class _EtuvesCrudService extends Component {

            constructor(props){
                super(props);
            }

            createEtuve(options , callback){
                etuvesSchema.clean(options);
                if(etuvesCrudContext.validate(options)){
                    etuvesMongo.insert(options, callback);
                }
                else {
                    let err = {}
                    let res = false
                    err.reason = "Problematic keys :"+etuvesCrudContext._invalidKeys.map((x)=>{return x.name}).toString()
                    callback(err, res)
                }
            }

            readEtuve(options , callback){

            }

            updateEtuve(id, options , callback){
                console.log(options)
                etuvesSchema.clean(options);
                if(etuvesCrudContext.validate(options)){
                    etuvesMongo.update({_id : id}, {$set : options}, callback);
                }
                else {
                    let err = {}
                    let res = false
                    err.reason = "Problematic keys :"+etuvesCrudContext._invalidKeys.map((x)=>{return x.name}).toString()
                    callback(err, res)
                }
            }
            
            resetEtuve(){
                
                console.log("reset")
                let id=etuvesMongo.find({name : "Etuve fixe"}).fetch()[0]._id
                console.log(id)
                console.log(etuvesMongo.find({name : "Etuve fixe"}).fetch())
                let options = {
                    serie : {
                        _id : "serie1",
                        unity : "°C",
                        maxValue : 0,
                        startedAt : new Date(),
                        TC1 : [],
                        TC2 : [],
                        TC3 : [],
                        TC4 : [],
                    }
                }
                etuvesMongo.update({_id : id}, {$set : options});
            }

            deleteEtuve(id , callback){
                etuvesMongo.remove({_id : id}, callback);
            }

            render (){
                return (
                    <WrappedComponent
                        {...this.props}
                        createEtuve = {this.createEtuve}
                        readEtuve = {this.readEtuve}
                        updateEtuve = {this.updateEtuve}
                        deleteEtuve = {this.deleteEtuve}
                        resetEtuve = {this.resetEtuve}
                    />
                )
            }
        }
    }
}
