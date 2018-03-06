

import React, { Component } from 'react';
import { browserHistory } from 'react-router';
import { createContainer } from 'react-meteor-data';

import { Subject } from 'rxjs/Subject';

import {seriesMongo} from "./../series.js"

var containerStyles = {
	width:"100%", 
	height:"100%", 
	display:"flex",
	alignItems : "center",
	justifyContent : "center",
}


export default function SeriesDataService(Loading){
	return (WrappedComponent)=> {
		 class _SeriesComponentDataService0 extends Component {

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
					this.props.seriesList && this.props.seriesList[0] ?
					<WrappedComponent
						{...this.props}
						serie = {this.props.serie}
						seriesList = {this.props.seriesList}
						getOneSerie = {this.props.getOneSerie}
					/> :
					<div style={containerStyles}>{this.getLoading()}</div>
				)
			}
		}

		const _SeriesDataService1 = createContainer((props) => {

		  let serieSubOne = Meteor.subscribe("oneSeries", props.serieId)  
		  let serieSubList = Meteor.subscribe("seriesList")
		  return {
			...props,
			serie : seriesMongo.find({_id : props.serieId}).fetch()[0],
			seriesList : seriesMongo.find({}, {fields : {name : 1, startedAt : 1}}).fetch(),
		  };
		}, _SeriesComponentDataService0);


		return class _SeriesDataService2 extends Component {

			constructor(props){
				super(props);
				this.state = {
					serieId : null
				}
			}

			getOneSerie(id){
				this.setState({
					serieId : id
				})
			}

			render (){
				return (
					<_SeriesDataService1
						{...this.props}
						serieId = {this.state.serieId}
						getOneSerie={(id)=>this.getOneSerie(id)}
					/> 
				)
			}
		}
	}
}

