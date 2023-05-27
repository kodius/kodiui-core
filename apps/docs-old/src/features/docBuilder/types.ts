export type BuildElement = {
  label: string
  example?: BuildExemple
  description?: Description
  codeSnippet?: string
  isCodeOpen?: boolean
  showLineNumber?: boolean
}

export type BuildExemple = {
  component: JSX.Element[]
  label?: string[]
}

export type BuillderProps = {
  title: string
  isCodeOpen?: boolean
  showLineNumber?: boolean
  build: () => BuildElement[]
}

export type Description = {
  description: string[]
  codeSnippet: string[]
}
