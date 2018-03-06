
export default function Navigation_computeStyles(defaultStyles, stylesOptions, userStyles) {
    var styles = {}
	for (var key in defaultStyles){
		styles[key]=Object.assign({}, defaultStyles[key])
	}
    // Overwrite styles according screen size or theme
	styles.userInfos.color = stylesOptions.theme.colors.secondary
	styles.button={}
	styles.button.attr = {
		color : stylesOptions.theme.colors.primary,
		hoverColor : stylesOptions.theme.colors.secondary,
	}
	styles.menuButton.list.borderColor = stylesOptions.theme.colors.primary
	

    // Overwrite styles according to device type
    if (stylesOptions.device === "pc" && stylesOptions.screenWidth < 640) {
		
	}
    if (stylesOptions.device === "smartPhone" || stylesOptions.screenWidth < 640) {
		styles.right.display="none"
		styles.rightPhone.display="flex"
		styles.container.position = "absolute"
		styles.container.top = 40
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
