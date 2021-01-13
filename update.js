// upadte 

const express = require("express");
const mongodb = require("mongodb");

const ashokIT = mongodb.MongoClient;

const update = express.Router().put("/", (req, res) => {
    ashokIT.connect("mongodb://localhost:27017/angdmongodb+srv://admin:admin@cluster0.jtqhz.mongodb.net/angdb?retryWrites=true&w=majority", (err, conn) => {
        if (err) throw err;
        else {
            let db = conn.db("angdb");
            db.collection("product")
                .updateOne({ "p_id": req.body.p_id },
                    { $set: { "p_name": req.body.p_name, "p_cost": req.body.p_cost } }, (err, result) => {
                        if (err) throw err;
                        else {
                            res.send({ "update": "successfully" });
                        }
                    });
        }
    });
});
module.exports = update;