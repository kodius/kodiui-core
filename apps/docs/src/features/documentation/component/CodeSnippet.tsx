import { Button } from '@/components'
import { Box, BoxProps, Cluster } from '@kodiui/ui'
import dynamic from 'next/dynamic'
import React, { Suspense, useEffect } from 'react'
import { SyntaxHighlighterProps } from 'react-syntax-highlighter'
import { copyText } from '../utils'

const Syntax = dynamic(() => import('@/components/input/SyntaxHighligter'), {
  ssr: false,
})

interface CodeSnippetProps extends Pick<SyntaxHighlighterProps, 'showLineNumbers' | 'codeSnippet'> {
  initialOpen?: boolean
}

export const CodeSnippet = ({
  codeSnippet = '',
  showLineNumbers = false,
  initialOpen,
}: CodeSnippetProps) => {
  const [isSnippetOpen, setIsSnippetOpen] = React.useState(false)
  const [isCopied, setIsCopied] = React.useState(false)

  const toggleSnippet = () => setIsSnippetOpen((prev) => !prev)

  useEffect(() => {
    setIsSnippetOpen(initialOpen || false)
  }, [initialOpen])

  useEffect(() => {
    if (isCopied) {
      const timeout = setTimeout(() => {
        setIsCopied(false)
      }, 2000)
      return () => clearTimeout(timeout)
    }
  }, [isCopied])

  const handleCopy = (text: string) => {
    copyText(text)
    setIsCopied(true)
  }

  const position: BoxProps = isSnippetOpen ? ({ bottom: '0' } as const) : ({ top: '0' } as const)

  return (
    <Box position="relative">
      {isSnippetOpen && (
        <Suspense fallback={<div>Loading...</div>}>
          <Syntax showLineNumber={showLineNumbers} code={codeSnippet} />
        </Suspense>
      )}
      <Cluster
        justifyContent="flex-end"
        gap="xs"
        right="0"
        background="white"
        borderRadius="xs"
        position="absolute"
        {...position}
      >
        {isSnippetOpen && (
          <Button
            onClick={() => handleCopy(codeSnippet)}
            size="sm"
            variant="transparent"
            width="fit"
          >
            {!isCopied ? 'Copy' : 'Copied!'}
          </Button>
        )}
        {!initialOpen && (
          <Button onClick={toggleSnippet} size="sm" variant="transparent" width="fit">
            {!isSnippetOpen ? 'Code' : 'Close'}
          </Button>
        )}
      </Cluster>
    </Box>
  )
}
