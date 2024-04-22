import React, { HtmlHTMLAttributes } from "react";
import { IButtonProps, TButtonVariants } from "./types";

export const Button: React.FC<IButtonProps> = ({ children, variant = 'primary', ...rest }) => {
    const variantsProps: Record<TButtonVariants, HtmlHTMLAttributes<HTMLButtonElement>['className']> = {
        'primary': 'bg-primary text-neutral-100',
        'secondary': 'bg-none border text-primary border-primary'
    }

    return <button type="button" className={`px-6 py-3 font-semibold text-lg rounded-md border hover:opacity-80 transition-opacity transition-transform active:scale-95 ${variantsProps[variant]}`} {...rest}>{children}</button>
}