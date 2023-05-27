import { Divider } from '@/components'
import { Doc } from '@/features/documentation'
import { Stack } from '@kodiui/ui'
import React from 'react'

const DividerPage = () => {
  return (
    <Doc>
      <Doc.Block
        subTitle=""
        exampleWithCode={
          <Stack gap="3xl">
            <Stack>
              <Divider />
              <Divider weight="md" />
              <Divider weight="lg" />
            </Stack>
            <Stack>
              <Divider tone="light" />
              <Divider tone="neutral" />
              <Divider tone="dark" />
            </Stack>
            <Stack>
              <Divider weight="md" tone="light" />
              <Divider weight="md" tone="neutral" />
              <Divider weight="md" tone="dark" />
            </Stack>
            <Stack>
              <Divider weight="lg" tone="light" />
              <Divider weight="lg" tone="neutral" />
              <Divider weight="lg" tone="dark" />
            </Stack>
          </Stack>
        }
      />
    </Doc>
  )
}

export default DividerPage
