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
      title="Flexbox"
      description="Flex is Box with display set to flex and comes with helpful style shorthand. It renders a `div` element."
    >
      <DocBuilder {...builderProps} />
    </DefaultTemplate>
  )
}

export default Page
