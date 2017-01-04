import QUnit from 'steal-qunit';
import VizData from './vizData';

QUnit.module('models/vizData');

QUnit.test('getList', function(){
  stop();
  VizData.getList().then(function(items) {
    QUnit.equal(items.length, 2);
    QUnit.equal(items.attr('0.description'), 'First item');
    start();
  });
});
