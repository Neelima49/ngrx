const express = require("express");
const mongodb = require("mongodb");

const ashokIT = mongodb.MongoClient;

const insert = express.Router().post("/", (req, res) => {
    // ashokIT.connect("mongodb+srv://admin:admin@miniprojectdb.nzphu.mongodb.net/angdb?retryWrites=true&w=majority", (err, conn) => {
    ashokIT.connect("mongodb://localhost:27017/angdmongodb+srv://admin:admin@cluster0.jtqhz.mongodb.net/angdb?retryWrites=true&w=majority", (err, conn) => {

        if (err) throw err;
        else {
            let db = conn.db("angdb");
            db.collection("product").insertOne({
                "p_id": req.body.p_id,
                "p_name": req.body.p_name,
                "p_cost": req.body.p_cost
            }, (err, result) => {
                if (err) throw err;
                else {
                    res.send({ insert: "success" });
                }
            });
        }
    });
});
module.exports = insert;