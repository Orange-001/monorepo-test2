export type ButtonProps = {
  type?: 'primary' | 'success' | 'warning' | 'danger' | 'info'
  disabled?: boolean
}

export const ButtonPropsDefaults: Partial<ButtonProps> = {
  type: 'primary',
  disabled: false,
}
