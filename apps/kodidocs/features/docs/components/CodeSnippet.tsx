"use client"

import React, { Suspense, useEffect } from "react"
import dynamic from "next/dynamic"
import { ChevronDownIcon, ChevronUpIcon } from "lucide-react"
import { SyntaxHighlighterProps } from "react-syntax-highlighter"

import { Button } from "@/components/ui/button"
import { Cluster } from "@/components/primitives/cluster"
import { Stack } from "@/components/primitives/stack"

import { copyText } from "../helpers/copyText"

const Syntax = dynamic(() => import("./SyntaxHighligter"), {
  ssr: false,
})

interface CodeSnippetProps
  extends Pick<SyntaxHighlighterProps, "showLineNumbers" | "codeSnippet"> {
  initialOpen?: boolean
}

export const CodeSnippet = ({
  codeSnippet = "",
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

  return (
    <Stack gap="sm">
      {isSnippetOpen && (
        <Suspense fallback={<div>Loading...</div>}>
          {/* @ts-ignore */}
          <Syntax showLineNumber={showLineNumbers} code={codeSnippet} />
        </Suspense>
      )}
      <Cluster
        content="end"
        gap="xs"
        className={isSnippetOpen ? "bottom-0" : "top-0"}
      >
        {isSnippetOpen && (
          <Button
            onClick={() => handleCopy(codeSnippet)}
            size="sm"
            variant="outline"
          >
            {!isCopied ? "Copy" : "Copied!"}
          </Button>
        )}
        {!initialOpen && (
          <Button onClick={toggleSnippet} size="sm" variant="outline">
            {isSnippetOpen ? (
              <ChevronUpIcon className="w-4 mr-1" />
            ) : (
              <ChevronDownIcon className="w-4 mr-1" />
            )}
            {!isSnippetOpen ? "Code" : "Close"}
          </Button>
        )}
      </Cluster>
    </Stack>
  )
}
