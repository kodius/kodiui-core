"use client"

import React, { useEffect, useRef, useState } from "react"
import Link from "next/link"
import { usePathname } from "next/navigation"
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

// ... existing imports

export function SearchDocumentation() {
  const [open, setOpen] = React.useState(false)
  const [activeIndex, setActiveIndex] = useState(0)
  const router = usePathname()

  useEffect(() => {
    if (open) {
      setOpen(false)
    }
  }, [router])

  const openDialog = () => {
    setOpen(!open)
  }

  const handleKeyDown = (e) => {
    if (e.key === "Enter") {
      const commandItems = document.querySelectorAll(".command-item")
      if (commandItems.length > 0) {
        const activeCommandItem = commandItems[activeIndex]
        if (activeCommandItem) {
          activeCommandItem.click()
        }
      }
    } else if (e.key === "ArrowUp") {
      if (activeIndex !== 0) {
        setActiveIndex(activeIndex - 1)
      }
    } else if (e.key === "ArrowDown") {
      setActiveIndex(activeIndex + 1)
    }
  }

  React.useEffect(() => {
    const down = (e) => {
      if (e.key === "s" && e.metaKey) {
        e.preventDefault()
        setActiveIndex(0)

        setOpen((open) => !open)
      }
    }

    document.addEventListener("keydown", down)
    return () => document.removeEventListener("keydown", down)
  }, [])

  return (
    <>
      <p className="text-sm text-muted-foreground py-2">
        <Button
          variant={"outline"}
          onClick={openDialog}
          className="w-full flex justify-between py-2"
        >
          <span className="pr-2">Search documentation ...</span>
          <kbd className="pointer-events-none inline-flex h-5 select-none items-center gap-1 rounded border bg-muted px-1.5 font-mono text-[10px] font-medium text-muted-foreground opacity-100">
            <span className="text-xs">⌘</span>s
          </kbd>
        </Button>
      </p>
      <CommandDialog open={open} onOpenChange={setOpen}>
        <CommandInput
          placeholder="Type a command or search..."
          onKeyDown={handleKeyDown}
        />
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
                      <Link key={element.name} href={href}>
                        <CommandItem className="command-item">
                          <File className="mr-2 h-4 w-4"></File>
                          {element.name}
                        </CommandItem>
                      </Link>
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
