import { prismaClient } from "../prisma";

class RefusedCommentService{
    async execute(id:unknown){
        const refusedComment = await prismaClient.visita.delete({
            where:{
                id: String(id)
            }
        })
        return refusedComment
    }
}

export { RefusedCommentService }