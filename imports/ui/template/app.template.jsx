
import React, {Component} from 'react';
import PropTypes from 'prop-types';
import { BrowserRouter, Route,  Link, Switch } from 'react-router-dom'

import ChatIcon from 'material-ui/svg-icons/communication/chat';
import PeopleOutline from 'material-ui/svg-icons/social/people-outline';
import MailOutline from 'material-ui/svg-icons/communication/mail-outline';
import AddAPhoto from 'material-ui/svg-icons/image/add-a-photo';

export default function App_Template(childs) {
    return (wrappedComponent) => {
        const $App_Template = (props) => {
            let styles = props.styles
            let text = props.text
            return (
                <div id="app-container" className="container" style={styles.container}>
					<childs.Header 
						leftLogo="/app/trbLogo.png"
						title={text.headerTitle}
						rightLogo="/app/tel.png"
						titleStyle={{letterSpacing : "0px"}}
						/>
					<childs.Navigation />
					<Switch>
							<Route 
								path="/" 
								exact component={childs.Login} 
								/>
							<Route 
								path="/login" 
								exact component={childs.Login} 
								/>
							<Route 
								path="/home"
								component={childs.Home}
								/>
							<Route 
								path="/help/:section?"
								component={childs.AppHelp}
								/>
							<Route 
								component={childs.PageNotFound}
								/>
					</Switch>
					
				</div>
            );
        }
        $App_Template.propTypes = {
            styles: PropTypes.object.isRequired,
            text: PropTypes.object.isRequired,
        };
        return $App_Template
    }
}
    