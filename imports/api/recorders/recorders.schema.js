export const recordersSchema = new SimpleSchema({
  name: {
    type: String,
    label: "recorder name",
    max: 20,
	min : 3
  },
  location : {
	type : String,
	allowedValues : ['laboratoire', 'contrôls']
  },
  isPrivate: {
    type: Boolean,
    label: "If false, recorder is available to other users",
  },
  isOnRecord: {
    type: Boolean,
    label: "If false, recorder is available to other users",
  },
  lastValue : {
	  type : String,
	  label : "Last value received"
  },
  serie : {
	  type : Object,
	  label : "Values recorded",
	  optional : true
  }
})
