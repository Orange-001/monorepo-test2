export type AlertProps = {
  title?: string
  type?: 'success' | 'warning' | 'info' | 'error'
  closable?: boolean
  showIcon?: boolean
}

export const AlertPropsDefaults: Partial<AlertProps> = {
  type: 'info',
  closable: true,
}
