import fixture from 'can-fixture';

const store = fixture.store([{
  _id: 0,
  description: 'First item'
}, {
  _id: 1,
  description: 'Second item'
}]);

fixture({
  'GET http://localhost:8080/api/vizData': store.findAll,
  'GET http://localhost:8080/api/vizData/{_id}': store.findOne,
  'POST http://localhost:8080/api/vizData': store.create,
  'PUT http://localhost:8080/api/vizData/{_id}': store.update,
  'DELETE http://localhost:8080/api/vizData/{_id}': store.destroy
});

export default store;
