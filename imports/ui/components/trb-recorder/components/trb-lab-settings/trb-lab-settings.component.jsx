
// REACT DEPENDENCIES
import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { render } from 'react-dom';

// COMPONENT LAYERS
import Template from "./template/trb-lab-settings.template.jsx";
import Api from "./api/trb-lab-settings.api.jsx";
import Styles from "./services/trb-lab-settings.styles.service.jsx";
import Texts from "./services/trb-lab-settings.text.service.jsx";

// COMPONENT STATIC DATA
import stylesDefault from "./styles/trb-lab-settings.styles.default.js";
import stylesOptions from "./styles/trb-lab-settings.styles-options.default.js";
import computeStyles from "./styles/trb-lab-settings.compute-styles.js";
import texts from "./text/trb-lab-settings.text.js";

import DropDownMenu from 'material-ui/DropDownMenu';
import MenuItem from 'material-ui/MenuItem'

@Styles(computeStyles, stylesDefault, stylesOptions)
@Api()
@Texts(texts)
@Template(SelectField, MenuItem)
class TrbLabSettings_Component {}

export default TrbLabSettings_Component

