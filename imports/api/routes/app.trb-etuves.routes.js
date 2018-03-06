import {etuvesMongo} from './../etuves/etuves.js'

var bodyParser = require('body-parser');
Picker.middleware(bodyParser.json() );
Picker.middleware(bodyParser.urlencoded({extended : false}))


Picker.route('/etuves/fixe',  function(params, request, response, next){  
    console.log('une requête viens d\'arriver pour l\'etuve fixe: ') 
    //console.log(res)

    //console.log(request.body)
    var data = request.body;
    //var etuve = etuvesMongo.find({name : "Etuve fixe"}, {fields : {isOn: 1, serie :1}}).fetch()[0]
    console.log(data)
    etuvesMongo.update({name : "Etuve fixe"}, {
        $set :{
           lastValue : {
               TC1 : data.TC1,
               TC2 : data.TC2,
               TC3 : data.TC3,
               TC4 : data.TC4,
           } 
        },
        $push : {
            "serie.TC1" : [(new Date()).getTime(), data.TC1],
            "serie.TC2" : [(new Date()).getTime(), data.TC2],
            "serie.TC3" : [(new Date()).getTime(), data.TC3],
            "serie.TC4" : [(new Date()).getTime(), data.TC4],
        }
    })       
    response.statusCode = 200
    response.end('ok')
})
             
             


             
             

