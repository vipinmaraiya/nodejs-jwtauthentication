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

    // db.collection("Users").find({
    //     name:"Vipin"
    // }).toArray().then((result)=>{
    //     console.log(result);
    // })


    //deleteMany
    // db.collection("Users").deleteMany({
    //     name:"Vipin"
    // }).then((result)=>{
    //     console.log(result);
    // })


    //deleteone
    // db.collection("Users").deleteOne({
    //     name:"Vipin"
    // }).then((result)=>{
    //     console.log(result);
    // })

    //findoneanddelete
    // db.collection("Users").findOneAndDelete({
    //     name:"ZVipin2"
    // }).then((result)=>{
    //     console.log(result);
    // });

    //findOneAndUpdate
    // db.collection("Users").findOneAndUpdate({
    //     _id:new ObjectID("5aa82199a64e1b06ec71146e")
    // },{
    //     name:"Vipin"
    // },{
    //     returnOriginal:false
    // }).then((result)=>{
    //     console.log(result);
    // })

    db.collection("Users").findOneAndUpdate({
        _id:new ObjectID("5aa82199a64e1b06ec71146e")
    },{
        $set:{
            name:"Vipin2"
        },
        $inc:{
            age:2
        }
    },{
        returnOriginal:false
    }).then((result)=>{
        console.log(result);
    })

    db.close();
});