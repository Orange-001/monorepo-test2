export type AffixProps = {
  content: string
}

export const AffixPropsDefaults: Partial<AffixProps> = {
  content: '123',
}

export type AffixEmits = {
  update: [content: string]
}
