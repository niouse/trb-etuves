
import React, {Component} from 'react';
import PropTypes from 'prop-types';
//import { browserHistory } from 'react-router';

export default function TrbEtuve_Api(_optional) {
    return (WrappedComponent) => {
        class $TrbEtuve_Api extends Component {
            constructor(props) {
                super(props);
                this.state = {
                    etuveValue : 1
                }
                this.handleChange=this.handleChange.bind(this)
            }
            componentDidMount() {

            }
            componentWillReceiveProps(newProps) {
                
                let etuve = newProps.etuves[2]
                for (var i=0; i<4; i++){
                    let nb = i+1
                    let TC = "TC"+nb
                   // console.log(TC)
                    let options = {
                        chartId : "etuve-chart",
                        operation : "addPoints",
                        value : {
                            index : i,
                            value : etuve.serie[TC].slice(-1)
                        }
                    }
                    this.props.updateChartNext(options)
                }
            }
            shouldComponentUpdate(nextProps, nextState) {
                return true
            }
            componentWillUpdate() {}
            componentDidUpdate() {}
            componentWillUnmount() {}

            handleChange(event, index, value){
                console.log(index, value)
                this.setState({
                    etuveValue : value
                })
            }
            

            render() {
                return <WrappedComponent
				{...this.props}
				etuveValue={this.state.etuveValue}
                handleCange={this.handleChange}
				/>
            }
        }
        $TrbEtuve_Api.propTypes = {
            styles: PropTypes.object.isRequired,
            // text : PropTypes.object.isRequired,
        };
        return $TrbEtuve_Api
    }
}
    