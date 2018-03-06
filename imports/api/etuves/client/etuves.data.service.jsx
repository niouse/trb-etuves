

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

export default function EtuvesDataService(Loading){

    return (WrappedComponent)=>{

         class _EtuvesComponentDataService0 extends Component {

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
                        etuves = {this.props.etuves}
                    /> :
                    <div style={containerStyles}>{this.getLoading()}</div>
                )
            }
        }

        const _EtuvesDataService1 = createContainer((props) => {

          let etuveSub = Meteor.subscribe("etuves")
          return {
            ...props,
            etuves : etuvesMongo.find().fetch(),
            isReady : etuveSub.ready()
          };
        }, _EtuvesComponentDataService0);

        return _EtuvesDataService1
    }
}
    