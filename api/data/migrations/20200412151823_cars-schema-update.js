exports.up = function (knex) {
  return knex.schema.createTable('sales', (tbl) => {
    tbl.increments('id').primary();
    tbl.integer('sale_id').unsigned();
    tbl.foreign('sale_id').references('cars.id');
    tbl.boolean('sold');
  });
};

exports.down = function (knex) {};
