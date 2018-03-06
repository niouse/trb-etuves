
import React, {Component} from 'react';
import PropTypes from 'prop-types';

export default function ButtonFuturistic_Template() {
    return (wrappedComponent) => {
        const $ButtonFuturistic_Template = (props) => {
            let styles = props.styles
            return (
				<div 
					id={props.buttonId}
					style={styles.container}
					className={props.containerClass}
					onClick={()=>props.onClick()}
					>
				  <svg height={props.height} width={props.width} xmlns="http://www.w3.org/2000/svg">
					  <filter id="blurMe">
						<feGaussianBlur in="SourceGraphic" stdDeviation="3" />
					  </filter>
					  <filter id="blurMe2">
						<feGaussianBlur in="SourceGraphic" stdDeviation="1" />
					  </filter>
					<circle 
						className={props.circleClass} 
						cx={props.cx} 
						cy={props.cy} 
						r={props.radius} 
						filter='url(#blurMe2)' 
						/>
				  </svg>
				   <div style={styles.label} className={props.textClass}>{props.label}</div>
				</div>
            );
        }
        $ButtonFuturistic_Template.propTypes = {
            styles: PropTypes.object.isRequired,
            label: PropTypes.string.isRequired,
        };
        return $ButtonFuturistic_Template
    }
}
    