
import React, {Component} from 'react';
import PropTypes from 'prop-types';
//import { browserHistory } from 'react-router';

export default function Navigation_Api(_optional) {
    return (WrappedComponent) => {
        class $Navigation_Api extends Component {

            constructor(props) {
                super(props);
                this.state = {
                    items: props.items,
					styles : props.styles
                }
                this.startUrl = props.startUrl ?  props.startUrl : ""
				this.goToPageObsSub
            }

            componentDidMount() {
				if(this.props.goToPageObs){
					this.goToPageObsSub = this.props.goToPageObs.subscribe((msg)=>{
						let page = msg.split('/')[1]
						let param = msg.split('/')[2]
						this.goToPage(page, param)
					})
				}
			}
            componentWillReceiveProps(newProps) {}
            shouldComponentUpdate(nextProps, nextState) {
                return true
            }
            componentWillUpdate() {}
            componentDidUpdate() {}
            componentWillUnmount() {
				if(this.goToPageObsSub.unsubscribe){
					this.goToPageObsSub.unsubscribe()
				}
			}

            setActive(nb) {
                if (this.state.items[nb].active === true) {
                    return
                }
                let newItems = this.setActiveLink(this.state.items, nb)
                this.setState({
                    items: newItems
                })
            }
			
			
			goToPage(page, param){
				let index=this.props.items.findIndex((x)=>{
					return x.link === page
				})
				this.setActive(index)
				if(param){
					page=page+'/'+param
				}
				this.props.history.push(this.startUrl+'/'+page);
			}
			

            setActiveLink(items, nb) {
                if (typeof(nb) !== "number" || nb > items.length) {
                    throw new Error("Function setActiveLink need an integer of correct size as second argument")
                }
                let result = items.map((x, index) => {
                    let res = Object.assign({}, x)
                    if (index === nb) {
                        res.active = true
                    } else {
                        res.active = false
                    }
                    return res
                })
                return result
            }
			
		
			changeIn(e){
				e.currentTarget.style.color = this.props.styles.navItem.focusColor
			}
			
			changeOut(e, nb){
				if(this.state.items[nb].active){return}
				e.currentTarget.style.color = this.props.styles.navItem.color
			}

            render() {
                return <WrappedComponent
				{...this.props}
				goToPage={(page)=>this.goToPage(page)}
				items={this.state.items}
				changeIn = {(e)=>this.changeIn(e)}
				changeOut = {(e, page)=>this.changeOut(e, page)}
				/>
            }
        }
		
        $Navigation_Api.propTypes = {
            styles: PropTypes.object.isRequired,
			history: PropTypes.object.isRequired,
			goToPageObs : PropTypes.object,
			items : PropTypes.arrayOf(PropTypes.shape({
				name : PropTypes.string.isRequired,
				link : PropTypes.string.isRequired,
				active : PropTypes.bool.isRequired,
			})).isRequired,
            // text : PropTypes.object.isRequired,
        };
        return $Navigation_Api
    }
}
    