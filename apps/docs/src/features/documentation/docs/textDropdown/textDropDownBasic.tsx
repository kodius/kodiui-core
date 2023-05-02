import { Text, TextDropdown } from '@/components'
import { TextDropdownItem } from '@/components/inputs/TextDropdown/TextDropdown'
import { Stack } from '@kodiui/ui'
import React, { useState } from 'react'

export const TextDropDownBasic = () => {
  const items: TextDropdownItem[] = [
    { value: 'item1' },
    { value: 'item2' },
    { value: 'item3' },
    { value: 'disabled item', options: { disabled: true } },
  ]

  const [selectedValue, setSelectedValue] = useState<TextDropdownItem>({
    value: 'item1',
  })

  const handleSelectChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    const selectedValue = event.target.value
    const findItem = items.find((i) => i.value === selectedValue)
    if (findItem) setSelectedValue(findItem)
  }

  return (
    <Stack>
      <TextDropdown items={items} value={selectedValue.value} onChange={handleSelectChange} />
      <Text>selectedValue: {selectedValue.value}</Text>
    </Stack>
  )
}
