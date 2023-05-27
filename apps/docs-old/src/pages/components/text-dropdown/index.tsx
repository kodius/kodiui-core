import { TextDropDownBasic, Doc } from '@/features/documentation'
import React from 'react'

const TextDropdownPage = () => {
  return (
    <Doc>
      <Doc.Block subTitle="Text Dropdown" exampleWithCode={TextDropDownBasic()} />
    </Doc>
  )
}

export default TextDropdownPage
