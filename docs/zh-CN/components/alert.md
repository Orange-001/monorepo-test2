# Alert

用于页面中展示重要的提示信息。

## 基础用法

Alert 组件不属于浮层元素，不会自动消失或关闭。

:::demo Alert 组件提供四种类型，由 `type` 属性指定，默认值为 `info`。

alert/basic

:::

## 使用图标

你可以通过为 Alert 组件添加图标来提高可读性。

:::demo 通过设置 `show-icon` 属性来显示 Alert 的 icon，这能更有效地向用户展示你的显示意图。

alert/icon

:::

## Alert API

### Attributes

| 名称      | 说明             | 类型                                           | 默认值 |
| --------- | ---------------- | ---------------------------------------------- | ------ |
| title     | Alert 标题       | `string`                                       | —      |
| type      | Alert 类型       | `'success' \| 'warning' \| 'info' \| 'error' ` | info   |
| closable  | 是否可以关闭     | `boolean`                                      | true   |
| show-icon | 是否显示类型图标 | `boolean`                                      | false  |

### Events

| 名称  | 说明                    | 类型                                    |
| ----- | ----------------------- | --------------------------------------- |
| close | 关闭 Alert 时触发的事件 | `Function: (event: MouseEvent) => void` |

### Slots

| 名称  | 说明       |
| ----- | ---------- |
| title | 标题的内容 |
