import Affix from './src/affix.vue'
import { withInstall } from '../../utils/index'
import type { SFCWithInstall } from '../../utils/index'

export const MyAffix: SFCWithInstall<typeof Affix> = withInstall(Affix)
export default MyAffix

export * from './src/affix'
