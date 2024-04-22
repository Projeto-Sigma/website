import { Link } from "@components/ui";
import Image from "next/image";
import React from "react";
import { IModuleCardProps } from "./types";

export const ModuleCard: React.FC<IModuleCardProps> = ({ description, href, src, title, ...rest }) => {
    return <div className="shadow-base rounded-lg max-w-[360px]" {...rest}>
        <Image src={src} alt="modulo 1" width={0}
            height={0}
            sizes="100vw"
            style={{ width: '100%', height: '198px', objectFit: 'cover', borderTopLeftRadius: '0.5rem', borderTopRightRadius: '0.5rem' }} />
        <div className="flex flex-col p-4 gap-10">
            <div className="flex flex-col gap-4">
                <h3 className="font-normal text-2xl text-neutral-50">
                    {title}
                </h3>
                <p className="font-light text-xl text-neutral-50">
                    {description}
                </p>
            </div>
            <Link href={title}>Donec cursus</Link>
        </div>
    </div>
}