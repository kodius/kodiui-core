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
import { FC, PropsWithChildren } from "react";
import { BoxProps } from "@kodiui/ui/dist/components/primitives/Box/Box";

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
        <Center background="tomato5" p="xxl">
          <Element />
        </Center>
        Width - aspect ration & sizes 
        <FlexBox>
          <Box width="2/6" textAlign="center">
            <Element background="purple5">width 2/6</Element>
          </Box>
          <Box width="1/6" textAlign="center">
            <Element>width 1/6</Element>
          </Box>
        </FlexBox>
        <Box width="3/6" textAlign="center">
          <Element background="sand6">width 3/6</Element>
        </Box>
        <Box width="full">
          <Element>full</Element>
        </Box>
      </Stack>
    </div>
  );
}

export default App;

const Element: FC<PropsWithChildren & BoxProps> = (props) => {
  return (
    <Box background={"sky7"} p="xs" boxShadow="shadow-2" {...props}>
      <Box>{props.children || "Box"}</Box>
    </Box>
  );
};
