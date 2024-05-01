/* eslint-disable jsx-a11y/alt-text */
import { createClient } from "@prismicio/client";
import React from "react";
import { repositoryName } from "../../../../prismicio";
import { Image } from "../Image";
import { Link } from "../Link";
import { RichText } from "../RichText";

export const Header: React.FC = async () => {
    const client = createClient(repositoryName);
    const navigation = await client.getByUID("navigation", "header");
    const logo = await client.getByUID("logo", "logo");

    return (
        <header className="w-screen sticky bg-primary">
            <nav className="flex items-center justify-between w-full m-auto max-w-6xl">
                <Image field={logo.data.logo} className="w-auto h-16" />
                <ul className="list-none flex">
                    {navigation.data.slices.map((slice) => {
                        return (
                            <li key={slice.id} >
                                <Link field={slice.primary.link} className="bg-primary w-fit px-10 py-8 hover:border-b-4 hover:opacity-90 hover:bg-opacity-95">
                                    <RichText field={slice.primary.name} className="text-neutral-90" />
                                </Link>
                            </li>
                        )
                    })}
                </ul>
            </nav>
        </header>
    )
}