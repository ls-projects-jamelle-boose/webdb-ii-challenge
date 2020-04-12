const selectTable = require('../data/dbConfig'),
  db = selectTable('cars');

module.exports = {
  get: function (id) {
    if (id) return db.where('id', id).first();
    return db;
  },
  insert: function (car) {
    return db.insert(car);
  },
  delete: function (id) {
    return db.where('id', '=', id).del();
  },
  update: function (id, body) {
    return db.where('id', '=', id).update(body);
  },
};
