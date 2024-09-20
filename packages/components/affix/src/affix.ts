export type AffixProps = {
  content: string
}

export const AFFIX_PROPS_DEFAULTS: Partial<AffixProps> = {
  content: '123',
}

export type AffixEmits = {
  update: [content: string]
}
