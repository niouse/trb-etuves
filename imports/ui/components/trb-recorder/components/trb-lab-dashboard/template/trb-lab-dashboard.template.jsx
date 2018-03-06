
import React, {Component} from 'react';
import PropTypes from 'prop-types';

import TrbLabSmallViewer from "./trb-lab-dashboard.small-viewer.template.jsx"

@TrbLabSmallViewer()
class $TrbLabSmallViewer{}

export default function TrbLabDashboard_Template() {
    return (wrappedComponent) => {
        const $TrbLabDashboard_Template = (props) => {
            let styles = props.styles
            let text = props.text
            return (
                <div id="trb-lab-dashboard-container" className="container" style={styles.container}>
					{/*<h1  id="trb-lab-dashboard-title"  style={styles.title}>{text.title}</h1>*/}
					{props.recorders.map((x, index)=>{
						return (
							<$TrbLabSmallViewer 
								key={index}
								styles={styles.smallViewer}
								recorder={x} 
								message = {x.isOnRecord ? text.recording : text.stopped}
								numChart={index}
								imgUrl={x.isOnRecord ? "/images/greenLight.png" : "/images/redLight.png"}
								onTouchTap={()=>props.handleClick(`/trb-lab-graphs/${x._id}/`)}
							/>
						)
					})}
					{/*<button onClick={()=>props.languageNext('fr')}>test </button>*/}
				</div>
            );
        }
        $TrbLabDashboard_Template.propTypes = {
            styles: PropTypes.object.isRequired,
            text: PropTypes.object.isRequired,
        };
        return $TrbLabDashboard_Template
    }
}
    