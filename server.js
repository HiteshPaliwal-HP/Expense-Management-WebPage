const express = require('express');
const dotenv = require('dotenv');
const cors = require('cors');
const morgan = require('morgan');
const colors = require('colors');
const router = require('./router/router');
const path = require('path');
const dbConnection = require('./config/dbconnection');
//config dot env file
dotenv.config();
// call data base
dbConnection();
//rest object
const app=express();
// Middleware
app.use(express.json());
app.use(morgan('dev'));
app.use(cors());

//static files
app.use(express.static(path.join(__dirname,'./client/build')));

app.get("*", function(req,res){
    res.sendFile(path.join(__dirname,"./client/build/index.html"));
})
app.use('/api/v1/users', require('./router/router'));
//transaction routes
app.use('/api/v1/transactions',require('./router/transactionRoutes'));

//Port
const PORT = 8000 ||process.env.PORT;

app.listen(PORT,()=>{
    console.log(`The server is listing at ${PORT}`);
})