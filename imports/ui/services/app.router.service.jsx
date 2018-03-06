import React, { Component } from 'react';

export default function  AppRouterService(Router){
	return (WrappedComponent)=>{
		const $AppRouterService = (props)=> {
			return (
				<Router>
					<WrappedComponent {...this.props}/>
				</Router>
			)	
		}
		return $AppRouterService
	}
}