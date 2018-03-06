
export default App_Styles_Default = {
    container: {
        width: "100%",
        height: "100%",
		display : "flex",
		flexDirection : "column",
		overflow : "hidden",
		overflowY  : "auto",
		position : "relative"
    },
    title: {
        color: "black"
    },
	sideBoxHidden : {
		width : 100
	},
	 toolTip : {
	  // marginRight : 20,
	   width : 50,
	   height : 50,
	   margin : 20,
	   padding : 10,
	   borderRadius : 10,
	   border : "1px solid red",
	   //border : "1px solid "+theme.colors.primary,
	   cursor : "pointer",
	   backgroundColor : "white",
	   attr : {
		   //color : theme.colors.primary,
		   color : "red",
		  // hoverColor : theme.colors.secondary,
		   hoverColor:"black"
	   }
   },
	
}
