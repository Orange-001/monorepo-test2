/*! My Ui Lib */

(function (global, factory) {
  typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports, require('vue')) :
  typeof define === 'function' && define.amd ? define(['exports', 'vue'], factory) :
  (global = typeof globalThis !== 'undefined' ? globalThis : global || self, factory(global.MyUiLib = {}, global.Vue));
})(this, (function (exports, vue) { 'use strict';

  const INSTALLED_KEY = Symbol("INSTALLED_KEY");
  const makeInstaller = (components = []) => {
    const install = (app) => {
      if (app[INSTALLED_KEY]) return;
      app[INSTALLED_KEY] = true;
      components.forEach((c) => app.use(c));
    };
    return {
      install
    };
  };

  const AffixPropsDefaults = {
    content: "123"
  };

  const _hoisted_1$1 = { class: "my-affix" };
  const _hoisted_2$1 = { class: "my-affix-content" };
  var _sfc_main$3 = /* @__PURE__ */ vue.defineComponent({
    ...{
      name: "MyAffix"
    },
    __name: "affix",
    props: /* @__PURE__ */ vue.mergeDefaults({
      content: {}
    }, AffixPropsDefaults),
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
        return vue.openBlock(), vue.createElementBlock("div", _hoisted_1$1, [
          _cache[2] || (_cache[2] = vue.createElementVNode(
            "div",
            { class: "my-affix-title" },
            "affix",
            -1
            /* HOISTED */
          )),
          vue.createElementVNode(
            "div",
            _hoisted_2$1,
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

  const withInstall$1 = (main, extra) => {
    main.install = (app) => {
      for (const comp of [main, ...Object.values({})]) {
        app.component(comp.name, comp);
      }
    };
    return main;
  };

  const MyAffix = withInstall$1(_sfc_main$3);

  !!(process.env.NODE_ENV !== "production") ? Object.freeze({}) : {};
  !!(process.env.NODE_ENV !== "production") ? Object.freeze([]) : [];
  const hasOwnProperty = Object.prototype.hasOwnProperty;
  const hasOwn = (val, key) => hasOwnProperty.call(val, key);
  const isString = (val) => typeof val === "string";
  const isObject = (val) => val !== null && typeof val === "object";

  function fromPairs(pairs) {
    var index = -1, length = pairs == null ? 0 : pairs.length, result = {};
    while (++index < length) {
      var pair = pairs[index];
      result[pair[0]] = pair[1];
    }
    return result;
  }

  const isUndefined = (val) => val === void 0;
  const isNumber = (val) => typeof val === "number";
  const isStringNumber = (val) => {
    if (!isString(val)) {
      return false;
    }
    return !Number.isNaN(Number(val));
  };

  class ElementPlusError extends Error {
    constructor(m) {
      super(m);
      this.name = "ElementPlusError";
    }
  }
  function debugWarn(scope, message) {
    if (process.env.NODE_ENV !== "production") {
      const error = isString(scope) ? new ElementPlusError(`[${scope}] ${message}`) : scope;
      console.warn(error);
    }
  }

  const SCOPE = "utils/dom/style";
  function addUnit(value, defaultUnit = "px") {
    if (!value)
      return "";
    if (isNumber(value) || isStringNumber(value)) {
      return `${value}${defaultUnit}`;
    } else if (isString(value)) {
      return value;
    }
    debugWarn(SCOPE, "binding value must be a string or number");
  }

  var circle_close_filled_vue_vue_type_script_setup_true_lang_default = /* @__PURE__ */ vue.defineComponent({
    name: "CircleCloseFilled",
    __name: "circle-close-filled",
    setup(__props) {
      return (_ctx, _cache) => (vue.openBlock(), vue.createElementBlock("svg", {
        xmlns: "http://www.w3.org/2000/svg",
        viewBox: "0 0 1024 1024"
      }, [
        vue.createElementVNode("path", {
          fill: "currentColor",
          d: "M512 64a448 448 0 1 1 0 896 448 448 0 0 1 0-896m0 393.664L407.936 353.6a38.4 38.4 0 1 0-54.336 54.336L457.664 512 353.6 616.064a38.4 38.4 0 1 0 54.336 54.336L512 566.336 616.064 670.4a38.4 38.4 0 1 0 54.336-54.336L566.336 512 670.4 407.936a38.4 38.4 0 1 0-54.336-54.336z"
        })
      ]));
    }
  });
  var circle_close_filled_default = circle_close_filled_vue_vue_type_script_setup_true_lang_default;
  var close_vue_vue_type_script_setup_true_lang_default = /* @__PURE__ */ vue.defineComponent({
    name: "Close",
    __name: "close",
    setup(__props) {
      return (_ctx, _cache) => (vue.openBlock(), vue.createElementBlock("svg", {
        xmlns: "http://www.w3.org/2000/svg",
        viewBox: "0 0 1024 1024"
      }, [
        vue.createElementVNode("path", {
          fill: "currentColor",
          d: "M764.288 214.592 512 466.88 259.712 214.592a31.936 31.936 0 0 0-45.12 45.12L466.752 512 214.528 764.224a31.936 31.936 0 1 0 45.12 45.184L512 557.184l252.288 252.288a31.936 31.936 0 0 0 45.12-45.12L557.12 512.064l252.288-252.352a31.936 31.936 0 1 0-45.12-45.184z"
        })
      ]));
    }
  });
  var close_default = close_vue_vue_type_script_setup_true_lang_default;
  var info_filled_vue_vue_type_script_setup_true_lang_default = /* @__PURE__ */ vue.defineComponent({
    name: "InfoFilled",
    __name: "info-filled",
    setup(__props) {
      return (_ctx, _cache) => (vue.openBlock(), vue.createElementBlock("svg", {
        xmlns: "http://www.w3.org/2000/svg",
        viewBox: "0 0 1024 1024"
      }, [
        vue.createElementVNode("path", {
          fill: "currentColor",
          d: "M512 64a448 448 0 1 1 0 896.064A448 448 0 0 1 512 64m67.2 275.072c33.28 0 60.288-23.104 60.288-57.344s-27.072-57.344-60.288-57.344c-33.28 0-60.16 23.104-60.16 57.344s26.88 57.344 60.16 57.344M590.912 699.2c0-6.848 2.368-24.64 1.024-34.752l-52.608 60.544c-10.88 11.456-24.512 19.392-30.912 17.28a12.992 12.992 0 0 1-8.256-14.72l87.68-276.992c7.168-35.136-12.544-67.2-54.336-71.296-44.096 0-108.992 44.736-148.48 101.504 0 6.784-1.28 23.68.064 33.792l52.544-60.608c10.88-11.328 23.552-19.328 29.952-17.152a12.8 12.8 0 0 1 7.808 16.128L388.48 728.576c-10.048 32.256 8.96 63.872 55.04 71.04 67.84 0 107.904-43.648 147.456-100.416z"
        })
      ]));
    }
  });
  var info_filled_default = info_filled_vue_vue_type_script_setup_true_lang_default;
  var success_filled_vue_vue_type_script_setup_true_lang_default = /* @__PURE__ */ vue.defineComponent({
    name: "SuccessFilled",
    __name: "success-filled",
    setup(__props) {
      return (_ctx, _cache) => (vue.openBlock(), vue.createElementBlock("svg", {
        xmlns: "http://www.w3.org/2000/svg",
        viewBox: "0 0 1024 1024"
      }, [
        vue.createElementVNode("path", {
          fill: "currentColor",
          d: "M512 64a448 448 0 1 1 0 896 448 448 0 0 1 0-896m-55.808 536.384-99.52-99.584a38.4 38.4 0 1 0-54.336 54.336l126.72 126.72a38.272 38.272 0 0 0 54.336 0l262.4-262.464a38.4 38.4 0 1 0-54.272-54.336z"
        })
      ]));
    }
  });
  var success_filled_default = success_filled_vue_vue_type_script_setup_true_lang_default;
  var warning_filled_vue_vue_type_script_setup_true_lang_default = /* @__PURE__ */ vue.defineComponent({
    name: "WarningFilled",
    __name: "warning-filled",
    setup(__props) {
      return (_ctx, _cache) => (vue.openBlock(), vue.createElementBlock("svg", {
        xmlns: "http://www.w3.org/2000/svg",
        viewBox: "0 0 1024 1024"
      }, [
        vue.createElementVNode("path", {
          fill: "currentColor",
          d: "M512 64a448 448 0 1 1 0 896 448 448 0 0 1 0-896m0 192a58.432 58.432 0 0 0-58.24 63.744l23.36 256.384a35.072 35.072 0 0 0 69.76 0l23.296-256.384A58.432 58.432 0 0 0 512 256m0 512a51.2 51.2 0 1 0 0-102.4 51.2 51.2 0 0 0 0 102.4"
        })
      ]));
    }
  });
  var warning_filled_default = warning_filled_vue_vue_type_script_setup_true_lang_default;
  /*! Bundled license information:

  @element-plus/icons-vue/dist/index.js:
    (*! Element Plus Icons Vue v2.3.1 *)
  */

  const epPropKey = "__epPropKey";
  const definePropType = (val) => val;
  const isEpProp = (val) => isObject(val) && !!val[epPropKey];
  const buildProp = (prop, key) => {
    if (!isObject(prop) || isEpProp(prop))
      return prop;
    const { values, required, default: defaultValue, type, validator } = prop;
    const _validator = values || validator ? (val) => {
      let valid = false;
      let allowedValues = [];
      if (values) {
        allowedValues = Array.from(values);
        if (hasOwn(prop, "default")) {
          allowedValues.push(defaultValue);
        }
        valid || (valid = allowedValues.includes(val));
      }
      if (validator)
        valid || (valid = validator(val));
      if (!valid && allowedValues.length > 0) {
        const allowValuesText = [...new Set(allowedValues)].map((value) => JSON.stringify(value)).join(", ");
        vue.warn(`Invalid prop: validation failed${key ? ` for prop "${key}"` : ""}. Expected one of [${allowValuesText}], got value ${JSON.stringify(val)}.`);
      }
      return valid;
    } : void 0;
    const epProp = {
      type,
      required: !!required,
      validator: _validator,
      [epPropKey]: true
    };
    if (hasOwn(prop, "default"))
      epProp.default = defaultValue;
    return epProp;
  };
  const buildProps = (props) => fromPairs(Object.entries(props).map(([key, option]) => [
    key,
    buildProp(option, key)
  ]));

  const withInstall = (main, extra) => {
    main.install = (app) => {
      for (const comp of [main, ...Object.values({})]) {
        app.component(comp.name, comp);
      }
    };
    return main;
  };

  const defaultNamespace = "el";
  const statePrefix = "is-";
  const _bem = (namespace, block, blockSuffix, element, modifier) => {
    let cls = `${namespace}-${block}`;
    if (blockSuffix) {
      cls += `-${blockSuffix}`;
    }
    if (element) {
      cls += `__${element}`;
    }
    if (modifier) {
      cls += `--${modifier}`;
    }
    return cls;
  };
  const namespaceContextKey = Symbol("namespaceContextKey");
  const useGetDerivedNamespace = (namespaceOverrides) => {
    const derivedNamespace = (vue.getCurrentInstance() ? vue.inject(namespaceContextKey, vue.ref(defaultNamespace)) : vue.ref(defaultNamespace));
    const namespace = vue.computed(() => {
      return vue.unref(derivedNamespace) || defaultNamespace;
    });
    return namespace;
  };
  const useNamespace = (block, namespaceOverrides) => {
    const namespace = useGetDerivedNamespace();
    const b = (blockSuffix = "") => _bem(namespace.value, block, blockSuffix, "", "");
    const e = (element) => element ? _bem(namespace.value, block, "", element, "") : "";
    const m = (modifier) => modifier ? _bem(namespace.value, block, "", "", modifier) : "";
    const be = (blockSuffix, element) => blockSuffix && element ? _bem(namespace.value, block, blockSuffix, element, "") : "";
    const em = (element, modifier) => element && modifier ? _bem(namespace.value, block, "", element, modifier) : "";
    const bm = (blockSuffix, modifier) => blockSuffix && modifier ? _bem(namespace.value, block, blockSuffix, "", modifier) : "";
    const bem = (blockSuffix, element, modifier) => blockSuffix && element && modifier ? _bem(namespace.value, block, blockSuffix, element, modifier) : "";
    const is = (name, ...args) => {
      const state = args.length >= 1 ? args[0] : true;
      return name && state ? `${statePrefix}${name}` : "";
    };
    const cssVar = (object) => {
      const styles = {};
      for (const key in object) {
        if (object[key]) {
          styles[`--${namespace.value}-${key}`] = object[key];
        }
      }
      return styles;
    };
    const cssVarBlock = (object) => {
      const styles = {};
      for (const key in object) {
        if (object[key]) {
          styles[`--${namespace.value}-${block}-${key}`] = object[key];
        }
      }
      return styles;
    };
    const cssVarName = (name) => `--${namespace.value}-${name}`;
    const cssVarBlockName = (name) => `--${namespace.value}-${block}-${name}`;
    return {
      namespace,
      b,
      e,
      m,
      be,
      em,
      bm,
      bem,
      is,
      cssVar,
      cssVarName,
      cssVarBlock,
      cssVarBlockName
    };
  };

  var _export_sfc = (sfc, props) => {
    const target = sfc.__vccOpts || sfc;
    for (const [key, val] of props) {
      target[key] = val;
    }
    return target;
  };

  const iconProps = buildProps({
    size: {
      type: definePropType([Number, String])
    },
    color: {
      type: String
    }
  });

  const __default__ = vue.defineComponent({
    name: "ElIcon",
    inheritAttrs: false
  });
  const _sfc_main$2 = /* @__PURE__ */ vue.defineComponent({
    ...__default__,
    props: iconProps,
    setup(__props) {
      const props = __props;
      const ns = useNamespace("icon");
      const style = vue.computed(() => {
        const { size, color } = props;
        if (!size && !color)
          return {};
        return {
          fontSize: isUndefined(size) ? void 0 : addUnit(size),
          "--color": color
        };
      });
      return (_ctx, _cache) => {
        return vue.openBlock(), vue.createElementBlock("i", vue.mergeProps({
          class: vue.unref(ns).b(),
          style: vue.unref(style)
        }, _ctx.$attrs), [
          vue.renderSlot(_ctx.$slots, "default")
        ], 16);
      };
    }
  });
  var Icon = /* @__PURE__ */ _export_sfc(_sfc_main$2, [["__file", "icon.vue"]]);

  const ElIcon = withInstall(Icon);

  const AlertPropsDefaults = {
    type: "info",
    closable: true
  };

  const _hoisted_1 = { class: "my-alert-content" };
  const _hoisted_2 = { class: "my-alert-title" };
  var _sfc_main$1 = /* @__PURE__ */ vue.defineComponent({
    ...{ name: "MyAlert" },
    __name: "alert",
    props: /* @__PURE__ */ vue.mergeDefaults({
      title: {},
      type: {},
      closable: { type: Boolean },
      showIcon: { type: Boolean }
    }, AlertPropsDefaults),
    emits: ["close"],
    setup(__props, { emit: __emit }) {
      const emit = __emit;
      const visible = vue.ref(true);
      const TypeComponentsMap = {
        success: success_filled_default,
        warning: warning_filled_default,
        error: circle_close_filled_default,
        info: info_filled_default
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
                _ctx.showIcon && iconComponent.value ? (vue.openBlock(), vue.createBlock(vue.unref(ElIcon), {
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
                  _ctx.closable ? (vue.openBlock(), vue.createBlock(vue.unref(ElIcon), {
                    key: 0,
                    class: "my-alert-close-btn",
                    onClick: close
                  }, {
                    default: vue.withCtx(() => [
                      vue.createVNode(vue.unref(close_default))
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

  const MyAlert = withInstall$1(_sfc_main$1);

  const ButtonPropsDefaults = {
    type: "primary",
    disabled: false
  };

  var _sfc_main = /* @__PURE__ */ vue.defineComponent({
    ...{
      name: "MyButton"
    },
    __name: "button",
    props: /* @__PURE__ */ vue.mergeDefaults({
      type: {},
      disabled: { type: Boolean }
    }, ButtonPropsDefaults),
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

  const MyButton = withInstall$1(_sfc_main);

  var Components = [
    //
    MyAffix,
    MyAlert,
    MyButton
  ];

  var installer = makeInstaller([...Components]);

  const install = installer.install;

  exports.AffixPropsDefaults = AffixPropsDefaults;
  exports.AlertPropsDefaults = AlertPropsDefaults;
  exports.ButtonPropsDefaults = ButtonPropsDefaults;
  exports.MyAffix = MyAffix;
  exports.MyAlert = MyAlert;
  exports.MyButton = MyButton;
  exports.default = installer;
  exports.install = install;
  exports.makeInstaller = makeInstaller;

  Object.defineProperty(exports, '__esModule', { value: true });

}));
