import { Request, Response } from "express";
import { prismaClient } from "../prisma";
import nodemailer from 'nodemailer';
import fs from 'fs';
import handlebars from 'handlebars';

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
                name
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
                        <a href="https://www.google.com/search?q=html+css+outlook+email&oq=html+css+outlook&aqs=edge.0.0i19i512j69i57j0i15i19i22i30j0i19i22i30l6.6521j0j4&sourceid=chrome&ie=UTF-8">Negar</a>
                        <a href="https://stackoverflow.com/questions/5861714/formatting-html-email-for-outlook" style="padding-left:10px;">Autorizar</a>
                    </div>
                </div>
            </div>
            `
        }).then(() => console.log('mensagem enviado com sucesso')).catch((error)=> console.log(error))

        return createComment
    }
}

export { createCommentServices }