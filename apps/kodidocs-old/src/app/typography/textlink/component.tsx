import { Text } from '@cli-components/Text'
import { TextLink } from '@cli-components/TextLink'
import { DocBlock } from '@features/docs'
import { Cluster, Stack } from '@kodiui/ui'
import { DocTemplate } from '@templates'
import { AppleIcon } from 'lucide-react'

export const Component = () => {
  return (
    <DocTemplate>
      <DocBlock
        title="Example"
        description="This component must be nested within a Text or Heading component"
        exampleWithCode={
          <Text>
            <TextLink href="#">Link</TextLink>
          </Text>
        }
      />
      <DocBlock
        title="Tones"
        description="brand, brandAccent, info, success, critical, custom"
        exampleWithCode={
          <Cluster>
            <Text>
              <TextLink href="#">Neutral</TextLink>
            </Text>
            <Text tone="brand">
              <TextLink href="#">Brand</TextLink>
            </Text>
            <Text tone="brandAccent">
              <TextLink href="#">Brand accent</TextLink>
            </Text>
            <Text tone="info">
              <TextLink href="#">Info</TextLink>
            </Text>
            <Text tone="success">
              <TextLink href="#">Success</TextLink>
            </Text>
            <Text tone="critical">
              <TextLink href="#">Critical</TextLink>
            </Text>
            <Text color="orange10">
              <TextLink href="#">Custom color</TextLink>
            </Text>
          </Cluster>
        }
      />
      <DocBlock
        title="TextLink with icon"
        description="With text size icon size adepts"
        exampleWithCode={
          <Cluster>
            <Text icon={<AppleIcon />} tone="brand" size="xsmall">
              <TextLink href="#">Brand</TextLink>
            </Text>
            <Text icon={<AppleIcon />} tone="brand" size="small">
              <TextLink href="#">Brand</TextLink>
            </Text>
            <Text icon={<AppleIcon />} tone="brand" size="standard">
              <TextLink href="#">Brand</TextLink>
            </Text>
            <Text icon={<AppleIcon />} tone="brand" size="large">
              <TextLink href="#">Brand</TextLink>
            </Text>
          </Cluster>
        }
      />
      <DocBlock
        title="Alignment"
        description="Responsive changes"
        exampleWithCode={
          <Stack>
            <Text textAlign="left">
              <TextLink href="#">Left</TextLink>
            </Text>
            <Text textAlign="center">
              <TextLink href="#">Center</TextLink>
            </Text>
            <Text textAlign="right">
              <TextLink href="#">Right</TextLink>
            </Text>
            <Text textAlign={{ mobile: 'right', tablet: 'left', desktop: 'center' }}>
              <TextLink href="#">
                Mobile right <br /> Tablet left <br /> Desktop center
              </TextLink>
            </Text>
          </Stack>
        }
      />
    </DocTemplate>
  )
}
