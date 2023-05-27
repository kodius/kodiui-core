import { Button } from '@cli-components/Button'
import { Text } from '@cli-components/Text'
import { DocBlock } from '@features/docs'
import { Cluster, Stack } from '@kodiui/ui'
import { DocTemplate } from '@templates'

export const Component = () => {
  return (
    <DocTemplate>
      <DocBlock
        title="Button Variants"
        description="brand, ghost, soft, transparent"
        exampleWithCode={
          <Cluster>
            <Button>Solid</Button>
            <Button variant="ghost">Ghost</Button>
            <Button variant="soft">Soft</Button>
            <Button variant="transparent">Transparent</Button>
          </Cluster>
        }
      />
      <DocBlock
        title="Button Sizes"
        description="standard, sm"
        exampleWithCode={
          <Stack>
            <Text>Standard size</Text>
            <Cluster>
              <Button>Solid</Button>
              <Button variant="ghost">Ghost</Button>
              <Button variant="soft">Soft</Button>
              <Button variant="transparent">Transparent</Button>
            </Cluster>
            <Text>Small size</Text>
            <Cluster>
              <Button variant="solid" size="sm">
                Solid
              </Button>
              <Button variant="ghost" size="sm">
                Ghost
              </Button>
              <Button variant="soft" size="sm">
                Soft
              </Button>
              <Button variant="transparent" size="sm">
                Transparent
              </Button>
            </Cluster>
          </Stack>
        }
      />
      <DocBlock
        title="Button Variants"
        description="brand, neutral, critical, info, success"
        exampleWithCode={
          <Stack>
            <Text>Brand</Text>
            <Cluster>
              <Button>Solid</Button>
              <Button variant="ghost">Ghost</Button>
              <Button variant="soft">Soft</Button>
              <Button variant="transparent">Transparent</Button>
            </Cluster>
            <Text>Brand Accent</Text>
            <Cluster>
              <Button tone="brandAccent">Solid</Button>
              <Button tone="brandAccent" variant="ghost">
                Ghost
              </Button>
              <Button tone="brandAccent" variant="soft">
                Soft
              </Button>
              <Button tone="brandAccent" variant="transparent">
                Transparent
              </Button>
            </Cluster>
            <Text>Neutral</Text>
            <Cluster>
              <Button tone="neutral">Solid</Button>
              <Button tone="neutral" variant="ghost">
                Ghost
              </Button>
              <Button tone="neutral" variant="soft">
                Soft
              </Button>
              <Button tone="neutral" variant="transparent">
                Transparent
              </Button>
            </Cluster>
            <Text>Info</Text>
            <Cluster>
              <Button tone="info">Solid</Button>
              <Button tone="info" variant="ghost">
                Ghost
              </Button>
              <Button tone="info" variant="soft">
                Soft
              </Button>
              <Button tone="info" variant="transparent">
                Transparent
              </Button>
            </Cluster>
            <Text>Success</Text>
            <Cluster>
              <Button tone="success">Solid</Button>
              <Button tone="success" variant="ghost">
                Ghost
              </Button>
              <Button tone="success" variant="soft">
                Soft
              </Button>
              <Button tone="success" variant="transparent">
                Transparent
              </Button>
            </Cluster>
          </Stack>
        }
      />
      <DocBlock
        title="Button Loading State"
        description="Loading todo"
        exampleWithCode={
          <Cluster>
            <Button loading>Solid</Button>
            <Button variant="ghost" loading>
              Ghost
            </Button>
            <Button variant="soft" loading>
              Soft
            </Button>
            <Button variant="transparent" loading>
              Transparent
            </Button>
          </Cluster>
        }
      />
    </DocTemplate>
  )
}
