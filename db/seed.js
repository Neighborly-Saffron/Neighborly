const fs = require('fs')
const pool = require('./pool.js')

const populate = fs.readFileSync('./db/db.sql').toString();

//queries go here
pool.connect((err, client, release) => {
  if (err) {
    return console.error('Error acquiring client', err.stack)
  }
  console.log('creating tables and importing csv...')
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