import { Subject } from 'rxjs/Subject';

import React, { Component } from 'react';
import { browserHistory } from 'react-router';


var stylesOptionsSource = new Subject();
var actualThemeIndex=0;

function computeStylesOptions(theme){
	let device;

	if( navigator.userAgent.match(/Android/i)
	 || navigator.userAgent.match(/webOS/i)
	 || navigator.userAgent.match(/iPhone/i)
	 || navigator.userAgent.match(/iPad/i)
	 || navigator.userAgent.match(/iPod/i)
	 || navigator.userAgent.match(/BlackBerry/i)
	 ){
		device="smartPhone"
		//document.body.style['margin']='auto'
	}
	else {
		device="pc"
	}
	let devicePixelRatio = window.devicePixelRatio || 1
	//let screenHeight=screen.availHeight //*devicePixelRatio
	let screenHeight=window.innerHeight
	let screenWidth=window.innerWidth //*devicePixelRatio


	let stylesOptions = {
		theme : theme,
		device : device,
		screenHeight : Math.round(screenHeight),
		screenWidth :  Math.round(screenWidth)
	}
	return stylesOptions
}


export default function  AppStylesOptionsService(themes){
	
	return (WrappedComponent)=>{
	
		class $AppStylesOptionsService extends Component {

			constructor(props) {
				super(props)
				this.stylesOptionsObs = stylesOptionsSource.asObservable();
				this.themesList=themes.map((x)=>{return x.name})
			}
			
			stylesOptionsNext(){
				stylesOptionsSource.next(computeStylesOptions(themes[actualThemeIndex]))
			}
			
			setTheme(themeIndex){
				actualThemeIndex=themeIndex
				this.stylesOptionsNext()
			}
			

			componentDidMount(){}

			render (){
				return <WrappedComponent
					{...this.props}
					stylesOptionsObs = {this.stylesOptionsObs}
					stylesOptionsNext = {()=>this.stylesOptionsNext()}
					stylesOptions = {computeStylesOptions(themes[actualThemeIndex])}
					themesList = {this.themesList}
					themeIndex = {actualThemeIndex}
					setTheme = {(themeIndex)=>this.setTheme(themeIndex)}
					/>
			}	
		}
		return $AppStylesOptionsService
	}
}