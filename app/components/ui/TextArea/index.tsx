import React from "react";
import { ITextAreaProps } from "./types";

export const TextArea: React.FC<ITextAreaProps> = ({ name, ...rest }) => {
    return (
        <div className="flex flex-col gap-1 w-full">
            <textarea name={name} className="px-4 py-3 w-full bg-neutral-100 border border-neutral-80 rounded-md text-lg font-normal text-neutral-0 placeholder:text-neutral-50 hover:bg-neutral-90 focus:outline-primary" {...rest} />
        </div>
    )
}