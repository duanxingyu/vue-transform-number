<template>
  <div id="app">
      <VueTransformNumber :number="number" :background-image="backgroundImage" :max="max"></VueTransformNumber>
  </div>
</template>

<script>
export default {
  name: "app",
  data() {
    return {
      number: 15055,
      max:6,
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

<style lang="scss">
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
