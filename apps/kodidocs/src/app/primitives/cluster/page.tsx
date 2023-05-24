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
      title="Cluster"
      description="Groups of 'inline' elements which can wrap when constrained by width."
    >
      <DocBuilder {...builderProps} />
    </DefaultTemplate>
  )
}

export default Page
