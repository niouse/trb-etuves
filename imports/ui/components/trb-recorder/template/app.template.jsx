
import React, {Component} from 'react';
import PropTypes from 'prop-types';
import { BrowserRouter as Router, Route,  Link, Switch } from 'react-router-dom'

export default function App_Template(childs) {
	
    return (wrappedComponent) => {
        const $App_Template = (props) => {
            let styles = props.styles
            let text = props.text
			let startUrl = props.startUrl || ""
            return (
                <div id="app-container" className="container" style={styles.container}>
					<childs.Navigation 
						items = {props.navItems}
                        startUrl={startUrl}
						/>
						<Route path={startUrl+"/"} exact component={childs.TrbLabDashBoard} />
						<Route 
							path={startUrl+"/trb-lab-dashboard"}
							component={childs.TrbLabDashBoard}
							/>
						<Route 
							path={startUrl+"/trb-lab-graphs/:recorderId?/"}
							component={childs.TrbLabGraphs}
							/>
						<Route 
							path={startUrl+"/trb-lab-records"}
							component={childs.TrbLabRecords}
							/>
						<Route 
							path={startUrl+"/trb-lab-settings"}
							render={() => {
								return (
									<childs.TrbLabSettings 
										 title={"I am Title"} 
										 setMaterialTheme={props.setMaterialTheme}
										 />
									) 
								}
							 }/>
							

					{/*<button onClick={()=>props.languageNext('fr')}>test </button>*/}
				</div>
            );
        }
        $App_Template.propTypes = {
            styles: PropTypes.object.isRequired,
            text: PropTypes.object.isRequired,
        };
        return $App_Template
    }
}
    