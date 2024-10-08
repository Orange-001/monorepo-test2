import Button from './src/button.vue'
import { withInstall } from '../../utils/index'
import type { SFCWithInstall } from '../../utils/index'

export const MyButton: SFCWithInstall<typeof Button> = withInstall(Button)
export default MyButton

export * from './src/button'
