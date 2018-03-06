
export default TrbLabDashboard_Styles_Default = {
    container : {
		//margin : "auto",
		width : "100%",
		maxWidth : "1000px",
		margin : "auto",
		paddingTop : "5px",
		height : "100%",
		overflow : "auto",
		fontFamily: 'sans-serif',
		display : "flex", 
		flexDirection : "column",
		flexWrap : "wrap",
		alignItems : "center",
		//justifyContent : "center",
	},
	title : {
		fontSize : "2em",
		width : "100%",
		textAlign : "center",
		color : "white",
	},
	smallViewer : {
	  container : {
			//margin : "0 auto 20px auto",
			//backgroundColor : "none",
			height : "70px",
			width : "45%",
		   cursor : "pointer",
		  position : "relative",
		},
	   borders : {
		   position : "absolute",
		   top : 0,
		   left  :0,
		   
	   },
	   content : {
		   top : 0,
		   left  :0,
		   height : "100%",
			width : "100%",
		   display : "flex",
		   alignItems : "center",
		   justifyContent : "center",
		  // border : "1px solid blue"
	   },
		title : {
			fontSize : "2em",
			marginLeft : "5px",
			width : "25%",
			color : "white",
		},
		lastTemp : {
			width : "25%",
			fontSize : "2em",
			color : "white",
		},
		isOnRecord : {
			width : "25%",
			color : "white"
		},
		light : {
			height:"35px", 
			width:"35px", 
			marginRight:"5px"
		}
	}
}
