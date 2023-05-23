import { Button } from '@cli-components/Button'
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from '@cli-components/DropdownMenu'
import { ConciergeBellIcon, DeleteIcon, EditIcon } from 'lucide-react'
import React from 'react'

export const VersionSettings = () => {
  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant="transparent" size="sm" icon={<ConciergeBellIcon />} />
      </DropdownMenuTrigger>
      <DropdownMenuContent>
        <DropdownMenuItem>
          <DeleteIcon width="14px" /> Delete
        </DropdownMenuItem>
        <DropdownMenuItem>
          <EditIcon width="14px" /> Edit
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  )
}
