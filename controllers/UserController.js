class UserController {
    async index(){}

    async create(req,res){
        console.log(req.body);
        res.send("Recebendo dados")
    }
}

module.exports = new UserController();