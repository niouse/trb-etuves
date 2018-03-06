
import React, { Component } from 'react';
import PropTypes from 'prop-types';

export default function TrbEtuve_Styles_Service(computeStyles, defaultStyles, stylesOptions) {
    return (WrappedComponent) => {
        

        class $TrbEtuve_Styles_Service extends Component {
            constructor(props) {
                super(props)
                this.options = props.stylesOptions || stylesOptions
                this.userStyles = {}
                for (key in props) {
                    if (/Style/.test(key)) {
                        this.userStyles[key.replace(/Style/, "")] = Object.assign({}, props[key])
                    }
                }
                this.state = {
                    styles: computeStyles(defaultStyles, this.options, this.userStyles)
                }
		this.stylesOptionsSub
            }
            componentDidMount() {
                if (this.props.stylesOptionsObs) {
                    this.stylesOptionsSub = this.props.stylesOptionsObs.subscribe((x) => {
                        this.setState({
                            styles: computeStyles(defaultStyles, x, this.userStyles)
                        })
                    })
                }
            }
            renderStyles() {
                this.setState({
                    styles: computeStyles(defaultStyles, this.options, this.userStyles)
                })
            }
            componentWillUnmount() {
                if (this.stylesOptionsSub !== undefined) {
                    this.stylesOptionsSub.unsubscribe()
                }
            }
            render() {
                return <WrappedComponent
				{...this.props}
			    styles={this.state.styles}
				renderStyles = {()=>{this.renderStyles()}}
				/>
            }
        }
        $TrbEtuve_Styles_Service.propTypes = {
            stylesOptions: PropTypes.object,
            stylesOptionsObs: PropTypes.object,
        };
        return $TrbEtuve_Styles_Service
    }
} 
    