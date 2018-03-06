
export default function Navigation_computeStyles(defaultStyles, stylesOptions, userStyles) {
    let styles = Object.assign({}, defaultStyles);
	
    // Overwrite styles according screen size and theme
    styles.title = {
        color: stylesOptions.theme.colors.primary
    }

	styles.active = Object.assign({}, styles.active, {
		color : stylesOptions.theme.colors.primary,
		borderBottom : "3px solid "+stylesOptions.theme.colors.primary,
	})
	
	styles.navItem = Object.assign({}, styles.navItem, {
		color : "black",
		focusColor : stylesOptions.theme.colors.primary,
		fontFamily :  stylesOptions.theme.fonts.main,
	})

    // Overwrite styles according to device type
    if (stylesOptions.device === "pc") {}
    if (stylesOptions.device === "smartPhone") {}

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

