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
      title="Switcher"
      description="The Switcher element adapts its layout to a vertical configuration when the parent element's width is insufficient, ensuring optimal usability and visual presentation across different screen sizes."
    >
      <DocBuilder {...builderProps} />
    </DefaultTemplate>
  )
}

export default Page
