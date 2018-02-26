<template>
  <div class="hello">
  <div class="nametopof flbb">
    <div class="codename">BTC</div>
    <div class="thebest flbb">
      <span>市值第一</span>
      <span>市值第一</span>
      <span>市值第一</span>
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
    <div>
      <div class="name">主要特色</div>
      <div class="textin">{{infodata.key_features}}</div>
    </div>
  </div>

  <div class="infoother listbody">
    <table>
    <thead class="listtitle">
      <td class="name">市场</td>
      <td class="place">价格</td>
      <td class="cjnum">24H交易量</td>
    </thead>
    <tbody v-for="(item,index) in codeEXinfolist" :key="index" class="listtitle child">
      <td class="name">
        <div class="othertitle">
          {{item.exchange}}<div class="small">{{item.coin_pair}}</div>
        </div>
        <div class="otherinfo">占比{{item.volume24h_percentag}}%</div>
      </td>
      <td class="place">
        <div class="usd">¥{{item.price_cny}}</div>
        <div class="rmb">${{item.price}}</div>
      </td>
      <td class="bfb">
        <div>{{item.volume24h}}</div>
      </td>
    </tbody>
    </table>
  </div>
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
      infodata: {
        name: "Bitcoin",
        symbol: "BTC",
        price_usd: "9823.33",
        volume_24h_usd: "392亿",
        market_cap_usd: "10429.81亿",
        percent_change_24h: "-3.87",
        summary:
          "由中本聪在2009年提出，据其思路设计发布的开源软件以及建构其上的P2P网络。比特币依据特定算法，通过大量的计算产生，不依靠特定货币机构发行，其使用整个P2P网络中众多节点构成的分布式数据库来确认并记录所有的交易行为，并使用密码学设计确保货币流通各个环节安全性，可确保无法通过大量制造比特币来人为操控币值。基于密码学的设计可以使比特币只能被真实的拥有者转移或支付及兑现。同样确保了货币所有权与流通交易的匿名性。比特币总数有限，其总数量将被限制在2100万个。",
        total_amount: "21000000",
        exist_turnover: "16536762",
        pub_date: "2009/1/3",
        algorithm: "script",
        key_features: "虚拟币始创者，受众最广，被信任最高",
        high: "66635.41",
        low: "60031.54",
        price_cny: "61769.30"
      }
    };
  },
  methods: {
    handleChange(index) {},
    showorhide: function() {
      console.log("aaaa");
      this.heidata = this.heidata ? false : true;
      this.moretext = this.heidata ? "查看更多" : "点击收起";
    }
  }
};
</script>

<style>
/* pages/info/info.wxss */
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
.w40>div, .w60>div{
  flex: 1;
  text-align: left;
}
.hello{
  background-color: #fff
}
.numcode {
  display: flex;
  background-color: #fff;
  padding-top: 1rem;
}
.nametopof .codename{
  width: 20vw;
  font-size: 2.2rem;
  font-weight: bold;
}
.thebest span {
  flex: 1;
  line-height:1.6rem;
  text-align: center;
  background-color: #F43530;
  color: #fff;
  margin:.3rem 2px;
  padding: 0 5px;
  border-radius: 3px
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
  line-height: 1.2
}
.money .usd {
  font-size:2.4rem;
  margin-right: 8px
}
.money>.flbb{
  width: 100vw;
  height: 2.6rem;
}
.codeinfo {
  padding-top: .4rem;
  font-size: 1.2em;
  color: #f43530;
  
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
  height: 110px;
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
  font-size: 12px;
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
.infolist > view:last-child {
  display: block;
  height: auto;
  border-bottom: none;
}
.infolist > view:last-child .name {
  line-height: 1.5;
  padding-top: 10px;
}
.infolist > view:last-child .textin {
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
.listbody .listtitle > view {
  line-height: 1.5;
}
.listbody .listtitle > view.name {
  flex: 2;
}
.listtitle .name .othertitle {
  display: flex;
}
.listbody .child {
  padding: 10px 0px;
}
.listbody .child .othertitle,
.listbody .child .place .usd {
  font-size: 30rpx;
  color: #333;
}
.listbody .child .othertitle .small,
.listbody .child .place .rmb {
  font-size: 24rpx;
  color: #999;
  line-height: 1;
  margin-top: 14rpx;
}
.listbody .child .otherinfo {
  padding-top: 10rpx;
  font-size: 22rpx;
  color: #999;
}
.listbody .listtitle.child .bfb view {
  line-height: 80rpx;
  font-size: 32rpx;
}
</style>