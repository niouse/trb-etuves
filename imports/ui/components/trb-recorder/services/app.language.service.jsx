import { Subject } from 'rxjs/Subject';

import React, { Component } from 'react';

var actualLanguage = 'en'
var languageSource = new Subject();		

const languageObs = languageSource.asObservable();

export default function AppLanguageService(){
	return (WrappedComponent) => {
		
		let languageSub;
		const languageNext = (msg) => {
			languageSource.next(msg)
		}
		
		class $AppLanguageService extends Component {
			constructor(props) {
				super(props)
			}	
			componentDidMount(){
				languageNext(actualLanguage)
				languageSub = languageObs.subscribe((x)=>{
					actualLanguage=x
				})
			}

			componentWillUnmount(){
				languageSub.unsubscribe()
			}

			render (){
				return <WrappedComponent
					{...this.props}
					languageObs = {languageObs}
					languageNext = {languageNext}
					language = {actualLanguage}
					/>
			}	
		}
		return $AppLanguageService
	}
}




