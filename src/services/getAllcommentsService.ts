import { prismaClient } from "../prisma";

class getAllcommentsService{
    async execute(){
        const allComment = await prismaClient.visita.findMany({
            where:{
                authorize: true
            }
            
        })
        return allComment
    }
}

export { getAllcommentsService }