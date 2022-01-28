import { createUserService, getAllUsersService, getOneUserService, updateUserService, deleteUserService }
from "../services/userServices.js"
export class UserController {
    async createUser(req, res) {
        try {
            const data = {
                name: req.body.name,
                email: req.body.email,
                photo: req.body.photo,
                password: req.body.password
            }
            console.log(data)
            const user = await createUserService(data)
            res.status(200).json({ status: 200, message: "User created successfully", data: user })
        } catch (error) {
            console.log(error)
        }
    }
    async getAllUsers(req, res) {
        try {
            const users = await getAllUsersService()
            res.status(200).json({ status: 200, message: "These are all the users", data: users })
        } catch (error) {
            console.log(error)
        }
    }
    async getUser(req, res) {
        try {
            const user = await getOneUserService(req.params.id)
            res.status(200).json({ status: 200, message: "user found", data: user })
        } catch (error) {
            console.log(error)
        }
    }
    async updateUser(req, res) {
        try {
            const userUpdate={
                email: req.body.email,
                photo: req.body.photo,
                password: req.body.password
            }
         const user = await updateUserService(req.params.id,userUpdate)
         res.status(200).json({ status: 200, message: "user updated successfully", data: user })
        } 
        catch (error) {
            res.send(error.message)
            console.log(error)
        }

     }
    async deleteUser(req, res) { 
        try{
            const deleteMessage = await deleteUserService(req.params.id);
            res.status(200).json({status:200, message: deleteMessage})
        }
        catch (error){
            res.send(error.message)
            console.log(error)
        }
    }
}