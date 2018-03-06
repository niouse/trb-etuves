import React, {Component} from 'react';
import PropTypes from 'prop-types';

export default function TrbLabRecords_MocksWrapper(series) {
    return (WrappedComponent) => {
        class $TrbLabRecords_MocksWrapper extends Component {
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
						series={series}
						seriesList={series}
					/>
				)
            }
        }
        $TrbLabRecords_MocksWrapper.propTypes = {

        };
        return $TrbLabRecords_MocksWrapper
    }
}
    