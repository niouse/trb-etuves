import React, {Component} from 'react';
import PropTypes from 'prop-types';

export default function Home_MocksWrapper(locations) {
    return (WrappedComponent) => {
        class $Home_MocksWrapper extends Component {
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
						locations={locations}
					/>
				)
            }
        }
        $Home_MocksWrapper.propTypes = {

        };
        return $Home_MocksWrapper
    }
}
