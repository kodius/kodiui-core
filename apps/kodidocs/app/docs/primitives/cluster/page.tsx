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
      title="Cluster"
      description="The Cluster component is a versatile UI element that intelligently organizes and presents a group of related items within a user interface. It inherits all props from the Box component, allowing for seamless customization and integration with existing design systems."
    >
      <DocBuilder {...builderProps} />
    </DefaultTemplate>
  )
}

export default Page
