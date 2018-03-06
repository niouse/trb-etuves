
import React, {Component} from 'react';
import PropTypes from 'prop-types';

export default function Loading_Template() {
    return (wrappedComponent) => {
        const $Loading_Template = (props) => {
            let styles = props.styles
            let text = props.text
            return (
                <div id="loading-container" className="container" style={styles.container}>
					<h1  id="loading-title" style={styles.title}>{text.title}</h1>
					{/*<button onClick={()=>props.languageNext('fr')}>test </button>*/}
				</div>
            );
        }
        $Loading_Template.propTypes = {
            styles: PropTypes.object.isRequired,
            text: PropTypes.object.isRequired,
        };
        return $Loading_Template
    }
}
    