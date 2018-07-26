<template>
  <div class="container__amount">
    <div class="container__amount--bottom">
      <p class="title">
        数量
        <img src="./img/i-close.png" class="amount__txt--close" @click="closeAmount"/>
      </p>
      <ul class="amountPanel">
        <li v-for="value in amountArray" @click="selectAmount">{{value}}</li>
      </ul>
    </div>
  </div>
</template>

<script>
export default {
  data () {
    return {
      amountArray: []
    }
  },
  created () {
    for (let i = 0; i < 20; i++) {
      this.amountArray[i] = i + 1;
    }
  },
  methods: {
    closeAmount: function () {
      this.$emit('closeSelector');
    },
    selectAmount: function (event) {
      this.$emit('closeSelector', window.parseInt(event.target.innerHTML));
    }
  }
}
</script>

<style lang="less" rel="stylesheet/less">
@import '../../assets/css/constColor.less';

.container__amount {
   position: absolute;
   top: 0;
   bottom: 0;
   left: 0;
   right: 0;
   background: rgba(0, 0, 0, 0.75);
   z-index: 99;
   .container__amount--bottom {
     position: relative;
     top: 50%;
     height: 50%;
     background: white;
     .title {
       font-size: 12px;
       padding: 10px;
       line-height: 26px;
     }
     .amountPanel {
       text-align: center;
     }
     .amount__txt--close {
         position: absolute;
         right: .2rem;
         width: .7rem ;
         height: .6rem;
     }
     li {
       display: inline-block;
       width: 1.33rem;
       height: 1.2rem;
       margin: .22rem;
       text-align: center;
       line-height: 1.2rem;
       border: 1px solid @colbor;
       border-radius: 2px;
     }
   }     
}
</style>
