import React, { Component } from 'react';
import PropTypes from 'prop-types';

//MATERIAL COMPNENTS
import Avatar from 'material-ui/Avatar';
import IconButton from 'material-ui/IconButton';
import IconMenu from 'material-ui/IconMenu';
import MenuItem from 'material-ui/MenuItem';

// MATERIAL ICONS
import SvgLanguage from 'material-ui/svg-icons/action/language';


export default function NavigationLanguageButton(){
	return (WrappedComponent) => {
		const $NavigationLanguageButton=(props)=>{
			let styles = props.styles || {icon : {}}
			let text = props.text || {}
			return  (
				<IconMenu
					iconButtonElement={
						<IconButton
							id={props.id}	
							style={styles}
							>
							<SvgLanguage 
								style={styles.icon}   
								{...props.attr}
							/>
						</IconButton>
					}
					anchorOrigin={{horizontal: 'left', vertical: 'top'}}
					targetOrigin={{horizontal: 'left', vertical: 'top'}}
				>
					<MenuItem 
						onClick= {()=>{props.handleLanguageChange('fr')}} 
						primaryText="fr" 
						onTouchTap={()=>props.handleLanguageChange('fr')}
						leftIcon={<Avatar src="/navigation/flags/fr.png" />}
						/>
						
					<MenuItem 
						onClick= {()=>{props.handleLanguageChange('en')}} 
						primaryText="en" 
						onTouchTap={()=>props.handleLanguageChange('en')}
						leftIcon={<Avatar src="/navigation/flags/uk.png" />}
						/>
				</IconMenu>
			)
		}
        $NavigationLanguageButton.propTypes = {
            styles: PropTypes.object.isRequired,
            text: PropTypes.object.isRequired,
            handleLanguageChange : PropTypes.func.isRequired,
        };
		return $NavigationLanguageButton
	}
}