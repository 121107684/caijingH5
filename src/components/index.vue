<template>
<div class="hello">
    <navhead></navhead>
    <!-- <mt-search v-model="value">
      <mt-cell
        v-for="item in result"
        :title="item.title"
        :value="item.value" key="item" >
      </mt-cell>
    </mt-search> -->
    <mt-search v-model="searchvalue" class="searchbox">
      <mt-cell v-for="(datas,key) in result" :key="key" :to="{path:'/info',query: {id:datas.symbol,title:datas.name}}">
            <div class="searchlistmodel">
              <div class="title">{{datas.symbol}}</div>
              <!-- <div class="money">¥{{datas.price_cny}}</div>
              <div class="zd">
                <div :class="datas.hasbl?'green':'red'">{{datas.hasbl?'':'+'}}{{datas.percent_change_24h}}</div>
              </div> -->
            </div>

      </mt-cell>
    </mt-search>
    <mt-loadmore :top-method="loadTop" :bottom-method="loadBottom" :bottom-all-loaded="allLoaded" ref="loadmore">
      
    <mt-swipe class="bannerbox" :auto="6000"> 
      <mt-swipe-item v-for="(item,index) in background" :key="index">
            <div class="flaxbox"> 
              <router-link :to="{path:'/info',query: {id:datas.symbol,title:datas.name}}" v-for="(datas,key) in item" :key="key" class="child br">
                <div class='numname'>{{datas.name_pair}}</div>
                <div :class="datas.hasbl?'greentext':'redtext'" class="moneoy">¥{{datas.price_cny}}</div>
                <div class="flaxbox">
                  <div :class="datas.hasbl?'greentext':'redtext'" class="child chanum">${{datas.price_usd}}</div>
                  <div :class="datas.hasbl?'greentext':'redtext'" class="child chaper">{{datas.hasbl?'':'+'}}{{datas.percent_change_24h}}%</div>
                </div>
              </router-link>
            </div>
        </mt-swipe-item>
    </mt-swipe>

    <mt-navbar v-model="selectednavb">
      <mt-tab-item id="1">市值排行</mt-tab-item>
      <mt-tab-item id="2">涨幅榜</mt-tab-item>
      <mt-tab-item id="3">跌幅榜</mt-tab-item>
    </mt-navbar>

  <!-- tab-container -->
    <mt-tab-container v-model="selectednavb">
      <mt-tab-container-item id="1" class="listbody">
           <div class="listtitle parent">
                      <div class="name">名称</div>
                      <div class="place ">价格</div>
                      <div class="cjnum ">市值</div>
                      <div class="bfb textright">涨跌幅</div>
                   </div>
            <router-link class="listtitle child" v-for="(datasup,index) in caplist" :key="index" :to="{path:'/info',query: {id:datasup.symbol,title:datasup.name}}">
                <div class="name">{{datasup.symbol}}</div>
                      <div class="place ">¥{{datasup.price_cny}}</div>
                     <div class="cjnum ">¥{{datasup.market_cap_usd}}</div>
                      <div class="bfb">
                        <div :class="datasup.hasbl?'green':'red'">{{datasup.hasbl?'':'+'}}{{datasup.percent_change_24h}}%</div>
                      </div>
            </router-link>
          <router-link class="seemore" :to="{path:'/list'}">查看更多</router-link>
      </mt-tab-container-item>
      <mt-tab-container-item id="2"  class="listbody">
        <div class="listtitle parent">
                      <div class="name">名称</div>
                      <div class="place ">价格</div>
                      <div class="cjnum ">成交额</div>
                      <div class="bfb textright">涨跌幅</div>
                   </div>
            <router-link class="listtitle child" v-for="(datasup,index) in uplist" :key="index" :to="{path:'/info',query: {id:datasup.symbol,title:datasup.name}}">
                <div class="name">{{datasup.symbol}}</div>
                      <div class="place ">¥{{datasup.price_cny}}</div>
                     <div class="cjnum ">¥{{datasup.volume_24h_usd}}</div>
                      <div class="bfb">
                        <div  class="red">+{{datasup.percent_change_24h}}%</div>
                      </div>
            </router-link>
          <router-link class="seemore" :to="{path:'/list'}">查看更多</router-link>
      </mt-tab-container-item>
      <mt-tab-container-item id="3"  class="listbody">
          <div class="listtitle parent">
                      <div class="name">名称</div>
                      <div class="place ">价格</div>
                      <div class="cjnum ">成交额</div>
                      <div class="bfb textright">涨跌幅</div>
                   </div>
            <router-link class="listtitle child" v-for="(datasup,index) in downlist" :key="index" :to="{path:'/info',query: {id:datasup.symbol,title:datasup.name}}">
                <div class="name">{{datasup.symbol}}</div>
                      <div class="place ">¥{{datasup.price_cny}}</div>
                     <div class="cjnum ">¥{{datasup.volume_24h_usd}}</div>
                      <div class="bfb">
                        <div class="green">{{datasup.percent_change_24h}}%</div>
                      </div>
            </router-link>
          <router-link class="seemore" :to="{path:'/list'}">查看更多</router-link>
      </mt-tab-container-item>
    </mt-tab-container>

    </mt-loadmore>


  </div> 
</template>

<script>
export default {
  name: "index",
  data() {
    return {
      result: [1,2,3,4],
      value: "",
      selected: "index",
      selectednavb: "1",
      topStatus: "",
      allLoaded: true,
      background: [],
      caplist: [],
      uplist:[],
      downlist:[],
      searchvalue:''
    };
  },
  props: {},
  components: {},
  created: function() {
    setTimeout(function(){
      window.scrollTo(0,0)
    },50)
    
    console.log(window)
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
  watch:{
     searchvalue(n,o){
       if(n!=''){
        this.$ajax.get("/getSearchList/"+n).then(res=>{
           var fzarr = [];
            for (var i = 0; i < res.data.data.length; i++) {
              fzarr.push(backdata(res.data.data[i]))
            }
            this.result = fzarr
        })
       }
        
     }
  },
  methods: {  
    onloaddata: function(that) {
      that.$ajax
        .get("/getFocusCoins", { params: {} })
        .then(res => {
          var fzarr = [];
          for (var i = 0; i < res.data.data.length; i) {
            var temparr = [];
            backdata(res.data.data[i]);
            temparr.push(backdata(res.data.data[i]));
            temparr.push(backdata(res.data.data[i + 1]));
            temparr.push(backdata(res.data.data[i + 2]));
            i = i + 3;
            fzarr.push(temparr);
          }
        
          //Vue.set(this.background,fzarr)
          that.background = fzarr;
        })
        .catch(err => {
        });

      that.$ajax
        .get("/getWaveList/down", { params: {} })
        .then(res => {
          that.downlist = res.data.data;
        })
        .catch(err => {
          console.log(err);
        });

      that.$ajax
        .get("/getWaveList/up", { params: {} })
        .then(res => {
          that.uplist = res.data.data;
        })
        .catch(err => {
          console.log(err);
        });

      that.$ajax
        .get("/getMarketCapList", { params: {} })
        .then(res => {
          var fzarr = [];
          for (var i = 0; i < res.data.data.length; i++) {
            fzarr.push(backdata(res.data.data[i]))
          }
          that.caplist = fzarr;
        })
        .catch(err => {
          console.log(err);
        });
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
function backdata(obj) {
            if (obj.percent_change_24h.indexOf("-") > -1) {
              obj.hasbl = true;
            } else {
              obj.hasbl = false;
            }
            return obj;
          }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.searchlistmodel {
  font-size: 14px;
  display: flex;
  position:absolute;
  left: 0;
  top:0;
  width: 100%;
  height: 36px;
  border-bottom: 1px solid #ccc;
  color: #333
}
.searchlistmodel .title,
.searchlistmodel .money,
.searchlistmodel .zd{
  flex: 1;
  display: flex;
  justify-content: left;
  align-items: center;
  text-indent: 20px
}
.zd .red{
  color: #fff;
  background: #F43530;
  border-radius:2rem;
  line-height: 20px;
  width:6.6rem;
  text-align: center;
  padding: 2px 0;
  font-size: 12px
}
.searchbox{
  position: relative;
  z-index: 100;
}
.mint-swipe {
  height: 8rem;
}
.mint-search {
  height: auto;
  overflow: visible;
}
.bannerbox {
  height: 10rem;
  width: 100%;
  background: #fff;
  margin-top: 1rem;
}
.flaxbox {
  display: flex;
  text-align: center;
}
.flaxbox .child {
  flex: 1;
}
.flaxbox .child.br {
  border-right: 1px solid #ccc;
  margin-top: 1.2rem;
  height: 6rem;
  text-decoration: none;
}
.flaxbox .child.br:last-child {
  border-right: none;
}
.numname {
  color: #999;
  font-size: 1.4rem;
  line-height: 1.6;
}
.moneoy {
  color: #ff0000;
  font-size:16px;
  font-weight: bold
}
.chanum,
.chaper {
  color: #ff0000;
  font-size:12px;
}
.bg-w {
  background: #fff;
}
.listbody .listtitle .seeall {
  font-size: 3rem;
}
.listbody .listtitle.child .bfb {
  text-align: right;
}
.table {
  width: 100%;
}
.mint-navbar {
  background-color: #f4f4f4;
}
.mint-navbar .mint-tab-item{
  padding: 14px 0;
  font-size: 16px
}
.mint-navbar .mint-tab-item.is-selected{
  background-color: #eaeaea;
  color: #333;
}
body,
html {
  height: 100%;
}
.indexpage {
  height: 100%;
}
.seemore {
  width: 160px;
  height:32px;
  background-color: #498fe0;
  border-radius:16px;
  color: #fff;
  text-align: center;
  line-height:32px;
  font-size:15px;
  display: block;
  margin: 1rem auto;
  text-decoration: none;
}
.listbody .listtitle.parent .bfb{
  padding-right: 15px;
  justify-content:flex-end
}
.listbody .listtitle.parent  .place,
.listbody .listtitle.parent  .cjnum{
  text-align: center
}
.listbody .listtitle.child .place{
  text-align: left;
}
.listbody .listtitle.child .cjnum{
  text-align: right;
  padding-right: 20px
}
.child .bfb{
  display: flex;
  justify-content: center;
  padding-right:15px
}
</style>
