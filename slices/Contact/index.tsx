"use client"

/* eslint-disable jsx-a11y/alt-text */
import { PageSection, PageSectionContent } from "@app//components/common";
import { SectionTitle } from "@app//components/prismic";
import { Button, Input, TextArea } from "@app//components/ui";
import { sendMail } from "@app//lib";
import { zodResolver } from "@hookform/resolvers/zod";
import { Content } from "@prismicio/client";
import { SliceComponentProps } from "@prismicio/react";
import { useState } from "react";
import { SubmitErrorHandler, SubmitHandler, useForm } from "react-hook-form";
import { toast } from 'react-toastify';
import { sendEmailSchema } from "./sendEmailSchema";
import { ContactFormData } from "./types";

/**
 * Props for `Contact`.
 */
export type ContactProps = SliceComponentProps<Content.ContactSlice>;

/**
 * Component for "Contact" Slices.
 */
const Contact = ({ slice }: ContactProps): JSX.Element => {
  const [sendButtonIsLoading, setSendButtonIsLoading] = useState(false)
  const {
    setValue,
    handleSubmit,
  } = useForm<ContactFormData>({
    resolver: zodResolver(sendEmailSchema),
    mode: 'onChange',
    reValidateMode: 'onChange',
    defaultValues: {
      email: '',
      message: '',
      name: '',
      phone: '',
      subject: ''
    }
  })

  const onSubmit: SubmitHandler<ContactFormData> = async (data) => {
    setSendButtonIsLoading(true)
    try {
      await sendMail({
        subject: data.subject,
        body: `
          <h1>Olá, me chamo ${data.name}!</h1>
          <p>${data.message}</p>
          <br>
          <h3>Minhas informações de contato: </h3>
          <p>Telefone: ${data.phone}</p>
          <p>E-mail: ${data.email}</p>
        `
      })
      toast.success('Mensagem enviada com sucesso!')
    } catch (error) {
      toast.error('Ocorreu um erro ao tentar enviar a mensagem, tente novamente')
    } finally {
      setSendButtonIsLoading(false)
    }
  }

  const onError: SubmitErrorHandler<ContactFormData> = (errors) => {
    const errorKeys = Object.keys(errors)
    if (errorKeys.length > 1)
      toast.error<ContactFormData>('Preencha todos os campos antes de enviar a mensagem')
    else
      toast.error<ContactFormData>(errors[errorKeys[0] as keyof ContactFormData]?.message)
  }

  const handleInputChange = (fieldName: keyof ContactFormData, value: string) => {
    setValue(fieldName, value)
  }

  return (
    <section
      data-slice-type={slice.slice_type}
      data-slice-variation={slice.variation}
      className="flex w-full"
      id="contato"
    >
      <PageSection className="bg-neutral-90">
        <PageSectionContent className="gap-16 flex-col">
          <SectionTitle title={slice.primary.title} subtitle={slice.primary.subtitle} />
          <form onSubmit={handleSubmit(onSubmit, onError)}>
            <div className="flex flex-wrap gap-3">
              <Input name="name" placeholder="Nome" onChange={(e: React.ChangeEvent<HTMLInputElement>) => handleInputChange("name", e.target.value)} />
              <Input name="phone" placeholder="Telefone" onChange={(e: React.ChangeEvent<HTMLInputElement>) => handleInputChange("phone", e.target.value)} />
              <Input name="email" placeholder="E-mail" onChange={(e: React.ChangeEvent<HTMLInputElement>) => handleInputChange("email", e.target.value)} />
              <Input name="subject" placeholder="Assunto" onChange={(e: React.ChangeEvent<HTMLInputElement>) => handleInputChange("subject", e.target.value)} />
              <TextArea name="message" placeholder="Mensagem" onChange={(e: React.ChangeEvent<HTMLTextAreaElement>) => handleInputChange("message", e.target.value)} />
              <Button type="submit" loading={sendButtonIsLoading}>{slice.primary.button_text}</Button>
            </div>
          </form>
        </PageSectionContent>
      </PageSection>
    </section >
  );
};

export default Contact;
