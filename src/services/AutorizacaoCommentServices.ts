import { prismaClient } from "../prisma";

class AuthorizeCommentServices{
    async execute(id:string){
        const AuthorizeComment = await prismaClient.visita.update({
            where: {
                id: id
            },
            data:{
                authorize: true
            }
        })
        return AuthorizeComment
    }
}
export { AuthorizeCommentServices }