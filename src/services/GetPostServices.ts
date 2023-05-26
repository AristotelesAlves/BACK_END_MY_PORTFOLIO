import { prismaClient } from "../prisma";

class GetPostServices{
    async execute(){
        const Post = await prismaClient.post.findMany({
            orderBy:{
                id: "desc"
            }
        })
        return Post
    }
}

export {GetPostServices}