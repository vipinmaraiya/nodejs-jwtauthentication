// const MongoClient = require('mongodb').MongoClient;
const {MongoClient, ObjectID} = require('mongodb');

MongoClient.connect('mongodb://localhost:27017/TodoApp',(err, db)=>{
    if(err){
        return console.log('Unable to connect to MongoDB server');
    }
    console.log('Connected to MongoDB server');

    // db.collection("Users").find({
    //     _id: new ObjectID('5aa81fb43484c61164e642ad')
    // }).toArray().then((docs)=>{
    //     console.log(docs);
    // });

    // db.collection("Users").find({
    //     location:"Agra"
    // }).toArray().then((docs)=>{
    //     console.log(JSON.stringify(docs, undefined,2));
    // }, (err)=>{
    //     console.log('Unable to fetch Users', err);
    // });

    db.collection("Users").find({
        name:"Vipin"
    }).toArray().then((result)=>{
        console.log(result);
    })

    db.close();
});