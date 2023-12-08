//Libraries
const express = require('express');
const multer = require('multer');
const cors = require('cors');
const mysql = require('mysql2');
const { check, validationResult } = require('express-validator');
const commands = require('./Model/commands');
//Setup defaults for script
const app = express();
app.use(cors());
const upload = multer()
const port = 80 //Default port to http server
app.use(express.static('public'))







//The * in app.* needs to match the method type of the request
app.get('/commands/', upload.none(), async (request, response) => {
   
    let result = {};
    try {
        result = await commands.getAll(request.query);
    } catch (error) {
        console.log(error);
        return response
        
            .status(500) //Error code when something goes wrong with the server
           // .setHeader('Access-Control-Allow-Origin', '*') //Prevent CORS error
            .json({message: 'Something went wrong with the server.'});

    }
    //Default response object
    response
       // .setHeader('Access-Control-Allow-Origin', '*') //Prevent CORS error
        .json({'data': result});
});

app.listen(port, () => {
    console.log(`Application listening at http://localhost:${port}`);
})