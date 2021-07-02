const { Router } = require("express");
const CreateUserController = require("./controllers/CreateUserController.js");
const DeleteUserController = require("./controllers/DeleteUserController.js");
const GetUserController = require("./controllers/GetUserService.js");
const ListUsersController = require("./controllers/ListUsersController.js");
const UpdateUserController = require("./controllers/UpdateUserController.js");

const routes = Router()

const createUserController = new CreateUserController();
const getUserController = new GetUserController();
const listUsersController = new ListUsersController();
const deleteUserController = new DeleteUserController()
const updateUserController = new UpdateUserController();

routes.post("/users", createUserController.handle)
routes.get("/users/:user_id", getUserController.handle)
routes.get("/users",listUsersController.handle)
routes.put("/users/:user_id",updateUserController.handle)
routes.delete("/users/:user_id", deleteUserController.handle)


module.exports = routes

