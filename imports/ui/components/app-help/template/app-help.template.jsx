
import React, {Component} from 'react';
import PropTypes from 'prop-types';

export default function AppHelp_Template() {
    return (wrappedComponent) => {
        const $AppHelp_Template = (props) => {
            let styles = props.styles
            let text = props.text
            return (
                <div id="app-help-container" className="container" style={styles.container}>
					<h1  id="app-help-title" style={styles.title}>{text.title}</h1>
                    
					{/*<button onClick={()=>props.languageNext('fr')}>test </button>*/}
				</div>
            );
        }
        $AppHelp_Template.propTypes = {
            styles: PropTypes.object.isRequired,
            text: PropTypes.object.isRequired,
        };
        return $AppHelp_Template
    }
}
    