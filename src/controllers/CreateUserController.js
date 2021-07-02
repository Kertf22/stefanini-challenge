const CreateUserService = require("../services/CreateUserService.js");

class CreateUserController{
    async handle(req, res){
        // Id não é necessário,será apenas utilizado com intuido de testes
        const { id, name, idade, cargo } = req.body;

        const createUserService = new CreateUserService();


        const data = await createUserService.execute(id,name,idade,cargo)
        return res.json(data)
    }
}

module.exports = CreateUserController