export const etuvesSchema = new SimpleSchema({
  name: {
    type: String,
    label: "recorder name",
    max: 20,
	min : 3
  },
  isOn: {
    type: Boolean,
    label: "True means that the heating process is on",
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
