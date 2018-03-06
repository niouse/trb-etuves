
import React, { Component } from 'react';
import PropTypes from 'prop-types';

export default function Home_Text_Service(_text) {
    return (WrappedComponent) => {
        let languageSub
        class $Home_Text_Service extends Component {
            constructor(props) {
                super(props)
                this.state = {
                    text: _text.en
                }
            }
            componentDidMount() {
                if (this.props.languageObs) {
                    languageSub = this.props.languageObs.subscribe((x) => {
                        this.setState({
                            text: _text[x]
                        })
                    })
                }
            }
            componentWillUnmount() {
                if (languageSub !== undefined) {
                    languageSub.unsubscribe()
                }
            }
            setLanguage(lng) {
                this.setState({
                    text: _text[lng]
                })
            }

            render() {
                return <WrappedComponent
					{...this.props}
					text={this.state.text}
					setLanguage={(lng)=>this.setLanguage(lng)}
				/>
            }
        }
        $Home_Text_Service.propTypes = {
            languageObs: PropTypes.object,
            languageNext: PropTypes.func,
        };
        return $Home_Text_Service
    }
}
       
    