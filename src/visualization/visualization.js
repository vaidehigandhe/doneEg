import Component from 'can/component/';
import Map from 'can/map/';
import 'can/map/define/';
import './visualization.less!';
import template from './visualization.stache!';
import VizData from 'my-app/models/vizData';



/*import  'd3.chart';
console.log(d3.chart);*/
export const ViewModel = Map.extend({
  define: {
  /*   message: {
      value: 'This is the app-visual component'
    } */
	 barData: {
      value() {
        return [];
      }
    }
  }
  
  
});








export default Component.extend({
  tag: 'app-visual',
  viewModel: ViewModel,
  template:template
});