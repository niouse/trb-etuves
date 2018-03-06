export default TrbLabRecords_Styles_Default = {
    container : {
		display : "flex",
		width : "95%",
		minHeight : "150px",
		flexDirection : "column",
		//flexWrap : "wrap",
		justifyContent : "center",
		alignItems : "center",
		//paddingTop : "15px",
		margin : "auto",
		//border : "1px solid red",
	},
	expandButtonBox : {
		width : "130px",
		height : "130px",
		display : 'flex',
		justifyContent : "center",
		alignItems : "center",
		//border : "1px solid blue",
		//paddingBottom : "50px"
	},
	expandButton : {
		//backgroundColor : theme.colors.text,
		height : "100px",
		width : "100px",
		borderRadius : "15px",
		display : 'flex',
		justifyContent : "center",
		alignItems : "center",
		cursor : "pointer",
		active : {
			border : "3px solid blue"
		},
		attr : {
			onMouseEnter : (e)=>changeIn(e),
			onMouseLeave : (e)=>changeOut(e),
		}
	},
	serieViewer : {
		width : "70%",
		display : "flex",
		//margin : "auto",
		minHeight : "100px",
		//height : screenHeight - 175,
		overflow : "auto",
		//border : "3px solid #b5b5b5",
		borderRadius : "15px",
		justifyContent : "center",
		alignItems : "center",
	},
	selectData : {
		margin : "auto",
		fontWeight : "bold",
		color : "#b5b5b5"
	},

	search : {
		width : "50px"
	},
	drawer : {
		width : 300
	},
   settings : {
	   display : "flex",
   },
   item : {
	   backgroundColor : "initial",
	   active : {
		   backgroundColor : "green",
	   }
   }
}

function changeIn(e){
	e.currentTarget.style.border = TrbLabRecords_Styles_Default.expandButton.active.border
}

function changeOut(e){
	e.currentTarget.style.border = "none"
}


