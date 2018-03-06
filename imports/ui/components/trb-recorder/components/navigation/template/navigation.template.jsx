
import React, {Component} from 'react';
import PropTypes from 'prop-types';

export default function Navigation_Template() {
    return (wrappedComponent) => {
        const $Navigation_Template = (props) => {
			let styles = props.styles
			let text = props.text
			
			return  (
				<div 
					id="navigation-container" 
					className="container"
					style={styles.container}
					>
					{props.items.map((item, index)=>{
						return(
							<div 
								key={index}
								className="navigation-button"
								style={item.active ? Object.assign({}, styles.navItem, styles.active): styles.navItem}
								onTouchTap={()=>props.goToPage(item.link)}
								onMouseEnter={(e)=>props.changeIn(e)} 
								onMouseLeave={(e)=>props.changeOut(e, index)}
							>
								{text.links[index]}
							</div>	
						)
					})}
				</div>
			);
		}	
        $Navigation_Template.propTypes = {
			items : PropTypes.arrayOf(PropTypes.shape({
				name : PropTypes.string.isRequired,
				active : PropTypes.bool.isRequired,
				link : PropTypes.string.isRequired,
			})).isRequired,
			styles : PropTypes.shape({
				container: PropTypes.object.isRequired,
			}).isRequired,
			text : PropTypes.object,
			setActive : PropTypes.func,
		};
        return $Navigation_Template
    }
}
        