import { Request, Response } from "express";
import { prismaClient } from "../prisma";


interface IcreateComment{
    image: string;
    message: string;
    name: string;
}

class createCommentServices{
    async execute({image, message, name}: IcreateComment){
        const createComment = await prismaClient.visita.create({
            data:{
                image,
                message,
                name,
            }
        })
        return createComment
    }
}

export { createCommentServices }