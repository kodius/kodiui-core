/* eslint-disable import/no-unresolved */
/* eslint-disable no-restricted-imports */
import { DocBuilder } from '@/features/docBuilder'
import { firstStep } from '@/features/docs-deprecated/newProject/firstStep.docs'
import { secondStep } from '@/features/docs-deprecated/newProject/secondStep.docs'
import { thirdStep } from '@/features/docs-deprecated/newProject/thirdStep.docs'
import React from 'react'

const NewProjectPage = () => {
  return <DocBuilder title="New Project" build={() => [firstStep, secondStep, thirdStep]} />
}

export default NewProjectPage
