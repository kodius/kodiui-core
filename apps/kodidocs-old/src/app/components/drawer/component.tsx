'use client'

import { Button } from '@cli-components/Button'
import { Drawer } from '@cli-components/Drawer'
import { Text } from '@cli-components/Text'
import { DocBlock, DocPane } from '@features/docs'
import { Cluster, Stack } from '@kodiui/ui'
import { DocTemplate } from '@templates'
import { useState } from 'react'

const placeholder = (
  <Stack gap="lg">
    <DocPane height="36" />
    <DocPane height="36" />
    <DocPane height="36" />
    <DocPane height="36" />
    <DocPane height="36" />
    <DocPane height="36" />
    <DocPane height="36" />
  </Stack>
)

export const Component = () => {
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

  const setDrawer = (type: DrawerTypes, state: boolean) => {
    setDrawerStates({
      ...drawerStates,
      [type]: state,
    })
  }
  type DrawerTypes = keyof typeof drawerStates
  return (
    <DocTemplate>
      <DocBlock
        title="Example"
        description="Todo"
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
      <DocBlock
        title="Widths"
        description="Todo"
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
      <DocBlock
        title="Position"
        description="Todo"
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
      <DocBlock
        title="Nested"
        description="Todo"
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
    </DocTemplate>
  )
}
