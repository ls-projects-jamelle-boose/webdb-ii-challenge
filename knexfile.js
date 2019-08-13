module.exports = {
  development: {
    client: "sqlite3",
    useNullasDefault: true,
    connection: {
      filename: "./src/data/car-dealer.db3"
    },
    pool: {
      afterCreate: (conn, done) => {
        conn.run("PRAGMA foreign_keys = ON", done);
      }
    },
    migrations: {
      directory: "./src/data/migrations",
      tableName: "dbcars"
    },
    seeds: {
      directory: "./src/data/seeds"
    }
  }
};
