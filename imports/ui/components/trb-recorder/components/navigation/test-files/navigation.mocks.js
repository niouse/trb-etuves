
export default function(nb){
	let result = [];
	for (var i=0; i<nb; i++){
		result.push({
			name : "button"+i,
			link : "link"+i,
			active : false
		})
	}
	return result
}
