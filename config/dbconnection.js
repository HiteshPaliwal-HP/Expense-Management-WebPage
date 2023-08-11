const mongoose = require('mongoose');
const colors = require('colors');
const dbConnection =async ()=>{
    try{
        await mongoose.connect(process.env.MONGO_URL);
        console.log(`The the DB is connected to ${mongoose.connection.host}`.bgBlue);
    }catch(error){
        console.log(`${error}`.bgRed);
    }
};

module.exports = dbConnection;