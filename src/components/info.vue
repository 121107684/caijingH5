<template>

  <div class="hello">
    <navhead></navhead>
    <mt-loadmore :top-method="loadTop" :bottom-method="loadBottom" :bottom-all-loaded="allLoaded" ref="loadmore">
  <div class="nametopof flbb">
    <div class="codename"><img :src="infodata.logo" alt="">{{infodata.symbol}}</div>
    <div class="thebest">
      <span>排名：{{infodata.rank}}</span>
      <span>{{infodata.category}}</span>
      <span>{{infodata.concept}}</span>
    </div>
  </div>
  <div class="numcode">
    <div class="money">
      <div class="flbb">
        <div class="w60 flbb">
            <div class="usd">¥{{infodata.price_cny}}</div>
            <span :class="hasbl?'greentt':'red'" class="codeinfo">{{infodata.percent_change_24h}}%</span>
        </div>
        <div class="w40 flbb">
          <div> 24H最高</div><div class="text-black">¥{{infodata.high}}</div>
        </div>
      </div>
      
      <!-- <div class="rmb">${{infodata.price_usd}}</div> -->
      <div class="boxcode">
         <div  class="flbb">
           <div class="w60 flbb">
            <div class="hnum">24H量</div><div class="text-black">{{infodata.volume_24h_usd}}</div>
           </div>
           <div class="w40 flbb">
              <div>24H最低</div><div class="text-black">¥{{infodata.low}}</div>
            </div>
          </div>
          
       </div>
    </div>
  </div>
  <div class="about" :class="heidata?'heidata':'heidatano'">
    <div class="elep">{{infodata.summary}}</div>
    <img v-if="heidata" src="../assets/bgwhit.png" class="bgwhite">
  </div>
  <div class="btnmore clearfix">
    <div class="morebtn" v-on:click='showorhide()'>{{moretext}}</div>
    </div>
  <div class="infolist">
    <div>
      <div class="name">货币总量</div>
      <div class="textin">{{infodata.total_amount}}</div>
    </div>
    <div>
      <div class="name">现存流通</div>
      <div class="textin">{{infodata.exist_turnover}}</div>
    </div>
    <div>
      <div class="name">发布日期</div>
      <div class="textin">{{infodata.pub_date}}</div>
    </div>
    <div>
      <div class="name">市值</div>
      <div class="textin">${{infodata.market_cap_usd}}</div>
    </div>
    <div>
      <div class="name">核心算法</div>
      <div class="textin">{{infodata.algorithm}}</div>
    </div>
    <div  v-if="infodata.whitepaper!='' && infodata.whitepaper!=null">
      <div class="name">白皮书地址</div>
      <a  class="textin" target="_blank" :href="infodata.whitepaper" >点击查看</a>
      <!-- <router-link  :to="infodata.whitepaper"  target="_blank"></router-link> -->
    </div>
   <div v-if="infodata.website!='' && infodata.website!=null ">
      <div class="name">官网地址</div>
      <a  class="textin" target="_blank" :href="infodata.website" >点击进入</a>
    </div>
    <div>
      <div class="name">主要特色</div>
      <div class="textin">{{infodata.key_features}}</div>
    </div>
  </div>



  <div class="infoother listbody">
    <div class="listtitle">
      <div class="name">市场</div>
      <div class="place">价格</div>
      <div class="cjnum">24H交易额</div>
    </div>
    <div v-for="(item,index) in codeEXinfolist" :key="index" class="listtitle child">
      <div class="name">
        <div class="othertitle">
          {{item.exchange}}<div class="small">{{item.coin_pair}}</div>
        </div>
        <div class="otherinfo">占比{{item.volume24h_percentag}}%</div>
      </div>
      <div class="place">
        <div class="usd">¥{{item.price_cny}}</div>
        <div class="rmb">${{item.price}}</div>
      </div>
      <div class="bfb">
        <div>{{item.volume24h}}</div>
      </div>
    </div>
  </div>
   </mt-loadmore>

</div>
</template>

<script>
export default {
  name: "info",
  data() {
    return {
      heidata: true,
      hasbl: true,
      infodata: {},
      codeEXinfolist: [],
      moretext: "查看更多",
      codeEXinfolist:"",
      codekey:[],
      allLoaded: true
    };
  },
  created:function(){
    window.scrollTo(0,0)
    this.$options.methods.onloaddata(this);
     this.refresh = setInterval(()=>{
      this.$options.methods.onloaddata(this);
    },5000)
    document.documentElement.scrollTop =0;    
    document.body.scrollTop = 0; 
  },
  destroyed:function(){
    clearInterval(this.refresh)
  },
  methods: {
    handleChange(index) {},
    onloaddata:function(that){
      that.$ajax.get("/getCoinExchangeList/" + that.$route.query.id + "/" + Trim(that.$route.query.title,'g'))
      .then(res=>{
        that.codeEXinfolist = res.data.data
      })
    that.$ajax.get("/getCoinDetails/" + that.$route.query.id + "/" + Trim(that.$route.query.title,'g'))
      .then(res=>{
        that.infodata = res.data.data;
        if(res.data.data.key_features!=null && res.data.data.key_features!=""){
            that.codekey = res.data.data.key_features.split('，')
        }
        
      })
    },
    showorhide: function() {
      this.heidata = this.heidata ? false : true;
      this.moretext = this.heidata ? "查看更多" : "点击收起";
    },
    loadTop() {
      this.$refs.loadmore.onTopLoaded();
      this.$options.methods.onloaddata(this);
    },
    loadBottom() {
      this.allLoaded = true; // 若数据已全部获取完毕
      this.$refs.loadmore.onBottomLoaded();
    }
  }
};
function Trim(str, is_global) {
  var result;
  result = str.replace(/(^\s+)|(\s+$)/g, "");
  if (is_global.toLowerCase() == "g") {
    result = result.replace(/\s/g, "");
  }
  return result;
}
</script>

<style scoped>
.w60{
  flex: 5;
  font-size: 1.4rem;
  line-height: 2.2rem
}
.w40{
  flex: 4;
  font-size: 1.4rem;
  line-height: 2.2rem;
  padding-top:8px
}
.nametopof {
  padding-top: 1rem
}
.w60 .usd{
  flex: 2
}
.w40>div, .w60>div{
  flex: 1;
  text-align: left;
  line-height:20px;
  font-size: 14px
}
.hello{
  background-color: #fcfcfc;
}
.numcode {
  display: flex;
  background-color: #fff;
  padding-top: 1rem;
}
.nametopof .codename{

  font-size:18px;
  font-weight: bold;
  text-align: left;
  text-indent: 4px
}
.nametopof .codename img{
  width:22px;
  height: auto;
  display: inline-block;
  float:left;
  margin-left: 1rem
}
.thebest span {
  display: flex;
  justify-content: center;
  align-items: center;
  line-height:20px;
  font-size: 12px;
  text-align: center;
  background-color: #F43530;
  color: #fff;
  margin:0 2px;
  padding: 0 5px;
  border-radius: 3px;
  text-overflow: ellipsis;
float: left;
  overflow: hidden;
}
.thebest {
  flex: 1;
  padding:0 1rem
}
.money,
.boxcode,
.aboutnum {
  flex: 1;
  padding: 40rpx 0rpx 0rpx 0rpx;
}
.boxcode>.flbb{
  height: 2.6rem;
}

.money {
  padding-left: 15px;
  margin-top: -6px;
  line-height: 1.2;
  box-sizing: border-box
}
.money .usd {
  font-size:24px;
  line-height:26px;
}
.money>.flbb{
  height:26px;
}
.codeinfo {
  padding-top: .8rem;
  font-size:16px;
  color: #f43530;
  flex: 1;
  text-align: left;
  line-height: 1
}
.codeinfo.greentt {
  color: #00c203;
}
.aboutnum {
  font-size: 1.6rem;
  text-align: left;
  line-height: 2.6rem
}
.aboutnum {
  color: #999;
}
.heidata {
  height:8.2rem;
}
.heidatano {
  height: auto;
}
.text-black {
  display: inline;
  color: #353535;
}
.about {
  padding:10px 15px;
  color: #353535;
  background-color: #fff;
  overflow: hidden;
  transform: all 0.5s;
  box-shadow:0px -20px 20px #fff inset;
  position: relative;
}
.about .elep {
  font-size: 14px;
  text-align: left;
}
.about .bgwhite {
  width: 100%;
  height: 40px;
  position: absolute;
  bottom: 0;
  left: 0;
}
:root .bgwhite{filter:none;}
.btnmore {
  background-color: #fff;
  font-size: 14px;
  line-height: 34px;
}
.btnmore .morebtn {
  font-size: 14px;
  padding-right: 14px;
  line-height: 2;
  float: right;
  color: #586c94;
}
.infolist {
  margin-top:8px;
  background-color: #fff;
  font-size: 14px;
}
.infolist > div {
  height: 44px;
  border-bottom: 1px solid #e5e5e5;
  display: flex;
}
.infolist .name {
  flex: 1;
  line-height: 44px;
  color: #999;
  padding-left: 14px;
  text-align: left;
  font-size: 16px
}
.infolist .textin {
  flex: 3;
  line-height: 44px;
  color: #666;
  text-align: right;
  padding-right: 14px;
  font-size: 16px
}
.infolist a.textin {
  color: #498fe0;
  text-decoration: none
}
.infolist > div:last-child {
  display: block;
  height: auto;
  border-bottom: none;
}
.infolist > div:last-child .name {
  line-height: 1.5;
  padding-top: 10px;
}
.infolist > div:last-child .textin {
  text-align: left;
  padding-left: 14px;
  line-height: 1.5;
  font-size: 14px;
  padding-bottom: 10px;
}
.infoother {
  margin-top: 15px;
}
.listbody .listtitle:first-child .name,
.listbody .listtitle:first-child .place,
.listbody .listtitle:first-child .cjnum {
  line-height: 44px;
}
.listbody .listtitle:first-child .name{
  text-align: left;
  text-indent: 1rem
}
.listbody .listtitle:first-child .place{
  text-indent: 1.8rem;
  text-align: left
}
.listbody .listtitle > div {
  line-height: 1.5;
}
.listbody .listtitle > div.name {
  flex: 2;
}
.listtitle .name .othertitle {
  display: flex;
}
.listbody .child {
  padding: 6px 0px 3px;
}
.listbody .listtitle>div{
  font-size: 16px
}
.listbody .child .othertitle,
.listbody .child .place .usd {
  font-size:16px;
  color: #333;
  text-align: left;
  text-indent: 1rem;
}
.listbody .child .othertitle .small,
.listbody .child .place .rmb {
  font-size:12px;
  color: #999;
  line-height: 1;
  margin-top:.5rem;
  text-align: left;
   text-indent: 1rem
}
.listbody .child .otherinfo {
  padding-top: .5rem;
  font-size:1.2rem;
  color: #999;
  line-height: 1;
  text-align: left;
   text-indent: 1rem
}
.listbody .listtitle.child .bfb div {
  line-height:4rem;
  font-size:1.6rem;
}
</style>