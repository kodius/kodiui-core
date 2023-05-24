import { DocBuilder } from '@features/docs'
import { DefaultTemplate } from '@templates'
import React from 'react'
import { Component } from './component'
import { props } from './props'
import { versions } from './versions'

const Page = () => {
  const builderProps = {
    component: <Component />,
    versions: versions,
    props: props,
  }

  return (
    <DefaultTemplate
      title="Switcher"
      description="Lays out children equally inline until it is forced to wrap, then lays out children vertically"
    >
      <DocBuilder {...builderProps} />
    </DefaultTemplate>
  )
}

export default Page
