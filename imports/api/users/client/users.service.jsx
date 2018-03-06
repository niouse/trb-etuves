
import React, { Component } from 'react';
import { browserHistory } from 'react-router';
import { createContainer } from 'react-meteor-data';

export default function UsersService(){
	return (WrappedComponent)=>{
		 class _UsersService extends Component {

			constructor(props){
				super(props);
			}

			 submitUser(options, callback) {
				Meteor.loginWithPassword(options.email, options.pass, callback)
			 }
			 
			 logout(callback){
				Meteor.logout(callback);
			 }

			render (){
				return (
					<WrappedComponent
						user = {this.props.user}
						submitUser = {this.submitUser}
						logout = {(callback)=>this.logout(callback)}
					/>
				)
			}

		}

		return $UsersService = createContainer((props) => {
		//console.log(props)
		  var userSub = Meteor.subscribe("userData");
		  return {
			user : Meteor.user() || false,
		  };
		}, _UsersService);
	}
}


