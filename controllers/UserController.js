const knex = require('../database/connection');
const User = require("../models/User");

class UserController {
    async index(){}

    async create(req,res){
        const {name,email, password} = req.body;
        await User.new(name,email,password);
        res.json("User cadastrado!")
    }
}

module.exports = new UserController();