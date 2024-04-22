import React, { HtmlHTMLAttributes } from "react"

export const Footer: React.FC<HtmlHTMLAttributes<HTMLElement>> = ({ ...rest }) => {
    return <footer className="w-screen h-96 bg-primary" {...rest}></footer>
}