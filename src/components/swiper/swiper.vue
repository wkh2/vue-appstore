<template>
  <div :class="containerClass" class="swiper-container">
    <div class="swiper-wrapper">
      <a class="swiper-slide" :href="link" v-for="(link, index) in linkArray" :class="itemClass">
        <img :src="imagesSrc[index]"/>
      </a>
    </div>
    <div :class="paginationClass" class="swiper-pagination"></div>
  </div>
</template>

<script>
import Swiper from 'Utils/swiper-3.3.1.js';

// 本组件需要传入三个参数， 一个是跳转的a链接数组，一个是图片的src地址数组，itemClass可选
export default {
  props: {
    linkArray: {
      type: Array,
      default: [],
      required: true
    },
    imagesSrc: {
      type: Array,
      default: ['http://localhost:8080/src/assets/images/banner.png','http://localhost:8080/src/assets/images/banner.png','http://localhost:8080/src/assets/images/banner.png'],
      required: true
    },
    itemClass: {
      type: String,
      default: ''
    }
  },
  data () {
    return {
      containerClass: 'swiper-container',
      paginationClass: 'swiper-pagination'
    }
  },
  created () {
    // 计算与1970年相差的毫秒数，获取毫秒级精度的唯一时间
    let timestamp = (new Date()).valueOf();
    // 确保唯一，再加一个随机数
    let random = Math.random() * 10000;
    // 去除小数点，使selector合法
    random = random.toString().replace(/\./g, '-');
    this.containerClass = this.containerClass + timestamp + random;
    this.paginationClass = this.paginationClass + timestamp + random;
  },
  mounted () {
    let swiper = new Swiper('.' + this.containerClass, {
      pagination: '.' + this.paginationClass,
      paginationClickable: true
    });
  }
}
</script>

<style lang="less">
@import './swiper.css';

.swiper-container-horizontal>.swiper-pagination-bullets {
  bottom: 2px;
}
</style>
