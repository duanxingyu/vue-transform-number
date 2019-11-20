# vue-number-transform

> 数字滚动组件

## 安装

``` bash
# 安装组件
npm install vue-transform-number
```
## 参数
| 参数名 | 说明 | 类型 | 默认值|
| --- | --- | --- |---| --- |
|number|滚动数字值|Number|888888|
|background-image|自定义背景图片|String|--|
|max|最大位数|Number|6|

## 示例
```
<template>
  <div id="app">
      <VueTransformNumber :number="number" :background-image="backgroundImage"></VueTransformNumber>
  </div>
</template>

<script>
export default {
  name: "app",
  data() {
    return {
      number: 15055,
      backgroundImage:require("./assets/logo.png")
    };
  },
  mounted() {
    let number = this.number;
    setInterval(() => {
      this.number = this.getRandomNumber(1, 10) * number;
    }, 5000);
  },
  methods: {
    //获取随机数
    getRandomNumber(min, max) {
      return Math.floor(Math.random() * (max - min + 1) + min);
    }
  }
};
</script>

```

