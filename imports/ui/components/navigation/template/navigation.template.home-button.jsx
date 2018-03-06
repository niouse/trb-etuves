import React, { Component } from 'react';
import PropTypes from 'prop-types';

//MATERIAL COMPONENTS
import IconButton from 'material-ui/IconButton';

//MATERIAL ICONS
import SvgHome from 'material-ui/svg-icons/action/home';

export default function NavigationHomeButton(){
	return (WrappedComponent) => {
		const $NavigationHomeButton=(props)=>{
			let styles = props.styles || {icon : {}}
			let text = props.text || {}
			return (
				<IconButton 
					id={props.id} 
					style={styles} 
					onTouchTap={()=>{props.goToPage("/home")}}
					> 
					<SvgHome 
						style={styles.icon}  
						{...props.attr}
					/>	
				</IconButton>
			) 
		}
		return $NavigationHomeButton
	}

}
