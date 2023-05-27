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
      title="Button"
      description="Buttons allow users to take actions, and make choices, with a single tap"
    >
      <DocBuilder {...builderProps} />
    </DefaultTemplate>
  )
}

export default Page
