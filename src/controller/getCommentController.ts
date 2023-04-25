import { Request, Response } from 'express';
import { getCommentsServices } from '../services/getCommentsServices';

interface IqueryRequest{
    pagina: string
    quantidade: string
    busca: string
}

class getCommentsController{
    async handle( Request: Request, Response: Response){
        const {pagina, quantidade, busca} = Request.query as unknown as IqueryRequest
        const services = new getCommentsServices();
        const result = await services.execute({pagina, quantidade, busca});
        return Response.json(result);
    }
}
export { getCommentsController }