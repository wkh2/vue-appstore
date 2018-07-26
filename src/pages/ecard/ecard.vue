<template>
  <div>
    <div class="banner__money">
			<p class="title">充值面额</p>
			<ul class="money__list">
				<li class="money__price" v-for="(data, index) in dataArray" @click="updateCurIndex(index)" :class="{'active': currentIndex === index}">
           {{data.showPrice}}元
           <p>售价:{{data.sellPrice}}元</p>
        </li>
			</ul>
		</div>
		<div class="banner__pay">
			<p class="pay__txt title">充值方式<img src="./img/i-card.png" class="pay__txt--img"/><span>卡密</span></p>
			<p class="pay__txt title" @click="showAmount">
        购买数量
        <span>{{amount}}</span>
        <img src="./img/i-mount.png" class="pay__txt--right"/>
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
      currentIndex: 0,
      amount: 1,
      dataArray: [
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
  computed: {
    totalAmount: function () {
      if (this.currentIndex === -1) {
        return 0;
      } else {
        return this.amount * this.dataArray[this.currentIndex].sellPrice;      
      }
    }
  },
  methods: {
    updateCurIndex: function (index) {
      this.currentIndex = this.currentIndex === index ? -1 : index;
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
  components: {
    amountSelector
  }
}
</script>

<style lang="less" rel="stylesheet/less">
@import '../../assets/css/constColor.less';

.fade-enter-active, .fade-leave-active {
  transition: opacity .5s
}
.fade-enter, .fade-leave-active {
  opacity: 0
}

.banner__money {  
  position: relative;
  height: 3.93rem;
  padding: .1rem;
  background: @colbg;
  border-bottom: 10px solid @colbd;
  .title {
    font-size: 12px;
    margin: 0.2rem 0.2rem 0rem 0.2rem;
  }
  .money__list {
    display: flex;
    flex-flow: row wrap;
    justify-content: flex-start;
  }
  .money__price {
    display: flex;
    flex-flow: column nowrap;
    justify-content: center;
    height: 1.1rem;
    margin: .2rem .15rem;
    padding: .03rem 0;
    flex: 0 0 29%;
    text-align: center;
    border: 1px solid @colbor;
    border-radius:2px;
    &.active {
      border: 1px solid @colred;
      color: @colred;
    }
    p {
      font-size: .09rem;
    }
  }
}
.banner__pay {
   position: relative;
   padding: .07rem .2rem;
   line-height: 1.2rem;
   background: @colbg;
   .pay__txt {
      height: 50%;
      padding: .01rem 0;
      border-bottom: 1px solid @colbd; 
      .pay__txt--img {
        position: relative;
        left: .5rem;
        top: -.05rem;
        width: .7rem;
        height: .6rem;      
        }
        span {
         margin-left: .5rem;
        }
    }
    .pay__txt:last-child {
      border-bottom: 0px;
    }
    .pay__txt--left {
        border-bottom: none;
    }
    .pay__txt--right {
       position: absolute;
       right: 0;
       top: 1.8rem;
       width: .8rem;
       height: .4rem;
    }
    .pay__txt--mount {
        top: .5rem;
    }
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
