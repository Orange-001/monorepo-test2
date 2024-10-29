import { defineComponent, mergeDefaults, openBlock, createElementBlock, normalizeClass, renderSlot } from 'vue';
import { ButtonPropsDefaults } from './button.mjs';

var _sfc_main = /* @__PURE__ */ defineComponent({
  ...{
    name: "MyButton"
  },
  __name: "button",
  props: /* @__PURE__ */ mergeDefaults({
    type: {},
    disabled: { type: Boolean }
  }, ButtonPropsDefaults),
  setup(__props) {
    return (_ctx, _cache) => {
      return openBlock(), createElementBlock(
        "button",
        {
          class: normalizeClass(["my-button", `my-button-${_ctx.type}`, { disabled: _ctx.disabled }]),
          disabled: ""
        },
        [
          renderSlot(_ctx.$slots, "default")
        ],
        2
        /* CLASS */
      );
    };
  }
});

export { _sfc_main as default };
//# sourceMappingURL=button.vue2.mjs.map
