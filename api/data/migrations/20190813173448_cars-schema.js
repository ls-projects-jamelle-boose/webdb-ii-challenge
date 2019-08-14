exports.up = function(knex) {
  return knex.schema.createTable("cars", tbl => {
    tbl.increments("id");
    tbl
      .string("VIN", 17)
      .unique()
      .notNullable();
    tbl.string("Make", 128).notNullable();
    tbl.string("Model", 128).notNullable();
    tbl.integer("Mileage").notNullable();
    tbl.enu("Transmission", ["automatic", "manual"]);
    tbl.enu("Title", [
      "clean",
      "salvage",
      "junk",
      "bonded",
      "reconstructed",
      "affidavit",
      "rebuilt",
      "certificate of destruction",
      "parts only",
      "electronic",
      "lienholder",
      "export",
      "import"
    ]);
  });
};

exports.down = function(knex) {};
