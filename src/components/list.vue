<template>
  <div class="listbody">
    <div class="topsearch flbb">
      <div class="leftbox flbb">
        <div class="codenametext">货币切换:</div>
        <select name="" id="">
          <option value="">¥人民币</option>
          <option value="">$美元</option>
        </select>
      </div>
      <div class="rightbox">
        <div class="inbox clearfix">
            <input type="text" placeholder="搜索币种">
            <button></button>
        </div>
            
      </div>
  </div>
  <div class="listtitle parent">
    <div bindtap="titletap" data-type="name" class="name"><div class="nametext">名称</div><div class="icos"></div></div>
    <div bindtap="titletap" data-type="price" class="newplace"><div class="nametext">最新价</div><div class="icos"></div></div>
    <div bindtap="titletap" data-type="percent" class="listbfb"><div class="nametext">涨跌幅</div><div class="icos"></div></div>
    <div bindtap="titletap" data-type="volumn" class="cjnum"><div class="nametext">成交量</div><div class="icos"></div></div>
    <div bindtap="titletap" data-type="cap" class="sz"><div class="nametext">市值</div><div class="icos"></div></div>
  </div>
  <router-link  v-for="(datasup,index) in alllist" :key="index" :to="{path:'/info',query: {id:datasup.symbol,title:datasup.name}}" class="listtitle child">
    <div class="name">{{datasup.symbol}}</div>
    <div class="newplace" :class="datasup.hasbl?'greentext':'redtext'">¥{{datasup.price_cny}}</div>
    <div class="upordown" :class="datasup.hasbl?'greentext':'redtext'">{{datasup.percent_change_24h}}% </div>
    <div class="cjnum">{{datasup.volume_24h_usd}}</div>
    <div class="sz">¥{{datasup.market_cap_usd}}</div>
  </router-link >
  </div>
</template>

<script>
export default {
  name: "index",
  data() {
    return {
      alllist: "",
      result: [{ title: "aaa" }],
      value: ""
    };
  },
  created:function(){
    console.log(this.$route.query);
    this.$ajax.get("/getAllCoins/cap/desc")
      .then(res=>{
          var fzarr = [];
          for (var i = 0; i < res.data.data.length; i++) {
            fzarr.push(backdata(res.data.data[i]))
          }
        this.alllist = fzarr
      })
  },
  methods: {
    handleChange(index) {}
  }
};
function backdata(obj) {
            if (obj.percent_change_24h.indexOf("-") > -1) {
              obj.hasbl = true;
            } else {
              obj.hasbl = false;
            }
            return obj;
          }
function Trim(str, is_global) {
  var result;
  console.log(str)
  result = str.replace(/(^\s+)|(\s+$)/g, "");
  if (is_global.toLowerCase() == "g") {
    result = result.replace(/\s/g, "");
  }
  return result;
}
</script>
<style scoped>
  .topsearch{
    background-color: #f9f9f9
  }
  .leftbox, .rightbox{
    flex: 1;
    font-size: 14px;
    line-height: 2;
    padding: 1rem 0rem 1rem 1rem
  }
  .leftbox .codenametext{
    padding-top: .3rem
  }
  .leftbox .codenametext,
  .leftbox select{
    flex: 1
  }
  .leftbox select {
    border:1px solid #e6e6ea;
    text-indent: .5rem;
    background-color: #fff
  }
  .rightbox {
    padding-right: 1rem
  }
  .rightbox .inbox{
    border:1px solid #e6e6ea;
    
    background-color: #fff;
    border-radius: 4px;
  }
  .rightbox input{
    font-size: 14px;
    line-height: 2;
    border: none;
    border-right: 1px solid #e6e6ea;
    text-indent: .5rem;
    display: inline-flex;
    display: block;
    float: left;
    width: 70%;
  }
  .rightbox button{
    display: block;
    float: left;
    width: 30%;
    height: 2.6rem;
    border: none;
    line-height: 2;
    background: url(../assets/searchbtn_03.jpg) no-repeat center center / 16px auto;
  }
</style>