import QUnit from 'steal-qunit';
import { ViewModel } from './visualization';

// ViewModel unit tests
QUnit.module('my-app/visualization');

QUnit.test('Has message', function(){
  var vm = new ViewModel();
  QUnit.equal(vm.attr('message'), 'This is the app-visual component');
});
