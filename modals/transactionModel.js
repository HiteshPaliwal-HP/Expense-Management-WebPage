const mongooes = require('mongoose');

const transactionSchema = new mongooes.Schema({
    userid:{
        type:String,
        required:true,
    },
    amount:{
        type:Number,
        required:[true,'amount is rquired'],
    },
    type:{
        type:String,
        required:[true,'Type is required is rquired'],
    },
    Category:{
        type:String,
        required:[true,'cat is required'],
    },
    reference:{
        type:String 
    },
    description:{
        type:String,
        requied:[true,'Desc is required'],
    },
    date:{
        type:Date,
        required:[true,'date is required'],
    }

},{timestamps:true})

const transactionModel = new mongooes.model('transactions', transactionSchema);

module.exports = transactionModel;