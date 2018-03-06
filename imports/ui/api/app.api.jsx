
import React, {Component} from 'react';
import PropTypes from 'prop-types';
//import { browserHistory } from 'react-router';

export default function App_Api(_optional) {
    return (WrappedComponent) => {
        class $App_Api extends Component {
            constructor(props) {
                super(props);
                this.state = {}
            }
            componentDidMount() {
				window.addEventListener("resize", ()=>{
					this.props.stylesOptionsNext('foo')
				})
				let appEl = document.getElementById("app-container")
			
				appEl.addEventListener("scroll", ()=>{
					let top = appEl.scrollTop;		
					let el = document.querySelector("#navigation-container")
					let realTop = el.style.top
					let testTop = top + 'px'
					//let offset = (this.props.stylesOptions.device==="pc" && this.props.stylesOptions.screenWidth > 640) ? 70 : 40;
					let headerBox = document.getElementById("header-container")
					let offset = headerBox.style.display ==="none" ? 0 : parseInt(headerBox.style.height)
					if (top>parseInt(offset)){
						/*if (realTop !== testTop){el.style.top = "0px"}
						return*/
						el.style.position = "fixed"
						el.style.top = 0
					}
					else {
						/*el.style.position = "absolute"
						el.style.top = offset+"px"*/
                        el.style.position = "relative"
					}       
				});
                
				document.addEventListener("scroll", ()=>{
					let top = document.body.scrollTop;				
					let el = document.querySelector("#navigation-container")
					let realTop = el.style.top
					let testTop = top + 'px'
					let offset2 = (this.props.stylesOptions.device==="pc" && this.props.stylesOptions.screenWidth > 640) ? 70 : 40;
					if (top>offset2){
						/*if (realTop !== testTop){el.style.top = "0px"}
						return*/
						el.style.position = "fixed"
						el.style.top = 0
					}
					else {
						/*el.style.position = "absolute"
						el.style.top = offset2+"px"*/
                        el.style.position = "relative"
					}       
				});
			}
            componentWillReceiveProps(newProps) {}
            shouldComponentUpdate(nextProps, nextState) {
                return true
            }
            componentWillUpdate() {}
            componentDidUpdate() {}
            componentWillUnmount() {}

            testMethod(test) {
                return test
            }

            render() {
                return <WrappedComponent
				{...this.props}
				testMethod={()=>this.testMethod()}
				/>
            }
        }
        $App_Api.propTypes = {
            styles: PropTypes.object.isRequired,
            // text : PropTypes.object.isRequired,
        };
        return $App_Api
    }
}
    