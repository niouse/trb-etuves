
import React, {Component} from 'react';
import PropTypes from 'prop-types';

import TextField from 'material-ui/TextField'


export default function TrbLabRecorderEditTemplate() {
    return (wrappedComponent) => {
        const $TrbLabRecorderEditTemplate = (props) => {
            let styles = props.styles
            let text = props.text
            //console.log(props.styles)
            return (
                <div id="trb-lab-recorder-edit-container" style={styles.container}>
                        <div style={styles.title}>
							Paramètres pour la sonde {" "+props.recorder.name} 
						</div>

                            <div style={styles.serieInfo}>
                                <div style={styles.tableRow} >
                                    <div style={styles.tableCell} >{text.cell1}</div>
                                    <div style={styles.tableCell2} >
										<TextField 
											name="title" 
											disabled={true} 
											value={props.name} 
											style={styles.inputs}
											/>
									</div>
                                </div>
								
								<div style={styles.tableRow} >
                                    <div style={styles.tableCell} >{props.text.numDep}</div>
                                    <div style={styles.tableCell2} >
										<TextField 
											name="numDep" 
											value={props.numDep} 
											style={styles.inputs}
											onChange={(e, newValue, key)=>props.handleTextChange(e, newValue, "numDep")}
                                            type="number"
                                            min={4}
                                            max={4}
										/>
									</div>
                                </div>
								
                                <div style={styles.tableRow} >
                                    <div style={styles.tableCell} >{props.text.numMix}</div>
                                    <div style={styles.tableCell2} >
										<TextField 
											name="numMix" 
											value={props.numMix} 
											style={styles.inputs}
											onChange={(e, value, key)=>props.handleTextChange(e, value, "numMix")}
                                            type="number"
                                            min={1}
                                            max={2}
										/>
									</div>
                                </div>
                                
                                <div style={styles.tableRow} >
                                    <div style={styles.tableCell} >{props.text.variant}</div>
                                    <div style={styles.tableCell2} >
										<TextField 
											name="avenant" 
											value={props.variant} 
											style={styles.inputs}
											onChange={(e, value, key)=>props.handleTextChange(e, value, "variant")}
                                            type="number"
                                            min={1}
                                            max={3}
										/>
									</div>
                                </div>
                            </div>

                            <div style={props.messageStyle}>{props.message}</div>
							
                            
				</div>
            );
        }
        $TrbLabRecorderEditTemplate.propTypes = {
            styles: PropTypes.object.isRequired,
            text: PropTypes.object.isRequired,
			handleTextChange: PropTypes.func.isRequired,
        };
        return $TrbLabRecorderEditTemplate
    }
}
    