

import React, {Component} from 'react';
import PropTypes from 'prop-types';
//import { browserHistory } from 'react-router';

export default function SvgRlGauche(_optional) {
    return (WrappedComponent) => {
        class $SvgRlGauche extends Component {
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
					  <path id="path2987" strokeLinejoin="miter" d="M 328.875 48 L 328.28125 48.96875 L 298.28125 98.96875 L 298 99.4375 L 298 100 L 298 301.1875 C 298 329.0747 279.05808 348 251.78125 348 L 50 348 L 48 348 L 48 350 L 48 378 L 48 380 L 48 420 L 48 422 L 48 450 L 48 452 L 50 452 L 251.3125 452 C 331.18823 452 402 381.16962 402 299.71875 L 402 100 L 402 99.4375 L 401.71875 98.96875 L 371.71875 48.96875 L 371.125 48 L 370 48 L 361.625 48 L 338.375 48 L 330 48 L 328.875 48 z M 331.125 52 L 337.5625 52 L 328.03125 99.59375 L 328 99.8125 L 328 100 L 328 100.5 L 302.03125 100.5 L 331.125 52 z M 341.65625 52 L 358.34375 52 L 368 100.25 L 368 300 C 368 328.79645 353.00878 358.36622 330.6875 380.6875 C 308.36622 403.00878 278.79645 418 250 418 L 52 418 L 52 382 L 250 382 C 269.60373 382 289.98579 371.13921 305.5625 355.5625 C 321.13921 339.98579 332 319.60373 332 300 L 332 100.25 L 341.65625 52 z M 362.4375 52 L 368.875 52 L 398 100.5625 L 398 299.71875 C 398 378.84466 328.81605 448 251.3125 448 L 52 448 L 52 422 L 250 422 C 280.17624 422 310.5957 406.4668 333.53125 383.53125 C 356.4668 360.5957 372 330.17624 372 300 L 372 100 L 372 99.8125 L 371.96875 99.59375 L 362.4375 52 z M 301.9375 303.5 L 327.875 303.5 C 326.66074 320.60357 316.7514 338.6861 302.71875 352.71875 C 287.72355 367.71395 268.10863 378 250 378 L 52 378 L 52 352 L 251.78125 352 C 280.18135 352 300.86874 332.00492 301.9375 303.5 z " stroke="none" strokeLinecap="butt" strokeWidth="1px" fill={this.props.color || "#000"}/>
					 </g>
				</svg>
            }
        }
        $SvgRlGauche.propTypes = {
            //styles: PropTypes.object.isRequired,
            // text : PropTypes.object.isRequired,
        };
        return $SvgRlGauche
    }
}
    

