
import React, {Component} from 'react';
import PropTypes from 'prop-types';
//import { browserHistory } from 'react-router';

export default function Home_Api(_optional) {
    return (WrappedComponent) => {
        class $Home_Api extends Component {
            constructor(props) {
                super(props);
                this.state = {
					  counter: 2,
					  layouts : {
						lg : [
							{i: '0', x: 0, y: 0, w: 6, h: 12, static: false, isDraggable: true, isResizable: true, verticalCompact: true},
							{i: '1', x: 6, y: 0, w: 6, h: 12, minW: 3, maxW: 12, isResizable: true, isDraggable : true, verticalCompact: true},
							{i: '2', x: 0, y: 12, w: 12, h: 4, isResizable: true, isDraggable : true, verticalCompact: true}
						]
					},
					viewContainerTools : [true, true, true],
					viewTools : [true, true, true],
					brandView : true
				}
				this.start=null
				this.elBand 
				this.animation
				
            }
            componentDidMount() {
				this.elBand = document.getElementById("home-band-image-box");
				this.elHeader = document.getElementById("header-container");
				this.elNavigation = document.getElementById("navigation-container");
				this.elHome = document.getElementById("home-container");
			}
            componentWillReceiveProps(newProps) {}
            shouldComponentUpdate(nextProps, nextState) {
                return true
            }
            componentWillUpdate() {}
            componentDidUpdate() {}
            componentWillUnmount() {}

			
			addContainer(){
				let newLg = []
				let newVCT = []
				let newViewTools = []
				
				for (var i=0; i<this.state.layouts.lg.length; i++){
					newLg[i]=this.state.layouts.lg[i]
					newVCT[i]=this.state.viewContainerTools[i]
				}
				
				newLg.push({i: (this.state.counter+1).toString(), x: 0, y: Infinity, w: 12, h: 4, isResizable: true, isDraggable : true, verticalCompact: true})
				
				newVCT.push(true)
				newViewTools.push(true)
				
				this.setState({
					layouts : {lg : newLg},
					counter : this.state.counter+1,
					viewContainerTools : newVCT,
					viewTools : newViewTools
				})
				
			}
			
			deleteContainer(index){
				
				let newLg = []
				let newVCT = []
				let newViewTools = []
				
				for (var i=0; i<this.state.layouts.lg.length; i++){
					newLg[i]=this.state.layouts.lg[i]
					newVCT[i]=this.state.viewContainerTools[i]
					newViewTools[i]=this.state.viewTools[i]
				}
				newLg.splice(index, 1)
				newVCT.splice(index, 1)
				newViewTools.splice(index, 1)
				
				this.setState({
					layouts : {lg : newLg},
					viewContainerTools : newVCT,
					viewTools : newViewTools
				})
			}
			
			onLayoutChange(layout){
				this.setState({
					layouts : {lg : layout},
				})
				let newViewTools = []
				
				for (var i=0; i<this.state.layouts.lg.length; i++){
					newViewTools[i]=this.state.viewTools[i]
				}
				
				for (var i=0; i<layout.length; i++){
					if (layout[i].w<4){
						newViewTools[i] = false
					}
					else {
						newViewTools[i] = true
					}
				}
				
				this.setState({
					layouts : {lg : layout},
					viewTools : newViewTools
				})
			}
			
			lockContainer(index){
				let newLg = []
				for (var i=0; i<this.state.layouts.lg.length; i++){
					newLg[i]=this.state.layouts.lg[i]
				}
				
				//newLg[index].isResizable = !newLg[index].isResizable 
				//newLg[index].isDraggable = !newLg[index].isDraggable
				newLg[index] = {i: newLg[index].i, x: newLg[index].x, y: newLg[index].y, w: newLg[index].w, h: newLg[index].h, isResizable: !newLg[index].isResizable, isDraggable : !newLg[index].isDraggable, verticalCompact: true}

				this.setState({
					layouts : {lg : newLg},
				})
			}
			
			changeSize(){
				if(this.state.brandView){ this.minimize()}
				else {this.maximize()}
				this.setState({brandView : !this.state.brandView})
			}
			
			minimize(){
				//this.animation = window.requestAnimationFrame((timestamp)=>this.moveBandUp(timestamp))
				document.getElementById("header-container").style.display="none"
				this.elBand.style.display="none"
				
				//this.elNavigation.style.position="relative"
				this.elNavigation.style.top="0px"
				this.elHome.style.marginTop = "35px"
			}
			
			maximize(){
				//this.animation = window.requestAnimationFrame((timestamp)=>this.moveBandUp(timestamp))
				document.getElementById("home-band-image-box").style.display="flex"
				console.log('bley')
				this.elHeader.style.display="inline"
				//this.elNavigation.style.position="relative"
				this.elNavigation.style.top=this.elHeader.style.height
				this.elHome.style.marginTop = "0px"
			}
			
			moveBandUp(timestamp){
				 var progress;
				  if (this.start === null) this.start = timestamp;
				  progress = timestamp - this.start;
				  this.elBand.style.top = Math.min(progress/10, 200) + "px";
					if (progress < 2000) {
						 window.requestAnimationFrame((timestamp)=>this.moveBandUp(timestamp));
					}
				else window.cancelAnimationFrame(this.animation)
			}
			
			toggleContainerTools(index){
				let newVCT = [];
				
				for (var i=0; i<this.state.viewContainerTools.length; i++){
					newVCT[i]=this.state.viewContainerTools[i]
				}
				
				newVCT[index]=!newVCT[index]
				
				this.setState({
					viewContainerTools : newVCT
				})
			}
			
			toggleAllTools(show){
				if(show){
					this.setState({
						viewContainerTools : this.state.viewContainerTools.map(()=>{return true})
					})
				}
				else {
					this.setState({
						viewContainerTools : this.state.viewContainerTools.map(()=>{return false})
					})
				}
				
			}
			
			toggleAllLocks(lock){
				let newLg = []
				let lg = this.state.layouts.lg
				for (var i=0; i<lg.length; i++){
					newLg[i] = {i: lg[i].i, x: lg[i].x, y: lg[i].y, w: lg[i].w, h: lg[i].h, isResizable: !lock, isDraggable : !lock, verticalCompact: true}
				}

				this.setState({
					layouts : {lg : newLg},
				})
			}
			
			arrangeContainers(dir){
				
				if(dir === "horizontal"){
					let newLg = []
					for (var i=0; i<this.state.layouts.lg.length; i++){
						newLg[i] = {i: this.state.layouts.lg[i].i.toString(), x: i*4, y: Infinity, w: 12, h: 4, isResizable: true, isDraggable : true, verticalCompact: true}
					}
					this.setState({
						layouts : {lg : newLg},
					})
				}
				if(dir === "vertical"){
					let newLg = []
					for (var i=0; i<this.state.layouts.lg.length; i++){
						console.log((i*4)%12)
						newLg[i] = {i: this.state.layouts.lg[i].i.toString(), x: (i*4)%12, y: Infinity, w: 4, h: 16, isResizable: true, isDraggable : true, verticalCompact: true}
					}
					this.setState({
						layouts : {lg : newLg},
					})
				}
				if(dir === "apps"){
					let newLg = []
					for (var i=0; i<this.state.layouts.lg.length; i++){
						console.log((i*4)%12)
						newLg[i] = {i: this.state.layouts.lg[i].i.toString(), x: (i*3)%12, y: Infinity, w: 3, h: 6, isResizable: true, isDraggable : true, verticalCompact: true}
					}
					this.setState({
						layouts : {lg : newLg},
					})
				}
				
			}
			
			toggleFullScreen(index){
				let newLg = []
				let lg = this.state.layouts.lg
				for (var i=0; i<lg.length; i++){
					if(i===index){
						newLg[i] = {i: lg[i].i, x: 0, y: 0, w: 12, h: 16, isResizable: lg[i].isResizable, isDraggable : lg[i].isDraggable, verticalCompact: true}
					}
					else{
						newLg[i] = {i: lg[i].i, x: lg[i].x, y: Infinity, w: lg[i].w, h: lg[i].h, isResizable: lg[i].isResizable, isDraggable : lg[i].isDraggable, verticalCompact: true}
					}
				}				
				this.setState({
					layouts : {lg : newLg},
				})
			}
			
			itemOver(){
				
			}

            render() {
                return <WrappedComponent
				{...this.props}
				itemOver={()=>this.itemOver()}
				layouts={this.state.layouts}
				addContainer={()=>this.addContainer()}
				onLayoutChange={(layout)=>this.onLayoutChange(layout)}
				deleteContainer={(index)=>this.deleteContainer(index)}
				lockContainer={(index)=>this.lockContainer(index)}
				changeSize={()=>this.changeSize()}
				brandView={this.state.brandView}
				toggleContainerTools={(index)=>this.toggleContainerTools(index)}
				viewContainerTools = {this.state.viewContainerTools}
				toggleAllTools={(show)=>{this.toggleAllTools(show)}}
				arrangeContainers={(dir)=>this.arrangeContainers(dir)}
				viewTools = {this.state.viewTools}
				toggleAllLocks={(lock)=>this.toggleAllLocks(lock)}
				toggleFullScreen={(index)=>this.toggleFullScreen(index)}
				/>
            }
        }
        $Home_Api.propTypes = {
            styles: PropTypes.object.isRequired,
            // text : PropTypes.object.isRequired,
        };
        return $Home_Api
    }
}
    