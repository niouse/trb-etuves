
import React, {Component} from 'react';
import PropTypes from 'prop-types';

export default function HighchartsSimple_Template() {
    return (wrappedComponent) => {
        const $HighchartsSimple_Template = (props) => {
            let styles = props.styles
            let text = props.text
            return (
                <div id="highcharts-simple-container" className="container" style={styles.container}>
					<div id={props.chartId}  style={styles.chart}></div>
				</div>
            );
        }
        $HighchartsSimple_Template.propTypes = {
            styles: PropTypes.object.isRequired,
            text: PropTypes.object.isRequired,
        };
        return $HighchartsSimple_Template
    }
}
    