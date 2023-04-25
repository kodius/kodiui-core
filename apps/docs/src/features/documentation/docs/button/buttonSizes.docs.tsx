import { Button } from '@/components'
import { Doc } from '@/features/documentation'
import { Stack, Cluster } from '@kodiui/ui'

export const ButtonSizes = () => {
  return (
    <Stack>
      <Stack gap="xs">
        <Doc.Description>Basic size</Doc.Description>
        <Cluster>
          <Button>Solid</Button>
          <Button variant="ghost">Ghost</Button>
          <Button variant="soft">Soft</Button>
          <Button variant="transparent">Transparent</Button>
        </Cluster>
      </Stack>

      <Stack gap="xs">
        <Doc.Description> Small size</Doc.Description>
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
    </Stack>
  )
}

export default ButtonSizes
