import "@kodiui/ui/style.css";
import {
  Box,
  Center,
  Cluster,
  FlexBox,
  Split,
  Stack,
  Switcher,
  Sidebar,
  Typography,
  Animation,
  Icon,
} from "@kodiui/ui";
import { darkTheme, lightTheme } from "./contract.css";
import { FC, PropsWithChildren, useState } from "react";
import { BoxProps } from "@kodiui/ui/dist/components/primitives/Box/Box";

import "./global.css";

function App() {
  const [theme, setTheme] = useState<"dark" | "light">("dark");
  const isLight = theme === "light";
  return (
    <Box
      className={isLight ? lightTheme : darkTheme}
      background={"white12"}
      p="sm"
    >
      <FlexBox justifyContent="flex-end">
        <Box
          as="button"
          p="xs"
          cursor="pointer"
          onClick={() => setTheme(isLight ? "dark" : "light")}
          background="purple4"
          width="1"
          borderRadius="sm"
          color="purple11"
          borderColor="purple11"
          boxShadow="shadow-3"
          position="fixed"
        >
          switch theme
        </Box>
      </FlexBox>
      <Stack>
        <Title>FlexBox</Title>
        <FlexBox borderRadius="xs" flexWrap="wrap" background="sage5" p="2xl">
          <Element />
          <Element />
          <Element />
        </FlexBox>
        <Title>Cluster</Title>
        <Cluster background="orange3" p="2xl">
          <Element />
          <Element />
          <Element />
          <Element />
        </Cluster>
        <Title>Cluster with aspect ratio</Title>
        <Cluster background="orange3" p="2xl">
          <Element width="1/4"> 1/4</Element>
          <Element width="fit"> fit</Element>
          <Element width="fit"> fit </Element>
          <Element width="3/5">3/5</Element>
        </Cluster>
        <Title>Switcher</Title>
        <Switcher background="red5" p="2xl">
          <Element />
          <Element />
          <Element />
          <Element />
        </Switcher>
        <Title>Split</Title>
        <Split background="green5" p="2xl">
          <Element />
          <Element />
        </Split>
        <Title>Cetner</Title>
        <Center background="tomato5" p="2xl">
          <Element />
        </Center>
        <Title>Width - aspect ration & sizes</Title>
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
        <Title>
          <Cluster alignItems="center">
            Animations
            <Typography as="h6">(combine animations)</Typography>
          </Cluster>
        </Title>
        <Center>
          <Cluster>
            <Animation
              animation="fadeIn"
              animationIterationCount="infinite"
              animationDirection="alternate"
              animationDuration="1s"
            >
              <Element>fade in</Element>
            </Animation>
            <Box color="gray12">+</Box>
            <Animation animation="bounce" width="fit">
              <Element>Bounce</Element>
            </Animation>
            <Box color="gray12"> = </Box>
            <Animation
              animation="fadeIn"
              animationIterationCount="infinite"
              animationDirection="alternate"
              animationDuration="1s"
            >
              <Animation animation="bounce" width="fit">
                <Element>Bounce + fade in</Element>
              </Animation>
            </Animation>
          </Cluster>
        </Center>
        <Title>Sidebar</Title>
        <Sidebar>
          <Element width="60">1 element</Element>
          <Element>2 element</Element>
        </Sidebar>
        <Title>Searchbar with Sidebar on right</Title>
        <Sidebar side="right" gap={"0"}>
          <Box
            as="input"
            background="orange5"
            color="orange10"
            borderColor="orange10"
            p="sm"
          />
          <Box
            as="button"
            background="orange5"
            color="orange10"
            borderColor="orange10"
            width="60"
            p="sm"
          >
            Search
          </Box>
        </Sidebar>
        <Title>Typography</Title>
        <Typography color="gray12" type="h1">
          Heading 1
        </Typography>
        <Typography color="gray12" type="h2">
          Heading 2
        </Typography>
        <Typography color="gray12" type="h3">
          Heading 3
        </Typography>
        <Typography color="gray12" type="h4">
          Heading 4
        </Typography>
        <Typography color="gray12" type="h5">
          Heading 5
        </Typography>
        <Typography color="gray12" type="h6">
          Heading 6
        </Typography>
        <Typography color="gray12" type="p">
          Paragprah
        </Typography>
        <Icon>
          <image href={"./assets/tag.svg"} width={"40px"} height={"40px"} />
          Close
        </Icon>
      </Stack>
    </Box>
  );
}

export default App;

const Element: FC<PropsWithChildren & BoxProps> = (props) => {
  return (
    <Box
      background={"sky7"}
      p="xs"
      boxShadow="shadow-2"
      borderRadius="sm"
      {...props}
    >
      <Box color={"sky11"}>{props.children || "Box"}</Box>
    </Box>
  );
};

export const Title: FC<PropsWithChildren> = (props) => {
  return (
    <Typography color="gray12" as="h3">
      {props.children}
    </Typography>
  );
};
