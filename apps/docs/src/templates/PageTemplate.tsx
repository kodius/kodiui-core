import { Button, Heading } from "@/components";
import { Box, FlexBox, Stack } from "@kodiui/ui";
import dynamic from "next/dynamic";
import React, { FC, PropsWithChildren, Suspense, useState } from "react";

type Example = {
  label: string;
  example?: JSX.Element;
  code?: string;
};

type PageProps = {
  title: string;
  build: () => Example[];
};

const Syntax = dynamic(() => import("@/components/input/SyntaxHighligter"), {
  ssr: false,
});

export const PageTemplate: FC<PropsWithChildren & PageProps> = (props) => {
  const [isViewCode, setIsViewCode] = useState(false);
  return (
    <Box p={{ mobileExtraSmall: "sm", tablet: "3xl" }}>
      <Box paddingTop={{ mobileExtraSmall: 0, tablet: "3xl" }} />
      <Stack gap="lg">
        <Heading.H1>{props.title}</Heading.H1>
        <Stack>{props.children}</Stack>
        {props.build().map((buil) => {
          return (
            <Stack gap="xs" key={buil.label}>
              <Heading.H3>{buil.label}</Heading.H3>
              {buil.example && (
                <>
                  <Box p="md" background="gray2">
                    <Box p="md" background="white">
                      {buil.example}
                    </Box>
                  </Box>
                  <Suspense fallback={"Loading.."}>
                    {buil.code && isViewCode && <Syntax code={buil.code} />}
                  </Suspense>
                  <FlexBox justifyContent="flex-end">
                    <Button onClick={() => setIsViewCode(!isViewCode)}>
                      View Code
                    </Button>
                  </FlexBox>
                </>
              )}
            </Stack>
          );
        })}
      </Stack>
    </Box>
  );
};
