

import React, {Component} from 'react';
import PropTypes from 'prop-types';
//import { browserHistory } from 'react-router';

export default function SvgRlDroite(_optional) {
    return (WrappedComponent) => {
        class $SvgRlDroite extends Component {
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
					  <path id="path2987" strokeLinejoin="miter" d="M 143.85065,46.767617 144.4444,47.736367 174.4444,97.736367 174.72565,98.205117 174.72565,98.767617 174.72565,299.95512 C 174.72565,327.84232 193.66757,346.76762 220.9444,346.76762 L 422.72565,346.76762 424.72565,346.76762 424.72565,348.76762 424.72565,376.76762 424.72565,378.76762 424.72565,418.76762 424.72565,420.76762 424.72565,448.76762 424.72565,450.76762 422.72565,450.76762 221.41315,450.76762 C 141.53742,450.76762 71.562481,379.93294 70.725651,298.48637 L 70.725651,98.767617 70.725651,98.205117 71.006901,97.736367 101.0069,47.736367 101.60065,46.767617 102.72565,46.767617 111.10065,46.767617 134.35065,46.767617 142.72565,46.767617 143.85065,46.767617 z M 141.60065,50.767617 135.16315,50.767617 144.6944,98.361367 144.72565,98.580117 144.72565,98.767617 144.72565,298.76762 C 144.72565,316.87625 155.0117,336.49117 170.0069,351.48637 185.0021,366.48157 204.61705,376.80421 222.72565,376.76762 L 420.72565,376.76762 420.72565,350.76762 220.9444,350.76762 C 191.77777,350.76762 170.72565,329.69336 170.72565,299.95512 L 170.72565,99.330117 141.60065,50.767617 z M 131.0694,50.767617 114.3819,50.767617 104.72565,99.017617 104.72565,298.76762 C 104.72565,327.56407 119.71687,357.13384 142.03815,379.45512 164.35943,401.7764 193.9292,416.76762 222.72565,416.76762 L 420.72565,416.76762 420.72565,380.76762 222.72565,380.76762 C 203.12192,380.76762 182.73986,369.90683 167.16315,354.33012 151.58644,338.75341 140.72565,318.37135 140.72565,298.76762 L 140.72565,99.017617 131.0694,50.767617 z M 110.28815,50.767617 103.85065,50.767617 75.506901,98.017617 100.8194,98.017617 110.28815,50.767617 z M 101.16315,307.54887 75.038151,307.54887 C 80.061581,382.82657 146.88615,446.91722 221.41315,446.76762 L 420.72565,446.76762 420.72565,420.76762 222.72565,420.76762 C 192.54941,420.76762 162.12995,405.23442 139.1944,382.29887 118.48073,361.5852 103.81224,334.77885 101.16315,307.54887 z" stroke="none" strokeLinecap="butt" strokeWidth="1px" fill={this.props.color || "#000"}/>
					 </g>
				</svg>
            }
        }
        $SvgRlDroite.propTypes = {
            //styles: PropTypes.object.isRequired,
            // text : PropTypes.object.isRequired,
        };
        return $SvgRlDroite
    }
}
    

