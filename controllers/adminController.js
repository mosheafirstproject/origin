// var mongodb = require('mongodb');
var MongoClient = require('mongodb').MongoClient;
var url = "mongodb://localhost:27017/";
var OrdersModel=require('../models/OrdersModel')

function connectionDB()
{
  OrdersModel.connection();
}

function startUploadDAta()
{
  console.log('start upload data');
    // להראות לו 7 שדות למלאות 
  alert( "7 fields to fiil");
  

}

module.exports=startUploadDAta;
module.exports=connectionDB;