import React, { FC } from 'react'
import { textDropdownStyle } from './textDropdown.css'

type Props = TextDropdownProps & React.SelectHTMLAttributes<HTMLSelectElement>

export interface TextDropdownItem {
  value: string
  options?: React.DetailedHTMLProps<
    React.OptionHTMLAttributes<HTMLOptionElement>,
    HTMLOptionElement
  >
}

interface TextDropdownProps {
  items: TextDropdownItem[]
}

export const TextDropdown: FC<Props> = (props) => {
  if (!props.items) throw Error('Provide items')

  return (
    <select className={textDropdownStyle} {...props}>
      {props.items.map((item) => {
        return (
          <option {...item.options} key={item.value}>
            {item.value}
          </option>
        )
      })}
    </select>
  )
}
