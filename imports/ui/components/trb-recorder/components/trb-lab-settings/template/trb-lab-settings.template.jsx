
import React, {Component} from 'react';
import PropTypes from 'prop-types';

//MATERIAL COMPONENTS
import SelectField from 'material-ui/SelectField'
import MenuItem from 'material-ui/MenuItem'

export default function TrbLabSettings_Template(childs) {
    return (wrappedComponent) => {
        const $TrbLabSettings_Template = (props) => {
            let styles = props.styles
            let text = props.text
            return (
                <div id="trb-lab-settings-container"  style={styles.container}>	
					
					<div style={styles.appSettingsBox}>
						<div style={styles.appSettingsTitle}>{text.appSettingsTitle}</div>
						<div style={styles.tableRow} >
							<div style={styles.tableCell} >{text.languageLabel} </div>
							<div style={styles.tableCell2} >
								<SelectField 
									value={props.language} 
									onChange={props.handleLanguageChange}
									style={styles.selectField}
									>
								  <MenuItem value="en" primaryText="English" />
								  <MenuItem value="fr" primaryText="Français" />
								</SelectField>
							</div>
						</div>

						<div style={styles.tableRow} >
							<div style={styles.tableCell} >{text.themeLabel}</div>
							<div style={styles.tableCell2} >
								<SelectField 
									value={props.themeIndex} 
									onChange={props.handleThemeChange}
									style={styles.selectField}
									>
									{props.themesList.map((theme, index)=>{
										return <MenuItem key={index} value={index} primaryText={theme} />
									})}
								</SelectField>
							</div>
						</div>
					</div>
					
					{/*<div style={styles.recordersSettingsBox}>
						<div style={styles.recordersSettingsTitle}>RECORDERS SETTINGS</div>
						{props.recorders.map((recorder, index)=>{
							return (
								<div key={index}>
									{recorder.name}
								</div>
							)
						})}

					</div>*/}
					
			
				</div>
            );
        }
        $TrbLabSettings_Template.propTypes = {
            styles: PropTypes.object.isRequired,
            text: PropTypes.object.isRequired,
        };
        return $TrbLabSettings_Template
    }
}
    