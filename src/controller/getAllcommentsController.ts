import { Request, Response } from "express";
import { getAllcommentsService } from "../services/getAllcommentsService";

class getAllcommentsController{
    async handle(req: Request,res: Response){
        const services = new getAllcommentsService();
        const result = services.execute();
        return res.json(result)
    }
}
export { getAllcommentsController }