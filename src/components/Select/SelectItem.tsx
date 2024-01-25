'use client'
import * as Select from '@radix-ui/react-select'
import { forwardRef } from 'react'
import { BiCheck } from 'react-icons/bi'

export interface SelectItemProps extends Select.SelectItemProps {
  text: string
}

export const SelectItem = forwardRef<HTMLInputElement, SelectItemProps>(
  ({ text, ...rest }, ref) => {
    return (
      <Select.Item
        className="flex items-center justify-between gap-2 px-3 py-2.5 font-inriaSans text-xl font-semibold text-black outline-none data-[highlighted]:bg-gray-100"
        {...rest}
        ref={ref}
      >
        <Select.ItemText>{text}</Select.ItemText>
        <Select.ItemIndicator>
          <BiCheck size={20} />
        </Select.ItemIndicator>
      </Select.Item>
    )
  },
)

SelectItem.displayName = 'SelectItem'

export default SelectItem
