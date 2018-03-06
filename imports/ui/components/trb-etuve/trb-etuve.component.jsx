
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

//APP CHLIDREN
import HighchartsSimple from "./components/highcharts-simple/highcharts-simple.jsx"
	import HighchartsSimpleDataService from "./components/highcharts-simple/services/highcharts-simple.data.service.jsx";
import Loading from "./components/loading/loading.jsx";

//METEOR COLLECTIONS
import EtuvesCrudService from "/imports/api/etuves/client/etuves.crud.service.jsx"
import EtuvesDataService from "/imports/api/etuves/client/etuves.data.service.jsx"

//BUILD CHILDREN

@Loading()
class $Loading{}

@HighchartsSimple()
class $HighchartsSimple{}

appChilds={
    HighchartsSimple : $HighchartsSimple
}

export default function TrbEtuve(){
	return (wrappedComponent)=>{
        @HighchartsSimpleDataService()
        @EtuvesCrudService()
        @EtuvesDataService($Loading)
		@Styles(computeStyles, stylesDefault, stylesOptions)
		@Texts(texts)
		@Api()
		@Template(appChilds)
		class TrbEtuve_Component {}
		return TrbEtuve_Component
	}
}  
