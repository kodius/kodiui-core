import { DocBuilder } from '@/features/docBuilder'
import {
  createConract,
  installDependecies,
  loadTheme,
  nextJsConfig,
} from '@/features/docs-deprecated'
import React from 'react'

const InstallKodiUiPage = () => {
  return (
    <DocBuilder
      title="Install Kodi UI"
      build={() => [installDependecies, nextJsConfig, createConract, loadTheme]}
    />
  )
}

export default InstallKodiUiPage
