
import React, {Component} from 'react';
import PropTypes from 'prop-types';

import CircularProgress from 'material-ui/CircularProgress';

export default function Loading_Template() {
    return (wrappedComponent) => {
        const $Loading_Template = (props) => {
            let styles = props.styles
            let text = props.text
            return <CircularProgress />
        }
        $Loading_Template.propTypes = {
            styles: PropTypes.object.isRequired,
            text: PropTypes.object.isRequired,
        };
        return $Loading_Template
    }
}
    