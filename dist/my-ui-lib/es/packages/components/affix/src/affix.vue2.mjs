import { defineComponent, mergeDefaults, ref, nextTick, openBlock, createElementBlock, createElementVNode, toDisplayString, withDirectives, vModelText } from 'vue';
import { AffixPropsDefaults } from './affix.mjs';

const _hoisted_1 = { class: "my-affix" };
const _hoisted_2 = { class: "my-affix-content" };
var _sfc_main = /* @__PURE__ */ defineComponent({
  ...{
    name: "MyAffix"
  },
  __name: "affix",
  props: /* @__PURE__ */ mergeDefaults({
    content: {}
  }, AffixPropsDefaults),
  emits: ["update"],
  setup(__props, { emit: __emit }) {
    const props = __props;
    const emit = __emit;
    const inputContent = ref("");
    function update() {
      emit("update", inputContent.value);
      nextTick(() => {
        console.log("props: ", props);
      });
    }
    return (_ctx, _cache) => {
      return openBlock(), createElementBlock("div", _hoisted_1, [
        _cache[2] || (_cache[2] = createElementVNode(
          "div",
          { class: "my-affix-title" },
          "affix",
          -1
          /* HOISTED */
        )),
        createElementVNode(
          "div",
          _hoisted_2,
          toDisplayString(_ctx.content),
          1
          /* TEXT */
        ),
        createElementVNode("div", {
          class: "my-affix-update",
          onClick: update
        }, [
          withDirectives(createElementVNode(
            "input",
            {
              "onUpdate:modelValue": _cache[0] || (_cache[0] = ($event) => inputContent.value = $event),
              type: "text",
              placeholder: "\u8BF7\u8F93\u5165content"
            },
            null,
            512
            /* NEED_PATCH */
          ), [
            [vModelText, inputContent.value]
          ]),
          _cache[1] || (_cache[1] = createElementVNode(
            "button",
            null,
            "update",
            -1
            /* HOISTED */
          ))
        ])
      ]);
    };
  }
});

export { _sfc_main as default };
//# sourceMappingURL=affix.vue2.mjs.map
