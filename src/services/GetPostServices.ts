import { prismaClient } from "../prisma";

class GetPostServices{
    async execute(){
        const Post = await prismaClient.post.findMany()
        return Post
    }
}

export {GetPostServices}