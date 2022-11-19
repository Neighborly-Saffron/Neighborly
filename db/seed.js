const fs = require('fs')
const pool = require('./pool.js')

const createTables = fs.readFileSync('./db/db.sql').toString();
const populate = fs.readFileSync('./db/etl.sql').toString();

//queries go here
pool.connect((err, client, release) => {
  if (err) {
    return console.error('Error acquiring client', err.stack)
  }
  console.log('creating tables')
  pool.query(createTables, function(err, result){
    if(err){
        console.log('error: ', err);
        process.exit(1);
    }
    console.log('created tables in database')
    process.exit(0);
  });
  pool.query(populate, function(err, result){
    if(err){
        console.log('error: ', err);
        process.exit(1);
    }
    console.log('populate database complete')
    process.exit(0);
  });
  console.log(`connected to '${client.database}' on port ${client.port}`)
})