import can from 'can';
import superMap from 'can-connect/can/super-map/';
import tag from 'can-connect/can/tag/';
import 'can/map/define/define';

export const VizData = can.Map.extend({

  define: {}
});

VizData.List = can.List.extend({
  Map: VizData
 
 
 
}, {});

export const vizDataConnection = superMap({
  url: 'http://localhost:8080/api/vizData',
  idProp: '_id',
  Map: VizData,
  List: VizData.List,
  name: 'vizData'
});

tag('vizData-model', vizDataConnection);

export default VizData;
