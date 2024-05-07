import { HtmlHTMLAttributes } from "react"

export type TButtonVariants = 'primary' | 'secondary'

type TButtonTypes = 'button' | 'submit'
export interface IButtonProps extends HtmlHTMLAttributes<HTMLButtonElement> {
    variant?: TButtonVariants
    type?: TButtonTypes
    loading?: boolean
    disabled?: boolean
}