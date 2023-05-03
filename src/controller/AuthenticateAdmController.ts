import { Request, Response } from "express";
import { AuthenticateAdmServices } from "../services/AuthenticateAdmServices";

class AuthenticateAdmController{
    async handle(req: Request, res: Response){
        const {name, password} = req.body
        const services = new AuthenticateAdmServices();
        const result = await services.execute({name, password});
        return res.json(result)
    }
}

export { AuthenticateAdmController }