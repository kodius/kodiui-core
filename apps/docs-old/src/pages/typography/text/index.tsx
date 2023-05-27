import { Text } from '@/components'
import { Icons, TextWithBackground, SizesAndWeights, Doc } from '@/features/documentation'
import { Cluster } from '@kodiui/ui'
import React from 'react'

const TextPage = () => {
  return (
    <Doc>
      <Doc.Title>Text</Doc.Title>
      <Doc.Block subTitle="Sizes and weights" exampleWithCode={SizesAndWeights()} />
      <Doc.Block
        subTitle="Tones"
        exampleWithCode={
          <Cluster>
            <Text>Neutral</Text>
            <Text tone="brand">Brand</Text>
            <Text tone="brandAccent">Brand accent</Text>
            <Text tone="info">Info</Text>
            <Text tone="success">Success</Text>
            <Text tone="critical">Critical</Text>
            <Text color="orange10">Custom color</Text>
          </Cluster>
        }
      />

      <Doc.Block subTitle="Icons" exampleWithCode={Icons()} />
      <Doc.Block
        canPlay
        subTitle="Alignment"
        exampleWithCode={
          <>
            <Text textAlign="left">Left</Text>
            <Text textAlign="center">Center</Text>
            <Text textAlign="right">Right</Text>
            <Doc.Description>Responsive</Doc.Description>
            <Text textAlign={{ mobile: 'right', tablet: 'left', desktop: 'center' }}>
              Mobile right <br /> Tablet left <br /> Desktop center
            </Text>
          </>
        }
      />

      <Doc.Block subTitle="With background" exampleWithCode={TextWithBackground()} />
    </Doc>
  )
}

export default TextPage
