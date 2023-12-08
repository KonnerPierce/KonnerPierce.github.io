// came from the following: npm install mysql2
const mysql = require('mysql2/promise');


let connection = null;


async function query(sql, params) {
    //Singleton DB connection
    if (null === connection) {
        console.log('Here');
        connection = await mysql.createConnection({
            host: "student-databases.cvode4s4cwrc.us-west-2.rds.amazonaws.com",
    user: "KONNERPIERCE",
    password: "tlCUcWebA28tjfhLd2ESfKdskjTOy0YM83K",
    database: 'KONNERPIERCE'
        });
    }
   //Run SQL statement with parameters, if any 
    const [results, ] = await connection.execute(sql, params);


    return results;       //Return results of SQL statement
}


module.exports = {
    query
}
