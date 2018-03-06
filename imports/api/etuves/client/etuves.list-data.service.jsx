

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

export default function EtuvesListDataService(Loading){
    
    return (WrappedComponent)=>{

         class _EtuvesListComponentDataService0 extends Component {

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
                        etuvesList = {this.props.etuvesList}
                    /> :
                    <div style={containerStyles}>{this.getLoading()}</div>
                )
            }
        }

         const _EtuvesListDataService1 = createContainer((props) => {
            
          let etuveSubList = Meteor.subscribe("etuvesList")
          return {
            ...props,
            etuvesList : etuvesMongo.find({}, {fields : {name : 1}}).fetch(),
            isReady : etuveSubList.ready()
          };
        }, _EtuvesListComponentDataService0);
        
        return _EtuvesListDataService1 
    }
}



    