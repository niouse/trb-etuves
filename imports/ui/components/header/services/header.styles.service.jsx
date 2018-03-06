import React, { Component } from 'react';
import PropTypes from 'prop-types';

export default function HeaderStylesService(computeStyles, defaultStyles, stylesOptions) {
    return (WrappedComponent) => {
        var stylesOptionsSub

        class $HeaderStylesService extends Component {
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

            }
            componentDidMount() {
                if (this.props.stylesOptionsObs) {
                    stylesOptionsSub = this.props.stylesOptionsObs.subscribe((x) => {
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
                if (stylesOptionsSub !== undefined) {
                    stylesOptionsSub.unsubscribe()
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
        $HeaderStylesService.propTypes = {
            stylesOptions: PropTypes.object,
            stylesOptionsObs: PropTypes.object,
        };
        return $HeaderStylesService
    }
} 
    