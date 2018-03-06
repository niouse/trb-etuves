
import React, {Component} from 'react';
import PropTypes from 'prop-types';
//import { browserHistory } from 'react-router';

export default function ButtonFuturistic_Api(_optional) {
    return (WrappedComponent) => {
        class $ButtonFuturistic_Api extends Component {
            constructor(props) {
                super(props);
                this.state = {}
				
            }
            componentDidMount() {
				this.updateDisplay(this.props)
			}
            componentWillReceiveProps(newProps) {
				this.updateDisplay(newProps)
			}
            shouldComponentUpdate(nextProps, nextState) {
                return true
            }
            componentWillUpdate() {}
            componentDidUpdate() {}
            componentWillUnmount() {}
			
			setActive(){
				let className = this.props.small ? "recording-small" : "recording"
				document.getElementById(this.props.buttonId).className = className
			}
			
			updateDisplay(props){
				if(props.active){
					document.getElementById(props.buttonId).className = props.small ? "recording-small" : "recording"
				}
				else {
					document.getElementById(props.buttonId).className = props.small ? "svg-wrapper-small" : "svg-wrapper"
				}
			}
			

            render() {
                return <WrappedComponent
				{...this.props}
				height={this.props.size.toString()}
				width={this.props.size.toString()}
				cx={(this.props.size/2).toString()}
				cy={(this.props.size/2).toString()}
				radius={(this.props.size/2-10).toString()}
				containerClass={this.props.small?"svg-wrapper-small": "svg-wrapper"}
				circleClass={this.props.small?"shape-small":"shape"}
				textClass={this.props.small?"text-small":"text"}
				/>
            }
        }
        $ButtonFuturistic_Api.propTypes = {
            styles: PropTypes.object.isRequired,
			active: PropTypes.bool.isRequired,
            // text : PropTypes.object.isRequired,
        };
        return $ButtonFuturistic_Api
    }
}
    