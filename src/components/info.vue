<template>
  <div class="hello">
    <mt-loadmore :top-method="loadTop" :bottom-method="loadBottom" :bottom-all-loaded="allLoaded" ref="loadmore">
  <div class="nametopof flbb">
    <div class="codename"><img :src="infodata.logo" alt="">{{infodata.symbol}}</div>
    <div class="thebest flbb" v-if="codekey.length>0">
      <span v-for="(item,index) in codekey" :key="index">{{item}}</span>
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
            <div>24H量</div><div class="text-black">{{infodata.volume_24h_usd}}</div>
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
  </div>
  <div class="btnmore">
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
      <div class="cjnum">24H交易量</div>
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
    this.$options.methods.onloaddata(this);
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
  line-height: 2.2rem
}
.nametopof {
  padding-top: 1rem
}
.w40>div, .w60>div{
  flex: 1;
  text-align: left;
  line-height: 2.6rem
}
.hello{
  background-color: #fff;
}
.numcode {
  display: flex;
  background-color: #fff;
  padding-top: 1rem;
}
.nametopof .codename{
  width: 30vw;
  font-size: 2.2rem;
  font-weight: bold;
}
.nametopof .codename img{
  width: 2rem;
  height: auto;
  display: inline-block;
  position: relative;
  top: .2rem;
  float: left;
  margin-left: 1rem
}
.thebest span {

  line-height:2.2rem;
  text-align: center;
  background-color: #F43530;
  color: #fff;
  margin:.3rem 2px;
  padding: 0 5px;
  border-radius: 3px;
  text-overflow: ellipsis;
 
  overflow: hidden;
}
.thebest {
  flex: 1;
  padding-right: 1rem
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
  font-size:2.4rem;
  margin-right: 8px;
  line-height: 2.6rem;
}
.money>.flbb{
  height: 2.6rem;
}
.codeinfo {
  padding-top: .8rem;
  font-size: 1.2em;
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
  height:4.2rem;
}
.heidatano {
  height: auto;
}
.text-black {
  display: inline;
  color: #353535;
}
.about {
  padding: 14px;
  color: #353535;
  background-color: #fff;
  overflow: hidden;
  transform: all 0.5s;
}
.about .elep {
  font-size: 14px;
  text-align: left;
}
.btnmore {
  height: 34px;
  background-color: #fff;
  line-height: 2;
  padding: 8px 0;
}
.btnmore .morebtn {
  font-size: 14px;
  padding-right: 14px;
  line-height: 2;
  float: right;
  color: #586c94;
}
.infolist {
  margin-top: 14px;
  background-color: #fff;
  font-size: 14px;
}
.infolist > div {
  height: 44px;
  border-bottom: 1px solid #ccc;
  display: flex;
}
.infolist .name {
  flex: 1;
  line-height: 44px;
  color: #999;
  padding-left: 14px;
  text-align: left;
}
.infolist .textin {
  flex: 3;
  line-height: 44px;
  color: #666;
  text-align: right;
  padding-right: 14px;
}
.infolist a.textin {
  color: #498fe0;
  font-weight: bold;
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
.listbody .child .othertitle,
.listbody .child .place .usd {
  font-size: 1.5rem;
  color: #333;
  text-align: left;
  text-indent: 1rem;
  font-weight: bold
}
.listbody .child .othertitle .small,
.listbody .child .place .rmb {
  font-size:1.2rem;
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