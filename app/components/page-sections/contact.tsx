"use client"

import { Button, Input, TextArea } from "@components/ui";
import Image from "next/image";
import React from "react";
import { PageSection, SectionTitle } from "../common";

export const Contact: React.FC = () => {
    const handleSubmit = (e: React.SyntheticEvent) => {
        e.preventDefault()

        const target = e.target as typeof e.target & {
            email: { value: string }
            name: { value: string }
            phone: { value: string }
            message: { value: string }
        };

        console.log(target.email.value)
        console.log(target.name.value)
        console.log(target.phone.value)
        console.log(target.message.value)
    }

    return (
        <div className="flex">
            <PageSection className="bg-neutral-90 px-36 justify-end">
                <div className="flex flex-col gap-16 max-w-2xl">
                    <SectionTitle description="Pellentesque pulvinar, arcu ac suscipit pellentesque">
                        Cras quis laoreet
                    </SectionTitle>
                    <form onSubmit={handleSubmit}>
                        <div className="flex flex-wrap gap-3">
                            <Input placeholder="Nome" name="name" />
                            <Input placeholder="Telefone" name="phone" />
                            <Input placeholder="E-mail" name="email" />
                            <TextArea placeholder="Mensagem" name="message" />
                            <Button type="submit">Enviar</Button>
                        </div>
                    </form>
                </div>
            </PageSection >
            <div>
                <Image src="/preview.png" alt="Imagem de Contato" height={0} width={0} sizes="100vw" style={{ height: '100%', width: '100%', objectFit: 'cover' }} />
            </div>
        </div>
    )
}