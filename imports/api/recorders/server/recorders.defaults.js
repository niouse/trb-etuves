let recorder = {
	name : "default",
    newRecorder : 0,
	isPrivate : false,
	location : "laboratoire",
	isOnRecord : false,
	lastValue : 0,
	serie : {
		_id : "serie1",
		name : "0008-2-N°0",
		unity : "°C",
		numMix : 001,
		numDep : 0008,
        variant : 2,
		maxValue : 0,
		startedAt : new Date(),
		timeToMax : 0,
		data : [[]]
	}
}


export default function getRecorders(number){
	var recorderDefaults = []
	for (var i=0; i<number; i++){
		let newRecorder = Object.assign({}, recorder)
		let recorderNumber = i+1
			newRecorder.name = "TC"+ recorderNumber
            newRecorder.recorderNumber = recorderNumber
			
			newRecorder.serie = {
                _id : "serie"+ recorderNumber,
                name : "6666-2-N°1",
                unity : "°C",
                numMix : 1,
                numDep : 6666,
                variant : 2,
                maxValue : 0,
                startedAt : new Date(),
                timeToMax : 0,
                data : []
            }
		recorderDefaults.push(newRecorder)
	}
	return recorderDefaults
}

