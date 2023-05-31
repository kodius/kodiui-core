import React, { FC, ReactNode } from "react"
import Link from "next/link"

import { Button } from "@/components/ui/button"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Stack } from "@/components/primitives/stack"

import { HistoryRelease } from "./components/HistoryRelease"
import { Prop, PropsType } from "./components/Prop"
import { Version } from "./types"

interface Props {
  component: ReactNode
  versions: Version[]
  props: PropsType
}

export const DocBuilder: FC<Props> = (props) => {
  return (
    <>
      <Tabs defaultValue="tab1" className="space-y-xl">
        <TabsList>
          <TabsTrigger value="tab1">Component</TabsTrigger>
          <TabsTrigger value="tab2">Props</TabsTrigger>
          <TabsTrigger value="tab3">Versions</TabsTrigger>
        </TabsList>
        <TabsContent value="tab1">{props.component}</TabsContent>
        <TabsContent value="tab2">
          <Stack>
            {props.props.link && (
              <Link href={props.props.link.href}>
                <Button variant="link">{props.props.link.name}</Button>
              </Link>
            )}
            {props.props?.props?.map((prop) => (
              <React.Fragment key={prop.name}>
                <Prop {...prop} />
              </React.Fragment>
            ))}
          </Stack>
        </TabsContent>
        <TabsContent value="tab3">
          <Stack>
            {props.versions?.map((version) => (
              <HistoryRelease {...version} />
            ))}
          </Stack>
        </TabsContent>
      </Tabs>
    </>
  )
}
