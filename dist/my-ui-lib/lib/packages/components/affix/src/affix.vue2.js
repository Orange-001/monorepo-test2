'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var vue = require('vue');
var affix = require('./affix.js');

const _hoisted_1 = { class: "my-affix" };
const _hoisted_2 = { class: "my-affix-content" };
var _sfc_main = /* @__PURE__ */ vue.defineComponent({
  ...{
    name: "MyAffix"
  },
  __name: "affix",
  props: /* @__PURE__ */ vue.mergeDefaults({
    content: {}
  }, affix.AffixPropsDefaults),
  emits: ["update"],
  setup(__props, { emit: __emit }) {
    const props = __props;
    const emit = __emit;
    const inputContent = vue.ref("");
    function update() {
      emit("update", inputContent.value);
      vue.nextTick(() => {
        console.log("props: ", props);
      });
    }
    return (_ctx, _cache) => {
      return vue.openBlock(), vue.createElementBlock("div", _hoisted_1, [
        _cache[2] || (_cache[2] = vue.createElementVNode(
          "div",
          { class: "my-affix-title" },
          "affix",
          -1
          /* HOISTED */
        )),
        vue.createElementVNode(
          "div",
          _hoisted_2,
          vue.toDisplayString(_ctx.content),
          1
          /* TEXT */
        ),
        vue.createElementVNode("div", {
          class: "my-affix-update",
          onClick: update
        }, [
          vue.withDirectives(vue.createElementVNode(
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
            [vue.vModelText, inputContent.value]
          ]),
          _cache[1] || (_cache[1] = vue.createElementVNode(
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

exports.default = _sfc_main;
//# sourceMappingURL=affix.vue2.js.map
