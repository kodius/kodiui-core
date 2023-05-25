import { Settings, SettingsIcon, UserIcon } from 'lucide-react'
import React from 'react'
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuSub,
  DropdownMenuSubContent,
  DropdownMenuSubTrigger,
  DropdownMenuTrigger,
} from '@cli-components/DropdownMenu/DropdownMenu'
import { Button } from '@cli-components/Button/Button'
import { CreateNewCategory } from './CreateNewCategory'
import { CateogriesDialog } from './CategoriesDialog'

export const Footer = () => {
  return (
    <>
      <DropdownMenu>
        <DropdownMenuTrigger asChild>
          <Button variant="transparent" size="sm" icon={<Settings />} width="fit" />
        </DropdownMenuTrigger>
        <DropdownMenuContent>
          <DropdownMenuLabel>User</DropdownMenuLabel>
          <DropdownMenuSeparator />
          <DropdownMenuItem>
            <UserIcon width="14px" /> Profile
          </DropdownMenuItem>
          <DropdownMenuItem>
            <SettingsIcon width="14px" /> Settings
          </DropdownMenuItem>
          <DropdownMenuSeparator />
          <DropdownMenuSub>
            <DropdownMenuLabel>Settings</DropdownMenuLabel>
            <DropdownMenuSeparator />
            <DropdownMenuSubTrigger>Categories</DropdownMenuSubTrigger>
            <DropdownMenuSubContent>
              <CreateNewCategory />
            </DropdownMenuSubContent>
          </DropdownMenuSub>
          <DropdownMenuSeparator />
          <DropdownMenuLabel>Actions</DropdownMenuLabel>
          <DropdownMenuSeparator />
          <DropdownMenuItem>Generate figma tokens</DropdownMenuItem>
        </DropdownMenuContent>
      </DropdownMenu>
      <CateogriesDialog />
    </>
  )
}
