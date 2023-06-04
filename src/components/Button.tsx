import clsx from "clsx"
import { ButtonHTMLAttributes, ReactNode } from "react"

export interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  children: ReactNode
}

export function Button({ children, className, ...props}: ButtonProps) {
  return (
    <button className={clsx(
      'inline-block bg-button rounded-xl px-5 py-2 text-gray-200 transition-colors shadow-sm hover:shadow-gray-500 hover:bg-button/95',
      className,
      )} 
      { ...props }
    >
      {children}
    </button>
  )
}