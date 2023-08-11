const transactionModel = require('../modals/transactionModel');
const moment = require('moment');
 const getAllTransaction = async(req,res)=>{
    try{
        const {frequency,selectedDate,type} = req.body;
        const transactions = await transactionModel.find({
             ...(frequency !=='custom' ?{
                date:{
                    $gt:moment().subtract(Number(frequency),'d').toDate(),
                },
             }:{
                date:{
                    $gte: selectedDate[0],
                    $lte: selectedDate[1]
                }
             }),
            userid:req.body.userid,
            ...(type!=='all' && {type})
        });
        res.status(200).json(transactions);
        // console.log(req.body.userid);
        // console.log(transactions);
    }catch(err){
        console.log(err);
        res.status(500).json(err);
    }
    
 }

 const editTransaction=async(req,res)=>{
    try{
        await transactionModel.findOneAndUpdate(
            {
                _id:req.body.transactionsId
            },
            req.body.playload
        );
        res.status(201).send('Transaction Created');
    }catch(err){
        console.log(err);
        res.status(500).json(err);
    }
 }


const deleteTransaction = async (req,res)=>{
    try{
  await transactionModel.findOneAndDelete({ _id:req.body.transactionsId})
  res.status(200).send('transaction Deleted Successfully')
    }catch(err){
        console.log(err);
        res.status(500).json(err);
    }
}
 const addTransaction = async(req,res) =>{
    try{
         const newtransaction = new transactionModel(req.body);
         await newtransaction.save();
         res.status(201).send('Transaction Created');
    }catch(err){
        console.log(err);
        res.status(500).json(err);
    }
 }



 module.exports={getAllTransaction,addTransaction,editTransaction,deleteTransaction};