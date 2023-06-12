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
      title="Text"
      description="The Text component is a versatile UI element that allows for displaying and styling text within a user interface. It offers various options for customizing the font size, alignment, and color, providing flexibility and consistency for typography."
    >
      <DocBuilder {...builderProps} />
    </DefaultTemplate>
  )
}

export default Page
