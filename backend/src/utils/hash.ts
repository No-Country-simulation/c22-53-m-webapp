import bcrypt from "bcrypt"

export async function createHash(password:string) {
    const salt=await bcrypt.genSalt(10)
    return await bcrypt.hash(password,salt)
}

export async function comparePasswords(password:string,dbPassword:string) {
    return await bcrypt.compare(password,dbPassword)
}