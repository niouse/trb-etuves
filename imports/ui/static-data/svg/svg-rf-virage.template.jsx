

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
					  <path id="path2987" strokeLinejoin="miter" d="M 142.3364,48.30285 142.93015,49.2716 172.93015,99.2716 173.2114,99.74035 173.2114,100.30285 173.2114,301.49035 C 173.2114,329.37755 192.15332,348.30285 219.43015,348.30285 L 421.2114,348.30285 423.2114,348.30285 423.2114,350.30285 423.2114,378.30285 423.2114,380.30285 423.2114,420.30285 423.2114,422.30285 423.2114,450.30285 423.2114,452.30285 421.2114,452.30285 219.8989,452.30285 C 140.02317,452.30285 69.46914,381.47206 69.2114,300.0216 L 69.2114,100.30285 69.2114,99.74035 69.49265,99.2716 99.49265,49.2716 100.0864,48.30285 101.2114,48.30285 109.5864,48.30285 132.8364,48.30285 141.2114,48.30285 142.3364,48.30285 z M 140.0864,52.30285 133.6489,52.30285 143.18015,99.8966 143.2114,100.11535 143.2114,100.30285 143.2114,300.30285 C 143.2114,318.41148 153.49745,338.0264 168.49265,353.0216 183.48785,368.0168 203.10277,378.30285 221.2114,378.30285 L 419.2114,378.30285 419.2114,352.30285 219.43015,352.30285 C 190.26352,352.30285 169.30508,331.22844 169.2114,301.49035 L 169.2114,100.86535 140.0864,52.30285 z M 129.55515,52.30285 112.86765,52.30285 103.2114,100.55285 103.2114,300.30285 C 103.2114,300.97257 103.22653,301.6324 103.24265,302.30285 L 139.24265,302.30285 C 139.21794,301.63688 139.2114,300.96725 139.2114,300.30285 L 139.2114,100.55285 129.55515,52.30285 z M 108.7739,52.30285 102.3364,52.30285 73.2114,100.86535 73.2114,300.0216 C 73.2114,379.14751 142.39535,448.30285 219.8989,448.30285 L 419.2114,448.30285 419.2114,422.30285 221.2114,422.30285 C 191.03516,422.30285 160.6157,406.76965 137.68015,383.8341 114.7446,360.89855 99.2114,330.47909 99.2114,300.30285 L 99.2114,100.30285 99.2114,100.11535 99.24265,99.8966 108.7739,52.30285 z M 419.2114,382.30285 233.2114,382.30285 C 233.2114,400.74837 233.13034,402.62867 233.11765,418.30285 L 419.2114,418.30285 419.2114,382.30285 z" stroke="none" strokeLinecap="butt" strokeWidth="1px" fill={this.props.color || "#000"}/>
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
    

