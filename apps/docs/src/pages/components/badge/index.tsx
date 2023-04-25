import { Badge } from '@/components'
import { Doc } from '@/features/documentation'
import { Cluster } from '@kodiui/ui'
import React from 'react'

const BadgePage = () => {
  return (
    <Doc>
      <Doc.Title>Badge</Doc.Title>
      <Doc.Block
        subTitle="Tone"
        exampleWithCode={
          <Cluster>
            <Badge>Badge</Badge>
            <Badge tone="brandAccent">Badge</Badge>
            <Badge tone="critical">Badge</Badge>
            <Badge tone="info">Badge</Badge>
            <Badge tone="success">Badge</Badge>
          </Cluster>
        }
      />
      <Doc.Block
        subTitle="Medium weight"
        exampleWithCode={
          <Cluster>
            <Badge weight="medium">Badge</Badge>
            <Badge weight="medium" tone="brandAccent">
              Badge
            </Badge>
            <Badge weight="medium" tone="critical">
              Badge
            </Badge>
            <Badge weight="medium" tone="info">
              Badge
            </Badge>
            <Badge weight="medium" tone="success">
              Badge
            </Badge>
          </Cluster>
        }
      />
      <Doc.Block
        subTitle="Strong weight"
        exampleWithCode={
          <Cluster>
            <Badge weight="strong">Badge</Badge>
            <Badge weight="strong" tone="brandAccent">
              Badge
            </Badge>
            <Badge weight="strong" tone="critical">
              Badge
            </Badge>
            <Badge weight="strong" tone="info">
              Badge
            </Badge>
            <Badge weight="strong" tone="success">
              Badge
            </Badge>
          </Cluster>
        }
      />
    </Doc>
  )
}

export default BadgePage
