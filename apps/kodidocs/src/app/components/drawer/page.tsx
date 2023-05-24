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
    <DefaultTemplate title="Drawer" description="Power of Box with display flex">
      <DocBuilder {...builderProps} />
    </DefaultTemplate>
  )
}

export default Page
