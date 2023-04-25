import { TextDropDownBasic, Doc } from '@/features/documentation'
import React from 'react'

const TextDropdownPage = () => {
  return (
    <Doc downloadable>
      <Doc.Block subTitle="Text Dropdown" exampleWithCode={TextDropDownBasic()} />
    </Doc>
  )
}

export default TextDropdownPage
