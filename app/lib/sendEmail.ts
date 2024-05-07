"use server"

import nodemailer from 'nodemailer'

type SendMail = {
    subject: string,
    body: string
}

export async function sendMail({
    body,
    subject,
}: SendMail) {
    const { EMAIL_PASSWORD, EMAIL_USER } = process.env

    const transport = nodemailer.createTransport({
        service: 'gmail',
        auth: {
            user: EMAIL_USER,
            pass: EMAIL_PASSWORD
        }
    })

    try {
        await transport.sendMail({
            from: EMAIL_USER,
            to: EMAIL_USER,
            subject,
            html: body,
        })
    } catch (error) {   
        throw new Error(`Não foi possível enviar a mensagem: ${error}`)
    }
}