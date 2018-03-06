const button = {
	margin: "0px",
	width: "100%"
}

export default Login_Styles_Default = {
	container: {
		width: "100%",
		display: "flex",
		justifyContent: "center",
		flexDirection: "column",
		alignItems: "center",
		margin: "0px auto",
		fontFamily: "Play",
		height: "100%",
		overflow : "auto",
		//border : "1px solid blue"
	},
	title: {
		color: "black",
		height : "1.1em",
	},
	form: {
		display: "flex",
		justifyContent: "center",
		flexDirection: "column",
		alignItems: "center",	
		margin : 0,
		padding : 0,
	},
	mailInput: {
		width: '100%',
	},
	passwordInput: {
		width: '100%',
		marginBottom: "30px"
	},
	message: {
		fontSize: "1.5em",
		color: "red",
		height: "1.5em",
	},
	goToSignupButton : button,
	submitUserButton : button,
}
