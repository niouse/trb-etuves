import React, { Component } from 'react';

export default function  AppAccessService(){
	return (WrappedComponent) => {
		class $AppAccessService extends Component {

			constructor(props) {
				super(props)
			}


			componentDidMount(){
				if(!Meteor.userId()){
					console.log('non')
					this.props.goToPageNext("/login")
				}
			}

			render (){
				return <WrappedComponent
					{...this.props}
					/>
			}	
		}
		return $AppAccessService
	}
}






