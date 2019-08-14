const db = require("../data/dbConfig");

module.exports = {
  get: function(id) {
    let query = db("cars");
    if (id) return query.where("id", id).first();
    return query;
  }
};
