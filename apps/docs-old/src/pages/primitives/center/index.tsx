import { Doc } from '@/features/documentation'
import { Center, Box } from '@kodiui/ui'

const CenterPage = () => {
  return (
    <Doc>
      <Doc.Title>Center</Doc.Title>
      <Doc.Block
        canPlay
        subTitle="Horizontal"
        exampleWithCode={
          <Box height={'20'}>
            <Center>
              <Doc.Placeholder />
            </Center>
          </Box>
        }
      />
      <Doc.Block
        canPlay
        subTitle="Vertical"
        exampleWithCode={
          <Box height={'20'}>
            <Center direction="vertical">
              <Doc.Placeholder />
            </Center>
          </Box>
        }
      />
      <Doc.Block
        canPlay
        subTitle="Vertical"
        exampleWithCode={
          <Box height={'20'}>
            <Center direction="center">
              <Doc.Placeholder />
            </Center>
          </Box>
        }
      />
    </Doc>
  )
}

export default CenterPage
