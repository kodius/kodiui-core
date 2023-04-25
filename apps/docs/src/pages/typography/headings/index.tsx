import { Doc, HeadingLevels } from '@/features/documentation'
import React from 'react'

const HeadingsPage = () => {
  return (
    <Doc>
      <Doc.Title>Heading</Doc.Title>
      <Doc.Block subTitle="Levels and weight" exampleWithCode={HeadingLevels()} />
    </Doc>
  )
}

export default HeadingsPage
