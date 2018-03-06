
import React, {Component} from 'react';
import PropTypes from 'prop-types';

//MATERIAL COMPONENTS
import Drawer from 'material-ui/Drawer'
import {List, ListItem} from 'material-ui/List'
import IconButton from 'material-ui/IconButton';

//MATERIAL ICONS
import Delete from 'material-ui/svg-icons/action/delete.js'
import KeyboardArrowRight from 'material-ui/svg-icons/hardware/keyboard-arrow-right.js'
import ActionSearch from 'material-ui/svg-icons/action/search'

export default function TrbLabRecords_Template(childs) {
    return (wrappedComponent) => {
        const $TrbLabRecords_Template = (props) => {
            let styles = props.styles
            let text = props.text
            let serieNull={name:"null", data:[]}
            let serie = props.serie ? props.serie : serieNull
            
            return (
                <div id="trb-lab-records-container" className="container" style={styles.container}>
					<div style={styles.expandButtonBox}>
						<div      
							style={styles.expandButton} 
							onClick = {()=>props.toggleStateBool('showSearch')}
							{...styles.expandButton.attr}
						>
							<ActionSearch color="#cd3a35" style={styles.search} />
						</div>
					</div>
					
					<div style={styles.serieViewer}> 
                            <childs.HighchartsSimple 
                                chartId="myChart" 
                                series={[serie]}
                                canUpdate={true}
                                style={styles.chart}
                            />
							{/*<childs.TrbLabSerieViewer 
								serie={serie} 
							/> */}
                	</div>
					
					<Drawer
					  docked={false}
					  open={props.showSearch}
					  onRequestChange={()=>props.toggleStateBool('showSearch')}
					  width = {styles.drawer.width}
					>
						<div style={styles.listBox}>
							<input type="text" onChange={props.searchInList}/>
							{props.series[0] ? 
								props.series.map((x, index)=>{
								return (	
									<List key={"card"+ index} style={styles.listItem}>
										<ListItem
										  primaryText={x.name}
										  style={styles.item}
										  secondaryText={props.convertDate(x.startedAt)}
										  onTouchTap={(e)=>props.selectSerie(e, x._id)}
								          rightIconButton = {<IconButton tooltip="Delete"><Delete hoverColor='red' onClick={()=>props.deleteSerie(x._id)}/></IconButton>}
										/>
									  </List>
								) 
							  }	
							) :
							  <p>No records</p>}
						</div>

					</Drawer>
				</div>	
            );
        }
        $TrbLabRecords_Template.propTypes = {
            styles: PropTypes.object.isRequired,
            text: PropTypes.object.isRequired,
			toggleStateBool : PropTypes.func.isRequired,
			showSearch : PropTypes.bool.isRequired,
        };
        return $TrbLabRecords_Template
    }
}
    