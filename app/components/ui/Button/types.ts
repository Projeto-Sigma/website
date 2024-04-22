import { HtmlHTMLAttributes } from "react"

export type TButtonVariants = 'primary' | 'secondary'

export interface IButtonProps extends HtmlHTMLAttributes<HTMLButtonElement> {
    variant?: TButtonVariants
}