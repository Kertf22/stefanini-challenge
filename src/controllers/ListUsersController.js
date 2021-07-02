const ListUsersService = require("../services/ListUsersService.js")


class ListUsersController{

    async handle(req,res){
        const listUserService = new ListUsersService()

        const users = await listUserService.execute()

        return res.json(users)
    }
}

module.exports = ListUsersController