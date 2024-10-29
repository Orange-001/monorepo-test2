import { defineComponent, mergeDefaults, ref, computed, openBlock, createBlock, Transition, withCtx, withDirectives, createElementVNode, normalizeClass, unref, resolveDynamicComponent, createCommentVNode, renderSlot, createTextVNode, toDisplayString, createVNode, vShow } from 'vue';
import '../../../../node_modules/.pnpm/element-plus@2.8.3_vue@3.5.11_typescript@5.6.2_/node_modules/element-plus/es/index.mjs';
import { SuccessFilled as success_filled_default, WarningFilled as warning_filled_default, CircleCloseFilled as circle_close_filled_default, InfoFilled as info_filled_default, Close as close_default } from '../../../../node_modules/.pnpm/@element-plus_icons-vue@2.3.1_vue@3.5.11_typescript@5.6.2_/node_modules/@element-plus/icons-vue/dist/index.mjs';
import { AlertPropsDefaults } from './alert.mjs';
import { ElIcon } from '../../../../node_modules/.pnpm/element-plus@2.8.3_vue@3.5.11_typescript@5.6.2_/node_modules/element-plus/es/components/icon/index.mjs';

const _hoisted_1 = { class: "my-alert-content" };
const _hoisted_2 = { class: "my-alert-title" };
var _sfc_main = /* @__PURE__ */ defineComponent({
  ...{ name: "MyAlert" },
  __name: "alert",
  props: /* @__PURE__ */ mergeDefaults({
    title: {},
    type: {},
    closable: { type: Boolean },
    showIcon: { type: Boolean }
  }, AlertPropsDefaults),
  emits: ["close"],
  setup(__props, { emit: __emit }) {
    const emit = __emit;
    const visible = ref(true);
    const TypeComponentsMap = {
      success: success_filled_default,
      warning: warning_filled_default,
      error: circle_close_filled_default,
      info: info_filled_default
    };
    const iconComponent = computed(() => TypeComponentsMap[props.type]);
    const close = (evt) => {
      visible.value = false;
      emit("close", evt);
    };
    const props = __props;
    return (_ctx, _cache) => {
      return openBlock(), createBlock(Transition, {
        name: "fade",
        persisted: ""
      }, {
        default: withCtx(() => [
          withDirectives(createElementVNode(
            "div",
            {
              class: normalizeClass(["my-alert", `my-alert--${_ctx.type}`])
            },
            [
              _ctx.showIcon && iconComponent.value ? (openBlock(), createBlock(unref(ElIcon), {
                key: 0,
                class: "my-alert__icon"
              }, {
                default: withCtx(() => [
                  (openBlock(), createBlock(resolveDynamicComponent(iconComponent.value)))
                ]),
                _: 1
                /* STABLE */
              })) : createCommentVNode("v-if", true),
              createElementVNode("div", _hoisted_1, [
                createElementVNode("span", _hoisted_2, [
                  renderSlot(_ctx.$slots, "title", {}, () => [
                    createTextVNode(
                      toDisplayString(_ctx.title),
                      1
                      /* TEXT */
                    )
                  ])
                ]),
                _ctx.closable ? (openBlock(), createBlock(unref(ElIcon), {
                  key: 0,
                  class: "my-alert-close-btn",
                  onClick: close
                }, {
                  default: withCtx(() => [
                    createVNode(unref(close_default))
                  ]),
                  _: 1
                  /* STABLE */
                })) : createCommentVNode("v-if", true)
              ])
            ],
            2
            /* CLASS */
          ), [
            [vShow, visible.value]
          ])
        ]),
        _: 3
        /* FORWARDED */
      });
    };
  }
});

export { _sfc_main as default };
//# sourceMappingURL=alert.vue2.mjs.map
