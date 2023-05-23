import { DocBuilder } from '@features/docs'
import { getElementById } from '@features/elements'
import { DefaultTemplate } from '@templates'
import { StackComponent } from './(components)/StackComponent'
import { PropsType } from '@features/documentation'
import { stackProps } from './(props)/stackProps'

interface Props {
  params: { componentId: string }
}

const ComponentPage = async ({ params }: Props) => {
  const element = await getElementById(params.componentId)

  return (
    <DefaultTemplate title={element?.name} description={element?.description}>
      <DocBuilder
        componentTab={getComponentByType(element?.name)}
        propsTab={<div>props</div>}
        props={getPropsByType(element?.name)}
        //@ts-ignore
        historyReleases={element?.historyReleases}
      />
    </DefaultTemplate>
  )
}

export default ComponentPage

const getComponentByType = (componentName: string | null | undefined) => {
  switch (componentName) {
    case 'Stack':
      return <StackComponent />
    default:
      return <>No component</>
  }
}

const getPropsByType = (componentName: string | null | undefined): PropsType => {
  switch (componentName) {
    case 'Stack':
      return stackProps
    default:
      return {}
  }
}
