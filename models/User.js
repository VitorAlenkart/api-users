const knex =  require("../database/connection");

class User{

    async index(){

    }

    async new(name,email,password){
        try{
            await knex.insert({name:name, email:email, password: password}).table("users")
            console.log("User Cadastrado");
        }catch(err){
            console.log(err);
        }
        
    }

}

module.exports = new User();