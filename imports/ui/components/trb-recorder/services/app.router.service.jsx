import React, { Component } from 'react';

export default function  AppRouterService(Router){
	return (WrappedComponent)=>{
		class $AppRouterService extends Component {
            constructor(props) {
				super(props)
			}
            render (){
                return (
                    <Router>
                        <WrappedComponent {...this.props}/>
                    </Router>
                )	
            }
		}
		return $AppRouterService
	}
}



