import React, {Component} from 'react';
import PropTypes from 'prop-types';

export default function AppInjectorService(item) {
    return (WrappedComponent) => {
        class $AppInjectorService extends Component {
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

            render() {
                return( 
					<WrappedComponent
						{...this.props}
						{...item}
					/>
				)
            }
        }
        $AppInjectorService.propTypes = {

        };
        return $AppInjectorService
    }
}