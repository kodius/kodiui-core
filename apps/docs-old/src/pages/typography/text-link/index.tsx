import { Text, TextLink } from '@/components'
import { AdjustmentsIcon } from '@/features/configurator'
import { TextLinkWithBackground, Doc } from '@/features/documentation'
import { Box, Cluster, Stack } from '@kodiui/ui'
import React from 'react'

const TextLinkPage = () => {
  return (
    <Doc>
      <Doc.Title>TextLink</Doc.Title>
      <Doc.Block
        subTitle=""
        exampleWithCode={
          <Box as="p" color="brand">
            <TextLink href="#">brand</TextLink>
          </Box>
        }
      />

      <Doc.Block
        subTitle="Note"
        exampleWithCode={
          <Doc.Description>
            This component must be nested within a Text or Heading component.
          </Doc.Description>
        }
      />

      <Doc.Block
        subTitle="Icons"
        exampleWithCode={
          <Stack>
            <Text tone="brand" icon={<AdjustmentsIcon />}>
              <TextLink href="#">Left side</TextLink>
            </Text>
            <Text tone="brand" icon={<AdjustmentsIcon />}>
              <TextLink href="#">Right side</TextLink>
            </Text>
          </Stack>
        }
      />

      <Doc.Block
        subTitle="Colors"
        exampleWithCode={
          <Cluster>
            <Text tone="brand">
              <TextLink href="#">Brand</TextLink>
            </Text>
            <Text tone="brandAccent">
              <TextLink href="#">Brand accent</TextLink>
            </Text>
            <Text tone="neutral">
              <TextLink href="#">Neutral</TextLink>
            </Text>
            <Text color="orange8">
              <TextLink href="#">Custom color</TextLink>
            </Text>
          </Cluster>
        }
      />

      <Doc.Block subTitle="With Background" exampleWithCode={TextLinkWithBackground()}></Doc.Block>
    </Doc>
  )
}

export default TextLinkPage
