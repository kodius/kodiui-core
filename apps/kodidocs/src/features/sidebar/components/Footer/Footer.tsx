import { Settings } from 'lucide-react'
import React from 'react'
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSub,
  DropdownMenuSubContent,
  DropdownMenuSubTrigger,
  DropdownMenuTrigger,
} from '@cli-components/DropdownMenu/DropdownMenu'
import { Button } from '@cli-components/Button/Button'
import { CreateNewCategory } from './CreateNewCategory'
import { CateogriesDialog } from './CategoriesDialog'
import { TextLink } from '@cli-components/TextLink'
import { routes } from '@lib'
import { Text } from '@cli-components/Text'

export const Footer = () => {
  return (
    <>
      <DropdownMenu>
        <DropdownMenuTrigger asChild>
          <Button variant="transparent" size="sm" icon={<Settings />} width="fit" />
        </DropdownMenuTrigger>
        <DropdownMenuContent>
          <DropdownMenuItem>
            <Text tone="success">
              <TextLink href={routes.signIn}>Login</TextLink>
            </Text>
          </DropdownMenuItem>
          <DropdownMenuSub>
            <DropdownMenuSubTrigger>Categories</DropdownMenuSubTrigger>
            <DropdownMenuSubContent>
              <CreateNewCategory />
            </DropdownMenuSubContent>
          </DropdownMenuSub>
        </DropdownMenuContent>
      </DropdownMenu>
      <CateogriesDialog />
    </>
  )
}
