'use client'
import * as SelectPrimitive from '@radix-ui/react-select'
import Image from 'next/image'
import { ReactNode } from 'react'

export interface SelectProps extends SelectPrimitive.SelectProps {
  children: ReactNode
  placeholder: string
}

export function Select({ children, placeholder, ...rest }: SelectProps) {
  return (
    <SelectPrimitive.Root {...rest}>
      <SelectPrimitive.Trigger
        className="flex h-[38px] w-[216px] cursor-default items-center justify-between 
        gap-2 bg-white py-0.5 pl-2.5 pr-[3px] font-inriaSans text-xl font-bold text-black outline-none"
      >
        <SelectPrimitive.Value placeholder={placeholder} />
        <SelectPrimitive.Icon>
          <Image
            src="/iconChevronDown.png"
            alt="Icon Chevron Down"
            quality={100}
            width={34}
            height={34}
            className="cursor-pointer object-contain"
          />
        </SelectPrimitive.Icon>
      </SelectPrimitive.Trigger>

      <SelectPrimitive.Portal>
        <SelectPrimitive.Content
          side="bottom"
          position="popper"
          sideOffset={2}
          className="max-h-96 w-[216px] overflow-y-auto rounded-b-md bg-white shadow-md outline-none"
        >
          <SelectPrimitive.Viewport className="outline-none">
            {children}
          </SelectPrimitive.Viewport>
        </SelectPrimitive.Content>
      </SelectPrimitive.Portal>
    </SelectPrimitive.Root>
  )
}
