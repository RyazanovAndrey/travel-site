import type { ReactNode } from "react"

type TProps = {
  variant: 'fill' | 'border',
  children: ReactNode
}

const Btn = ({ variant, children }: TProps) => {

  const btnStyle = (variant: string) => {
    if (variant == 'fill') return 'fill-btn'
    if (variant == 'border') return 'border-btn'
  }

  return (
    <button className={btnStyle(variant)}>
      {children}
    </button>
  )
}

export default Btn