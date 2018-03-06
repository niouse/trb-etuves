import React, {Component} from 'react';
import PropTypes from 'prop-types';
//import { browserHistory } from 'react-router';

import FlatButton from 'material-ui/FlatButton'


export default function TrbLabGraphs_Api(_optional) {
    return (WrappedComponent) => {
        class $TrbLabGraphs_Api extends Component {
            constructor(props) {
                super(props);
				let firstId = props.match.params.recorderId || props.recorders[0]._id
				let firstIndex=props.recorders.findIndex((x)=>{
					return (x._id===firstId)
				})
                
                
                this.state = {
					recorderIndex : firstIndex,
					recorderId : firstId,
                    recorder : props.recorders[firstIndex],
                    actualIndex : firstIndex,
                    
                    //RECORDER EDIT
					message : " ",
					messageStyle : props.styles.message,
                    
                    //RECORDER CONTENT
                    isOnRecord : props.recorders[firstIndex].isOnRecord,
					showRecorderEdit : false,
					showAlert : false,
					alertText : props.text.content.messages[0],
					alertOptions : "justClose",
				}
                
                this.selectRecorder=this.selectRecorder.bind(this)
                this.saveChanges=this.saveChanges.bind(this)
                this.handleStopQuery=this.handleStopQuery.bind(this)
                this.convertTime=this.convertTime.bind(this)
            }
            
            componentDidMount() {
                let options = {
					chartId : this.state.recorder._id,
                    operation : "addSerie",
					value : [this.state.recorder.serie]
				}
				this.props.updateChartNext(options)
                
                let recorder = this.props.recorders[this.state.actualIndex ]
                
                this.setState({
                    serieName : 'DEP'+recorder.serie.numDep+'-'+recorder.serie.variant+'-N°'+recorder.serie.numMix,
					numDep : recorder.serie.numDep,
					numMix : recorder.serie.numMix,
                    variant : recorder.serie.variant,
                })
			}
            
            componentWillReceiveProps(newProps) {
                
                let recorder = newProps.recorders[this.state.actualIndex]
                
				let statusChanged = recorder.isOnRecord !== this.state.recorder.isOnRecord
				let serieChanged = recorder.serie.data.length !== this.state.recorder.serie.data.length
				let serieReset = recorder.serie.data.length === 0
				
                //console.log(recorder.serie.timeToMax)
				
				if(statusChanged){
					this.setState({
						isOnRecord : recorder.isOnRecord,
					})
				}
				
				if(serieChanged && !serieReset){
                   // console.log("new value")
					let n = recorder.serie.data.length
					let n2 = this.state.recorder.serie.data.length
					if(n<n2){
						console.log("unexpected behaviour")
					}
					else{
						let options = {
							chartId : recorder._id,
							operation : "addPoints",
							value : {
								index : 0,
								value : recorder.serie.data.slice(-1)
							}
						}
						this.props.updateChartNext(options)
					}
				}
				
				if(serieReset){
					let options = {
						chartId : recorder._id,
						operation : "updateSerie",
						value : [recorder.serie]
					}
					this.props.updateChartNext(options)
				}
                this.setState({
                    recorder : recorder,
                    /*serieName : 'DEP'+recorder.serie.numDep+'-'+recorder.serie.variant+'-N°'+recorder.serie.numMix,
					numDep : recorder.serie.numDep,
					numMix : recorder.serie.numMix,
                    variant : recorder.serie.variant,*/
                })
            }
            
            shouldComponentUpdate(nextProps, nextState) {
                return true
            }
            componentWillUpdate() {}
            componentDidUpdate() {}
            componentWillUnmount() {}
            
            //RECORDER SELECTOR
            selectRecorder(event, index, id) {
				this.setState({
					recorderId : id,
                    actualIndex : index,
					recorderIndex : index,
                    recorder : this.props.recorders[index],
                    serieName : this.props.recorders[index].serie.name,
					numDep : this.props.recorders[index].serie.numDep,
					numMix : this.props.recorders[index].serie.numMix,
                    variant : this.props.recorders[index].serie.variant,
				}, ()=>{
                    let options = {
						chartId : this.state.recorder._id,
						operation : "updateSerie",
						value : [this.state.recorder.serie]
					}
					this.props.updateChartNext(options)
					this.setState({
						isOnRecord : this.state.recorder.isOnRecord,
					})
                })
            }
            
            
            //RECORDER EDIT
            handleTextChange(event, value, key){
				this.setState({[key] : Number(value)}, ()=>{
					this.setState({
						serieName : 'DEP'+this.state.numDep+'-'+this.state.variant+'-N°'+this.state.numMix,
					})
				})
			}
            
            saveChanges() {
                
				if(this.props.seriesList.find((x)=>{return x.name===this.state.serieName})!==undefined){
					let text = Object.assign({}, this.props.text)
					this.setState({
						messageStyle : Object.assign({}, this.props.styles.recorderEdit.message, this.props.styles.recorderEdit.message.error)
					})
					this.showMessage(this.props.text.recorderEdit.saveAlready + " " + this.state.serieName)
					return
				}
                
				console.log(typeof(this.state.numMix))
  				let options = {
					serie : {
						name : this.state.serieName,
						numMix : this.state.numMix,
						numDep : this.state.numDep,
                        variant : this.state.variant
					}
				}
                                
				this.props.updateRecorderSerie(this.state.recorder._id, options, (err, res)=>{
					if(err){
						this.setState({
							messageStyle : Object.assign({}, this.props.styles.message, this.props.styles.recorderEdit.message.error)
						})
						this.showMessage(this.props.text.recorderEdit.saveFailure)
					}
					else {
						this.setState({
							messageStyle : Object.assign({}, this.props.styles.recorderEdit.message, this.props.styles.recorderEdit.message.success)
						})
						this.showMessage(this.props.text.recorderEdit.saveSuccess)
					}
				})
            }
			
			showMessage(message){
				this.setState({
					message : message,
					showMessage : true
				})
				setTimeout(()=>this.setState({
					message : " "
				}), 5000)
			}
            
            
            
            
            
            //RECORDER CONTENT
            toggleRecorderEdit(){
				this.setState({
					showRecorderEdit : !this.state.showRecorderEdit
				})
			}
            
            startRecord(id){
				if(this.state.isOnRecord){
					//this.changeText("messages", 0)
					this.setState({
                        alertText : this.props.text.content.messages[0],
						alertOptions : "justClose",
						showAlert : true
					})
				}
                 
				else {
					let name = this.state.recorder.serie.name
					if(this.props.seriesList.find((x)=>{return x.name===name})!==undefined){
                        
						this.setState({
                            alertText : this.props.text.content.messages[3]+" "+name,
							alertOptions : "justClose",
							showAlert : true,
							//text : text
						})
						return
					}
					this.props.updateRecorderStatus(this.state.recorder._id, true,  (err, res)=>{
						if(err){
							alert("Something went wrong when update recorder status. Try to reload page or contact administrator if problem persist")
						}
						else{
							this.setState({
								isOnRecord : true
							})
						}
					})
					
				}
			}
			
			stopRecord(){
				//console.log(typeof(this.props.recorder.serie.maxValue))
				this.props.createSerie(this.state.recorder.serie, (err, res)=>{
					if(err){
						console.log(err.reason)
						alert("Something went wrong when update recorder status. Try to reload page or contact administrator if problem persist")
					}
					else{
						alert("Serie was saved")
					}
				})
				
				this.props.resetRecorderSerie(this.state.recorder._id, (err, res)=>{
					if(err){
						alert(err)
					}
				})
	
				this.props.updateRecorderStatus(this.state.recorder._id, false,  (err, res)=>{
					if(err){
						alert("Something went wrong when update recorder status. Try to reload page or contact administrator if problem persist")
					}
					else{
						this.setState({
							isOnRecord : false
						})
					}
				})
			}
			
			handleStopQuery(){
				if(!this.state.isOnRecord){
					this.setState({
                        alertText : this.props.text.content.messages[2],
						alertOptions : "justClose",
						showAlert : true
					})
				}
				else {
					this.setState({
                        alertText: this.props.text.content.messages[1],
						alertOptions : "started",
						showAlert : true,
					})
				}
			}		
			
			convertTime(time){
				var date = new Date(time);
				var result = (date.getHours()-1)+"hr, "+date.getMinutes()+"min";
				return result
			}
			
			toggleStateBool(key){
				this.setState({
					[key] : !this.state[key]
				})
			}
			
			getAlertOptions(options){
				if(this.state.alertOptions==="justClose"){
					const actions=[
					  <FlatButton
						label={this.props.text.content.close}
						primary={true}
						onTouchTap={()=>this.toggleStateBool("showAlert")}
					  />,
					]
					return actions
				}
				if(this.state.alertOptions==="started"){
					const actions=[
					  <FlatButton
						label={this.props.text.content.yes}
						primary={true}
						onTouchTap={()=>{this.stopRecord(); this.toggleStateBool("showAlert")}}
					  />,
					  <FlatButton
						label={this.props.text.content.no}
						primary={true}
						onTouchTap={()=>this.toggleStateBool("showAlert")}
					  />,
					]
					return actions
				}
			}
			

            render() {
                
                let serieName = 'DEP'+this.state.numDep+'-'+this.state.variant+'-N°'+this.state.numMix
                return <WrappedComponent
                    {...this.props}
                    selectedValue={this.state.selectedValue}
                    selectRecorder={this.selectRecorder}
                    recorder={this.state.recorder}
                    recorderId={this.state.recorderId}
                    recorderIndex={this.state.recorderIndex}

                    saveChanges={this.saveChanges}
                    handleTextChange={(e, value, key)=>this.handleTextChange(e, value, key)}
                    numDep={this.state.numDep}
                    numMix={this.state.numMix}
                    variant={this.state.variant}
                    serieName={serieName}
                    message={this.state.message}
                    messageStyle={this.state.messageStyle}

                    startRecord={()=>this.startRecord()}
                    handleStopQuery={()=>this.handleStopQuery()}
                    isOnRecord={this.state.recorder.isOnRecord}
                    convertTime={this.convertTime}
                    showRecorderEdit={this.state.showRecorderEdit}
                    showAlert={this.state.showAlert}
                    toggleStateBool={(key)=>this.toggleStateBool(key)}
                    message={this.state.message}
                    alertOptions={this.getAlertOptions(this.state.alertOptions)}
                    alertText={this.state.alertText}
				/>
            }
        }
        $TrbLabGraphs_Api.propTypes = {
            styles: PropTypes.object.isRequired,
            // text : PropTypes.object.isRequired,
        };
        return $TrbLabGraphs_Api
    }
}
    