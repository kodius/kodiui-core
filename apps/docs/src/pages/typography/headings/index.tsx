import { Doc, HeadingLevels } from '@/features/documentation'
import React from 'react'

const HeadingsPage = () => {
  return (
    <Doc downloadable>
      <Doc.Title>Heading</Doc.Title>
      <Doc.Block subTitle="Levels and weight" exampleWithCode={HeadingLevels()} />
    </Doc>
  )
}

export default HeadingsPage

export const headingCodeSnippet = `<Heading level="h1">Heading</Heading>`
