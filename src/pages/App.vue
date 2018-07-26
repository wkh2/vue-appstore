<template>
  <div class="containner">
    <section class="container__banner" id="container__banner">
      <swiper :images-src="swiperSrc" :link-array="linkArray" :item-class="swiperClass"></swiper>
      <div class="banner__tab">
        <ul class="banner__list">
          <li class="tab__item" @click="switchTab('ecard')" :class="{'cur': currentTab === 'ecard'}">
            <div class="tab__text">App Store电子卡</div>
          </li>			
          <li class="tab__item" @click="switchTab('entityCard')" :class="{'cur': currentTab === 'entityCard'}">
            <div class="tab__text">APP Store实体卡</div>
          </li>
          <li class="tab__item" @click="switchTab('phoneBill')" :class="{'cur': currentTab === 'phoneBill'}">
            <div class="tab__text">话费卡密</div>
          </li>
        </ul>
      </div>
    </section>
    <keep-alive>
      <component :is="currentTab"></component>
    </keep-alive>
  </div>
</template>

<script>
import ecard from 'Pages/ecard/ecard';
import entityCard from 'Pages/entityCard/entityCard';
import phoneBill from 'Pages/phoneBill/phoneBill';
import swiper from 'Components/swiper/swiper';

export default {
  name: 'containner',
  data () {
    return {
      currentTab: 'ecard',
      swiperClass: 'banner__img',
      linkArray: ['http://www.baidu.com', '#', '#'],
      swiperSrc: ['http://localhost:8080/src/assets/images/banner.png','http://localhost:8080/src/assets/images/banner.png','http://localhost:8080/src/assets/images/banner.png']
    }
  },
  methods: {
    switchTab: function (tabIndex) {
      this.currentTab = tabIndex;
    }
  },
  components: {
    ecard, entityCard, phoneBill, swiper
  }
}
</script>

<style lang="less" rel="stylesheet/less">
@import '../assets/css/constColor.less';

body {
  background: @colbd; 
}

.container {
  font-size: 14px;
}

.container__top {
  height: .93rem;
  font-size: 16px;
  text-align: center;
  line-height: .93rem;
  header {
    height: .93rem;
    background:@colbg url('../assets/images/i-back.png') no-repeat .2rem .25rem;
    background-size: .7rem .5rem;   
  }
  .top__right {
    position: absolute;
    right: .2rem;
    top: .18rem; 
    width: .62rem;
    height: .62rem;
  }
}

.container__banner {
  .banner__tab {
    height: 1.21rem;
    text-align: center;
    border-bottom: 1px solid @colbd;
    background-color: @colbg;

    .banner__list {
      display: flex;
      .tab__item {
        flex: 1 1 0;
        line-height: 1.21rem;
        text-align: center;
        &.cur .tab__text {
          color: @coltab;
          border-bottom: 2px solid @coltab;
        }
        .tab__text {
          display: inline-block;
        }
      }
    }
  }
}
</style>
