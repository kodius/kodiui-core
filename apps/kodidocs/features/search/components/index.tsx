"use client"

import React from "react"
import { useRouter } from "next/navigation"
import { categories } from "@/features/sidebar/data/categories"
import { File } from "lucide-react"

import { routes } from "@/config/site"
import { Button } from "@/components/ui/button"
import {
  CommandDialog,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList,
} from "@/components/ui/command"

export function SearchDocumentation() {
  const [open, setOpen] = React.useState(false)
  const router = useRouter()

  const openDialog = () => {
    setOpen(!open)
  }

  React.useEffect(() => {
    const down = (e: KeyboardEvent) => {
      if (e.key === "k" && (e.metaKey || e.ctrlKey)) {
        e.preventDefault()
        setOpen((open) => !open)
      }
    }
    document.addEventListener("keydown", down)
    return () => document.removeEventListener("keydown", down)
  }, [])

  const runCommand = React.useCallback((command: () => unknown) => {
    setOpen(false)
    command()
  }, [])

  return (
    <>
      <Button
        variant={"outline"}
        onClick={openDialog}
        size="sm"
        className="flex justify-between relative text-muted-foreground gap-xs"
      >
        <span>Search documentation ...</span>
        <kbd className="pointer-events-none h-5 select-none items-center gap-1 rounded border bg-muted px-1.5 font-mono text-[10px] font-medium opacity-100">
          <span className="text-xs">⌘</span>K
        </kbd>
      </Button>
      <CommandDialog open={open} onOpenChange={setOpen}>
        <CommandInput placeholder="Type a command or search..." />
        <CommandList>
          <CommandEmpty>No results found.</CommandEmpty>
          <CommandGroup heading="Suggestions">
            {categories.map((category) => {
              return (
                <>
                  {category.elements?.map((element) => {
                    const href =
                      `${routes.docs}/${category.name}/${element.name}`.toLowerCase()
                    return (
                      <CommandItem
                        onSelect={() => {
                          runCommand(() => router.push(href))
                        }}
                        className="command-item"
                      >
                        <File className="mr-2 h-4 w-4"></File>
                        {element.name}
                      </CommandItem>
                    )
                  })}
                </>
              )
            })}
          </CommandGroup>
        </CommandList>
      </CommandDialog>
    </>
  )
}
