const Pool = require('pg').Pool
require('dotenv').config()

let config = {
  user: process.env.user,
  host: process.env.host,
  database: process.env.database,
  password: process.env.password,
  port: 5432,
  idleTimeoutMillis: 0,
  connectionTimeoutMillis: 0,
}

let pool = new Pool(config);

module.exports = pool;