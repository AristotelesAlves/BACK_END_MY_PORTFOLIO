import { Request, Response } from "express";
import { DeletePostService } from "../services/DeletePostService";

class DeletePostController{
    async handle(req:Request, res: Response){
        const { id } = req.params ;
        const services = new DeletePostService();
        const result = await services.execute(Number(id));
        return res.json(result);
    }
}

export { DeletePostController }