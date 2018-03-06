
// REACT DEPENDENCIES
import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { render } from 'react-dom';

// COMPONENT LAYERS
import Template from "./template/app.template.jsx";
import Api from "./api/app.api.jsx";
import Styles from "./services/app.styles.service.jsx";
import Texts from "./services/app.text.service.jsx";

// COMPONENT STATIC DATA
import stylesDefault from "./styles/app.styles.default.js";
import stylesOptions from "./styles/app.styles-options.default.js";
import computeStyles from "./styles/app.compute-styles.js";
import texts from "./text/app.text.js";



export default function App_Component($Navigation, $TrbLabDashBoard, $TrbLabRecords, $TrbLabGraphs, $TrbLabSettings){
	return (wrappedComponent)=>{
		@AppRouterService(BrowserRouter)
		@AppMaterialService(MuiThemeProvider)
		@AppWithRouterService(withRouter)
		@AppStylesOptionsService(themes['trb'])
		@Styles(computeStyles, stylesDefault, stylesOptions)
		@Api()
		@Texts(texts)
		@Template(
			$Navigation,
			$TrbLabDashBoard,
			$TrbLabRecords,
			$TrbLabGraphs,
			$TrbLabSettings
		)
		class App_Component {}
		return App_Component
	}
}  
