
import React, {Component} from 'react';
import PropTypes from 'prop-types';

import ModeEdit from "material-ui/svg-icons/editor/mode-edit.js"
import FlatButton from 'material-ui/FlatButton'


export default function TrbLabGraphsContentTemplate() {
    return (wrappedComponent) => {
        const $TrbLabGraphsContentTemplate = (props) => {
            let styles = props.styles
            let text = props.text
            return (
                <div 
					id="trb-lab-recorder-container" 
					className="container" 
					style={styles.container}
					>
					
					<div  
						id="trb-lab-recorder-buttonBox"
						style={styles.controlBox} 
						> 
						<div 
							id="trb-lab-recorder-results" 
							style={styles.results} 
							>

							<div 
								style={styles.serieTitleBox}
								>
								<div style={styles.serieTitle}>
									{props.recorder.serie.name}
								</div>	
								
								<ModeEdit 
									{...styles.editButton.attr}
									style={styles.editButton}
									onClick={()=>props.toggleStateBool("showRecorderEdit")}
								/>

							</div>

							<div style={styles.rowTable}>
								<div style={styles.tableCell1}>{text.numDep} </div>
								<div style={styles.tableCell2}>{props.recorder.serie.numDep} </div>
							</div>

							 <div style={styles.rowTable}>
								<div style={styles.tableCell1}>{text.numMix} </div>
								<div style={styles.tableCell2}>{props.recorder.serie.numMix} </div>
							</div>
                            
                            <div style={styles.rowTable}>
								<div style={styles.tableCell1}>{text.variant}</div>
								<div style={styles.tableCell2}>{props.recorder.serie.variant} </div>
							</div>

							<div style={styles.rowTable}>
								<div style={styles.tableCell1}>{text.cell3}</div>
								<div style={styles.tableCell2}>{props.recorder.serie.maxValue} °C</div>
							</div>
							<div style={styles.rowTable}>
								<div style={styles.tableCell1}>{text.cell4}</div>
								<div style={styles.tableCell2}>{props.convertTime(props.recorder.serie.timeToMax)}</div>
							</div>
						</div>
						<div style={styles.buttonBox}>
							<props.ButtonFuturistic 
								buttonId="trb-lab-recorder-startButton"
								label={text.startButton}
								size={220}
								active={props.isOnRecord}
								onClick={()=>props.startRecord()}
								/>
							<props.ButtonFuturistic 
								buttonId="trb-lab-recorder-stopButton"
								label={text.stopButton}
								size={220}
								active={props.isOnRecord}
								onClick={()=>props.stopRecord()}
								/>
						</div>
					</div>
					
					<div 
						id="trb-lab-recorder-mainBox" 
						style={styles.mainBox}
						>
						<div id="trb-lab-recorder-graph"
							style={styles.graph}
							>
							<div 
								id="trb-lab-recorder-header" 
								style={styles.header}
								>
								<div style={styles.title}><strong>{props.recorder.name} - {props.recorder.lastValue}°C</strong></div>
							</div>
							<props.HighchartsSimple 
								chartId={props.recorder._id}
								style={styles.chart}
								/>
						</div>

						
					</div>	
					
				</div>
            );
        }
        $TrbLabGraphsContentTemplate.propTypes = {
            styles: PropTypes.object.isRequired,
            text: PropTypes.object.isRequired,
			convertTime : PropTypes.func.isRequired,
			toggleStateBool : PropTypes.func.isRequired,
			showRecorderEdit : PropTypes.bool.isRequired,
			showAlert : PropTypes.bool.isRequired,
			alertOptions : PropTypes.array.isRequired,
        };
        return $TrbLabGraphsContentTemplate
    }
}
    