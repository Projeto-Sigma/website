/* eslint-disable jsx-a11y/alt-text */
import { createClient } from "@prismicio/client";
import React, { HtmlHTMLAttributes } from "react";
import { FaCaretRight } from "react-icons/fa";
import { repositoryName } from "../../../../prismicio";
import { Image } from "../Image";
import { Link } from "../Link";
import { RichText } from "../RichText";

export const Footer: React.FC<HtmlHTMLAttributes<HTMLElement>> = async ({ ...rest }) => {
    const client = createClient(repositoryName);
    const navigation = await client.getByUID("navigation", "footer");
    const logo = await client.getByUID("logo", "logo");

    return (
        <footer className="w-screen bg-primary pt-14 pb-36" {...rest}>
            <nav className="flex items-start gap-28 w-full m-auto max-w-6xl">
                <Image field={logo.data.logo} className="w-auto h-24" />
                <ul className="list-none flex gap-14">
                    {navigation.data.slices.map((slice) => {
                        return (
                            <li key={slice.id} className="flex flex-col py-2">
                                <RichText field={slice.primary.name} className="text-neutral-90" />
                                <ul className="list-none flex flex-col pl-2">
                                    {slice.items.map((item) => (
                                        <li key={JSON.stringify(item)} className="w-fit">
                                            <Link field={item.child_link} className="flex gap-1 items-center hover:gap-2 transition-all">
                                                <FaCaretRight />
                                                <RichText field={item.child_name} className="text-neutral-90 w-fit" />
                                            </Link>
                                        </li>
                                    ))}
                                </ul>
                            </li>
                        )
                    })}
                </ul>
            </nav>
        </footer>
    )
}