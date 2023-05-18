import {
  Button,
  Dialog,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogTitle,
  DialogTrigger,
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuLabel,
  DropdownMenuPortal,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from '@cli-components'
import { Settings } from 'lucide-react'
import React from 'react'
import { Cateogries } from './Cateogries'

export const Footer = () => {
  return (
    <>
      <DropdownMenu>
        <DropdownMenuTrigger asChild>
          <Button variant="transparent" size="sm" icon={<Settings />} width="fit" />
        </DropdownMenuTrigger>
        <DropdownMenuPortal>
          <DropdownMenuContent>
            <DropdownMenuLabel>Settings</DropdownMenuLabel>
            <DropdownMenuSeparator />
            <Cateogries />
          </DropdownMenuContent>
        </DropdownMenuPortal>
        {/*   <DropdownMenuPortal> */}
        {/*     <DropdownMenuContent> */}
        {/*       <DropdownMenuItem>new tab 1</DropdownMenuItem> */}
        {/*       <DropdownMenuItem>new tab 2</DropdownMenuItem> */}
        {/*       <DropdownMenuItem disabled>new tab 2</DropdownMenuItem> */}
        {/*       <DropdownMenuSeparator /> */}
        {/*       <DropdownMenuItem> */}
        {/*         new tab 3 <DropdownMenuShortcut>⌘+T</DropdownMenuShortcut> */}
        {/*       </DropdownMenuItem> */}
        {/*       <DropdownMenuCheckboxItem checked>checkbox</DropdownMenuCheckboxItem> */}
        {/*       <DropdownMenuSeparator /> */}
        {/*       <DropdownMenuRadioGroup value="radio1"> */}
        {/*         <DropdownMenuLabel>Radio Label</DropdownMenuLabel> */}
        {/*         <DropdownMenuRadioItem value="radio1">Radio 1</DropdownMenuRadioItem> */}
        {/*         <DropdownMenuRadioItem value="radio2">Radio 1</DropdownMenuRadioItem> */}
        {/*       </DropdownMenuRadioGroup> */}
        {/*       <DropdownMenuSeparator /> */}
        {/*       <DropdownMenuSub> */}
        {/*         <DropdownMenuSubTrigger>sub trigger 1</DropdownMenuSubTrigger> */}
        {/*         <DropdownMenuPortal> */}
        {/*           <DropdownMenuSubContent> */}
        {/*             <DropdownMenuItem>item 1</DropdownMenuItem> */}
        {/*             <DropdownMenuItem>item 2</DropdownMenuItem> */}
        {/*             <DropdownMenuItem>item 3</DropdownMenuItem> */}
        {/*             <DropdownMenuItem>item 4</DropdownMenuItem> */}
        {/*             <DropdownMenuItem>item 4</DropdownMenuItem> */}
        {/*           </DropdownMenuSubContent> */}
        {/*         </DropdownMenuPortal> */}
        {/*       </DropdownMenuSub> */}
        {/*     </DropdownMenuContent> */}
        {/*   </DropdownMenuPortal> */}
      </DropdownMenu>
      {/* https://codesandbox.io/embed/r9sq1q */}
      <Dialog>
        <DialogTrigger>Open</DialogTrigger>
        <DialogContent>
          <DialogTitle>Create new category</DialogTitle>
          <DialogDescription>
            Lorem ipsum dolor sit amet, qui minim labore adipisicing minim sint cillum sint
            consectetur cupidatat.
          </DialogDescription>
          <div>asdf</div>
          <DialogClose asChild>
            <Button tone="success">Save</Button>
          </DialogClose>
        </DialogContent>
      </Dialog>
    </>
  )
}
