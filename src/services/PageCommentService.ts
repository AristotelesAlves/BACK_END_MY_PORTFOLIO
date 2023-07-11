import { prismaClient } from "../prisma"

interface Icomment{
    pagina: string;
    quantidade: string
}

class PageCommentService{
    async execute({pagina, quantidade}: Icomment){
        const comments = await prismaClient.visita.findMany({
            orderBy:{
                id: "desc"
            },
            skip: (Number(pagina) - 1) * Number(quantidade),
            take: Number(quantidade)
          });
        return comments
    }
}
export { PageCommentService }