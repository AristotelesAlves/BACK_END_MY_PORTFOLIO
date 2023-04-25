import { prismaClient } from "../prisma"

interface Icomment{
    busca: string;
    pagina: string;
    quantidade: string
}

class getCommentsServices{
    async execute({pagina, quantidade, busca}: Icomment){
        const comments = await prismaClient.visita.findMany({
            skip: (Number(pagina) - 1) * Number(quantidade),
            take: Number(quantidade)
          });
        return comments
    }
}
export { getCommentsServices }