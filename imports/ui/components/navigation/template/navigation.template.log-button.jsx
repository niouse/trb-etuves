import React, { Component } from 'react';
import PropTypes from 'prop-types';

//MATERIAL COMPONENTS
import IconButton from 'material-ui/IconButton';

//MATERIAL ICONS
import SvgExitToApp from 'material-ui/svg-icons/action/exit-to-app';
import SvgAccountBox from 'material-ui/svg-icons/action/account-box';

export default function NavigationLogButton(){
	return (WrappedComponent) => {
		const $NavigationLogButton=(props)=>{
			let styles = props.styles || {icon : {}}
			let text = props.text || {}
			let logButton = props.user ? 
			<IconButton 
				id={props.id} 
				style={styles} 
				onTouchTap={()=> props.logout()}
				>
					<SvgExitToApp 
						style={styles.icon}   
						{...props.attr}
					/>
			</IconButton>:
			<IconButton 
				id={props.id} 
				style={styles} 
				onTouchTap={()=>props.goToPage("/login")}
				>
				<SvgAccountBox 
					style={styles.icon}  
					{...props.attr}
				/>
			</IconButton>

			return logButton
		}
		return $NavigationLogButton
	}
}