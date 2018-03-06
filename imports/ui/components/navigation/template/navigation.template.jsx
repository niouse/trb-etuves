
import React, {Component} from 'react';
import PropTypes from 'prop-types';

// TEMPLATES
import NavigationUserInfos from "./navigation.template.user-infos.jsx";
import NavigationHomeButton from "./navigation.template.home-button.jsx";
import NavigationLogButton from "./navigation.template.log-button.jsx";
import NavigationLanguageButton from "./navigation.template.language-button.jsx";
import NavigationHelpButton from "./navigation.template.help-button.jsx";
import NavigationSettingsButton from "./navigation.template.settings-button.jsx";
import NavigationMenuButton from "./navigation.template.menu-button.jsx";



@NavigationUserInfos()
class $NavigationUserInfos{}

@NavigationHomeButton()
class $NavigationHomeButton{}

@NavigationLogButton()
class $NavigationLogButton{}

@NavigationLanguageButton()
class $NavigationLanguageButton{}

@NavigationHelpButton()
class $NavigationHelpButton{}

@NavigationSettingsButton()
class $NavigationSettingsButton{}

@NavigationMenuButton()
class $NavigationMenuButton{}


export default function NavigationTemplate() {
    return (wrappedComponent) => {
        const $NavigationTemplate = (props) => {
            let styles = props.styles
            let text = props.text
            return (
                <div id="navigation-container" className="container" style={styles.container}>
					<div style={styles.box}>
						<div id="navigation-left" style={styles.left}>
							<$NavigationUserInfos 
								id="navigation-userInfos" 
								styles={styles.userInfos} 
								user={props.user} 
								text={text.userInfos}/>
						</div>

						<div id="navigation-right" style={styles.right}>
							<$NavigationHomeButton
								id="navigation-homeButton" 
								styles={styles.homeButton}
								attr={styles.button.attr}
								goToPage={props.goToPage}
								/>
							<$NavigationLogButton 
								id="navigation-logButton" 
								styles={styles.logButton}
								attr={styles.button.attr}
								user={props.user} 
								logout={props.logout} 
								goToPage={props.goToPage}
								/>
							<$NavigationLanguageButton 
								id="navigation-languageButton" 
								styles={styles.languageButton}
                                text={text.languageButton} 
								attr={styles.button.attr}
								handleLanguageChange={props.handleLanguageChange}
								/>
							<$NavigationHelpButton 
								id="navigation-helpButton" 
								styles={styles.helpButton}
								attr={styles.button.attr}
								goToPage={props.goToPage}
								/>
							<$NavigationSettingsButton 
								id="navigation-settingsButton" 
								styles={styles.settingsButton} 
								attr={styles.button.attr}
								user={props.user}/>
						</div>
						<div id="navigation-right-phone" style={styles.rightPhone}>
							<$NavigationMenuButton 
								id="navigation-menuButton" 
								styles={styles.menuButton}
								attr={styles.button.attr}
								text={text.menuButton} 
								user={props.user} 
								logout={props.logout}
								goToPage={props.goToPage}
								handleLanguageChange={props.handleLanguageChange}
								/>
						</div>
					</div>
				</div>
            );
        }
        $NavigationTemplate.propTypes = {
            styles: PropTypes.object.isRequired,
            text: PropTypes.object.isRequired,
            logout : PropTypes.func.isRequired,
            goToPage : PropTypes.func.isRequired,
            handleLanguageChange : PropTypes.func.isRequired,
        };
        return $NavigationTemplate
    }
}
    