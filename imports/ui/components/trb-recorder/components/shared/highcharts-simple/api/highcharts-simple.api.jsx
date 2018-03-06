
import React, {Component} from 'react';
import PropTypes from 'prop-types';
//import { browserHistory } from 'react-router';


export default function HighchartsSimple_Api() {
    return (WrappedComponent) => {
        class $HighchartsSimple_Api extends Component {
            constructor(props) {
                super(props);
                this.state = {
					chartOptions : this.getChartOptions({series : []})
				}
				this.chart
				this.updateChartObsSub
            }
            componentDidMount() {
				this.chart = Highcharts.chart(this.props.chartId, this.state.chartOptions );
				if(this.props.updateChartObs){
                    //console.log("mounting")
					this.updateChartObsSub=this.props.updateChartObs.subscribe((msg)=>{
                        //console.log("operation",msg.operation)
						this[msg.operation](msg.value)
					})
				}
			}
            componentWillReceiveProps(newProps) {
				//this.chart.update(this.getChartOptions(newProps), true)
			}
            shouldComponentUpdate(nextProps, nextState) {
                return true
            }
            componentWillUpdate() {}
            componentDidUpdate() {}
            componentWillUnmount() {
				if(this.updateChartObsSub.unsubscribe){
					this.updateChartObsSub.unsubscribe()
				}
			}
			
			getChartOptions(options){
				return  {
					chart: {
						zoomType: 'x',
						type: 'spline',
						backgroundColor : "none",
						plotBorderWidth : 1,
						plotBorderColor : "white",
					},
					title: {
						text : " ",
					},
					subtitle: "none",
					yAxis: {
						gridLineColor : "white",
						labels: {
							style : {
								color : "white"
							}
						},
						lineColor : "white",
						//lineWidth : "1px",
						title: {
							align: 'high',
							offset: -50,
							//text: props.legendY,
							style  :{
								color : "white",
							},
							rotation: 0,
							y: -10
						},
						plotLines: [{
							value: 0,
							width: 1,
							color: "white"
						}]
					},
					xAxis: {
						type: 'datetime',
						tickColor : "white",
						labels: {
							overflow: 'justify',
							style : {
								color : "white"
							}
						},
						lineColor : "white"
					},
					tooltip: {
						valueSuffix: '°C',
						borderColor : "white"
					},
					legend: {
						symbolWidth: 10,
						itemStyle : { "color": "#ffffff", "cursor": "pointer", "fontSize": "12px", "fontWeight": "bold", "textOverflow": "ellipsis" }
					},
					plotOptions: {
						marker: {
							enabled: true
						},
						series : {
							allowPointSelect: true
						   // color : props.stylesOptions.theme.colors.primary,
						}
					},
					series: options.series
				}
			}

            addPoints(options){
                //console.log(options)
				options.value.forEach((x)=>{
                    console.log(this.chart.series)
                    console.log(options.index)
					this.chart.series[options.index].addPoint(x)
				})
			}
			
			updateSerie(series){
				let options={
					series : series
				}
                //console.log("update series:",series)
				this.chart.update(this.getChartOptions(options), true)
                //console.log(this.chart.series)
			}
			
			addSerie(serie){
				//console.log("add serie")
                //console.log(serie)
				if(this.chart.series.length !== 0){
					this.updateSerie([serie])
				}
				else {
					this.chart.addSeries({
						name: serie[0].name,
						data: serie[0].data
					});
					
				}	
			}
			
			addAndNormalizeSerie(serie){
					
				let delta = serie[0].data[0][0]
				
				let normalSerie = Object.assign({}, serie[0])
				normalSerie.data = normalSerie.data.map((point)=>{
					return [point[0]-delta, point[1]]
				})
				
				this.chart.addSeries({
						name: normalSerie.name,
						data: normalSerie.data
					});
			}
			
			toggleAndNormalizeSerie(serie){
				
				var test = this.chart.series.findIndex((_serie)=>{
					return _serie.name === serie[0].name
				})
				if(test !== -1){
					this.chart.series[test].remove()
				}
				else{
					let delta = serie[0].data[0][0]			
					let normalSerie = Object.assign({}, serie[0])
					normalSerie.data = normalSerie.data.map((point)=>{
						return [point[0]-delta, point[1]]
					})
                    
					this.chart.addSeries({
						name: normalSerie.name,
						data: normalSerie.data
					});
				}
			}
			

            render() {
                return <WrappedComponent
				{...this.props}
				/>
            }
        }
        $HighchartsSimple_Api.propTypes = {
            styles: PropTypes.object.isRequired,
            // text : PropTypes.object.isRequired,
        };
        return $HighchartsSimple_Api
    }
}
    