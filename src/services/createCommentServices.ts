import { Request, Response } from "express";
import { prismaClient } from "../prisma";
import nodemailer from 'nodemailer';

interface IcreateComment{
    image: string;
    message: string;
    name: string;
    instagram: string
}

class createCommentServices{
    async execute({image, message, name, instagram}: IcreateComment){
        const createComment = await prismaClient.visita.create({
            data:{
                image,
                message,
                name,
                authorize: false,
                instagram,
            }
        })

        const transport = nodemailer.createTransport({
            host: 'smtp.gmail.com',
            port: 465,
            secure: true,
            auth:{
                user:'arystotelys@gmail.com',
                pass:process.env.KEY_SECRET_EMAIL,
            }
        })

        transport.sendMail({
            from:'Aristoteles <arystotelys@gmail.com>',
            to:'aristotelesalves39@gmail.com',
            subject:'enviando email',
            html:`
            <div>
                <img style="width: 80px; height: 80px; border-radius:100%; border:solid 3px; border-color:#00000086; box-shadow: 2px 1px 5px #00000086;"
                    src="${image}" 
                    alt=""
                />
                <div >
                    <h1>
                        ${name}
                    </h1>
                    <p>
                        ${message}
                    </p>
                    <div>
                        <a href="${process.env.API_URL}/refused/${createComment.id}">
                            Negar
                        </a>
                        <a href="${process.env.API_URL}/authorize/${createComment.id}" 
                         style="padding-left:20px;">
                            Autorizar
                        </a>
                    </div>
                </div>
            </div>
            `
        }).then(() => console.log('mensagem enviado com sucesso')).catch((error)=> console.log(error))

        return createComment
    }
}

export { createCommentServices }