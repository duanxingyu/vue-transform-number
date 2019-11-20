<template>
  <div class="box">
    <div class="box-item" v-for="(item,index) in computeNumber" :key="index" :style="{background: 'url('+backgroundImage+') no-repeat center center'}">
      <span ref="numberTxt">0123456789</span>
    </div>
  </div>
</template>

<script>
export default {
  name: "VueTransformNumber",
  props: {
    //具体数值
    number: {
      type: Number,
      default: 888888,
      required: true
    },
    //自定义背景图片
    backgroundImage:{
        type:String,
        default:'../../src/assets/number_bg.png'
    },
    //设置数字位数，默认6位数
    max:{
        type:Number,
        default:6,
    }
  },
  data() {
    return {
      maxLen: 6, //设置最大位数，默认6位数
      computeNumber: [],
      timer: null //定时器
    };
  },
   //侦听器，监听number状态，如果数据发生变化，则更新视图
  watch: {
    number() {
      this.refresh();
    },
  },
  mounted() {
    this.increaseNumber();
  },
  methods: {
    //数字补零操作，返回数组
    prefixZero(num, n) {
      return (Array(n).join(0) + num).slice(-n).split("");
    },
    //获取随机数
    getRandomNumber(min, max) {
      return Math.floor(Math.random() * (max - min + 1) + min);
    },
    //设置每一数字的偏移
    setNumberTransform() {
      const that = this;
      let numberItems = this.$refs.numberTxt;
      for (let index = 0; index < numberItems.length; index++) {
        let elem = numberItems[index];
        elem.style.transform = `translate(-50%,-${Number(
          that.computeNumber[index]
        ) * 10}%)`;
      }
    },
    //定时增长数字
    increaseNumber() {
      this.refresh();
      // this.timer = setTimeout(this.increaseNumber, 5000);
    },
    //刷新数据
    refresh() {
      this.computeNumber = this.prefixZero(this.number, this.max);
      // this.computeNumber = this.prefixZero(this.number * this.getRandomNumber(1,100), this.maxLen);
      this.$nextTick(() => this.setNumberTransform());
    }
  }
};
</script>

<style lang="scss" scoped>
.box-item {
  position: relative;
  display: inline-block;
  width: 54px;
  height: 82px;
  /* 背景图片 */
//   background: url("../../src/assets/number_bg.png") no-repeat center center;
  background-size: 100% 100%;
  font-size: 62px;
  line-height: 82px;
  text-align: center;
  color: #fff;
  position: relative;
  writing-mode: vertical-lr;
  text-orientation: upright;
  overflow: hidden;
  cursor: pointer;
  user-select: none;
  margin: 0 10px;
  span {
    position: absolute;
    top: 10px;
    left: 50%;
    transform: translate(-50%, -50%);
    transition: transform 2s;
    letter-spacing: 10px;
  }
}
</style>