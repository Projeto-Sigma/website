import React, { HtmlHTMLAttributes } from "react";
import { Spinner } from '..';
import { IButtonProps, TButtonVariants } from "./types";

export const Button: React.FC<IButtonProps> = ({
    children,
    variant = 'primary',
    type = 'button',
    loading = false,
    disabled = false,
    ...rest
}) => {
    const variantsProps: Record<TButtonVariants, HtmlHTMLAttributes<HTMLButtonElement>['className']> = {
        'primary': 'bg-primary text-neutral-100',
        'secondary': 'bg-none border text-primary border-primary'
    }

    return (
        <button
            type={type}
            disabled={disabled || loading}
            className={`
                px-6 
                py-3 
                font-semibold
                text-lg
                rounded-md
                border
                hover:opacity-80
                transition-opacity
                transition-transform
                active:scale-95
                disabled:opacity-50
                disabled:cursor-not-allowed
                disabled:pointer-events-none
                ${variantsProps[variant]}
            `}
            {...rest}
        >
            {loading ? <Spinner /> : children}
        </button>
    )
}