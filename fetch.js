const express = require("express");
const mongodb = require("mongodb");

const ashokIT = mongodb.MongoClient;

const fetch = express.Router().get("/",(req,res)=>{
    ashokIT.connect("mongodb://localhost:27017/angdmongodb+srv://admin:admin@cluster0.jtqhz.mongodb.net/angdb?retryWrites=true&w=majority",(err,conn)=>{
        if(err) throw err;
        else{
            let db = conn.db("angdb");
            db.collection("product").find().toArray((err,array)=>{
                if(err) throw err;
                else{
                    res.send(array);
                }
            })
        }
    })
    // ashokIT.connect("mongodb+srv://admin:admin@miniprojectdb.nzphu.mongodb.net/angdb?retryWrites=true&w=majority",
})

module.exports = fetch;