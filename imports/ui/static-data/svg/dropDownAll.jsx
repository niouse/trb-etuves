

import React, {Component} from 'react';
import PropTypes from 'prop-types';
//import { browserHistory } from 'react-router';

export default function DropDownAll(_optional) {
    return (WrappedComponent) => {
        class $DropDownAll extends Component {
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
                return  <svg id="svg2" viewBox="0 0 24 24" version="1.1" onMouseOver={(e)=>this.mouseOver(e)} onMouseOut={(e)=>this.mouseOut(e)}>
					 <g id="layer1" transform="translate(0,-1028.3622)">
					  <path id="path2987" strokeLinejoin="miter" d="M 6.8359415,1037.0966 11.835941,1042.0966 16.835941,1037.0966 z M 21,1031.3622 3.0000002,1031.3622 C 1.8900001,1031.3622 1.0000001,1032.2522 1.0000001,1033.3622 L 1.0000001,1045.3622 C 1.0000001,1046.4622 1.8900001,1047.3622 3.0000002,1047.3622 L 8.0000002,1047.3622 8.0000002,1049.3622 16,1049.3622 16,1047.3622 21,1047.3622 C 22.1,1047.3622 22.99,1046.4622 22.99,1045.3622 L 23,1033.3622 C 23,1032.2522 22.1,1031.3622 21,1031.3622 z M 21,1045.3622 3.0000002,1045.3622 3.0000002,1033.3622 21,1033.3622 z" stroke="none" strokeLinecap="butt" strokeWidth="1px" fill={this.props.color || "#000"}/>
					 </g>
				</svg>
            }
        }
        $DropDownAll.propTypes = {
            //styles: PropTypes.object.isRequired,
            // text : PropTypes.object.isRequired,
        };
        return $DropDownAll
    }
}
    

