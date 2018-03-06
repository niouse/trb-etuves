
// REACT DEPENDENCIES
import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { render } from 'react-dom';

// COMPONENT LAYERS
import Template from "./template/header.template.jsx";
import Api from "./api/header.api.jsx";
import Styles from "./services/header.styles.service.jsx";
import Texts from "./services/header.text.service.jsx";

// COMPONENT STATIC DATA
import stylesDefault from "./styles/header.styles.default.js";
import stylesOptions from "./styles/header.styles-options.default.js";
import computeStyles from "./styles/header.compute-styles.js";
import texts from "./text/header.text.js";

export default function Header(){
	return (wrappedComponent)=>{
		@Styles(computeStyles, stylesDefault, stylesOptions)
		@Api()
		@Texts(texts)
		@Template()
		class Header_Component {}
		return Header_Component
	}
}  
