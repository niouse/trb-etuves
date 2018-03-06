
import React, {Component} from 'react';
import PropTypes from 'prop-types';
//import { browserHistory } from 'react-router';

export default function TrbLabSettings_Api(_optional) {
    return (WrappedComponent) => {
        class $TrbLabSettings_Api extends Component {
            constructor(props) {
                super(props);
                this.state = {
					language : props.language || "en",
					themeIndex : props.themeIndex || 0,
				}
            }
            componentDidMount() {}
            componentWillReceiveProps(newProps) {}
            shouldComponentUpdate(nextProps, nextState) {
                return true
            }
            componentWillUpdate() {}
            componentDidUpdate() {}
            componentWillUnmount() {}

            handleLanguageChange(event, index, value){
				this.setState({
					language : value
				})
				this.props.languageNext(value)
			}
			
			handleThemeChange(event, index, value){
				
				this.setState({
					themeIndex : index
				})
				
				this.props.setTheme(index)
				this.props.setMaterialTheme(index)
			}

            render() {
                return <WrappedComponent
				{...this.props}
				language={this.state.language}
				handleLanguageChange={(event, index, value)=>this.handleLanguageChange(event, index, value)}
				themeIndex={this.state.themeIndex}
				handleThemeChange={(event, index, value)=>this.handleThemeChange(event, index, value)}
				/>
            }
        }
        $TrbLabSettings_Api.propTypes = {
            styles: PropTypes.object.isRequired,
            // text : PropTypes.object.isRequired,
        };
        return $TrbLabSettings_Api
    }
}
    