var path = require('path');

module.exports = {
  development: {
    client: 'pg',
    connection: process.env.DATABASE_URL || {
      host: 'localhost',
      port: 5432,
      user: 'postgres',
      password: '',
      database: 'missingmaps'
    },
    pool: {
      min: 0,
      max: 25,
      ping: function (connection, callback) {
        connection.query({text: 'SELECT 1'}, [], callback);
      }
    },
    acquireConnectionTimeout: 60000,
    migrations: {
      directory: path.join(__dirname, 'migrations')
    },
    seeds: {
      directory: path.join(__dirname, 'seeds')
    }
  },
  test: {
    client: 'sqlite3',
    connection: {
      filename: ':memory:'
    },
    migrations: {
      directory: path.join(__dirname, 'migrations')
    },
    seeds: {
      directory: path.join(__dirname, 'seeds')
    }
  }
};
