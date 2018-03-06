
export default function App_computeStyles(defaultStyles, stylesOptions, userStyles) {
    var styles = {}
	for (var key in defaultStyles){
		styles[key]=Object.assign({}, defaultStyles[key])
	}
    // Overwrite styles according screen size or theme
   
	styles.container.overflow="auto"
	styles.container.width=stylesOptions.screenWidth
	styles.container.height=stylesOptions.screenHeight
	styles.container.background = stylesOptions.theme.colors.mainGradient
	
	styles.toolTip.border = "1px solid "+stylesOptions.theme.colors.primary
	styles.toolTip.attr.color = stylesOptions.theme.colors.primary
	styles.toolTip.attr.hoverColor = stylesOptions.theme.colors.secondary
	
    // Overwrite styles according to device type
    if (stylesOptions.device === "pc" && stylesOptions.screenWidth > 640) {
		styles.container.minHeight=700
	}
    if (stylesOptions.device === "smartPhone" || stylesOptions.screenWidth < 640) {
		styles.container.overflow="auto"
		styles.container.minHeight=640
		styles.sideBoxHidden.width=70
		styles.toolTip.width=30
		styles.toolTip.height=30
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
