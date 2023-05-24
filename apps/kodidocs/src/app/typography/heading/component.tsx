import { Heading } from '@cli-components/Heading'
import { DocBlock } from '@features/docs'
import { Stack } from '@kodiui/ui'
import { DocTemplate } from '@templates'
import { AppleIcon } from 'lucide-react'

export const Component = () => {
  return (
    <DocTemplate>
      <DocBlock
        title="Levels and Weight"
        description="Todo"
        exampleWithCode={
          <Stack>
            <Stack gap="xxs">
              <Heading level="1">Heading level 1 Regular</Heading>
              <Heading level="1" weight="weak">
                Heading level 1 Weak
              </Heading>
            </Stack>
            <Stack gap="xxs">
              <Heading level="2">Heading level 2 Regular</Heading>
              <Heading level="2" weight="weak">
                Heading level 2 Weak
              </Heading>
            </Stack>
            <Stack gap="xxs">
              <Heading level="3">Heading level 3 Regular</Heading>
              <Heading level="3" weight="weak">
                Heading level 3 Weak
              </Heading>
            </Stack>
            <Stack gap="xxs">
              <Heading level="4">Heading level 4 Regular</Heading>
              <Heading level="4" weight="weak">
                Heading level 4 Weak
              </Heading>
            </Stack>
            <Stack gap="xxs">
              <Heading level="5">Heading level 5 Regular</Heading>
              <Heading level="5" weight="weak">
                Heading level 5 Weak
              </Heading>
            </Stack>
            <Stack gap="xxs">
              <Heading level="6">Heading level 6 Regular</Heading>
              <Heading level="6" weight="weak">
                Heading level 6 Weak
              </Heading>
            </Stack>
          </Stack>
        }
      />
      <DocBlock
        title="Inserting an icon"
        description="For decoration or help distinguishing between headings, an icon can be provided. This will be placed to the left of the text.
In the case of wrapping text, the icon will remain on the left — with the text not wrapping beneath it. If this is not desired, place the icon inside the Heading component, instead of providing it to the icon prop."
        exampleWithCode={
          <Stack>
            <Heading level="1" icon={<AppleIcon />}>
              Heading with an icon
            </Heading>
          </Stack>
        }
      />
    </DocTemplate>
  )
}
