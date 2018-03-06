
// REACT DEPENDENCIES
import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { render } from 'react-dom';

// COMPONENT LAYERS
import Template from "./template/loading.template.jsx";
import Api from "./api/loading.api.jsx";
import Styles from "./services/loading.styles.service.jsx";
import Texts from "./services/loading.text.service.jsx";

// COMPONENT STATIC DATA
import stylesDefault from "./styles/loading.styles.default.js";
import stylesOptions from "./styles/loading.styles-options.default.js";
import computeStyles from "./styles/loading.compute-styles.js";
import texts from "./text/loading.text.js";

export default function Loading(){
	return (wrappedComponent)=>{
		@Styles(computeStyles, stylesDefault, stylesOptions)
		@Api()
		@Texts(texts)
		@Template()
		class Loading_Component {}
		return Loading_Component
	}
}  
