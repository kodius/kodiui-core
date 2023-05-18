import {
  Button,
  DropdownMenu,
  DropdownMenuCheckboxItem,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuPortal,
  DropdownMenuRadioGroup,
  DropdownMenuRadioItem,
  DropdownMenuSeparator,
  DropdownMenuShortcut,
  DropdownMenuSub,
  DropdownMenuSubContent,
  DropdownMenuSubTrigger,
  DropdownMenuTrigger,
} from '@cli-components'
import React from 'react'

export const Footer = () => {
  return (
    <div>
      <DropdownMenu>
        <DropdownMenuTrigger asChild>
          <Button>button</Button>
        </DropdownMenuTrigger>
        <DropdownMenuPortal>
          <DropdownMenuContent>
            <DropdownMenuItem>new tab 1</DropdownMenuItem>
            <DropdownMenuItem>new tab 2</DropdownMenuItem>
            <DropdownMenuItem disabled>new tab 2</DropdownMenuItem>
            <DropdownMenuSeparator />
            <DropdownMenuItem>
              new tab 3 <DropdownMenuShortcut>⌘+T</DropdownMenuShortcut>
            </DropdownMenuItem>
            <DropdownMenuCheckboxItem checked>checkbox</DropdownMenuCheckboxItem>
            <DropdownMenuSeparator />
            <DropdownMenuRadioGroup value="radio1">
              <DropdownMenuLabel>Radio Label</DropdownMenuLabel>
              <DropdownMenuRadioItem value="radio1">Radio 1</DropdownMenuRadioItem>
              <DropdownMenuRadioItem value="radio2">Radio 1</DropdownMenuRadioItem>
            </DropdownMenuRadioGroup>
            <DropdownMenuSeparator />
            <DropdownMenuSub>
              <DropdownMenuSubTrigger>sub trigger 1</DropdownMenuSubTrigger>
              <DropdownMenuPortal>
                <DropdownMenuSubContent>
                  <DropdownMenuItem>item 1</DropdownMenuItem>
                  <DropdownMenuItem>item 2</DropdownMenuItem>
                  <DropdownMenuItem>item 3</DropdownMenuItem>
                  <DropdownMenuItem>item 4</DropdownMenuItem>
                  <DropdownMenuItem>item 4</DropdownMenuItem>
                </DropdownMenuSubContent>
              </DropdownMenuPortal>
            </DropdownMenuSub>
          </DropdownMenuContent>
        </DropdownMenuPortal>
      </DropdownMenu>
    </div>
  )
}
