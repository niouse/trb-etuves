

import React, {Component} from 'react';
import PropTypes from 'prop-types';
//import { browserHistory } from 'react-router';

export default function SvgBlocPrefa(_optional) {
    return (WrappedComponent) => {
        class $SvgBlocPrefa extends Component {
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
					  <path id="path2987" strokeLinejoin="miter" d="M 157.59375,256.21875 157.59375,258.21875 157.59375,338.40625 85.65625,338.40625 83.65625,338.40625 83.65625,340.40625 83.65625,414.34375 83.65625,416.34375 85.65625,416.34375 414.34375,416.34375 416.34375,416.34375 416.34375,414.34375 416.34375,340.40625 416.34375,338.40625 414.34375,338.40625 342.40625,338.40625 342.40625,258.21875 342.40625,256.21875 340.40625,256.21875 159.59375,256.21875 157.59375,256.21875 z M 161.59375,260.21875 338.40625,260.21875 338.40625,340.40625 338.40625,342.40625 340.40625,342.40625 412.34375,342.40625 412.34375,412.34375 87.65625,412.34375 87.65625,342.40625 159.59375,342.40625 161.59375,342.40625 161.59375,340.40625 161.59375,260.21875 z M 166.84375,83.65625 166.25,84.4375 84.0625,191.25 83.65625,191.78125 83.65625,192.46875 83.65625,332.1875 83.65625,334.1875 85.65625,334.1875 151.375,334.1875 153.375,334.1875 153.375,332.1875 153.375,252 346.625,252 346.625,332.1875 346.625,334.1875 348.625,334.1875 414.34375,334.1875 416.34375,334.1875 416.34375,332.1875 416.34375,192.46875 416.34375,191.78125 415.9375,191.25 333.75,84.4375 333.15625,83.65625 332.1875,83.65625 167.8125,83.65625 166.84375,83.65625 z M 168.8125,87.65625 331.1875,87.65625 412.34375,193.125 412.34375,330.1875 350.625,330.1875 350.625,250 350.625,248 348.625,248 151.375,248 149.375,248 149.375,250 149.375,330.1875 87.65625,330.1875 87.65625,193.125 168.8125,87.65625 z" stroke="none" strokeLinecap="butt" strokeWidth="1px" fill={this.props.color || "#000"}/>
					 </g>
				</svg>
            }
        }
        $SvgBlocPrefa.propTypes = {
            //styles: PropTypes.object.isRequired,
            // text : PropTypes.object.isRequired,
        };
        return $SvgBlocPrefa
    }
}
    

