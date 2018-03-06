
export default TrbLabGraphs_Styles_Default = {
    container: {
        width: "100%",
        height: "100%",
		maxWidth : "1000px",
		margin : "auto",
		paddingTop : "30px",
    },
    title: {
        color: "black"
    },
    recorderSelector : {
            container : {
               width : "100%",
               //margin : "auto",
                display : "flex",
               //justifyContent : "center",
               alignItems : "center",
               fontFamily : "Arial",
                fontSize : "1.5em",
            },
           label : {
               fontSize : "1.2em",
               //color : theme.colors.textSecondary,
               marginRight : "30px",
               letterSpacing : "-1px",
               fontWeight : 100
               //border : "1px solid blue",
           },
           selectField : {
               //border : "1px solid red",
               height : "50px",
               margin : 0,
               paffing : 0,
               width : "150px",
               attr : {
                   floatingLabelStyle :{
                      // position : "absolute",
                       //top : "13px"
                   },
                   menuStyle :{
                       padding : 0,
                       margin : 0
                   },
                   hintStyle :{
                   },
                   labelStyle:{
                        dislpay : "none"
                   },
               }
           }
    },
    content: {
        container : {
            width : "100%",
            maxWidth : "1000px",
            margin : "auto",
            paddingTop : "30px",
            //padding : "10px",
            //color : theme.colors.component,
            //borderTop : "1px solid" + theme.colors.primary,
            //borderBottom : "1px solid" + theme.colors.primary,
            //borderRadius : "15px",
            backgroundColor : "none",
            color : "white",
            fontFamily : "Arial"
        },
         controlBox : {
            width : "100%",
            height : "220px",
            margin : "0px auto 30px auto",
            justifyContent : "space-between", 
            alignItems : "center",
            display:"flex",
            fontFamily : "Play",
            // border : "1px solid blue"
        },
        buttonBox : {
            height : "100%",
            width : "60%",
            display : "flex",
            //flexDirection : "row",
            justifyContent : "space-between"
        },
        header : {
            height : "50px",
            width : "100%",
            textAlign : "center",
            fontSize : "2em",
        },
        graph : {
           width : "100%",
            height : "300px",
       },
        mainBox : {
            display:"flex",
            height : "350px",
            width : "100%",
            color : "rde",
        },
            //border : "3px solid black",
        chart : {
            height : "300px",
            width : "100%",
            //border : "4px solid #b5b5b5",
        },
        results : {
                     //border : "1px solid red",
            display:"flex",
            fontSize : "1em",
            height : "100%",
            //flex : 1,
            width : "25%",
            flexDirection: "column",
            justifyContent : "space-between",
            alignItems : "space-around",
            //paddingLeft : "20px",
            //alignItems : "center",
            data : {
                fontSize : "0.8em",
                color : "red"
            },
        },
        serieTitleBox : {
            display : "flex",
            alignItems : "center",
            justifyContent : "space-between",
            cursor : "pointer",
            //borderBottom : "1px solid "+theme.colors.primary,
            paddingBottom : "5px",
        },
        serieTitle : {
            textJustify : "justify",
            fontSize : "1.5em",
            fontWeight : "bold",
            //margin: "0 auto 0 auto",
            //color : theme.colors.primary,



        },
        editButton : {
            //float : "right",
            marginRight : "0px",
            //maxWidth : "80px",
            //minWidth : "50px",
            //border : "1px solid "+theme.colors.primary,
            attr : {
                color : "red",
                hoverColor : "white"
            }
        },
        rowTable : {
            display:"flex",
            flexWrap : "wrap"
        },
        tableCell1 : {
            flex: 1,
            fontWeight : "normal",
            fontSize : "1em"
        },
        tableCell2 : {
            fontWeight : "normal",
            fontSize : "1.5em"
        }
    },
    recorderEdit : {
            container : {
                /*width : "100%",
                height : "100%",*/
                //margin : "0px auto 0 auto",
                /*position:"fixed",		
                top : 0,
                left : 0,*/
                /*display : "flex",
                justifyContent : "center",
                alignItems : "center",*/
               // zIndex : 100,
                //backgroundColor : 'rgba(0,0,0,0.4)',
                //backgroundOpacity : 0.4,	
               // border : "1px solid red"
            },
           settingsForm : {
               //margin : "auto", 
               //width: "500px"
           },
           content : {
              /* position: "relative",
                top: "50%", 
                transform: "translate(-50%, -50%)",
                left: "50%", 
                height : "auto",
                width : "550px",*/
                backgroundColor : "white",
                //padding : "20px",
                //border : "3px solid black",

            },
            title : {
                fontWeight : "bold",
                fontSize: "1.1em",
                height : "3em",
                //marginBottom : "30px",
            },

            inputs : {
                //maxWidth : "50px",
                fontFamily : 'Play',
                //margin : "auto 0 auto 10px",  
            },
            selectField : {
                maxWidth : "70px",
                marginLeft : "10px"
            },
            tableRow :{
                display : "flex",
                flexWrap : "wrap",
                //width : "100%",
                margin : "auto"
            },
            tableCell : {
                display : "flex",
                //flex : 1,
                width : "250px",
            },
            tableCell2 : {
                display : "flex",
                //flex : 1,
                width : "250px",
            },
            buttonBox : {
               // width : "100%",
                height : "30px",
                //marginTop : "10px"
            },
            button : {
                marginLeft : "5px",
                //float : "right"
            },
            message :{
                height : "1.5em",
                paddingBottom : "0.5em",
                success : {
                    color : "#65ff49",
                    //margin : "5px auto 5px auto"
                },
                error : {
                    color : "red"
                }
            }
    }
}
