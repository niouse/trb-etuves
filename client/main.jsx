import React from 'react';
import { Meteor } from 'meteor/meteor';
import { render } from 'react-dom';

import App from '../imports/ui/app.component.jsx';

import injectTapEventPlugin from 'react-tap-event-plugin';
injectTapEventPlugin();

@App()
class $App {}

Meteor.startup(() => {
	render(<$App />, document.getElementById('render-target'));
});