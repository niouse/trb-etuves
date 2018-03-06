

import React, {Component} from 'react';
import PropTypes from 'prop-types';
//import { browserHistory } from 'react-router';

export default function SvgBascule(_optional) {
    return (WrappedComponent) => {
        class $SvgBascule extends Component {
            constructor(props) {
                super(props);
                this.state = {}
            }
            componentDidMount() {

			}
            componentWillReceiveProps(newProps) {}
            shouldComponentUpdate(nextProps, nextState) {
                return true
            }
            componentWillUpdate() {}
            componentDidUpdate() {}
            componentWillUnmount() {}
			mouseOver(e){
				if(this.props.hoverColor){
					e.currentTarget.childNodes[0].childNodes[0].style.fill = this.props.hoverColor
					//document.getElementById("path2987").attr('fill', this.props.hoverColor) 
				}
			}
			
			mouseOut(e){
				if(this.props.color){
					e.currentTarget.childNodes[0].childNodes[0].style.fill = this.props.color
				}
			}

            render() {
                return  <svg id="svg2" viewBox="0 0 500 500" version="1.1" onMouseOver={(e)=>this.mouseOver(e)} onMouseOut={(e)=>this.mouseOut(e)}>
					 <g id="layer1">
					  <path id="path2987" strokeLinejoin="miter" d="M 198.4375 47 L 197.53125 48.28125 L 127.53125 148.28125 L 127 149.0625 L 127 150 L 127 200 L 100 200 L 100 300 L 127 300 L 127 350 L 127 350.9375 L 127.53125 351.71875 L 197.53125 451.71875 L 198.4375 453 L 200 453 L 227.96875 453 L 272.03125 453 L 300 453 L 301.5625 453 L 302.46875 451.71875 L 372.46875 351.71875 L 373 350.9375 L 373 350 L 373 300 L 400 300 L 400 200 L 373 200 L 373 150 L 373 149.0625 L 372.46875 148.28125 L 302.46875 48.28125 L 301.5625 47 L 300 47 L 282.21875 47 L 227.96875 47 L 200 47 L 198.4375 47 z M 201.5625 53 L 225.5625 53 L 187.21875 148.875 L 187 149.4375 L 187 150 L 187 350 L 187 350.5625 L 187.21875 351.125 L 225.5625 447 L 201.5625 447 L 133 349.03125 L 133 150.96875 L 201.5625 53 z M 232.03125 53 L 277.75 53 L 307 150.46875 L 307 349.4375 L 267.96875 447 L 232.03125 447 L 193 349.4375 L 193 150.5625 L 232.03125 53 z M 284.03125 53 L 298.4375 53 L 367 150.96875 L 367 349.03125 L 298.4375 447 L 274.4375 447 L 312.78125 351.125 L 313 350.5625 L 313 350 L 313 150 L 313 149.5625 L 312.875 149.125 L 284.03125 53 z " stroke="none" strokeLinecap="butt" strokeWidth="1px" fill={this.props.color || "#000"}/>
					 </g>
				</svg>
            }
        }
        $SvgBascule.propTypes = {
            //styles: PropTypes.object.isRequired,
            // text : PropTypes.object.isRequired,
        };
        return $SvgBascule
    }
}
    

