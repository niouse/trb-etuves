import {recordersMongo} from './../recorders/recorders.js'

var bodyParser = require('body-parser');
Picker.middleware(bodyParser.json() );
Picker.middleware(bodyParser.urlencoded({extended : false}))


Picker.route('/data',  function(params, request, response, next){  
    console.log('une requête viens d\'arriver : ') 
    //console.log(res)

    //console.log(request.body)
    var data = request.body;
    
    for (var key in data){
        
        var recorder = recordersMongo.find({name : key}, {fields : {isOnRecord : 1, serie :1}}).fetch()[0]
        var isOnRecord = recorder ? recorder.isOnRecord : false
        if (isOnRecord){
             var maxValue = recorder.serie.maxValue
             var startedAt = recorder.serie.startedAt
             var timeToMax = recorder.serie.timeToMax   
             
             
             if ((typeof(data[key])==='number') && (data[key] > maxValue)){
				 
				 timeToMax = (new Date).getTime() - startedAt;
                 
				 if (typeof(timeToMax)!=='number' || timeToMax<0) {
					 timeToMax = 0;
				 }
				 maxValue = data[key]
			 }
			 
			 recordersMongo.update({name : key}, {
				$set : {
					lastValue : data[key],
					"serie.maxValue" : maxValue,
					"serie.timeToMax" : timeToMax,
				},
				$push : {
					"serie.data" : [(new Date()).getTime(), data[key]]
				}
			 })
        }
		else {
			 recordersMongo.update({name : key}, {
				$set : {
					lastValue : data[key],
				}
        	})
		}
        
        response.statusCode = 200
        response.end('ok')
    }
    
})
             
             


             
             

