import { z } from "zod";
''
export const sendEmailSchema = z.object({
    email: z
        .string({ message: 'O Campo e-mail é obrigatório' })
        .min(1, { message: 'O Campo e-mail é obrigatório' })
        .regex(/^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/, 'O campo de e-mail está com formato errado'),
    message: z
        .string({ message: 'O Campo Mensagem é obrigatório' })
        .min(1, { message: 'O Campo Mensagem é obrigatório' }),
    name: z
        .string({ message: 'O Campo Nome é obrigatório' })
        .min(1, { message: 'O Campo Nome é obrigatório' }),
    subject: z
        .string({ message: 'O Campo Assunto é obrigatório' })
        .min(1, { message: 'O Campo Assunto é obrigatório' }),
    phone: z
        .string({ message: 'O Campo Telefone é obrigatório' })
        .min(1, { message: 'O Campo Telefone é obrigatório' })
})