
import React, {Component} from 'react';
import PropTypes from 'prop-types';

import RaisedButton from 'material-ui/RaisedButton'
import TextField from 'material-ui/TextField'

export default function Login_Template() {
    return (wrappedComponent) => {
        const $Login_Template = (props) => {
            let styles = props.styles
            let text = props.text
            return (
                <div id="login-container" className="container" style={styles.container}>
					<h1  id="login-title" style={styles.title}>{text.title}</h1>
					 <form 
						 id="login-form"
						 className="register" 
						 style={styles.form} 
						 onSubmit={props.submitUser}
					>
						<TextField
							  id="login-mailInput"
							  style={styles.mailInput}
							  hintText="Hint Text"
							  type="email" 
							  pattern="[^ @]*@[^ @]*"
							  floatingLabelText={text.email}				
							  required="true"
						/>

						 <TextField
							  id="login-passwordInput"
							  style={styles.passwordInput}
							  type="password" 
							  pattern=".{5,20}"
							  hintText="Hint Text"
							  floatingLabelText={text.password}
							  required="true"  
							/>

							<RaisedButton 
								id="login-submitUserButton"
								style={styles.submitUserButton}
								type="submit" 
								label={text.submitUserButton || " "} 
								primary={true} 
							/>

						 {/*<p id="login-_or">{text._or || "or"}</p>
						 <RaisedButton 
							 id="login-goToSignupButton"
							 style={styles.goToSignupButton}
							 label={text.goToSignupButton || " "}
							 primary={true}  
							 onClick={()=>{props.goToSignup()}}  
						/>*/}
					</form>	
					
					<p id="login-message" style={styles.message}>
						{props.message}
					</p>
					{/*<button onClick={()=>props.AppLanguageNext('fr')}>test </button>*/}
				</div>
            );
        }
        $Login_Template.propTypes = {
            styles: PropTypes.object.isRequired,
            text: PropTypes.object.isRequired,
        };
        return $Login_Template
    }
}
    