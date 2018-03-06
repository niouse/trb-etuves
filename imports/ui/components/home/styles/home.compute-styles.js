
export default function Home_computeStyles(defaultStyles, stylesOptions, userStyles) {
    var styles = {}
	for (var key in defaultStyles){
		styles[key]=Object.assign({}, defaultStyles[key])
	}
	
	//styles.bandImageBox.width = stylesOptions.screenWidth
	//styles.bandImage.width = stylesOptions.screenWidth

    // Overwrite styles according to device type
    if (stylesOptions.device === "pc" ) {
		//styles.clocksBox.display="flex"
	}
	
    if (stylesOptions.device === "smartPhone" || stylesOptions.screenWidth < 640) {
		styles.container.paddingTop = 35
		styles.bandImageBox.height="100px"
		styles.bandImageBox.maxHeight="100px"
		styles.clocksBox.display="block"
	}
	

    // Overwrite styles according user provided styles
    for (var key in userStyles) {
        if (styles[key]) {
            for (var key2 in userStyles[key]) {
                styles[key][key2] = userStyles[key][key2]
            }
        }
    }
    return styles
}
