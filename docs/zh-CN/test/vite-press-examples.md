# test

## GitHub 风格的表格

| Tables        |      Are      |  Cool |
| ------------- | :-----------: | ----: |
| col 3 is      | right-aligned | $1600 |
| col 2 is      |   centered    |   $12 |
| zebra stripes |   are neat    |    $1 |

## 链接

[Home](/)

## 自定义组件

Affix is fixed at the top of the page by default.

:::demo You can set `offset` attribute to change the offset top，the default value is 0.

affix/basic

:::

## GitHub 风格的警报

> [!NOTE]
> 强调用户在快速浏览文档时也不应忽略的重要信息。

> [!TIP]
> 有助于用户更顺利达成目标的建议性信息。

> [!IMPORTANT]
> 对用户达成目标至关重要的信息。

> [!WARNING]
> 因为可能存在风险，所以需要用户立即关注的关键内容。

> [!CAUTION]
> 行为可能带来的负面影响。

## 代码块

```js{1,5-6}:line-numbers {1}
export default {
  data () {
    return {
      msg: `Highlighted! // [!code highlight] // [!code warning]
      This line isn't highlighted, // [!code error]
      but this and the next 2 are.`, // [!code --]
      motd: 'VitePress is awesome', // [!code focus]  // [!code ++]
      lorem: 'ipsum'
    }
  }
}
```

## 导入代码片段

::: details
<<< @/.vitepress/examples/alert/basic.vue{2}
:::
