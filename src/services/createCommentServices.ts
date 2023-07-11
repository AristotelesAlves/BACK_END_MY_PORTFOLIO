import { prismaClient } from "../prisma";
import nodemailer from 'nodemailer';

interface IcreateComment{
    image: string;
    name: string;
    star: number;
}

class createCommentServices{
    async execute({name, image,star}: IcreateComment){
        const createComment = await prismaClient.visita.create({
            data:{
                name,
                image,
                star,
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
            to:'aristotelesaleves39@gmail.com',
            subject:'enviando email',
            html:""
        }).then(() => console.log('mensagem enviado com sucesso')).catch((error)=> console.log(error))

        return createComment
    }
}

export { createCommentServices }