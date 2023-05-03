import * as React from 'react'
import { ProgressBar } from '@/components/ProgressBar/ProgressBar'
import { Doc } from '@/features/documentation'

const ProgressBarPage = () => {
  return (
    <Doc>
      <ProgressBar value={50} />
    </Doc>
  )
}

export default ProgressBarPage
