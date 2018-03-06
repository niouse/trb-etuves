import { Meteor } from 'meteor/meteor';

import './../imports/api/users/server';

//trb-recorder
import './../imports/api/recorders/server';
import './../imports/api/series/server';
import "./../imports/api/etuves/server"
import './../imports/api/routes';


import  './../imports/startup/server';


Meteor.startup(() => {
	loadUsers()
    //trb-recorder
    loadRecorders(16)
    loadSeries()
    loadEtuves()
});
