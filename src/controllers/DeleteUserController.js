const DeleteUserService = require("../services/DeleteUserService.js");


class DeleteUserController{
    async handle(req,res){
        const { user_id } = req.params

        const deleteUserService = new DeleteUserService();

        const user = await deleteUserService.execute(user_id)

        return res.json(user)
    }
}

module.exports = DeleteUserController