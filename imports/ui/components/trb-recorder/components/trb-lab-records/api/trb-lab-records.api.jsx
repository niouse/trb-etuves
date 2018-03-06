
import React, {Component} from 'react';
import PropTypes from 'prop-types';
//import { browserHistory } from 'react-router';

export default function TrbLabRecords_Api(_optional) {
    return (WrappedComponent) => {
        class $TrbLabRecords_Api extends Component {
            constructor(props) {
                super(props);
                this.state = {
					showSearch : false,
					serie : false,
					seriesList : props.seriesList
				}
            }
            componentDidMount() {}
            componentWillReceiveProps(newProps) {
				this.setState({
					seriesList : newProps.seriesList
				})
                
				if (newProps.serie && newProps.serie.data){
					let serie = Object.assign({}, newProps.serie)
					serie.name=`${newProps.serie.name} - ${newProps.serie.maxValue}${newProps.serie.unity} - ${this.convertTime(newProps.serie.timeToMax)}`
					let options = {
						chartId : "chartId",
						operation : "toggleAndNormalizeSerie",
						value : [serie],
						seriesList : this.state.seriesList
					}
					this.props.updateChartNext(options)
				}
			}
            shouldComponentUpdate(nextProps, nextState) {
                return true
            }
            componentWillUpdate() {}
            componentDidUpdate() {}
            componentWillUnmount() {}
			
			toggleStateBool(key){
				this.setState({
					[key] : !this.state[key]
				})
			}
			
			convertDate(time){
				var date = new Date(time);
				var year = date.getFullYear();
				var month = date.getMonth();
				var day = date.getDate();
				return `${day}/${month}/${year}`
			}
			
			convertTime(time){
				var date = new Date(time);
				var result = (date.getHours()-1)+"hr, "+date.getMinutes()+"min";
				return result
			}
			
			selectSerie(e, id){
				this.props.getOneSerie(id)
				let currentColor = e.currentTarget.style["background-color"]
				let activeColor =this.props.styles.item.active.backgroundColor
				let baseColor =this.props.styles.item.backgroundColor
				
				if (currentColor === activeColor){
					e.currentTarget.style["background-color"]=baseColor
				}
				else if(currentColor === "initial") {
					e.currentTarget.style["background-color"]=activeColor
				}
				else {
					throw new Error("There is a problem with background color of items drawer")
				}
			}
			
			searchInList(event){
				event.preventDefault();
				var updatedList = this.props.seriesList;

				updatedList=updatedList.filter(function(item){
					//console.log(event.target.value.toLowerCase())
				  return item.name.toLowerCase().search(
					event.currentTarget.value.toLowerCase()) !== -1;
				});
				//console.log(updatedList)
				this.setState({seriesList: updatedList});
				//console.log(this.state.quizzList)	
			}

            render() {
                return <WrappedComponent
				{...this.props}	
				toggleStateBool={(key)=>this.toggleStateBool(key)}
				showSearch={this.state.showSearch}
				convertDate={this.convertDate}
				serie={this.props.serie}
				selectSerie={(e, id)=>this.selectSerie(e, id)}
				series={this.state.seriesList}
				searchInList={(e)=>this.searchInList(e)}
				/>
            }
        }
        $TrbLabRecords_Api.propTypes = {
            styles: PropTypes.object.isRequired,
            // text : PropTypes.object.isRequired,
        };
        return $TrbLabRecords_Api
    }
}
    