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
      title="Heading"
      description="
      The Heading component is a powerful UI element that allows for displaying and styling headings within a user interface. It offers options for organizing content hierarchically, adjusting text alignment, changing heading colors, and applying custom styles."
    >
      <DocBuilder {...builderProps} />
    </DefaultTemplate>
  )
}

export default Page
