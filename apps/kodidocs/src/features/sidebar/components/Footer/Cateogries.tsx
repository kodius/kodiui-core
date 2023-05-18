import {
  DropdownMenuItem,
  DropdownMenuSub,
  DropdownMenuSubContent,
  DropdownMenuSubTrigger,
} from '@cli-components'

export const Cateogries = () => {
  return (
    <>
      <DropdownMenuSub>
        <DropdownMenuSubTrigger>Categories</DropdownMenuSubTrigger>
        <DropdownMenuSubContent>
          <DropdownMenuItem>Create New Category</DropdownMenuItem>
        </DropdownMenuSubContent>
      </DropdownMenuSub>
    </>
  )
}
