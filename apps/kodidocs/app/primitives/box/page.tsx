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
      title="Box"
      description="Box is the most abstract component on top of which all other components are built. By default, it renders a `div` element"
    >
      <DocBuilder {...builderProps} />
    </DefaultTemplate>
  )
}

export default Page
