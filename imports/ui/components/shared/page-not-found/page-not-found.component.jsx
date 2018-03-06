
// REACT DEPENDENCIES
import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { render } from 'react-dom';

// COMPONENT LAYERS
import Template from "./template/page-not-found.template.jsx";
import Api from "./api/page-not-found.api.jsx";
import Styles from "./services/page-not-found.styles.service.jsx";
import Texts from "./services/page-not-found.text.service.jsx";

// COMPONENT STATIC DATA
import stylesDefault from "./styles/page-not-found.styles.default.js";
import stylesOptions from "./styles/page-not-found.styles-options.default.js";
import computeStyles from "./styles/page-not-found.compute-styles.js";
import texts from "./text/page-not-found.text.js";

export default function PageNotFound(){
	return (wrappedComponent)=>{
		@Styles(computeStyles, stylesDefault, stylesOptions)
		@Api()
		@Texts(texts)
		@Template()
		class PageNotFound_Component {}
		return PageNotFound_Component
	}
}  

