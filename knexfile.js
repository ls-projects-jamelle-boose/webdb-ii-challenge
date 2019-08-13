module.exports = {
  development: {
    client: "sqlite3",
    useNullasDefault: true,
    connection: {
      filename: "./api/data/car-dealer.db3"
    },
    pool: {
      afterCreate: (conn, done) => {
        conn.run("PRAGMA foreign_keys = ON", done);
      }
    },
    migrations: {
      directory: "./api/data/migrations",
      tableName: "dbcars"
    },
    seeds: {
      directory: "./api/data/seeds"
    }
  }
};
