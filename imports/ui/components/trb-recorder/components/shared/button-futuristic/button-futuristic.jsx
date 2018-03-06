
// REACT DEPENDENCIES
import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { render } from 'react-dom';

// COMPONENT LAYERS
import Template from "./template/button-futuristic.template.jsx";
import Api from "./api/button-futuristic.api.jsx";
import Styles from "./services/button-futuristic.styles.service.jsx";
import Texts from "./services/button-futuristic.text.service.jsx";

// COMPONENT STATIC DATA
import stylesDefault from "./styles/button-futuristic.styles.default.js";
import stylesOptions from "./styles/button-futuristic.styles-options.default.js";
import computeStyles from "./styles/button-futuristic.compute-styles.js";
import texts from "./text/button-futuristic.text.js";

export default function ButtonFuturistic(){
	return (wrappedComponent)=>{
		@Styles(computeStyles, stylesDefault, stylesOptions)
		@Api()
		@Texts(texts)
		@Template()
		class ButtonFuturistic_Component {}
		return ButtonFuturistic_Component
	}
}  
