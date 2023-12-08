//Including the logic for connecting to the database
//const Connection = require('mysql2/typings/mysql/lib/Connection');
const connection = require('./connection');


//async function getAll() {...}
//async function getById() {...}





async function getAll(){
   // const offset = helper.getOffset(page, config.listPerPage);
   let selectSql =
      `SELECT * FROM intents `,
    
    queryParameters = [];

return await connection.query(selectSql, queryParameters);
   
  }

module.exports = {
    getAll,
}