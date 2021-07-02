const GetUserService = require("../services/GetUserService.js");


class GetUserController{
    async handle(req,res){
        const { user_id } = req.params

        const getUserService = new GetUserService()

        const user = await getUserService.execute(user_id)

        return res.json(user)
    }
}

module.exports = GetUserController