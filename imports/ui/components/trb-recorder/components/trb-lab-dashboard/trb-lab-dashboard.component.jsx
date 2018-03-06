
// REACT DEPENDENCIES
import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { render } from 'react-dom';

// COMPONENT LAYERS
import Template from "./template/trb-lab-dashboard.template.jsx";
import Api from "./api/trb-lab-dashboard.api.jsx";
import Styles from "./services/trb-lab-dashboard.styles.service.jsx";
import Texts from "./services/trb-lab-dashboard.text.service.jsx";

// COMPONENT STATIC DATA
import stylesDefault from "./styles/trb-lab-dashboard.styles.default.js";
import stylesOptions from "./styles/trb-lab-dashboard.styles-options.default.js";
import computeStyles from "./styles/trb-lab-dashboard.compute-styles.js";
import texts from "./text/trb-lab-dashboard.text.js";


@Styles(computeStyles, stylesDefault, stylesOptions)
@Api()
@Texts(texts)
@Template()
class TrbLabDashboard_Component {}

export default TrbLabDashboard_Component

