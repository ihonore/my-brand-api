import { uploadFile } from "../helpers/fileUpload.js"
import { generateToken } from "../helpers/jwtFunctions.js"
import { comparePassword, hashPassword } from "../helpers/passwordSecurity.js"
import { userExist, createUser, updateUser } from "../services/userServices.js"

export class UserControllers {
    async register(req, res) {
        try {
            const exist = await userExist(req.body.email)
            if (exist) {
                res.status(409).json({ status: 409, message: "User with this email already exist." })
            } else {
                if (req.file) {
                    req.body.picture = await uploadFile(req)
                } else {
                    req.body.picture = 'https://www.pngkey.com/png/detail/115-1150152_default-profile-picture-avatar-png-green.png'
                }
                const user = {
                    username: req.body.username,
                    email: req.body.email,
                    password: await hashPassword(req.body.password),
                    picture: req.body.picture,
                }
                const createdUser = await createUser(user)
                res.status(201).json({ status: 201, message: "user registered successfully", user: createdUser })
            }
        } catch (error) {
            res.status(500).json({message: "Internal server error!"})
        }
    }
    async login(req, res) {
        try {
            const exist = await userExist(req.body.email)
            if (exist) {
                const valid = await comparePassword(req.body.password, exist.password)
                if (!valid) {
                    res.status(403).json({ status: 403, message: "Invalid credentials" })
                }
                const token = await generateToken({ id: exist._id })
                res.status(200).json({ status: 200, message: "Logged in successfully", accessToken: token })
            } else {
                res.status(403).json({ status: 403, message: "Invalid credentials" })
            }

        } catch (error) {
            res.status(500).json({message: "Internal server error!"})
        }
    }

    async updateUserInfo(req,res){
        try {
            
                if (req.file) {
                    req.body.picture = await uploadFile(req)
                }
                if(req.body.password){
                    var hashP= hashPassword(req.body.password)
                }
                const user = {
                    username: req.body.username,
                    email: req.body.email,
                    password: hashP,
                    picture: req.body.picture,
                }
               
                const updatedUser = await updateUser(req.params.email,user)
                res.status(201).json({ status: 201, message: "user info updated successfully", user: updatedUser })

            }
         catch (error) {
            res.status(500).json({message: "Internal server error!"})
        }
    }
}