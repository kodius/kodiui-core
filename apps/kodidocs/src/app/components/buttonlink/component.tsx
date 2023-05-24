import { ButtonLink } from '@cli-components/ButtonLink'
import { DocBlock } from '@features/docs'
import { Cluster } from '@kodiui/ui'
import { DocTemplate } from '@templates'

export const Component = () => {
  return (
    <DocTemplate>
      <DocBlock
        title="Exmaple"
        description="Uncontrolled, controlled input"
        exampleWithCode={
          <Cluster>
            <ButtonLink href="#">Solid</ButtonLink>
            <ButtonLink variant="soft" href="#">
              Soft
            </ButtonLink>
            <ButtonLink variant="ghost" href="#">
              Ghost
            </ButtonLink>
            <ButtonLink variant="transparent" href="#">
              Transparent
            </ButtonLink>
          </Cluster>
        }
      />
    </DocTemplate>
  )
}
