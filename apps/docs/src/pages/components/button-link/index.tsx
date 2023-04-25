import { ButtonLinkBase, Doc } from '@/features/documentation'
import React from 'react'

const ButtonLinkPage = () => {
  return (
    <Doc downloadable>
      <Doc.Title>ButtonLink</Doc.Title>
      <Doc.Block subTitle="Looks like a button but its a link" exampleWithCode={ButtonLinkBase()} />
    </Doc>
  )
}

export default ButtonLinkPage
