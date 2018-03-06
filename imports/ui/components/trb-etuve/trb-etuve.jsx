
// REACT DEPENDENCIES
import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { render } from 'react-dom';

// COMPONENT LAYERS
import Template from "./template/trb-etuve.template.jsx";
import Api from "./api/trb-etuve.api.jsx";
import Styles from "./services/trb-etuve.styles.service.jsx";
import Texts from "./services/trb-etuve.text.service.jsx";

// COMPONENT STATIC DATA
import stylesDefault from "./styles/trb-etuve.styles.default.js";
import stylesOptions from "./styles/trb-etuve.styles-options.default.js";
import computeStyles from "./styles/trb-etuve.compute-styles.js";
import texts from "./text/trb-etuve.text.js";

export default function TrbEtuve(){
	return (wrappedComponent)=>{
		@Styles(computeStyles, stylesDefault, stylesOptions)
		@Api()
		@Texts(texts)
		@Template()
		class TrbEtuve_Component {}
		return TrbEtuve_Component
	}
}  
