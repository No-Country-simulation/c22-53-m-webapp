export type User={
    name:string,
    last_name:string,
    email:string,
    password:string
}

export type UserLoginForm=Pick<User,"email"|"password">


