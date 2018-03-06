import React, { Component } from 'react';
import PropTypes from 'prop-types';

//MATERIAL COMPONENTS
import IconButton from 'material-ui/IconButton';


//MATERIAL ICONS
import Lock from 'material-ui/svg-icons/action/lock';
import LockOpen from 'material-ui/svg-icons/action/lock-open';

export default function NavigationSettingsButton(){
	return (WrappedComponent) => {
		const $NavigationSettingsButton=(props)=>{
			
			let styles = props.styles || {icon : {}}
			let text = props.text || {}
			let SettingsButton = props.user ?  
				<IconButton id={props.id} style={styles}>
					<LockOpen 
						style={styles.icon}   
						{...props.attr}
					/>
				</IconButton> : 
				<IconButton id={props.id} style={styles}>
					<Lock 
						style={styles.icon}   
						{...props.attr}
						/>
				</IconButton>

			return SettingsButton
		}
		return $NavigationSettingsButton
	}
}