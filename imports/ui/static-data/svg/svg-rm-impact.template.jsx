

import React, {Component} from 'react';
import PropTypes from 'prop-types';
//import { browserHistory } from 'react-router';

export default function SvgRmImpact(_optional) {
    return (WrappedComponent) => {
        class $SvgRmImpact extends Component {
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
					  <path id="path2987" strokeLinejoin="miter" d="M 208,348 208,350 208,390 208,392 210,392 290,392 292,392 292,390 292,350 292,348 290,348 210,348 208,348 z M 212,352 288,352 288,388 212,388 212,352 z M 198.75,38 198.21875,39.09375 148.21875,139.09375 148,139.53125 148,140 148,470 148,472 150,472 200,472 202,472 202,470 202,200 298,200 298,470 298,472 300,472 350,472 352,472 352,470 352,140 352,139.53125 351.78125,139.09375 301.78125,39.09375 301.25,38 300,38 200,38 198.75,38 z M 201.25,42 298.75,42 348,140.46875 348,468 302,468 302,150 C 302,137.46734 295.09447,124.59447 285.25,114.75 275.40553,104.90553 262.53266,98 250,98 237.46734,98 224.59447,104.90553 214.75,114.75 204.90553,124.59447 198,137.46734 198,150 L 198,468 152,468 152,140.46875 201.25,42 z" stroke="none" strokeLinecap="butt" strokeWidth="1px" fill={this.props.color || "#000"}/>
					 </g>
				</svg>
            }
        }
        $SvgRmImpact.propTypes = {
            //styles: PropTypes.object.isRequired,
            // text : PropTypes.object.isRequired,
        };
        return $SvgRmImpact
    }
}
    

