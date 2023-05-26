import { prismaClient } from "../prisma"

class DeletePostService{
    async execute(id: number){
        const deletePost = prismaClient.post.delete({
            where:{
                id: id
            }
        })
        return deletePost
    }
}

export { DeletePostService }