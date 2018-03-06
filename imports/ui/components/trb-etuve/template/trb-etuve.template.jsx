
import React, {Component} from 'react';
import PropTypes from 'prop-types';

import SelectField from 'material-ui/SelectField';
import MenuItem from 'material-ui/MenuItem';
import Refresh from 'material-ui/svg-icons/navigation/refresh';
import Export from 'material-ui/svg-icons/communication/import-export';


export default function TrbEtuve_Template(childs) {
    return (wrappedComponent) => {
        const $TrbEtuve_Template = (props) => {
            let styles = props.styles
            let text = props.text
            console.log(props)
            return (
                <div id="trb-etuve-container" className="container" style={styles.container}>
                      <SelectField
                      floatingLabelText="Choisissez une étuve"
                      value={props.etuveValue}
                      onChange={props.handleChange}
                    >
                      <MenuItem value={1} primaryText="Etuve fixe" />
                      <MenuItem value={2} primaryText="Etuve Bouvier" />
                      <MenuItem value={3} primaryText="Etuve Barron" />
                    </SelectField>

                    <div style={styles.row}>
                        <div style={styles.column1}>TC1:</div>
                        <div style={styles.digitValue}>{props.etuves[2].lastValue.TC1}°C</div>
                    </div>
                    <div style={styles.row}>
                        <div style={styles.column1}>TC2:</div>
                        <div style={styles.digitValue}>{props.etuves[2].lastValue.TC2}°C</div>
                    </div>
                    <div style={styles.row}>
                        <div style={styles.column1}>TC3:</div>
                        <div style={styles.digitValue}>{props.etuves[2].lastValue.TC3}°C</div>
                    </div>
                    <div style={styles.row}>
                        <div style={styles.column1}>TC4:</div>
                        <div style={styles.digitValue}>{props.etuves[2].lastValue.TC4}°C</div>
                    </div>
					
                    
                    <div style={styles.chartContainer}>
                        <div style={{width : "100%", display:"flex", justifyContent:"flex-end"}}>
                            <Refresh style={{margin : "5px", cursor:"pointer", color:props.stylesOptions.theme.colors.primary}}
                                onTouchTap={props.resetEtuve}
                                />
                            <Export style={{margin : "5px", cursor:"pointer", color:props.stylesOptions.theme.colors.primary}}/>
                        </div>
                        
                        <childs.HighchartsSimple
                            chartId="chart-etuve"
                            etuve={props.etuves[2]}
                            />
                    </div>
				</div>
            );
        }
        $TrbEtuve_Template.propTypes = {
            styles: PropTypes.object.isRequired,
            text: PropTypes.object.isRequired,
        };
        return $TrbEtuve_Template
    }
}
    