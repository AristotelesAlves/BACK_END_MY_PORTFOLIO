import { prismaClient } from "../prisma"

class getCommentsServices{
    async execute(){
        const comments = await prismaClient.visita.findMany();
        return comments
    }
}
export { getCommentsServices }