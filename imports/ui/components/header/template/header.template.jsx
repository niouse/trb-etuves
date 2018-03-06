import React, {Component} from 'react';
import PropTypes from 'prop-types';

export default function Header_Template() {
    return (wrappedComponent) => {
        const $Header_Template = (props) => {
            let styles = props.styles
            let text = props.text
            return (
                <div id="header-container" style={styles.container}>
					<div style={styles.content}>
						<img src={props.leftLogo} style={styles.logo}></img>
						<div style={styles.title}>{props.title}</div>
						<div style={styles.telBox}>
							<img src={props.rightLogo} style={styles.tel}></img>
						</div>
					</div>
				</div>
            );
        }
        $Header_Template.propTypes = {
            styles: PropTypes.object.isRequired,
            text: PropTypes.object.isRequired,
            leftLogo : PropTypes.string.isRequired,
            rightLogo : PropTypes.string.isRequired,
            title : PropTypes.string.isRequired,
        };
        return $Header_Template
    }
}
    