
// REACT DEPENDENCIES
import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { render } from 'react-dom';

// COMPONENT LAYERS
import Template from "./template/trb-lab-records.template.jsx";
import Api from "./api/trb-lab-records.api.jsx";
import Styles from "./services/trb-lab-records.styles.service.jsx";
import Texts from "./services/trb-lab-records.text.service.jsx";

// COMPONENT STATIC DATA
import stylesDefault from "./styles/trb-lab-records.styles.default.js";
import stylesOptions from "./styles/trb-lab-records.styles-options.default.js";
import computeStyles from "./styles/trb-lab-records.compute-styles.js";
import texts from "./text/trb-lab-records.text.js";


@Styles(computeStyles, stylesDefault, stylesOptions)
@Api()
@Texts(texts)
@Template()
class TrbLabRecords_Component {}

export default TrbLabRecords_Component

