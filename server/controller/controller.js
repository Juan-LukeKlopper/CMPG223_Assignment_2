var Userdb = require('../model/model');

exports.create = (req,res)=>{
    if (!req.body){
        res.status(400).send({ message : "Content can not be empty"});
        return;
    }


    const user = new Userdb({
        name = req.body.name,

    }) };