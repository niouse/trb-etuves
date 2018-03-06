
import React, {Component} from 'react';
import PropTypes from 'prop-types';

import RecorderSelector from "./trb-lab-graphs-recorder-selector.template.jsx"
import TrbLabContent from "./trb-lab-graphs-content.template.jsx"
import TrbLabRecorderEdit from "./trb-lab-recorder-edit.template.jsx"

@RecorderSelector()
class $RecorderSelector{}

@TrbLabContent()
class $TrbLabContent{}

@TrbLabRecorderEdit()
class $TrbLabRecorderEdit{}

//MATERIAL COMPONENTS
import Dialog from 'material-ui/Dialog'
import RaisedButton from 'material-ui/RaisedButton'


export default function TrbLabGraphs_Template(childs) {
    return (wrappedComponent) => {
        const $TrbLabGraphs_Template = (props) => {
            let styles = props.styles
            let text = props.text
            
            const actions = [
                 <RaisedButton 
                    onClick={props.saveChanges} 
                    label="Enregistrer" 
                    style={styles.button}
                    />,
                <RaisedButton 
                    onClick={()=>props.toggleStateBool("showRecorderEdit")} 
                    label="Fermer" 
                    style={styles.button}
                    />
            ]
            return (
                <div id="trb-lab-graphs-container" className="container" style={styles.container}>
                    <$RecorderSelector 
                        styles={styles.recorderSelector}
                        text={text.recorderSelector}
                        list={props.recorders}
						stylesOptions={props.stylesOptions}
						value={props.recorderId}
						containerStyle={{justifyContent : "flex-start"}}
                        selectRecorder={props.selectRecorder}
                        />
                    <$TrbLabContent 
                        styles={styles.content}
                        text={props.text.content}
                        recorder={props.recorder}
						stylesOptions={props.stylesOptions}
                        ButtonFuturistic={childs.ButtonFuturistic}
                        HighchartsSimple={childs.HighchartsSimple}
                        
                        startRecord={()=>props.startRecord()}
                        stopRecord={()=>props.handleStopQuery()}
                        isOnRecord={props.recorder.isOnRecord}
                        convertTime={props.convertTime}
                        showRecorderEdit={props.showRecorderEdit}
                        showAlert={props.showAlert}
                        toggleStateBool={(key)=>props.toggleStateBool(key)}
                        message={props.message}
                        alertOptions={props.alertOptions}
                        />
                    
                    
                    
                    <Dialog 
						  modal={false}
						  open={props.showRecorderEdit}
                          actions={actions}
						  onRequestClose={()=>props.toggleStateBool("showRecorderEdit")}
						>
                    
                        <$TrbLabRecorderEdit 
                            styles={styles.recorderEdit}
                            text={props.text.recorderEdit}
                            show={props.showRecorderEdit}
                            recorder={props.recorder} 
                            serie={props.recorder.serie}
                            seriesList={props.seriesList}

                            handleTextChange={(e, value, key)=>props.handleTextChange(e, value, key)}
                            numDep={props.numDep}
                            numMix={props.numMix}
                            variant={props.variant}
                            name={props.serieName}
                            message={props.message}
                            messageStyle={props.messageStyle}
                        />
                        
                    </Dialog>
					
					<Dialog 
						  title={text.alertTitle}
						  actions={props.alertOptions}
						  modal={false}
						  open={props.showAlert}
						  onRequestClose={()=>props.toggleStateBool("showAlert")}
						>
                    
						{typeof(props.alertText)==="string" ? props.alertText : "error, check message texts"}
					</Dialog>
                    
					{/*<TrbLabRecorder 
						recorder={props.recorder}
						stylesOptions={props.stylesOptions}
						/>*/}
					
				</div>
            );
        }
        $TrbLabGraphs_Template.propTypes = {
            styles: PropTypes.object.isRequired,
            text: PropTypes.object.isRequired,
			selectRecorder : PropTypes.func.isRequired,
        };
        return $TrbLabGraphs_Template
    }
}
    