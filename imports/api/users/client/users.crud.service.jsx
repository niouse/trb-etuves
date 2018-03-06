import React, { Component } from 'react';
import {usersSchema} from "./../users.schema.js"


export default function UsersCrudService(){
	return (WrappedComponent)=>{
		
		var usersCrudContext = usersSchema.namedContext("usersCrudOp")

		class $UsersCrudService extends Component {

			constructor(props){
				super(props);
			}

			

			createUser(options , callback){
				usersSchema.clean(options);
				if(usersCrudContext.validate(options)){
					Meteor.call('register', options , callback);
				}
				else {
					let err = {}
					let res = false
					err.reason = "Problematic keys :"+usersCrudContext._invalidKeys.map((x)=>{return x.name}).toString()
					callback(err, res)
				}
			}

			render (){
				return (
					<WrappedComponent
						{...this.props}
						createUser = {this.createUser}
					/>
				)
			}

		}
		return $UsersCrudService
	}
}