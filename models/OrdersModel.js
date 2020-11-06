//כאן להציג את כל הנתונים של ההזמנות ולייצא אותם לADMIN.EJS
var mongodb = require('mongodb');
// var mongoose=require('mongoose');
var MongoClient = require('mongodb').MongoClient;
var url = "mongodb://mosheabrams:<password>@cluster0-shard-00-00.xcbdi.mongodb.net:27017,cluster0-shard-00-01.xcbdi.mongodb.net:27017,cluster0-shard-00-02.xcbdi.mongodb.net:27017/<dbname>?ssl=true&replicaSet=atlas-4lrbh7-shard-0&authSource=admin&retryWrites=true&w=majority";

function connection()
{
    const client = new MongoClient(uri);
    const result =  client.db("nadir").collection("books");
    if (result.connect==true)
    {
        console.log('connection to DB was good!!')
    }
    return result.connect();
}
function connectionAndFound()
{
    MongoClient.connect(url,{useNewUrlParser: true, useUnifiedTopology: true}, function(err, db) {
        if (err) throw err;
        var dbo = db.db("nadir");
        dbo.collection("books").find({}).toArray(function(err, result) {
          if (err) throw err;
          console.log(result);
          db.close();
        });
    });
}
module.exports=connectionAndFound
module.exports=connection
