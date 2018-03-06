import { Subject } from 'rxjs/Subject';
import React, { Component } from 'react';

export default function  AppWithRouterService(withRouter){
	return (WrappedComponent)=>{
		const $WrappedComponent=withRouter(WrappedComponent)
		class $AppWithRouterService extends Component {
			constructor(props) {
				super(props)

			}
			componentDidMount(){}
			render (){
				return (
						<$WrappedComponent {...this.props}/>
				)
			}	
		}
		return $AppWithRouterService
	}
}