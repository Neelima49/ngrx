const express = require("express");
const mongodb = require("mongodb");

const ashokIT = mongodb.MongoClient;

const remove = express.Router().delete("/", (req, res) => {
    // ashokIT.connect("mongodb+srv://admin:admin@miniprojectdb.nzphu.mongodb.net/angdb?retryWrites=true&w=majority",
    ashokIT.connect("mongodb://localhost:27017/angdmongodb+srv://admin:admin@cluster0.jtqhz.mongodb.net/angdb?retryWrites=true&w=majority",
        (err, conn) => {
            if (err) throw err;
            else {
                let db = conn.db("angdb");
                db.collection("product").deleteOne({
                    "p_id": req.body.p_id
                }, (err, result) => {
                    if (err) throw err;
                    else {
                        res.send({ "delete": "success" });
                    }
                });
            }
        });
});

module.exports = remove;
