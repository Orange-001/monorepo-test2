export type ButtonProps = {
  content: string
}

export const ButtonPropsDefaults: Partial<ButtonProps> = {
  content: '123',
}

export type ButtonEmits = {
  update: [content: string]
}
