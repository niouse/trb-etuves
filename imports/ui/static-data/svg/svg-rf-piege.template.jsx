

import React, {Component} from 'react';
import PropTypes from 'prop-types';
//import { browserHistory } from 'react-router';

export default function SvgRlPiege(_optional) {
    return (WrappedComponent) => {
        class $SvgRlPiege extends Component {
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
					  <path id="path2987" strokeLinejoin="miter" d="M 153.06205,46.767617 153.6558,47.736367 183.6558,97.736367 183.93705,98.205117 183.93705,98.767617 183.93705,299.95512 C 183.93705,327.84232 202.87897,346.76762 230.1558,346.76762 L 431.93705,346.76762 433.93705,346.76762 433.93705,348.76762 433.93705,376.76762 433.93705,378.76762 433.93705,418.76762 433.93705,420.76762 433.93705,448.76762 433.93705,450.76762 431.93705,450.76762 230.62455,450.76762 C 150.74882,450.76762 80.227821,379.93672 79.937051,298.48637 L 79.937051,98.767617 79.937051,98.205117 80.218301,97.736367 110.2183,47.736367 110.81205,46.767617 111.93705,46.767617 120.31205,46.767617 143.56205,46.767617 151.93705,46.767617 153.06205,46.767617 z M 150.81205,50.767617 144.37455,50.767617 153.9058,98.361367 153.93705,98.580117 153.93705,98.767617 153.93705,298.76762 C 153.93705,316.87625 164.2231,336.49117 179.2183,351.48637 194.2135,366.48157 213.82842,376.76762 231.93705,376.76762 L 429.93705,376.76762 429.93705,350.76762 230.1558,350.76762 C 200.98917,350.76762 180.04273,329.69317 179.93705,299.95512 L 179.93705,99.330117 150.81205,50.767617 z M 140.2808,50.767617 123.5933,50.767617 113.93705,99.017617 113.93705,298.76762 C 113.93705,327.56407 128.92827,357.13384 151.24955,379.45512 173.57083,401.7764 203.14063,416.80723 231.93705,416.76762 L 240.0308,416.76762 240.0308,380.76762 231.93705,380.76762 C 212.33332,380.76762 191.95126,369.90683 176.37455,354.33012 160.79784,338.75341 149.93705,318.37135 149.93705,298.76762 L 149.93705,99.017617 140.2808,50.767617 z M 119.49955,50.767617 113.06205,50.767617 83.937051,99.330117 83.937051,298.48637 C 83.937051,377.61228 153.12107,446.87353 230.62455,446.76762 L 429.93705,446.76762 429.93705,420.76762 231.93705,420.76762 C 201.76081,420.76762 171.34135,405.23442 148.4058,382.29887 125.47025,359.36332 109.93705,328.94386 109.93705,298.76762 L 109.93705,98.767617 109.93705,98.580117 109.9683,98.361367 119.49955,50.767617 z" stroke="none" strokeLinecap="butt" strokeWidth="1px" fill={this.props.color || "#000"}/>
					 </g>
				</svg>
            }
        }
        $SvgRlPiege.propTypes = {
            //styles: PropTypes.object.isRequired,
            // text : PropTypes.object.isRequired,
        };
        return $SvgRlPiege
    }
}
    

