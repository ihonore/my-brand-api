import User from "../models/user.js"

export const userExist = async (email) => {
    const user = await User.findOne({ email: email })
    if (user) {
        return user
    } else {
        return false
    }
}

export const createUser = async (user) => {
    const userCreated = await User(user)
    userCreated.save()
    return userCreated
}

export const updateUser = async (email,updates) =>{
    const user = await User.findOneAndUpdate({ email: email }, updates, { new: true });

    return ({username:user.username})
}

export const deleteUserService =async (email) =>{
    const deletedUser = await User.findOneAndDelete({email:email})
    if(deletedUser){
        return "User deleted successfully"
    } else{
        return "User does not exists"
    }
}