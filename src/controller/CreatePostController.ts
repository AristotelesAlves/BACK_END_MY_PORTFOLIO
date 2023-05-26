import { Request, Response } from "express";
import { CreatePostServices } from "../services/CreatePostServices";

class CreatePostController{
    async handle(req:Request, res: Response){
        const { bio, code, demo, img } = req.body
        const services = new CreatePostServices();
        const result = await services.execute({bio,code,demo,img})
        return res.json(result)
    }
}


export { CreatePostController }