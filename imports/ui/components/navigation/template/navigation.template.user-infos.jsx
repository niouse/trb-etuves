import React, { Component } from 'react';
import PropTypes from 'prop-types';

//MATERIAL COMPONENTS

//MATERIAL ICONS

export default function NavigationUserInfosButton(){
	return (WrappedComponent) => {
		const $NavigationUserInfosButton=(props)=>{
			let styles = props.styles || {}
			let text = props.text || {}		
			let userInfos = props.user && props.user.firstName ? 
			<span id={props.id} style={styles}>
				<img src={props.user.photo || "/users/defaultProfile.png"} style={styles.avatar}/>
				{text.logged + " : " + props.user.firstName.slice("")[0] + ". " + props.user.lastName}
			</span> :
			<span id={props.id} style={styles}>{text.notLogged}</span>
			return userInfos
		}
		return $NavigationUserInfosButton
	}
}
	