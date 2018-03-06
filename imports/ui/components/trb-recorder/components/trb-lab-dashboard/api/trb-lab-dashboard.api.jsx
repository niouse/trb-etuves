
import React, {Component} from 'react';
import PropTypes from 'prop-types';
//import { browserHistory } from 'react-router';

export default function TrbLabDashboard_Api(_optional) {
    return (WrappedComponent) => {
        class $TrbLabDashboard_Api extends Component {
            constructor(props) {
                super(props);
                this.state = {}
            }
            componentDidMount() {}
            componentWillReceiveProps(newProps) {}
            shouldComponentUpdate(nextProps, nextState) {
                return true
            }
            componentWillUpdate() {}
            componentDidUpdate() {}
            componentWillUnmount() {}

			handleClick(page){
				this.props.goToPageNext(page)
			}

            render() {
                return <WrappedComponent
				{...this.props}
				handleClick={(page)=>this.handleClick(page)}
				/>
            }
        }
        $TrbLabDashboard_Api.propTypes = {
            styles: PropTypes.object.isRequired,
            // text : PropTypes.object.isRequired,
        };
        return $TrbLabDashboard_Api
    }
}
    