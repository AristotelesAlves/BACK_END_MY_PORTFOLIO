import { Request, Response } from "express";
import { GetPostServices } from "../services/GetPostServices";

class GetPostController {
    async handle(req: Request, res: Response){
        const services = new GetPostServices();
        const result = await services.execute();
        return res.json(result);
    }
}

export { GetPostController }