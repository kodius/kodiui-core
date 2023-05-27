import { Button, Drawer, Text } from '@/components'
import { Doc } from '@/features/documentation'
import { Cluster, Stack } from '@kodiui/ui'
import React, { useState } from 'react'

const placeholder = (
  <Stack gap="lg">
    <Doc.Placeholder height="36" />
    <Doc.Placeholder height="36" />
    <Doc.Placeholder height="36" />
    <Doc.Placeholder height="36" />
    <Doc.Placeholder height="36" />
    <Doc.Placeholder height="36" />
    <Doc.Placeholder height="36" />
  </Stack>
)

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
  })

  type DrawerTypes = keyof typeof drawerStates

  const setDrawer = (type: DrawerTypes, state: boolean) => {
    setDrawerStates({
      ...drawerStates,
      [type]: state,
    })
  }

  return (
    <Doc>
      <Doc.Title>Drawer</Doc.Title>
      <Doc.Block
        subTitle=""
        exampleWithCode={
          <>
            <Button onClick={() => setDrawer('drawer', true)}>Open drawer</Button>
            <Drawer
              title="Drawer"
              description={
                <Text color="black" size="standard">
                  Optional Description
                </Text>
              }
              open={drawerStates.drawer}
              onClose={() => setDrawer('drawer', false)}
              width="lg"
            >
              {placeholder}
            </Drawer>
          </>
        }
      />

      <Doc.Block
        subTitle="Widths"
        exampleWithCode={
          <>
            <Cluster>
              <Button onClick={() => setDrawer('sm', true)}>sm width</Button>
              <Button onClick={() => setDrawer('md', true)}>md width</Button>
              <Button onClick={() => setDrawer('lg', true)}>lg width</Button>
            </Cluster>
            {Object.keys(drawerStates).map((drawer) => {
              const type = drawer as DrawerTypes
              if (type === 'sm' || type === 'md' || type === 'lg') {
                return (
                  <Drawer
                    key={drawer}
                    title={type}
                    open={drawerStates[type]}
                    width={type}
                    onClose={() => setDrawer(type, false)}
                  >
                    {placeholder}
                  </Drawer>
                )
              }
            })}
          </>
        }
      />

      <Doc.Block
        subTitle="Position"
        exampleWithCode={
          <>
            <Cluster>
              <Button onClick={() => setDrawer('left', true)}>Open from left</Button>
              <Button onClick={() => setDrawer('right', true)}>Open from right</Button>
            </Cluster>
            {Object.keys(drawerStates).map((drawer) => {
              const type = drawer as DrawerTypes
              if (type === 'left' || type === 'right') {
                return (
                  <Drawer
                    key={drawer}
                    title={type}
                    open={drawerStates[type]}
                    side={type}
                    onClose={() => setDrawer(type, false)}
                  >
                    {placeholder}
                  </Drawer>
                )
              }
            })}
          </>
        }
      />

      <Doc.Block
        subTitle="Nested"
        exampleWithCode={
          <>
            <Button onClick={() => setDrawer('nested1', true)}>Open first drawer</Button>
            <Drawer
              title={'First drawer'}
              width="lg"
              open={drawerStates['nested1']}
              onClose={() => setDrawer('nested1', false)}
            >
              <Stack>
                {placeholder}

                <Button onClick={() => setDrawer('nested2', true)}>Open second drawer</Button>
              </Stack>
            </Drawer>
            <Drawer
              width="md"
              title={'Second drawer'}
              open={drawerStates['nested2']}
              onClose={() => setDrawer('nested2', false)}
            >
              <Stack>
                {placeholder}

                <Button onClick={() => setDrawer('nested3', true)}>Open thrid drawer</Button>
              </Stack>
            </Drawer>
            <Drawer
              width="sm"
              title={'Third drawer'}
              open={drawerStates['nested3']}
              onClose={() => setDrawer('nested3', false)}
            >
              {placeholder}
            </Drawer>
          </>
        }
      />
    </Doc>
  )
}

export default DrawerPage
