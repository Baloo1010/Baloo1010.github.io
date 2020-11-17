const MongoClient = require('mongodb').MongoClient;
const url = "mongodb+srv://your:recipes@yourrecipes.thepu.mongodb.net/<YourRecipes>?authSource=admin&replicaSet=atlas-s0rvpc-shard-0&w=majority&readPreference=primary&retryWrites=true&ssl=true";



  MongoClient.connect(url, function(err, db) {
    if (err) throw err;
    var dbo = db.db("mydb");
    var myobj = { recipe: "apple" };
    dbo.collection("recipes").insertOne(myobj, function(err, res) {
    if (err) throw err;
    console.log("1 document inserted");
    db.close();
  });
});

