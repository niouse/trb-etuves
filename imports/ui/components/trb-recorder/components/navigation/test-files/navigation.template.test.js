
import { Meteor } from 'meteor/meteor';
import React from 'react';
import chai  from 'chai';
import { mount, shallow } from 'enzyme';
import {expect} from 'chai';

import Template from "./../template/navigation.template.jsx";
import defaultStyles from "./../styles/navigation.styles.default.js";
import createMockItems from "./navigation.mocks.js";

if (Meteor.isClient) {

    describe('@Template (navigation.template.jsx)', function() {
		
        before(function() {
			class RaisedButton extends React.Component{
				render(){
					return( 
						<button
							id={this.props.id}
							type={this.props.type}
							style={this.props.style}
							onClick={this.props.onClick}
						/>
					)
				}
			}
			
            Navigation = Template(RaisedButton)()
			containerStyle = Object.assign({}, defaultStyles.container, {color : "testColor"})	
			styles = Object.assign({}, defaultStyles, {container : containerStyle})	
			items = createMockItems(4)
        });

       describe('Return expected DOM tree', function(){
	  before(function () {
			wrapper = mount(<Navigation items={items} styles={{container:{}}}/>); 
	  });	
		
	  it('Class name of root div tag is "container"', function(){
		  expect(wrapper.first().hasClass('container')).to.be.true;
	  });
	  it('The number of buttons equals the length of props.items', function(){
		  expect(wrapper.find('button')).to.have.length(4);
	  });
	  it('Tags Ids are correctly set', function(){
		  var elementsWithId = wrapper.find('[id]').nodes
		  for (var i=0; i < elementsWithId.length;  i++){
			  expect(elementsWithId[i].id.split('-')[0]).to.be.equal('navigation');
		  }
	  });
	});
		  
	describe("Styles are correctly set", function(){
		
		before(function () {
			wrapper = mount(<Navigation styles={styles} items={items}/>); 
		  });
		
		it('Default styles match with keysDOM elements ids', function(){  			
			for (let nodeName in defaultStyles){
				var el = wrapper.find('#navigation-'+nodeName)			
				expect(el.exists()).to.be.true;				
				for (var key in defaultStyles[nodeName]){
					expect(el.props().style[key]).to.deep.equal(defaultStyles[nodeName][key])
				}
			} 
		  });
			
	 	 it('Styles provided via props.styles are correctly applied', function(){  
			 expect(wrapper.find('#navigation-container').props().style.color).to.equal("testColor");
		  });
	});
	
/*	describe("Texts are correctly set", function(){
	
		before(function(){
			wrapper = mount(<Navigation text={Navigation_Text['en']} />); 
		})
			
		it('Text keys match with DOM elements ids', function(){  			
			for (let nodeName in Navigation_Text['en']){
				var el = wrapper.find('#navigation-'+nodeName)
				expect(el.exists()).to.be.true;
			} 
		  });
			
		it('Text is consistent in several languages', function(){  
			let baseText = NavigationText['en']
			for (var key1 in Navigation_Text){
				for (var key2 in baseText){
					expect(Navigation_Text[key1][key2]).to.not.be.undefined;
				}
			}
		});
			
		it('Texts provided via props.text are correctly applied', function(){  
			expect(wrapper.find('#navigation-title').get(0).innerHTML).to.equal(NavigationText['en'].title);
		});
	});*/

    });

}
    
    
    
     
    