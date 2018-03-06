export const recorders = [
	{
		_id : "recorder1",
		name : "recorder 1",
		lastValue : 10,
		isOnRecord : false,
		serie : {
			name : "default_default",
			unity : "°C",
			codeProd : "default",
			numDep : "default",
			maxTemp : 0,
			startedAt : new Date(),
			timeToMax : 0,
			data : [[0, 0]]
		}
	},
	{
		_id : "recorder2",
		name : "recorder 2",
		lastValue : 20,
		isOnRecord : true,
		serie : {
			name : "default_default",
			unity : "°C",
			codeProd : "default",
			numDep : "default",
			maxTemp : 0,
			startedAt : new Date(),
			timeToMax : 0,
			data : [[0, 0]]
		}
	}
]