const knex = require('../database/connection');
const User = require("../models/User");
const bcrypt =  require("bcrypt")

class UserController {
    async index(){}

    async create(req,res){
        const {name,email, password} = req.body;
        const hash = await bcrypt.hash(password,10)
        const emailExist = await User.emailExist(email);
        console.log(emailExist)



        if(email == undefined){
            res.status(400)
            res.json("Email inválido")
        }else{
            if(emailExist.length <= 0){
                await User.new({name,email,password: hash});
                res.status(200);
                res.json("User cadastrado!");
            }else{
                res.status(401);
                res.json("Email já está sendo usado!");
            }
        }
        
    }

}

module.exports = new UserController();