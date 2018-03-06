

import React, {Component} from 'react';
import PropTypes from 'prop-types';
//import { browserHistory } from 'react-router';

export default function SvgGirdTwo(_optional) {
    return (WrappedComponent) => {
        class $SvgGirdTwo extends Component {
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
					  <path id="path2987" strokeLinejoin="miter" d="M 270,270 400,270 400,400 270,400 z M 100,270 230,270 230,400 100,400 z M 270,100 400,100 400,230 270,230 z M 100,100 230,100 230,230 100,230 z" stroke="none" strokeLinecap="butt" strokeWidth="1px" fill={this.props.color || "#000"}/>
					 </g>
				</svg>
            }
        }
        $SvgGirdTwo.propTypes = {
            //styles: PropTypes.object.isRequired,
            // text : PropTypes.object.isRequired,
        };
        return $SvgGirdTwo
    }
}
    

