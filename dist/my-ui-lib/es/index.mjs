import installer from './defaults.mjs';
import './packages/components/index.mjs';
export { makeInstaller } from './make-installer.mjs';
export { AffixPropsDefaults } from './packages/components/affix/src/affix.mjs';
export { MyAffix } from './packages/components/affix/index.mjs';
export { AlertPropsDefaults } from './packages/components/alert/src/alert.mjs';
export { MyAlert } from './packages/components/alert/index.mjs';
export { ButtonPropsDefaults } from './packages/components/button/src/button.mjs';
export { MyButton } from './packages/components/button/index.mjs';

const install = installer.install;

export { installer as default, install };
//# sourceMappingURL=index.mjs.map
