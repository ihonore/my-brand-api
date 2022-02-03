import bcrypt from 'bcrypt'

const salt = bcrypt.genSaltSync(10, 'b')

export const hashPassword = (plainPassword) => {
    const hash = bcrypt.hashSync(plainPassword, salt)
    return hash
}

export const comparePassword = async (plainPassword, hash) => {
    const result = bcrypt.compareSync(plainPassword, hash)
    return result
}