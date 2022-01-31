import User from "../models/user.js";

export const createUserService = async (data) => {
    const user = await User(data)
    user.save()
    return user
}

export const getAllUsersService = async () => {
    const users = await User.find()
    return users
}

export const getOneUserService = async (id) => {
    const user = await User.findOne({ _id: id })
    return user
}

export const updateUserService =async (id,userUpdate) =>{
    const updatedUser = await User.findOneAndUpdate({ _id: id }, userUpdate, { new: true });
    return updatedUser
    
}

export const deleteUserService =async (id) =>{
    const deletedUser = await User.findByIdAndDelete(id)
    if(deletedUser){
        return "User deleted successfully"
    } else{
        return "User does not exists"
    }
    
}
