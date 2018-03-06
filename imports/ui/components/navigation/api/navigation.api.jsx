
import React, {Component} from 'react';
import PropTypes from 'prop-types';
//import { browserHistory } from 'react-router';

export default function Navigation_Api(_optional) {
    return (WrappedComponent) => {
        class $Navigation_Api extends Component {
            constructor(props) {
                super(props);
                this.state = {}
            }
            componentDidMount() {
				if(this.props.goToPageObs){
					this.goToPageObsSub = this.props.goToPageObs.subscribe((page)=>{
						
						/*let page = msg.split('/')[1]
						let param = msg.split('/')[2]*/
						this.goToPage(page)
					})
				}
				this.handleLanguageChange=this.handleLanguageChange.bind(this)
			}
            componentWillReceiveProps(newProps) {}
            shouldComponentUpdate(nextProps, nextState) {
                return true
            }
            componentWillUpdate() {}
            componentDidUpdate() {}
            componentWillUnmount() {}

            goToPage(page) {
				if(!Meteor.userId() && page !== "/signup"){
					this.props.history.push("/login")
					return
				}
                else this.props.history.push(page);
            }
			
			logout(){
				this.props.logout(()=>{
					this.goToPage('/login')
				})
			}
			
			handleLanguageChange(value){
				this.setState({
					language : value
				})
				this.props.languageNext(value)
			}

            render() {
                return <WrappedComponent
				{...this.props}
				logout={()=>this.logout()}
				goToPage={(page)=>this.goToPage(page)}
				handleLanguageChange={this.handleLanguageChange}
				/>
            }
        }
        $Navigation_Api.propTypes = {
            styles: PropTypes.object.isRequired,
            // text : PropTypes.object.isRequired,
        };
        return $Navigation_Api
    }
}
    