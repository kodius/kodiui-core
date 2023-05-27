import { Doc } from '@/features/documentation'
import { Cluster } from '@kodiui/ui'

const ClusterPage = () => {
  return (
    <Doc>
      <Doc.Title>Cluster</Doc.Title>

      <Doc.Block
        canPlay
        subTitle="Wrapping children"
        description="Groups of 'inline' elements which can wrap when constrained by width."
        exampleWithCode={
          <Cluster>
            <Doc.Placeholder width={'60'} />
            <Doc.Placeholder width={'16'} />
            <Doc.Placeholder width={'48'} />
            <Doc.Placeholder width={'10'} />
            <Doc.Placeholder width={'56'} />
          </Cluster>
        }
      />
    </Doc>
  )
}

export default ClusterPage
