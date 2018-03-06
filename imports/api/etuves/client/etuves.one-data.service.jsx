

import React, { Component } from 'react';
import { browserHistory } from 'react-router';
import { createContainer } from 'react-meteor-data';

import { Subject } from 'rxjs/Subject';

import {etuvesMongo} from "./../etuves.js"

var containerStyles = {
	width:"100%", 
	height:"100%", 
	display:"flex",
	alignItems : "center",
	justifyContent : "center",
}

export default function EtuvesOneDataService(Loading){

    return (WrappedComponent)=>{

         class _EtuvesComponentOneDataService0 extends Component {

            constructor(props){
                super(props);
            }

            getLoading(){
                 if (Loading){
                     return <Loading />
                 }
                 else return <p>loading</p>
             }

            render (){
                return (
                    this.props.isReady ?
                    <WrappedComponent
                        {...this.props}
                        etuve = {this.props.etuve}
                        etuvesList = {this.props.etuvesList}
                        getOneEtuve = {this.props.getOneEtuve}
                    /> :
                    <div style={containerStyles}>{this.getLoading()}</div>
                )
            }
        }

        const _EtuvesOneDataService1 = createContainer((props) => {

          let etuveSubOne = Meteor.subscribe("oneEtuves", props.etuveId)  
          return {
            ...props,
            etuve : etuvesMongo.find({_id : props.etuveId}).fetch()[0],
            isReady : etuveSubOne.ready()
          };
        }, _EtuvesComponentOneDataService0);


        return class _EtuvesOneDataService2 extends Component {

            constructor(props){
                super(props);
                this.state = {
                    etuveId : null
                }
            }

            getOneEtuve(id){
                this.setState({
                    etuveId : id
                })
            }

            render (){
                return (
                    <_EtuvesOneDataService1
                        {...this.props}
                        etuveId = {this.state.etuveId}
                        getOneEtuve={(id)=>this.getOneEtuve(id)}
                    /> 
                )
            }
        }

    }
}

    