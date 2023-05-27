import React, { FC, PropsWithChildren } from 'react'
import { dividerRecipe, DividerVariants } from './divider.css'

type Props = PropsWithChildren & DividerVariants

export const Divider: FC<Props> = (props) => {
  return <hr className={dividerRecipe(props)} {...props} />
}
