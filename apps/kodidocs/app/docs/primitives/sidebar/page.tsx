import React from "react"
import { DocBuilder } from "@/features/docs/DocBuilder"
import { DefaultTemplate } from "@/templates"

import { Component } from "./component"
import { props } from "./props"
import { versions } from "./versions"

const Page = () => {
  const builderProps = {
    component: <Component />,
    versions: versions,
    props: props,
  }

  return (
    <DefaultTemplate
      title="Sidebar"
      description="The Sidebar layout allows for a responsive design where two adjacent elements can appear side-by-side or stacked vertically, with the sidebar element maintaining a fixed width and the other element taking up the remaining space. It provides a seamless and flexible layout for various content arrangements within a parent container."
    >
      <DocBuilder {...builderProps} />
    </DefaultTemplate>
  )
}

export default Page
