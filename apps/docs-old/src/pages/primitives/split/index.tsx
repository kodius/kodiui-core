import { Doc } from '@/features/documentation'
import { Split } from '@kodiui/ui'

const SplitPage = () => {
  return (
    <Doc>
      <Doc.Title>Split</Doc.Title>

      <Doc.Block
        canPlay
        subTitle="Separates the passed children by splitting them apart as much as
        possible."
        exampleWithCode={
          <Split>
            <Doc.Placeholder />
            <Doc.Placeholder />
          </Split>
        }
      />
    </Doc>
  )
}

export default SplitPage
