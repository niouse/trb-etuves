
// REACT DEPENDENCIES
import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { render } from 'react-dom';

// COMPONENT LAYERS
import Template from "./template/app-help.template.jsx";
import Api from "./api/app-help.api.jsx";
import Styles from "./services/app-help.styles.service.jsx";
import Texts from "./services/app-help.text.service.jsx";

// COMPONENT STATIC DATA
import stylesDefault from "./styles/app-help.styles.default.js";
import stylesOptions from "./styles/app-help.styles-options.default.js";
import computeStyles from "./styles/app-help.compute-styles.js";
import texts from "./text/app-help.text.js";

export default function AppHelp(){
	return (wrappedComponent)=>{
		@Styles(computeStyles, stylesDefault, stylesOptions)
		@Api()
		@Texts(texts)
		@Template()
		class AppHelp_Component {}
		return AppHelp_Component
	}
}  

