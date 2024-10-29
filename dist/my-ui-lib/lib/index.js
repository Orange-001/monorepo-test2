'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var defaults = require('./defaults.js');
require('./packages/components/index.js');
var makeInstaller = require('./make-installer.js');
var affix = require('./packages/components/affix/src/affix.js');
var index = require('./packages/components/affix/index.js');
var alert = require('./packages/components/alert/src/alert.js');
var index$1 = require('./packages/components/alert/index.js');
var button = require('./packages/components/button/src/button.js');
var index$2 = require('./packages/components/button/index.js');

const install = defaults.default.install;

exports.default = defaults.default;
exports.makeInstaller = makeInstaller.makeInstaller;
exports.AffixPropsDefaults = affix.AffixPropsDefaults;
exports.MyAffix = index.MyAffix;
exports.AlertPropsDefaults = alert.AlertPropsDefaults;
exports.MyAlert = index$1.MyAlert;
exports.ButtonPropsDefaults = button.ButtonPropsDefaults;
exports.MyButton = index$2.MyButton;
exports.install = install;
//# sourceMappingURL=index.js.map
