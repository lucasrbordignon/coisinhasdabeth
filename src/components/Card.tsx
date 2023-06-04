import { Slot } from '@radix-ui/react-slot'
import { ReactNode } from "react"

export interface CardRootProps {
  children: ReactNode
}

export function CardRoot(props: CardRootProps) {
  return (
    <div className='w-64 h-48 px-4 rounded-xl border-2 border-header flex flex-col gap-1 items-center justify-center hover:cursor-auto hover:border-button/70 hover:shadow-black/50 shadow-sm'>
      {props.children}
    </div>
  )
}

CardRoot.displayName = 'Card.Root'

export interface CardIconProps {
  children: ReactNode
}

export function CardIcon(props: CardIconProps) {
  return (
    <Slot className="h-12 w-12 text-header stroke-1">
      { props.children }
    </Slot>
  )
}

CardIcon.displayName = 'Card.Icon'

export interface CardTitleProps {
  children: string
}

export function CardTitle(props: CardTitleProps) {
  return (
    <h3 className='text-xl font-semibold text-header'>
      { props.children }
    </h3>
  )
}

CardTitle.displayName = 'Card.Title'

export interface CardDescriptionProps {
  children: string
}

export function CardDescription(props: CardDescriptionProps) {
  return (
    <p className='text-sm text-center text-fonts'>
      { props.children }
    </p>
  )
}

CardDescription.displayName = 'Card.Description'

export const Card = {
  Root: CardRoot,
  Icon: CardIcon,
  Title: CardTitle,
  Description: CardDescription
}