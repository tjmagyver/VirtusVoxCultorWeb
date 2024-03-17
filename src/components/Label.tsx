interface LabelProps {
  htmlFor?: string
  textLabel: string
}

export function Label({ htmlFor = '', textLabel }: LabelProps) {
  return (
    <label
      htmlFor={htmlFor}
      className="font-inriaSans text-2xl font-light text-gray-300"
    >
      {textLabel}
    </label>
  )
}
