import { prismaClient } from "../prisma"
import { sign } from "jsonwebtoken"

interface IAuthenticateAdm{
    name: string;
    password: string;
}


class AuthenticateAdmServices{
    async execute({name, password}: IAuthenticateAdm){
        
        const user = await prismaClient.adm.findUnique({
            where:{
                name: name
            }
        })

        if(!user){
            return ('Usuário não encontrado!')
        }

        const passwordMatch = password == user.name

        if (!passwordMatch){
            return ('Senha incorreta')
        }

        const token = sign({
            user:{
                nome: user.name,
                senha: user.password,
                id: user.id,
            }
        },
        process.env.JWT_SECRET_KEY,
        {
          subject: user.id,
          expiresIn: "1d",  
        }) 
        
        return { token, user}
    }
}

export { AuthenticateAdmServices }