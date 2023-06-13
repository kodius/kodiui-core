import React from "react"
import { DocBuilder } from "@/features/docs/DocBuilder"
import { getElementDesription } from "@/features/sidebar/helpers/getElementDescirption"
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
  const description = getElementDesription("Hidden")

  return (
    <DefaultTemplate title="Hidden" description={description}>
      <DocBuilder {...builderProps} />
    </DefaultTemplate>
  )
}

export default Page
