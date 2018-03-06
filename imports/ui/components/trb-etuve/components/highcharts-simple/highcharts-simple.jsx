
// REACT DEPENDENCIES
import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { render } from 'react-dom';

// COMPONENT LAYERS
import Template from "./template/highcharts-simple.template.jsx";
import Api from "./api/highcharts-simple.api.jsx";
import Styles from "./services/highcharts-simple.styles.service.jsx";
import Texts from "./services/highcharts-simple.text.service.jsx";
import DataService from "./services/highcharts-simple.data.service.jsx";

// COMPONENT STATIC DATA
import stylesDefault from "./styles/highcharts-simple.styles.default.js";
import stylesOptions from "./styles/highcharts-simple.styles-options.default.js";
import computeStyles from "./styles/highcharts-simple.compute-styles.js";
import texts from "./text/highcharts-simple.text.js";




export default function HighchartsSimple(){
	return (wrappedComponent)=>{
		@DataService()
		@Styles(computeStyles, stylesDefault, stylesOptions)
		@Api()
		@Texts(texts)
		@Template()
		class HighchartsSimple_Component {}
		return HighchartsSimple_Component
	}
}  
