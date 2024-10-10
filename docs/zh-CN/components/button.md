# Button按钮

常用的操作按钮。

## 基础用法

:::demo 使用 `type`、`disabled` 来定义按钮的样式。

button/basic

:::

## 禁用状态

你可以使用 `disabled` 属性来定义按钮是否被禁用。
:::demo 使用 `disabled` 属性来控制按钮是否为禁用状态。 该属性接受一个 `Boolean` 类型的值。

button/disabled

:::

## Button API

### Button 属性

| 属性名   | 说明               | 类型                                                      | 默认值 |
| -------- | ------------------ | --------------------------------------------------------- | ------ |
| type     | 类型               | `primary` \| `success` \| `warning` \| `danger` \| `info` | —      |
| disabled | 按钮是否为禁用状态 | `boolean`                                                 | false  |

### Button 插槽

| 插槽名  | 说明           |
| ------- | -------------- |
| default | 自定义默认内容 |
