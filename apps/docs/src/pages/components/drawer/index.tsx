import { Button, Drawer, Text } from "@/components";
import { Doc } from "@/features/documentation";
import { Cluster, Stack } from "@kodiui/ui";
import React, { useState } from "react";

const DrawerPage = () => {
  const [drawerStates, setDrawerStates] = useState({
    drawer: false,
    sm: false,
    md: false,
    lg: false,
    left: false,
    right: false,
    nested1: false,
    nested2: false,
    nested3: false,
  });

  type DrawerTypes = keyof typeof drawerStates;

  const setDrawer = (type: DrawerTypes, state: boolean) => {
    setDrawerStates({
      ...drawerStates,
      [type]: state,
    });
  };

  return (
    <Doc>
      <Doc.Title>Drawer</Doc.Title>
      <Doc.Example>
        <Button onClick={() => setDrawer("drawer", true)}>Open drawer</Button>
        <Drawer
          title="Drawer"
          description={<Text.Base>Optional Description</Text.Base>}
          open={drawerStates.drawer}
          onClose={() => setDrawer("drawer", false)}
          width="lg"
        >
          <Stack gap="lg">
            <Doc.Placeholder height="36" />
            <Doc.Placeholder height="36" />
            <Doc.Placeholder height="36" />
            <Doc.Placeholder height="36" />
            <Doc.Placeholder height="36" />
            <Doc.Placeholder height="36" />
            <Doc.Placeholder height="36" />
            <Doc.Placeholder height="36" />
            <Doc.Placeholder height="36" />
            <Doc.Placeholder height="36" />
            <Doc.Placeholder height="36" />
          </Stack>
        </Drawer>
      </Doc.Example>
      {/* ----------------------------------------------------------------- */}
      <Doc.Subtitle>Widths</Doc.Subtitle>
      <Doc.Example>
        <Cluster>
          <Button onClick={() => setDrawer("sm", true)}>sm width</Button>
          <Button onClick={() => setDrawer("md", true)}>md width</Button>
          <Button onClick={() => setDrawer("lg", true)}>lg width</Button>
        </Cluster>
        {Object.keys(drawerStates).map((drawer) => {
          const type = drawer as DrawerTypes;
          if (type === "sm" || type === "md" || type === "lg") {
            return (
              <Drawer
                title={type}
                open={drawerStates[type]}
                width={type}
                onClose={() => setDrawer(type, false)}
              >
                <Stack gap="lg">
                  <Doc.Placeholder height="36" />
                  <Doc.Placeholder height="36" />
                  <Doc.Placeholder height="36" />
                  <Doc.Placeholder height="36" />
                  <Doc.Placeholder height="36" />
                  <Doc.Placeholder height="36" />
                  <Doc.Placeholder height="36" />
                  <Doc.Placeholder height="36" />
                  <Doc.Placeholder height="36" />
                  <Doc.Placeholder height="36" />
                  <Doc.Placeholder height="36" />
                </Stack>
              </Drawer>
            );
          }
        })}
      </Doc.Example>
      {/* ----------------------------------------------------------------- */}
      {/* ----------------------------------------------------------------- */}
      <Doc.Subtitle>Positions</Doc.Subtitle>
      <Doc.Example>
        <Cluster>
          <Button onClick={() => setDrawer("left", true)}>
            Open from left
          </Button>
          <Button onClick={() => setDrawer("right", true)}>
            Open from right
          </Button>
        </Cluster>
        {Object.keys(drawerStates).map((drawer) => {
          const type = drawer as DrawerTypes;
          if (type === "left" || type === "right") {
            return (
              <Drawer
                title={type}
                open={drawerStates[type]}
                side={type}
                onClose={() => setDrawer(type, false)}
              >
                <Stack gap="lg">
                  <Doc.Placeholder height="36" />
                  <Doc.Placeholder height="36" />
                  <Doc.Placeholder height="36" />
                  <Doc.Placeholder height="36" />
                  <Doc.Placeholder height="36" />
                  <Doc.Placeholder height="36" />
                  <Doc.Placeholder height="36" />
                  <Doc.Placeholder height="36" />
                  <Doc.Placeholder height="36" />
                  <Doc.Placeholder height="36" />
                  <Doc.Placeholder height="36" />
                </Stack>
              </Drawer>
            );
          }
        })}
      </Doc.Example>
      {/* ----------------------------------------------------------------- */}
      {/* ----------------------------------------------------------------- */}
      <Doc.Subtitle>Nested</Doc.Subtitle>
      <Doc.Example>
        <Button onClick={() => setDrawer("nested1", true)}>
          Open first drawer
        </Button>
        <Drawer
          title={"First drawer"}
          width="lg"
          open={drawerStates["nested1"]}
          onClose={() => setDrawer("nested1", false)}
        >
          <Stack>
            <Doc.Placeholder __height={600} />
            <Button onClick={() => setDrawer("nested2", true)}>
              Open second drawer
            </Button>
          </Stack>
        </Drawer>
        <Drawer
          width="md"
          title={"Second drawer"}
          open={drawerStates["nested2"]}
          onClose={() => setDrawer("nested2", false)}
        >
          <Stack>
            <Doc.Placeholder __height={400} />
            <Button onClick={() => setDrawer("nested3", true)}>
              Open thrid drawer
            </Button>
          </Stack>
        </Drawer>
        <Drawer
          width="sm"
          title={"Third drawer"}
          open={drawerStates["nested3"]}
          onClose={() => setDrawer("nested3", false)}
        >
          <Doc.Placeholder __height={200} />
        </Drawer>
      </Doc.Example>
      {/* ----------------------------------------------------------------- */}
    </Doc>
  );
};

export default DrawerPage;
