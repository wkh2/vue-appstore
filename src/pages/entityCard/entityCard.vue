<template>
  <div class="banner__imgcard">
    <ul class="banner__imgcard--all">
						<li>
							<img src="./img/a88.png"/>
							<p>App Store充值卡</p><span>面值88元</span>
							<div>立即购买</div>
						</li>
						<li>
							<img src="./img/a100.png"/>
							<p>App Store充值卡</p><span>面值100元</span>
							<div>立即购买</div>
						</li>
					</ul>
					<ul class="banner__imgcard--all">
						<li>
							<img src="./img/a200.png"/>
							<p>App Store充值卡</p><span>面值200元</span>
							<div>立即购买</div>
						</li>		
						<li>
							<img src="./img/a500.png"/>
							<p>App Store充值卡</p><span>面值500元</span>
							<div>立即购买</div>
						</li>
					</ul>
  </div>
</template>

<script>
export default {
  data () {
    return {}
  }
}
</script>

<style lang="less" rel="stylesheet/less">
@import '../../assets/css/constColor.less';

.banner__pay--mount {
    height: 1.2rem;
}  
.banner__imgcard {
   position: relative;
   height: 15rem;
   margin-top: .01rem;
   font-size: 12px; 
   border-bottom: 1px solid @colbd;
   background: @colbg; 
   .banner__imgcard--all {
       display: inline-flex;
       height: 7rem;
       margin: .3rem .7rem;
       li {
         position: relative;
         width: 3.1rem;
         height: 4.6rem;
         margin: 0 .6rem;
         :last-child {
            width: 3.01rem;
            height: .72rem;
            margin-top: .15rem;
            color: @colbd;
            line-height: .72rem;
            text-align: center;
            background-color: @colred;
           }           
        } 
    }
} 
</style>
