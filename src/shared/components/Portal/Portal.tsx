import { createPortal } from 'react-dom'

interface IPortal {
  renderIn?: Element
}

export const Portal: React.FC<React.PropsWithChildren<IPortal>> = ({
  children,
  renderIn = document.body
}) => {
  return createPortal(children, renderIn)
}
