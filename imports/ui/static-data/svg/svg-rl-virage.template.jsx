

import React, {Component} from 'react';
import PropTypes from 'prop-types';
//import { browserHistory } from 'react-router';

export default function SvgRlVirage(_optional) {
    return (WrappedComponent) => {
        class $SvgRlVirage extends Component {
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
					  <path id="path2987" strokeLinejoin="miter" d="M 340.875,46 340.28125,46.96875 310.28125,96.96875 310,97.4375 310,98 310,299.1875 C 310,327.0747 291.05808,346 263.78125,346 L 62,346 60,346 60,348 60,376 60,378 60,418 60,420 60,448 60,450 62,450 263.3125,450 C 343.18823,450 413.74226,379.16921 414,297.71875 L 414,98 414,97.4375 413.71875,96.96875 383.71875,46.96875 383.125,46 382,46 373.625,46 350.375,46 342,46 340.875,46 z M 343.125,50 349.5625,50 340.03125,97.59375 340,97.8125 340,98 340,298 C 340,316.10863 329.71395,335.72355 314.71875,350.71875 299.72355,365.71395 280.10863,376 262,376 L 64,376 64,350 263.78125,350 C 292.94788,350 313.90632,328.92559 314,299.1875 L 314,98.5625 343.125,50 z M 353.65625,50 370.34375,50 380,98.25 380,298 C 380,298.66972 379.98487,299.32955 379.96875,300 L 343.96875,300 C 343.99346,299.33403 344,298.6644 344,298 L 344,98.25 353.65625,50 z M 374.4375,50 380.875,50 410,98.5625 410,297.71875 C 410,376.84466 340.81605,446 263.3125,446 L 64,446 64,420 262,420 C 292.17624,420 322.5957,404.4668 345.53125,381.53125 368.4668,358.5957 384,328.17624 384,298 L 384,98 384,97.8125 383.96875,97.59375 374.4375,50 z M 64,380 250,380 C 250,398.44552 250.08106,400.32582 250.09375,416 L 64,416 64,380 z" stroke="none" strokeLinecap="butt" strokeWidth="1px" fill={this.props.color || "#000"}/>
					 </g>
				</svg>
            }
        }
        $SvgRlVirage.propTypes = {
            //styles: PropTypes.object.isRequired,
            // text : PropTypes.object.isRequired,
        };
        return $SvgRlVirage
    }
}
    

