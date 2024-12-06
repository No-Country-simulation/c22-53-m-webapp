export type User={
    _id:string
    name:string
    last_name:string
    email:string
    password:string
}

export type UserLoginForm=Pick<User,"email"|"password">

export type UserRegisterForm=Pick<User,"name"|"email"|"last_name"|"password">& {
    password_confirmation:string
    email_confirmation:string
}


