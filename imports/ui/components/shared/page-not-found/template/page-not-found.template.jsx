
import React, {Component} from 'react';
import PropTypes from 'prop-types';

export default function PageNotFound_Template() {
    return (wrappedComponent) => {
        const $PageNotFound_Template = (props) => {
            let styles = props.styles
            let text = props.text
            return (
                <div id="page-not-found-container" className="container" style={styles.container}>
					<h1  id="page-not-found-title" style={styles.title}>{text.title}</h1>
					<p>{text.message}</p>
				</div>
            );
        }
        $PageNotFound_Template.propTypes = {
            styles: PropTypes.object.isRequired,
            text: PropTypes.object.isRequired,
        };
        return $PageNotFound_Template
    }
}
    