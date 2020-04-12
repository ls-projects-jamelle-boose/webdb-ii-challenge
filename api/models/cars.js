const db = require('../data/dbConfig');

module.exports = {
  get: function (id) {
    let query = db('cars');
    if (id) return query.where('id', id).first();
    return query;
  },
  insert: function (car) {
    return db('cars').insert(car);
  },
  delete: function (id) {
    let car = db('cars');
    return car.where('id', '=', id).del();
  },
};
