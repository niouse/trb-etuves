import React, { Component } from 'react';

import { Subject } from 'rxjs/Subject';

var updateChartSource = new Subject();

const updateChartObs = updateChartSource.asObservable();
const updateChartNext = (msg) => {
	updateChartSource.next(msg)
}

export default function  HighchartsSimpleDataService(){
	
	return (WrappedComponent)=>{
	
		class $HighchartsSimpleDataService extends Component {

			constructor(props) {
				super(props)

			}

			componentDidMount(){}

			render (){
				return <WrappedComponent
					{...this.props}
					updateChartObs = {updateChartObs}
					updateChartNext = {updateChartNext}
					/>
			}	
		}
		return $HighchartsSimpleDataService
	}
}