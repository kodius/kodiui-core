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
      title="Reel"
      description="The Reel component is a dynamic and customizable UI element that displays a series of content in a horizontal scrolling format. It is commonly used to create visually engaging carousels or slideshows within a user interface."
    >
      <DocBuilder {...builderProps} />
    </DefaultTemplate>
  )
}

export default Page
