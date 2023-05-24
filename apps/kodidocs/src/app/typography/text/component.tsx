import { Text } from '@cli-components/Text'
import { DocBlock } from '@features/docs'
import { Cluster, Stack } from '@kodiui/ui'
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
              <Text size="large">Text large size, regular weight</Text>
              <Text size="large" weight="medium">
                Text large size, medium weight
              </Text>
              <Text size="large" weight="strong">
                Text large size, strong weight
              </Text>
            </Stack>
            <Stack gap="xxs">
              <Text>Text regular size, regular weight</Text>
              <Text weight="medium">Text regular size, medium weight</Text>
              <Text weight="strong">Text regular size, strong weight</Text>
            </Stack>
            <Stack gap="xxs">
              <Text size="small">Text small size, regular weight</Text>
              <Text size="small" weight="medium">
                Text small size, medium weight
              </Text>
              <Text size="small" weight="strong">
                Text small size, strong weight
              </Text>
            </Stack>
            <Stack gap="xxs">
              <Text size="xsmall">Text xsmall size, regular weight</Text>
              <Text size="xsmall" weight="medium">
                Text xsmall size, medium weight
              </Text>
              <Text size="xsmall" weight="strong">
                Text xsmall size, strong weight
              </Text>
            </Stack>
          </Stack>
        }
      />
      <DocBlock
        title="Tones"
        description="brand, brandAccent, info, success, critical, custom"
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
      <DocBlock
        title="Text with icon"
        description="With text size icon size adepts"
        exampleWithCode={
          <Cluster>
            <Text icon={<AppleIcon />} tone="brand" size="xsmall">
              Brand
            </Text>
            <Text icon={<AppleIcon />} tone="brand" size="small">
              Brand
            </Text>
            <Text icon={<AppleIcon />} tone="brand" size="standard">
              Brand
            </Text>
            <Text icon={<AppleIcon />} tone="brand" size="large">
              Brand
            </Text>
          </Cluster>
        }
      />
      <DocBlock
        title="Alignment"
        description="Responsive changes"
        exampleWithCode={
          <Stack>
            <Text textAlign="left">Left</Text>
            <Text textAlign="center">Center</Text>
            <Text textAlign="right">Right</Text>
            <Text textAlign={{ mobile: 'right', tablet: 'left', desktop: 'center' }}>
              Mobile right <br /> Tablet left <br /> Desktop center
            </Text>
          </Stack>
        }
      />
    </DocTemplate>
  )
}
