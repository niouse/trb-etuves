import React, { Component } from 'react';
import { browserHistory } from 'react-router';
import { createContainer } from 'react-meteor-data';

import { Subject } from 'rxjs/Subject';

import {recordersMongo} from "./../recorders.js"

var containerStyles = {
	width:"100%", 
	height:"100%", 
	display:"flex",
	alignItems : "center",
	justifyContent : "center",
}

export default function RecordersDataService(Loading){
	 return (WrappedComponent)=>{
		 class _RecordersComponentDataService0 extends Component {

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
                //console.log(this.props.isReady)
				return (
					//this.props.recordersList && this.props.recordersList[0] ?
                    this.props.isReady ?
					<WrappedComponent
						{...this.props}
						recorders = {this.props.recorders}
						recorder = {this.props.recorder}
						recordersList = {this.props.recordersList}
						getOneRecorder = {this.props.getOneRecorder}
					/> :
					<div style={containerStyles}>{this.getLoading()}</div>
				)
			}
		}

		const _RecordersDataService1 = createContainer((props) => {
		  let recordersSub = Meteor.subscribe("recorders")
		  let recorderSubOne = Meteor.subscribe("oneRecorders", props.recorderId)  
		  let recorderSubList = Meteor.subscribe("recordersList")
		  return {
			...props,
			recorders : recordersMongo.find({}, {sort : {recorderNumber : 1}}).fetch(),
			recorder : recordersMongo.find({_id : props.recorderId}).fetch()[0],
			recordersList : recordersMongo.find({}, {fields : {name : 1}}).fetch(),
            isReady : recordersSub.ready()
		  };
		}, _RecordersComponentDataService0);


		return class _RecordersDataService2 extends Component {

			constructor(props){
				super(props);
				this.state = {
					recorderId : null
				}
			}

			getOneRecorder(id){
				this.setState({
					recorderId : id
				})
			}

			render (){
				return (
					<_RecordersDataService1
						{...this.props}
						recorderId = {this.state.recorderId}
						getOneRecorder={(id)=>this.getOneRecorder(id)}
					/> 
				)
			}
		}
	 }
}

