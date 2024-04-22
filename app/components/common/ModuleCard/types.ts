import { HtmlHTMLAttributes } from "react"

export interface IModuleCardProps extends HtmlHTMLAttributes<HTMLDivElement> {
    src: string
    title: string
    description: string
    href: string
}