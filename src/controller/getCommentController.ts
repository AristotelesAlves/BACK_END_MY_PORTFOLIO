import { Request, Response } from 'express';
import { getCommentsServices } from '../services/getCommentsServices';

class getCommentsController{
    async handle( Request: Request, Response: Response){
        const services = new getCommentsServices();
        const result = await services.execute();
        return Response.json(result);
    }
}
export { getCommentsController }