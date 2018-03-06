import { Subject } from 'rxjs/Subject';
import React, { Component } from 'react';


export default function  AppMaterialService(MuiThemeProvider, getMuiTheme, materials){
	
	return (WrappedComponent)=>{
	
		class $AppMaterialService extends Component {
			constructor(props) {
				super(props)
				this.state={
					materialIndex : 0
				}
			}
			componentDidMount(){}
			
			setMaterialTheme(index){
				this.setState({
					materialIndex : index
				})
			}
			
			render (){
				return (
					<MuiThemeProvider muiTheme={getMuiTheme(materials[this.state.materialIndex])}>
						<WrappedComponent 
							{...this.props}
							setMaterialTheme={(index)=>this.setMaterialTheme(index)}
							/>
					</MuiThemeProvider>
				)
			}	
		}
		return $AppMaterialService
	}
}