import { TextLink } from '@/components'
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
            <Box as="p" color="brand">
              <TextLink icon={<AdjustmentsIcon />} href="#">
                Left side
              </TextLink>
            </Box>
            <Box as="p" color="brand">
              <TextLink side="right" icon={<AdjustmentsIcon />} href="#">
                Right side
              </TextLink>
            </Box>
          </Stack>
        }
      />

      <Doc.Block
        subTitle="Colors"
        exampleWithCode={
          <Cluster>
            <Box as="p" color="brand">
              <TextLink href="#">Brand</TextLink>
            </Box>
            <Box as="p" color="brandAccent">
              <TextLink href="#">Brand accent</TextLink>
            </Box>
            <Box as="p" color="neutral">
              <TextLink href="#">Neutral</TextLink>
            </Box>
            <Box as="p" color="orange10">
              <TextLink href="#">Custom color</TextLink>
            </Box>
          </Cluster>
        }
      />

      <Doc.Block subTitle="With Background" exampleWithCode={TextLinkWithBackground()}></Doc.Block>
    </Doc>
  )
}

export default TextLinkPage
