import { Request, Response } from 'express';
import { PageCommentService } from '../services/PageCommentService';

interface IqueryRequest{
    pagina: string
    quantidade: string
    busca: string
}

class PageCommentController{
    async handle( req: Request, res: Response){
        const {pagina, quantidade, busca} = req.query as unknown as IqueryRequest
        const services = new PageCommentService();
        const result = await services.execute({pagina, quantidade, busca});
        return res.json(result);
    }
}
export { PageCommentController }