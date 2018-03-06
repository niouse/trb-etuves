

import React, {Component} from 'react';
import PropTypes from 'prop-types';
//import { browserHistory } from 'react-router';

export default function SvgHfCoulage(_optional) {
    return (WrappedComponent) => {
        class $SvgHfCoulage extends Component {
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
					  <path id="path2987" strokeLinejoin="miter" d="M 50,60 C 50,60 91.391436,116.77846 100,150 108.36138,182.26761 100,210 90,240 86.837722,249.48683 70,250 70,250 L 150,410 160,430 340,430 350,410 430,250 400,250 370,250 330,250 C 330,250 320,320 250,320 180,320 170,250 170,250 170,250 130,256.66667 130,240 130,210 128.89779,172.12383 120,140 109.62349,102.5375 60,50 60,50 z M 178.5,148.5 178.5,150 178.5,250 C 178.5,279.72065 209.21686,311.5 250,311.5 290.78314,311.5 321.5,279.72065 321.5,250 L 321.5,150 321.5,148.5 320,148.5 180,148.5 178.5,148.5 z M 181.5,151.5 318.5,151.5 318.5,250 C 318.5,277.62819 289.21686,308.5 250,308.5 210.78314,308.5 181.5,277.62819 181.5,250 L 181.5,151.5 z M 48.5,148.5 48.5,150 48.5,250 48.5,250.34375 48.65625,250.65625 148.65625,450.65625 149.0625,451.5 150,451.5 350,451.5 350.9375,451.5 351.34375,450.65625 451.34375,250.65625 451.5,250.34375 451.5,250 451.5,150 451.5,148.5 450,148.5 440,148.5 438.5,148.5 438.5,150 438.5,249.65625 348.78125,429.09375 339.375,438.5 160.625,438.5 151.21875,429.09375 61.5,249.65625 61.5,150 61.5,148.5 60,148.5 50,148.5 48.5,148.5 z M 51.5,151.5 58.5,151.5 58.5,250 58.5,250.34375 58.65625,250.65625 148.65625,430.65625 148.78125,430.875 148.9375,431.0625 158.9375,441.0625 159.375,441.5 160,441.5 340,441.5 340.625,441.5 341.0625,441.0625 351.0625,431.0625 351.21875,430.875 351.34375,430.65625 441.34375,250.65625 441.5,250.34375 441.5,250 441.5,151.5 448.5,151.5 448.5,249.65625 349.0625,448.5 150.9375,448.5 51.5,249.65625 51.5,151.5 z" stroke="none" strokeLinecap="butt" strokeWidth="1px" fill={this.props.color || "#000"}/>
					 </g>
				</svg>
            }
        }
        $SvgHfCoulage.propTypes = {
            //styles: PropTypes.object.isRequired,
            // text : PropTypes.object.isRequired,
        };
        return $SvgHfCoulage
    }
}
    

