import { BuildElement } from '@/features/docBuilder'
import { Box, Center, Stack } from '@kodiui/ui'

export const centerVariants: BuildElement = {
  label: 'Center Variants',
  example: {
    component: [
      <Stack gap={'sm'} key={Math.random()}>
        <Box height={'20'}>
          <Center
            direction="horizontal"
            borderWidth="sm"
            borderColor={'purple10'}
            borderStyle="solid"
            height={'20'}
          >
            <Box background={'red5'}>Horizontal</Box>
          </Center>
        </Box>

        <Box height={'20'}>
          <Center
            width={'full'}
            borderWidth="sm"
            borderColor={'purple10'}
            borderStyle="solid"
            direction="vertical"
          >
            <Box background={'red5'}>Vertical</Box>
          </Center>
        </Box>
        <Box height={'20'}>
          <Center
            width={'full'}
            borderWidth="sm"
            borderColor={'purple10'}
            borderStyle="solid"
            direction="center"
          >
            <Box background={'red5'}>Center</Box>
          </Center>
        </Box>
      </Stack>,
    ],
  },
  codeSnippet: `<Stack gap={"sm"}>
  <Box height={"20"}>
    <Center
      direction="horizontal"
      borderWidth="sm"
      borderColor={"purple10"}
      borderStyle="solid"
      height={"20"}
    >
      <Box background={"red5"}>Horizontal</Box>
    </Center>
  </Box>

  <Box height={"20"}>
    <Center
      width={"full"}
      borderWidth="sm"
      borderColor={"purple10"}
      borderStyle="solid"
      direction="vertical"
    >
      <Box background={"red5"}>Vertical</Box>
    </Center>
  </Box>
  
  <Box height={"20"}>
    <Center
      width={"full"}
      borderWidth="sm"
      borderColor={"purple10"}
      borderStyle="solid"
      direction="center"
    >
      <Box background={"red5"}>Booth</Box>
    </Center>
  </Box>
</Stack>`,
}
