const knex =  require("../database/connection");

class User{

    async index(){

    }

    async new(data){
        try{
            await knex.insert({name:data.name, email:data.email, password: data.password}).table("users")
            console.log("User Cadastrado");
        }catch(err){
            console.log(err);
        }
    }

    async emailExist(email) {
        try{
            const result = await knex.select("*").table("users").where({email: email})
            return result;
        }catch(err){
            console.log(err)
        }
    }

}

module.exports = new User();