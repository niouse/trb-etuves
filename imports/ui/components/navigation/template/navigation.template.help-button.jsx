import React, { Component } from 'react';
import PropTypes from 'prop-types';

//MATERIAL COMPONENTS
import IconButton from 'material-ui/IconButton';

//MATERIAL ICONS
import SvgInfo from 'material-ui/svg-icons/action/info';

export default function NavigationHelpButton(){
	return (WrappedComponent) => {
		const $NavigationHelpButton=(props)=>{
			let styles = props.styles || {icon : {}}
			return (
				<IconButton id={props.id} style={styles} onTouchTap={()=>props.goToPage("/help")}> 
					<SvgInfo 
						style={styles.icon}   
						{...props.attr}
					/>
				</IconButton>
			)
		}
        $NavigationHelpButton.propTypes = {
            styles: PropTypes.object.isRequired,
            goToPage : PropTypes.func.isRequired,
        };
		return $NavigationHelpButton
	}
}