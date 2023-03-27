import "@kodiui/ui/style.css";
import {
  Box,
  Center,
  Cluster,
  FlexBox,
  Split,
  Stack,
  Switcher,
} from "@kodiui/ui";
import { theme } from "./contract.css";

function App() {
  return (
    <div className={theme}>
      Stack
      <Stack>
        FlexBox
        <FlexBox borderRadius="xs" flexWrap="wrap" background="sage5" p="xxl">
          <Element />
          <Element />
          <Element />
        </FlexBox>
        Cluster
        <Cluster background="orange3" p="xxl">
          <Element />
          <Element />
          <Element />
          <Element />
        </Cluster>
        Switcher
        <Switcher background="red5" p="xxl">
          <Element />
          <Element />
          <Element />
          <Element />
        </Switcher>
        Split
        <Split background="green5" p="xxl">
          <Element />
          <Element />
        </Split>
        Cetner
        <Center width={'1/3'}>kita</Center>
      </Stack>
    </div>
  );
}

export default App;

const Element = () => {
  return (
    <Box background={"sky7"} borderColor="yellow8" borderWidth="xl">
      <div style={{ width: "200px" }}>boc</div>
      {/* <Box width="" __width>box</Box> */}
    </Box>
  );
};
