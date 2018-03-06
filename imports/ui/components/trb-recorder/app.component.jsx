
// REACT DEPENDENCIES
import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { render } from 'react-dom'
import { BrowserRouter, Route,  Link } from 'react-router-dom'
import {withRouter} from "react-router-dom"

// COMPONENT LAYERS
import Template from "./template/app.template.jsx"
import Api from "./api/app.api.jsx"
import Styles from "./services/app.styles.service.jsx"
import Texts from "./services/app.text.service.jsx"

// COMPONENT STATIC DATA
import stylesDefault from "./styles/app.styles.default.js"
import stylesOptions from "./styles/app.styles-options.default.js"
import computeStyles from "./styles/app.compute-styles.js"
import texts from "./text/app.text.js"

// COMPONENT SERVICES
import AppStylesOptionsService from "./services/app.styles-options.service.jsx"
import AppMaterialService from "./services/app.material.service.jsx"
import AppRouterService from "./services/app.router.service.jsx"
import AppWithRouterService from "./services/app.with-router.service.jsx"
//import AppLanguageService from "./services/app.language.service.jsx"
import AppLanguageService from "./../../services/app.language.service.jsx"

// COMPONENT CHILDS
import Navigation from "./components/navigation/navigation.jsx"
	import NavigationRouterService from "./components/navigation/services/navigation.router.service.jsx"
    
import TrbLabDashBoard from "./components/trb-lab-dashboard/trb-lab-dashboard.jsx"
import TrbLabRecords from "./components/trb-lab-records/trb-lab-records.jsx"
import TrbLabGraphs from "./components/trb-lab-graphs/trb-lab-graphs.jsx"
import TrbLabSettings from "./components/trb-lab-settings/trb-lab-settings.jsx"

// COMPONENT SHARED
import HighchartsSimple from "./components/shared/highcharts-simple/highcharts-simple.jsx"
	import HighchartsSimpleDataService from "./components/shared/highcharts-simple/services/highcharts-simple.data.service.jsx";
import ButtonFuturistic from "./components/shared/button-futuristic/button-futuristic.jsx"
import Loading from "./components/shared/loading/loading.jsx"

// MATERIAL UI COMPONENTS
import getMuiTheme from 'material-ui/styles/getMuiTheme'
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider'


// THEMES
import themes from "./themes/index.js"
import materials from "./themes/materialui.index.js"
import materialTrb from "./themes/materialui.trb.js"
import materialRuggieri from "./themes/materialui.ruggieri.js"

// EXTERNAL LIBRAIRIES
/*import Highcharts from 'highcharts'
import "highcharts/modules/exporting.js"
import "highcharts/modules/offline-exporting.js"*/

// MONGO COLLECTIONS WITH SERVICES
import recordersMongo from "/imports/api/recorders/recorders.js"
import RecordersCrudService from "/imports/api/recorders/client/recorders.crud.service.jsx"
import RecordersDataService from "/imports/api/recorders/client/recorders.data.service.jsx"

import seriesMongo from "/imports/api/series/series.js"
import SeriesCrudService from "/imports/api/series/client/series.crud.service.jsx"
import SeriesDataService from "/imports/api/series/client/series.data.service.jsx"


/*______________________________________________________________________________________*/
/*______________________________________________________________________________________*/
/*_BUILD SHARED_________________________________________________________________________*/
/*______________________________________________________________________________________*/

@Loading()
class $Loading {}

@HighchartsSimple()
class $HighchartsSimple {}
// _______________________________________________________________________________ ||| ButtonFuturistic |||
@ButtonFuturistic()
class $ButtonFuturistic {}

/*______________________________________________________________________________________*/
/*______________________________________________________________________________________*/
/*_BUILD CHILDS_________________________________________________________________________*/
/*______________________________________________________________________________________*/

// _______________________________________________________________________________ | Navigation |
@AppLanguageService()
@AppWithRouterService(withRouter)
@AppStylesOptionsService(themes)
@Navigation()
class $Navigation {}

// _______________________________________________________________________________ | TrbLabDashBoard |
@AppLanguageService()
@AppWithRouterService(withRouter)
@NavigationRouterService()
@RecordersDataService()
@AppStylesOptionsService(themes)
@TrbLabDashBoard()
class $TrbLabDashBoard {}
// _______________________________________________________________________________ ||| HighchartsSimple |||



// _______________________________________________________________________________ | TrbLabGraphs |

trbLabChilds={
    ButtonFuturistic : $ButtonFuturistic,
    HighchartsSimple : $HighchartsSimple 
}

@HighchartsSimpleDataService()
@RecordersCrudService()
@SeriesCrudService()
@SeriesDataService($Loading)
@AppLanguageService()
@AppStylesOptionsService(themes)
@RecordersDataService($Loading)
@TrbLabGraphs(trbLabChilds)
class $TrbLabGraphs {}



// _______________________________________________________________________________ | TrbLabRecords |

var TrbLabRecordsChilds={
    HighchartsSimple : $HighchartsSimple 
}

@SeriesCrudService()
@SeriesDataService($Loading)
@HighchartsSimpleDataService()
@AppStylesOptionsService(themes)
@AppLanguageService()
@TrbLabRecords(TrbLabRecordsChilds)
class $TrbLabRecords {}


// _______________________________________________________________________________ | TrbLabSettings |
@AppLanguageService()
@RecordersCrudService()
@RecordersDataService($Loading)
@AppStylesOptionsService(themes)
@TrbLabSettings()
class $TrbLabSettings {}
 
/*______________________________________________________________________________________*/
/*______________________________________________________________________________________*/
/*_BUILD CHILDS - END___________________________________________________________________*/
/*______________________________________________________________________________________*/

/*______________________________________________________________________________________*/
/*______________________________________________________________________________________*/
/*_BUILD COMPONENT______________________________________________________________________*/
/*______________________________________________________________________________________*/


var appChilds = {
    Navigation : $Navigation,
    TrbLabDashBoard : $TrbLabDashBoard,
    TrbLabRecords : $TrbLabRecords,
    TrbLabGraphs : $TrbLabGraphs,
    TrbLabSettings : $TrbLabSettings
}

export default function App_Component(){
	return (wrappedComponent)=>{
		@AppLanguageService()
		@AppRouterService(BrowserRouter)
		@AppMaterialService(MuiThemeProvider, getMuiTheme, materials)
		@AppStylesOptionsService(themes)
		@Styles(computeStyles, stylesDefault, stylesOptions)
		@Api()
		@Texts(texts)
		@Template(appChilds)
		class App_Component {}
		return App_Component
	}
}

/*______________________________________________________________________________________*/
/*______________________________________________________________________________________*/
/*_BUILD COMPONENT - END________________________________________________________________*/
/*______________________________________________________________________________________*/
