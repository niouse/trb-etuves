import React, {Component} from 'react';
import PropTypes from 'prop-types';
import { BrowserRouter, Route,  Link, Switch } from 'react-router-dom'


export default function Home_Template(childs) {
    return (wrappedComponent) => {
        const $Home_Template = (props) => {
            let styles = props.styles
            let text = props.text
	
            return (
                <div id="home-container" style={styles.container}>
					{/*<div id="home-band-image-box" style={styles.bandImageBox}>

					</div>*/}
					<childs.TrbEtuve 
                        />

				</div>
            );
        }
        $Home_Template.propTypes = {
            styles: PropTypes.object.isRequired,
            text: PropTypes.object.isRequired,
        };
        return $Home_Template
    }
}
    