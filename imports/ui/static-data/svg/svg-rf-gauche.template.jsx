

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
					  <path id="path2987" strokeLinejoin="miter" d="M 141.85065,48 142.4444,48.96875 172.4444,98.96875 172.72565,99.4375 172.72565,100 172.72565,301.1875 C 172.72565,329.0747 191.66757,348 218.9444,348 L 420.72565,348 422.72565,348 422.72565,350 422.72565,378 422.72565,380 422.72565,420 422.72565,422 422.72565,450 422.72565,452 420.72565,452 219.41315,452 C 139.53742,452 68.725651,381.16962 68.725651,299.71875 L 68.725651,100 68.725651,99.4375 69.006901,98.96875 99.006901,48.96875 99.600651,48 100.72565,48 109.10065,48 132.35065,48 140.72565,48 141.85065,48 z M 139.60065,52 133.16315,52 142.6944,99.59375 142.72565,99.8125 142.72565,100 142.72565,100.5 168.6944,100.5 139.60065,52 z M 129.0694,52 112.3819,52 102.72565,100.25 102.72565,300 C 102.72565,328.79645 117.71687,358.36622 140.03815,380.6875 162.35943,403.00878 191.9292,418 220.72565,418 L 418.72565,418 418.72565,382 220.72565,382 C 201.12192,382 180.73986,371.13921 165.16315,355.5625 149.58644,339.98579 138.72565,319.60373 138.72565,300 L 138.72565,100.25 129.0694,52 z M 108.28815,52 101.85065,52 72.725651,100.5625 72.725651,299.71875 C 72.725651,378.84466 141.9096,448 219.41315,448 L 418.72565,448 418.72565,422 220.72565,422 C 190.54941,422 160.12995,406.4668 137.1944,383.53125 114.25885,360.5957 98.725651,330.17624 98.725651,300 L 98.725651,100 98.725651,99.8125 98.756901,99.59375 108.28815,52 z M 168.78815,303.5 142.85065,303.5 C 144.06491,320.60357 153.97425,338.6861 168.0069,352.71875 183.0021,367.71395 202.61702,378 220.72565,378 L 418.72565,378 418.72565,352 218.9444,352 C 190.5443,352 169.85691,332.00492 168.78815,303.5 z" stroke="none" strokeLinecap="butt" strokeWidth="1px" fill={this.props.color || "#000"}/>
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
    

