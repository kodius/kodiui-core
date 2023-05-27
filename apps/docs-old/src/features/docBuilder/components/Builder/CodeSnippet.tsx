import React, { FC, Suspense, useState } from 'react'
import { BuildElement } from '../../types'
import { Button, ButtonVariants } from '@/components'
import dynamic from 'next/dynamic'
import { BoxProps, Cluster } from '@kodiui/ui'
import { copyText } from '../../helpers/copyText'

const Syntax = dynamic(() => import('@/components/inputs/SyntaxHighligter'), {
  ssr: false,
})

const ButtonProps: ButtonVariants & { width: BoxProps['width'] } = {
  size: 'sm',
  variant: 'transparent',
  width: 'fit',
}

export const CodeSnippet: FC<BuildElement> = (props) => {
  const [isSyntaxOpen, setIsSyntaxOpen] = useState(() => props.isCodeOpen)

  if (!props.codeSnippet) return null

  const hasSnippet = Boolean(props.codeSnippet) && isSyntaxOpen

  const onClick = () => setIsSyntaxOpen((prev) => !prev)

  return (
    <>
      {hasSnippet && (
        <Suspense fallback={<div>Loading...</div>}>
          <Syntax showLineNumber={props.showLineNumber} code={props.codeSnippet} />
        </Suspense>
      )}
      <Cluster justifyContent="flex-end" gap="xs">
        <Button onClick={onClick} {...ButtonProps}>
          code
        </Button>
        {isSyntaxOpen && (
          <Button onClick={() => copyText(props.codeSnippet || '')} {...ButtonProps}>
            copy
          </Button>
        )}
      </Cluster>
    </>
  )
}
