
export default function Login_computeStyles(defaultStyles, stylesOptions, userStyles) {
    var styles = {}
	for (var key in defaultStyles){
		styles[key]=Object.assign({}, defaultStyles[key])
	}
    // Overwrite styles according screen size or theme
    styles.title.color= stylesOptions.theme.colors.primary
	//styles.container.height=stylesOptions.screenHeight-75
	styles.container.paddingTop = 35
    // Overwrite styles according to device type
    if (stylesOptions.device === "pc") {}
	
    if (stylesOptions.device === "smartPhone") {
		//styles.container.overflow="scroll"
		styles.form.height = "auto"
		styles.title.fontSize="1em"
		styles.container.height=1000
		//styles.container.form.overflow = "hidden"
	}

    // Overwrite styles according user provided styles
    for (var key in userStyles) {
        if (styles[key]) {
            for (var key2 in userStyles[key]) {
                console.log(userStyles[key][key2])
                styles[key][key2] = userStyles[key][key2]
            }
        }
    }
    return styles
}
