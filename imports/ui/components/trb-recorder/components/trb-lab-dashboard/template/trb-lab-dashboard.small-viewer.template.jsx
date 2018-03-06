import React, {Component} from 'react';
import PropTypes from 'prop-types';


export default function smallViewer(){
	return (wrappedComponent) => {
		return (props)=>{
			var styles=props.styles
			return (
				<div style={styles.container}
					onTouchTap={props.onTouchTap}
					>
					{<svg style={styles.borders} height="100%" width="100%" xmlns="http://www.w3.org/2000/svg">
						<rect className="small-viewer-borders"  height="100%" width="100%" fill="white"/>
					 </svg>}

					<div style={styles.content}>
						<div style={styles.title}><strong>{props.recorder.name}</strong></div>
						<div style={styles.lastTemp}>{props.recorder.lastValue}{props.recorder.serie.unity}</div>
						<div style={styles.isOnRecord}>{props.message}</div>
						<img src={props.imgUrl} style={styles.light}/>
					</div>
				</div>
			)
		}
	}
}


