'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var vue = require('vue');
var button = require('./button.js');

var _sfc_main = /* @__PURE__ */ vue.defineComponent({
  ...{
    name: "MyButton"
  },
  __name: "button",
  props: /* @__PURE__ */ vue.mergeDefaults({
    type: {},
    disabled: { type: Boolean }
  }, button.ButtonPropsDefaults),
  setup(__props) {
    return (_ctx, _cache) => {
      return vue.openBlock(), vue.createElementBlock(
        "button",
        {
          class: vue.normalizeClass(["my-button", `my-button-${_ctx.type}`, { disabled: _ctx.disabled }]),
          disabled: ""
        },
        [
          vue.renderSlot(_ctx.$slots, "default")
        ],
        2
        /* CLASS */
      );
    };
  }
});

exports.default = _sfc_main;
//# sourceMappingURL=button.vue2.js.map
