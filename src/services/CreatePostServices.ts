import { prismaClient } from "../prisma";

interface Ipost{
    img: string;
    bio: string;
    code: string;
    demo: string;
}

class CreatePostServices{
    async execute({bio,code,demo,img}: Ipost){
        const CreatePost = await prismaClient.post.create({
            data:{
                bio: bio,
                code: code,
                demo: demo,
                img: img,
            }
        })
        return CreatePost
    }
}

export { CreatePostServices }