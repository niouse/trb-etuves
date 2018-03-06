const icon = {
	 marginRight: 24,
	 attr : {
		 color:"blue",
		 hoverColor:"black"
	 }
}

export default Navigation_Styles_Default = {
	container: {
		zIndex : 200,
		width : "100%",
		height : "35px",
		backgroundColor : "rgba(0,0,0,0.6)",
		color : "black",
		fontFamily : 'Play',
		//position : "absolute",
		//top:"70px",
        //border:"1px solid yellow"
	},
	box : {
		maxWidth : "1280px",
		height : "100%",
		margin : "auto",
		display : "flex",
		justifyContent :  "space-between",
	},
	right : {
		display : "flex",
		alignItems : "center",
		paddingRight : "20px",
	},
	rightPhone : {
		display : "none",
		alignItems : "center",
		//paddingRight : "20px",
	},
	left : {
		display : "flex",
		alignItems : "center",
		flex : 1,
	},
	userInfos : {
		margin : "0 20px 0 10px",
		fontWeight : "bold",
		height:"100%",
		display : "flex",
		justifyContent : "center",
		alignItems : "center",
		avatar : {
			width:"24px",
			height:"24px", 
			borderRadius:"16px",
			margin:"0px 10px 0px 5px"
		},
	},
	homeButton : {
		icon : icon
	},
	logButton : {
		icon : icon
	},
	languageButton : {
		icon : icon
	},
	helpButton : {
		icon : icon
	},
	settingsButton : {
		icon : icon
	},
	menuButton : {
		menu : {
			width : "150px"
		},
		list : {
			//width : screenWidth,
			//fontSize : "3em",
			//height : "130px",
			//display : "flex",
			alignItems : "center",
			//fontSize : "2em",
			borderTopColor : "white",
			borderTopStyle : "solid",
			borderTopWidth : "1px",
		},
		icon : icon
	}
}
