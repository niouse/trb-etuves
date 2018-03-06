import React, {Component} from 'react';
import PropTypes from 'prop-types';

import {recorders} from "./trb-graphs.mocks.js"

export default function TrbLabGraphs_MocksWrapper(_optional) {
    return (WrappedComponent) => {
        class $TrbLabGraphs_MocksWrapper extends Component {
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
						recorders={recorders}
					/>
				)
            }
        }
        $TrbLabGraphs_MocksWrapper.propTypes = {

        };
        return $TrbLabGraphs_MocksWrapper
    }
}
    