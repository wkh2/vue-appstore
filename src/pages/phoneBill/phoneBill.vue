<template>
  <div>
    <div class="banner__telcard">
      <div class="paymethod">
         <p class="title">充值方式</p>
         <ul class="method__list">
           <li class="paymethod__china" v-for="(method, index) in methodArray" :class="{'active': payMethodIndex === index}" @click="updatePayMethodIndex(index)">{{method}}</li>           
         </ul>
      </div>
    </div>
    <div class="paymount banner__money">
      <p class="title">充值面额</p>
      <ul class="money__list">
        <li class="money__price" v-for="(data, index) in priceArray" @click="updatePriceIndex(index)" :class="{'active': priceIndex === index}">
            {{data.showPrice}}元
            <p>售价:{{data.sellPrice}}元</p>
          </li>
      </ul>
    </div>
    <div class="banner__pay banner__pay--mount">
      <p class="pay__txt pay__txt--left" @click="showAmount">
        购买数量   
        <span>{{amount}}</span>
        <img src="./img/i-mount.png" class="pay__txt--right pay__txt--mount"/>
      </p>
    </div>
    <footer class="container__footer">
      <p class="footer__price">合计: ￥{{totalAmount}}</p>
      <button class="footer__buy">立即购买</button>
    </footer>
    <transition name="fade">
      <amount-selector v-show="show" @closeSelector="closeAmount"></amount-selector>
    </transition> 
  </div>
</template>

<script>
import amountSelector from 'Components/amountSelector/amountSelector';

export default {
  data () {
    return {
      show: false,
      payMethodIndex: 0,
      methodArray: ['中国移动', '中国联通', '中国电信'],
      priceIndex: 0,
      amount: 1,
      priceArray: [
        {
          showPrice: 10,
          sellPrice: 10.03
        },
        {
          showPrice: 20,
          sellPrice: 10.03
        },
        {
          showPrice: 30,
          sellPrice: 10.03
        },
        {
          showPrice: 50,
          sellPrice: 10.03
        },
        {
          showPrice: 100,
          sellPrice: 10.03
        },
        {
          showPrice: 200,
          sellPrice: 10.03
        },
        {
          showPrice: 300,
          sellPrice: 10.03
        },
        {
          showPrice: 500,
          sellPrice: 10.03
        }
      ]
    }
  },
  methods: {
    updatePriceIndex: function (index) {
      this.priceIndex = this.priceIndex === index ? -1 : index;
    },
    updatePayMethodIndex: function (index) {
      this.payMethodIndex = this.payMethodIndex === index ? -1 : index;
    },
    showAmount: function () {
      this.show = true;
    },
    closeAmount: function (amount) {
      this.show = false;
      if (amount) {
        this.amount = amount;
      }
    }
  },
  computed: {
    totalAmount: function () {
      if (this.priceIndex === -1) {
        return 0;
      } else {
        return this.amount * this.priceArray[this.priceIndex].sellPrice;      
      }
    }
  },
  components: {
    amountSelector
  }
}
</script>

<style lang="less" rel="stylesheet/less">
@import '../../assets/css/constColor.less';

.banner__telcard {
   height: 2rem;
   padding: .1rem .2rem;
   background: @colbg; 
   border-bottom: 10px solid @colbd;
   .paymethod {
      height: 2rem;
      .title {
        font-size: 12px;
        margin: 0.2rem 0.2rem 0rem 0.2rem;
      }
      .method__list {
        display: flex;
        flex: row nowrap;
        .paymethod__china {
          flex: 1 0 0; 
          height: .8rem;
          margin: .2rem;
          font-size: 13px;      
          text-align: center;
          line-height: .8rem;
          border: 1px solid @colbor; 
          border-radius: 2px;
          &.active { 
            border: 1px solid @colred;
            color: @colred;
          }
        }
      }
    }
}
.paymount {
   height: 5.6rem;
}

.container__footer {
   position: fixed;
   bottom: 0;
   width: 100%;
   height: 1.3rem;
   font-size: 12px;
   background: @colbg;
   .footer__price {
      line-height: 1.3rem;
      text-align: right;
      padding-right: 3.8rem;
      color: @colred;
    }
    .footer__buy {
       position: absolute;
       right: 0;
       top: 0;
       width: 3.65rem;
       height: 1.3rem;
       color: @colbg;
       border: none;
       background: @coltab;
    }
}
</style>
