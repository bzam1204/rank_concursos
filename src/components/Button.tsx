import { ReactNode } from "react"

interface ButtonProps {
    type?: "submit" | "button" | "reset"
    onClick?: () => void
    children?: ReactNode
    className?: string
}

export function Button({ type = "button", onClick, children, className }: Readonly<ButtonProps>) {
    return <button type={type} onClick={onClick} className={className}>{children}</button>
}
