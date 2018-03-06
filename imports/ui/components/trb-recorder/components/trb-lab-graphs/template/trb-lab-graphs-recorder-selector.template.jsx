
import React, {Component} from 'react';
import PropTypes from 'prop-types';

import SelectField from 'material-ui/SelectField'
import MenuItem from 'material-ui/MenuItem'


export default function RecorderSelectorTemplate() {
    return (wrappedComponent) => {
        const $RecorderSelectorTemplate = (props) => {
            let styles = props.styles
            let text = props.text
            return (
                <div id="recorder-selector-container" className="container" style={styles.container}>
					<span style={styles.label}>{text.label} </span>
					 <SelectField 
						{...styles.selectField.attr}
						style={styles.selectField}
						value={props.value}
						onChange={(event, index, value)=>props.selectRecorder(event, index, value)} 
					>
						 {props.list.map((x, index)=>{
							 return (
								<MenuItem key={index} value={x._id} primaryText={x.name} />
							 )
						 })}
					</SelectField> 
				</div>
            );
        }
        $RecorderSelectorTemplate.propTypes = {
            styles: PropTypes.object.isRequired,
            text: PropTypes.object.isRequired,
			list : PropTypes.array.isRequired,
			selectRecorder : PropTypes.func.isRequired,
        };
        return $RecorderSelectorTemplate
    }
}
    