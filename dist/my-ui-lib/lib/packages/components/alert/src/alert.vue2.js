'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var vue = require('vue');
require('../../../../node_modules/.pnpm/element-plus@2.8.3_vue@3.5.11_typescript@5.6.2_/node_modules/element-plus/es/index.js');
var index = require('../../../../node_modules/.pnpm/@element-plus_icons-vue@2.3.1_vue@3.5.11_typescript@5.6.2_/node_modules/@element-plus/icons-vue/dist/index.js');
var alert = require('./alert.js');
var index$1 = require('../../../../node_modules/.pnpm/element-plus@2.8.3_vue@3.5.11_typescript@5.6.2_/node_modules/element-plus/es/components/icon/index.js');

const _hoisted_1 = { class: "my-alert-content" };
const _hoisted_2 = { class: "my-alert-title" };
var _sfc_main = /* @__PURE__ */ vue.defineComponent({
  ...{ name: "MyAlert" },
  __name: "alert",
  props: /* @__PURE__ */ vue.mergeDefaults({
    title: {},
    type: {},
    closable: { type: Boolean },
    showIcon: { type: Boolean }
  }, alert.AlertPropsDefaults),
  emits: ["close"],
  setup(__props, { emit: __emit }) {
    const emit = __emit;
    const visible = vue.ref(true);
    const TypeComponentsMap = {
      success: index.SuccessFilled,
      warning: index.WarningFilled,
      error: index.CircleCloseFilled,
      info: index.InfoFilled
    };
    const iconComponent = vue.computed(() => TypeComponentsMap[props.type]);
    const close = (evt) => {
      visible.value = false;
      emit("close", evt);
    };
    const props = __props;
    return (_ctx, _cache) => {
      return vue.openBlock(), vue.createBlock(vue.Transition, {
        name: "fade",
        persisted: ""
      }, {
        default: vue.withCtx(() => [
          vue.withDirectives(vue.createElementVNode(
            "div",
            {
              class: vue.normalizeClass(["my-alert", `my-alert--${_ctx.type}`])
            },
            [
              _ctx.showIcon && iconComponent.value ? (vue.openBlock(), vue.createBlock(vue.unref(index$1.ElIcon), {
                key: 0,
                class: "my-alert__icon"
              }, {
                default: vue.withCtx(() => [
                  (vue.openBlock(), vue.createBlock(vue.resolveDynamicComponent(iconComponent.value)))
                ]),
                _: 1
                /* STABLE */
              })) : vue.createCommentVNode("v-if", true),
              vue.createElementVNode("div", _hoisted_1, [
                vue.createElementVNode("span", _hoisted_2, [
                  vue.renderSlot(_ctx.$slots, "title", {}, () => [
                    vue.createTextVNode(
                      vue.toDisplayString(_ctx.title),
                      1
                      /* TEXT */
                    )
                  ])
                ]),
                _ctx.closable ? (vue.openBlock(), vue.createBlock(vue.unref(index$1.ElIcon), {
                  key: 0,
                  class: "my-alert-close-btn",
                  onClick: close
                }, {
                  default: vue.withCtx(() => [
                    vue.createVNode(vue.unref(index.Close))
                  ]),
                  _: 1
                  /* STABLE */
                })) : vue.createCommentVNode("v-if", true)
              ])
            ],
            2
            /* CLASS */
          ), [
            [vue.vShow, visible.value]
          ])
        ]),
        _: 3
        /* FORWARDED */
      });
    };
  }
});

exports.default = _sfc_main;
//# sourceMappingURL=alert.vue2.js.map
