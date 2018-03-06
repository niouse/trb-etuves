import React, { Component } from 'react';
import PropTypes from 'prop-types';

//MATERIAL COMPNENTS
import Menu from 'material-ui/Menu';
import MenuIcon from 'material-ui/svg-icons/navigation/menu';
import IconButton from 'material-ui/IconButton';
import IconMenu from 'material-ui/IconMenu';
import MenuItem from 'material-ui/MenuItem';
import Avatar from 'material-ui/Avatar';


// MATERIAL ICONS
import SvgHome from 'material-ui/svg-icons/action/home';
import SvgInfo from 'material-ui/svg-icons/action/info';
import SvgLanguage from 'material-ui/svg-icons/action/language';
import SvgExitToApp from 'material-ui/svg-icons/action/exit-to-app';
import SvgAccountBox from 'material-ui/svg-icons/action/account-box';
import SvgBuild from 'material-ui/svg-icons/action/build';
import SvgLock from 'material-ui/svg-icons/action/lock';



export default function NavigationMenuButton(){
	return (WrappedComponent) => {
		const getAccountMenu = (props, styles, text) => {
			const adminMenu = [
				<MenuItem  style={styles.list} primaryText={text.myAccount} />,
				<MenuItem  style={styles.list} primaryText={text.manageAccounts} />,
				<MenuItem  style={styles.list} primaryText={text.newUser} onTouchTap={()=>props.goToPage('signup')}/>
			];

			const userMenu = [
				<MenuItem  style={styles.list} primaryText={text.myAccount} />,
			];

			const visitorMenu = [
				<MenuItem  style={styles.list} primaryText={text.newUser} onTouchTap={()=>props.goToPage('signup')}/>,
			]

			if (props.user && props.user.type==='admin') {
				return  adminMenu
			}
			if (props.user && props.user.type==='user') {
				return  userMenu
			}
			else {
				return  visitorMenu
			}
		}
		
		const $NavigationMenuButton=(props)=>{
			let styles = props.styles || {icon : {}}
			let text = props.text || {list:{}}
			return  (
				<IconMenu 
				  iconButtonElement={<IconButton id={props.id} style={styles} iconStyle={styles.menuIcon}><MenuIcon {...props.attr} /></IconButton>}
				  anchorOrigin={{horizontal: 'left', vertical: 'top'}}
				  targetOrigin={{horizontal: 'left', vertical: 'top'}}
				  menuStyle={styles.menu}
				>
				  <MenuItem
					  style={styles.list} 
					  primaryText={text.home} 
					  rightIcon={<SvgHome style={styles.icon}/>}
					  onTouchTap={()=>props.goToPage("/home")}
				  />
				  <MenuItem  
					  style={styles.list} 
					  primaryText={text.accounts}
					  rightIcon={<SvgBuild style={styles.icon}/>}
					  menuItems={getAccountMenu(props, styles, text)}
					  />
				  <MenuItem  
					  style={styles.list} 
					  primaryText={text.language}
					  rightIcon={<SvgLanguage style={styles.icon}/>}
					  menuItems={[
							<MenuItem  
								style={styles.list} 
								primaryText={text.french} 
								onTouchTap={()=>{props.handleLanguageChange('fr')}} 
								leftIcon={<Avatar src="/navigation/flags/fr.png" />}
								/>,
							<MenuItem  
								style={styles.list} 
								primaryText={text.english} 
								onTouchTap={()=>{props.handleLanguageChange('en')}}
								leftIcon={<Avatar src="/navigation/flags/uk.png" />}
								/>
						]}
					  />
				  <MenuItem  
					  style={styles.list} 
					  primaryText={text.help} 
					  rightIcon={<SvgInfo  style={styles.icon}/>}/>
				  {
						(()=>{
							let menuItem = props.user ?	
							<MenuItem 
							  style={styles.list}  
							  primaryText={text.logout} 
							  rightIcon={<SvgExitToApp style={styles.icon}/>} 
							  onTouchTap={()=> props.logout()}
						   /> :
							<MenuItem 
							  style={styles.list}  
							  primaryText={text.login}
							  rightIcon={<SvgAccountBox style={styles.icon}/>} 
							  onTouchTap={()=>props.goToPage("/login")}
						   />
						   return menuItem
						})()
				   }
				</IconMenu>	
			)	
		}
		return $NavigationMenuButton
	}
}


