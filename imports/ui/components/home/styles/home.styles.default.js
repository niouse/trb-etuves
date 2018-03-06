
export default Home_Styles_Default = {
    container: {
        width: "100%",
        height: "100%",
		margin : "auto",
        overflowY:"auto",
        overflowX : "hidden",
        //paddingTop : "35px",
		//position : "relative",
		//display : "flex",
		//flexDirection : "column",
		
		//border : "1px solid blue"
    },
	 bandImageBox : {
		 backgroundImage : "url('/home/fond_trb.jpg')",
		 backgroundSize: "cover",
		backgroundRepeat: "no-repeat",
    	//backgroundAttachment: "fixed",
    	backgroundPosition: "center",
		width : "100%",
		height : "300px",
		maxHeight : "25%",
		position : "relative",
		display : "flex",
		alignItems : "flex-end",
		 //border : "4px solid blue"
		//maxHeight : screenHeight/3.5,
		overflowY:"hidden",
		
	},
	bandImage : {
		//width : screenWidth,
		
		height : "100%",
		width : "100%",
		position : "absolute",
		top : 0,
		left : 0,
		//border : "2px solid yellow",
	},
	toolBar : {
		display : "flex"
	},
	dropContainerTools : {
		position : "absolute",
		top : "0px",
		left : "0px",
		zIndex :"200"
	},
	coolSelect : {
	    /*position: "absolute",
		bottom: "0px",
		left: "50%",
    	transform: "translateX(-50%)",*/
		height : "auto",
		margin : "auto",
		zIndex : 105,
	   //zIndex : 100
	},
	containerBox : {
		border : "1px solid grey",
		borderRadius : "5px",
		display : "flex",
		flexDirection : "column",
		overflow : "hidden"
		
	},
   baseline : {
	   display : "none",
	   position : "absolute",
	   top : "50px",
	   left : "80px",
	   zIndex : 100
   },
	content : {
		width : "100%",
		maxWidth : "1280px",
		display : "flex",
		flexWrap : "wrap",
	   //flexDirection : "column",
	   //justifyContent : "space-between",
		flex : 1,
		margin : "auto",
		paddingTop : "10px",
	},

	widgets : {
		width : "100%",
	},
	videosBox : {
		
	},
	video : {
		height : "120px",
		width : "180px"
	},
	rightContent  : {
		flex : 0.5,
		padding : "5px",
	},
	leftContent : {
		flex : 0.5,
		padding : "5px",
	},
	itemBox : {
		height : "90px",
		width : "90px",
		margin : "5px",
		cursor : "pointer",
		display : "inline-block",
		//justifyContent : "center",
		//verticalAlign:"middle",
		/*alignItems : "center",*/
		//border : "1px solid blue",
		//border : "1px solid red"
	},
	clocksBox : {
		display : "flex",
		flexDirection : "row",
		justifyContent : "space-around",
		margin : "auto",
		flexWrap : "wrap",
		width : "100%",
		height : "auto",
		//border : "3px solid red",
		//margin : "80px 0 0 0", 
		padding : "0px 0px 30px 0px",
		/*borderTopStyle : "solid",
		borderTopColor : theme.colors.primary,
		borderTopWidth : "1px",*/
	},
}
