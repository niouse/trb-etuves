
import React, {Component} from 'react';
import PropTypes from 'prop-types';


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
			}
            componentWillReceiveProps(newProps) {}
            shouldComponentUpdate(nextProps, nextState) {
                return true
            }
            componentWillUpdate() {}
            componentDidUpdate() {}
            componentWillUnmount() {}

			
			getNavItems(){
				var items = [
					{
						name : "Dashbaord",
						link : "trb-lab-dashboard",
						active : true,
					},
					{
						name : "Graphs",
						link : "trb-lab-graphs",
						active : false,
					},
					{
						name : "Records",
						link : "trb-lab-records",
						active : false,
					},
					{
						name : "Settings",
						link : "trb-lab-settings",
						active : false,
					},
					
				]
				return items
			}

            render() {
                return <WrappedComponent
				{...this.props}
				navItems={this.getNavItems()}
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
    