
const express = require('express');
const {getAllTransaction,addTransaction,editTransaction,deleteTransaction} = require('../controller/transactionCtrl');

//router object
const router = express.Router();
//Routes
//add transction
router.post('/add-transaction',addTransaction);
//Edit transction
router.post('/edit-transaction',editTransaction);
// Delete Transaction
router.post('/delete-transaction',deleteTransaction);
//getall transction
router.post('/get-alltransaction',getAllTransaction);

module.exports=router;
