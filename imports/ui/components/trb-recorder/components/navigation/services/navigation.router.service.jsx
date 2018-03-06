import React, { Component } from 'react';

import { Subject } from 'rxjs/Subject';

var goToPageSource = new Subject();

const goToPageObs = goToPageSource.asObservable();
const goToPageNext = (msg) => {
	goToPageSource.next(msg)
}


export default function  NavigationRouterService(){
	
	return (WrappedComponent)=>{
	
		class $NavigationRouterService extends Component {

			constructor(props) {
				super(props)

			}

			componentDidMount(){}

			render (){
				return <WrappedComponent
					{...this.props}
					goToPageObs = {goToPageObs}
					goToPageNext = {goToPageNext}
					/>
			}	
		}
		return $NavigationRouterService
	}
}