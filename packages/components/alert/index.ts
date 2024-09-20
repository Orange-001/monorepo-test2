import Alert from './src/alert.vue'
import { withInstall } from '../../utils/index'
import type { SFCWithInstall } from '../../utils/index'

export const MyAlert: SFCWithInstall<typeof Alert> = withInstall(Alert)
export default MyAlert

export * from './src/alert'
