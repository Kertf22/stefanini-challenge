const UpdateUserService = require("../services/UpdateUserService.js")


class UpdateUserController {
    async handle(req,res) {
        const { user_id } = req.params;
        const { name, idade, cargo} = req.body;

        const updateUserService = new UpdateUserService();

        const user = await updateUserService.execute(user_id,name,idade,cargo);

        return res.json(user)
    }
}

module.exports = UpdateUserController