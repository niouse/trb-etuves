
export default function TrbLabGraphs_computeStyles(defaultStyles, stylesOptions, userStyles) {
    let styles = Object.assign({}, defaultStyles);
    // Overwrite styles according screen size or theme
    styles.title = {
        color: stylesOptions.theme.colors.primary
    }
    styles.recorderSelector.container.fontFamily = stylesOptions.theme.fonts.main
	styles.recorderSelector.label.color=stylesOptions.theme.colors.primary
    
    /*styles.recorderEdit.container.width = stylesOptions.screenWidth
	styles.recorderEdit.container.height = stylesOptions.screenHeight*/
    styles.recorderEdit.title.color = stylesOptions.theme.colors.primary
    
    styles.content.container.fontFamily = stylesOptions.theme.fonts.main
	styles.content.editButton.attr={
		color : stylesOptions.theme.colors.primary,
		hoverColor : stylesOptions.theme.colors.secondary
	}
	styles.content.results.color=stylesOptions.theme.colors.secondary
    
    // Overwrite styles according to device type
    if (stylesOptions.device === "pc") {}
    if (stylesOptions.device === "smartPhone") {}

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
