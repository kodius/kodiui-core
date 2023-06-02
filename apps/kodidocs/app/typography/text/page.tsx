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
      title="Split"
      description="The Split component is a flexible UI element that effectively separates and displays content into two distinct sections within a user interface. It inherits all props from the Box component, enabling easy customization and seamless integration with your design system."
    >
      <DocBuilder {...builderProps} />
    </DefaultTemplate>
  )
}

export default Page
