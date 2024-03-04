import { PropsWithChildren, ReactNode } from 'react'

type Props = PropsWithChildren & {
  modal: ReactNode
}

export default function InterceptingRoutesLayout({ children, modal }: Props) {
  return (
    <div>
      {children}
      {modal}
      <div id="modal-root" />
    </div>
  )
}
