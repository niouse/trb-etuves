
import React, {Component} from 'react';
import PropTypes from 'prop-types';
//import { browserHistory } from 'react-router';

export default function Login_Api(_msgDuration) {
	
	let msgDuration;
	let msgDurationDefault = 4000; 
	if(_msgDuration){
		try {
			msgDuration = Number(_msgDuration)
			msgDuration = (0 < msgDuration) && (msgDuration < 10000) ? msgDuration : msgDurationDefault
		}
		catch(e) {
			console.log("Login component : error when converting user provided message duration. It will be set to default value (4000ms)")
			msgDuration = msgDurationDefault
		}
		
	}
	else {msgDuration = msgDurationDefault}
	
	
    return (WrappedComponent) => {
        class $Login_Api extends Component {
            constructor(props) {
                super(props);
                this.state = {
					message : " ",
				}
            }
            componentDidMount() {
				if (Meteor.userId()){
					this.props.goToPageNext('/home')
				}
			}
            componentWillReceiveProps(newProps) {

			}
            shouldComponentUpdate(nextProps, nextState) {
                return true
            }
            componentWillUpdate() {}
            componentDidUpdate() {}
            componentWillUnmount() {}

            submitUser(e) {			
				e.preventDefault();
				if(this.props.submitUser && typeof(this.props.submitUser) === 'function'){
					let options = {
						email : document.getElementById("login-mailInput").value,
						pass : document.getElementById("login-passwordInput").value,
					}
					this.props.submitUser(options, (error)=>{
						if(error){
							this.showMessage(error)
						}
						else{
							this.props.goToPageNext('/home')
							//browserHistory.push("/home");
						}
					});
				}
				else {
					let err = new Error( "No method for submitting user has been provided to Login component. You must pass a \"submitUser\" function to login component via props, or change source code of Login.api.jsx")
					throw err
				}
			}
			
			goToSignup(){
				console.log('go signup')
				this.props.goToPageNext('/signup')
			}

			showMessage(error){
				 this.setState({
					 message : error.reason,
				 });

				 setTimeout(()=>{ 
					 this.setState({
						 message : " ",
					 });
				 }, msgDuration);
			}

            render() {
                return <WrappedComponent
				{...this.props}
				message = {this.state.message}
				submitUser = {(e)=>this.submitUser(e)}
				goToSignup = {()=>this.goToSignup()}
				/>
            }
        }
        $Login_Api.propTypes = {
            styles: PropTypes.object.isRequired,
            // text : PropTypes.object.isRequired,
        };
        return $Login_Api
    }
}
    