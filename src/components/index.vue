<template>
<div class="hello">

    <!-- <mt-search v-model="value">
      <mt-cell
        v-for="item in result"
        :title="item.title"
        :value="item.value" key="item" >
      </mt-cell>
    </mt-search> -->
    
    <mt-loadmore :top-method="loadTop" :bottom-method="loadBottom" :bottom-all-loaded="allLoaded" ref="loadmore">
    <mt-swipe class="bannerbox" :auto="30000"> 
      <mt-swipe-item v-for="(item,index) in background" :key="index">
            <div class="flaxbox"> 
              <router-link :to="{path:'/info',query: {id:datas.symbol,title:datas.name}}" v-for="(datas,key) in item" :key="key" class="child br">
                <div class='numname'>{{datas.name_pair}}</div>
                <div :class="datas.hasbl?'greentext':'redtext'" class="moneoy">¥{{datas.price_cny}}</div>
                <div class="flaxbox">
                  <div :class="datas.hasbl?'greentext':'redtext'" class="child chanum">¥{{datas.volumn_change_24h}}</div>
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
      <mt-tab-container-item id="1">
          <table class="table">
            <thead>
                <td>名称</td>
                <td>价格</td>
                <td>成交额</td>
                <td>涨跌幅</td>
            </thead>
            <tbody>
              <td>1</td>
              <td>1</td>
              <td>1</td>
              <td>1</td>
            </tbody>
          </table>
          <router-link class="seemore" :to="{path:'/list'}">查看更多</router-link>
      </mt-tab-container-item>
      <mt-tab-container-item id="2">
        <table class="table">
            <thead>
                <td>名称</td>
                <td>价格</td>
                <td>成交额</td>
                <td>涨跌幅</td>
            </thead>
            <tbody>
              <td>2</td>
              <td>2</td>
              <td>2</td>
              <td>2</td>
            </tbody>
          </table>
          <router-link class="seemore" :to="{path:'/list'}">查看更多</router-link>
      </mt-tab-container-item>
      <mt-tab-container-item id="3">
          <table class="table">
            <thead>
                <td>名称</td>
                <td>价格</td>
                <td>成交额</td>
                <td>涨跌幅</td>
            </thead>
            <tbody>
              <td>3</td>
              <td>3</td>
              <td>3</td>
              <td>3</td>
            </tbody>
          </table>
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
      msg: "Welcome to Your Vue.js App",
      result: [{ title: "aaa" }],
      value: "",
      selected: "index",
      selectednavb: "1",
      topStatus: "",
      allLoaded:true,
      background: [
        [
          {
            symbol: "BTC",
            name: "Bitcoin",
            name_pair: "BTC/CNY",
            price_usd: "10212.40",
            percent_change_24h: "0.78",
            rank: "1",
            volumn_change_24h: "79.04",
            price_cny: "64215.78",
            hasbl: false
          },
          {
            symbol: "ETH",
            name: "Ethereum",
            name_pair: "ETH/CNY",
            price_usd: "850.67",
            percent_change_24h: "-0.92",
            rank: "2",
            volumn_change_24h: "-7.90",
            price_cny: "5349.04",
            hasbl: true
          },
          {
            symbol: "LTC",
            name: "Litecoin",
            name_pair: "LTC/CNY",
            price_usd: "209.15",
            percent_change_24h: "3.15",
            rank: "3",
            volumn_change_24h: "6.39",
            price_cny: "1315.16",
            hasbl: false
          }
        ],
        [
          {
            symbol: "BCH",
            name: "Bitcoin Cash",
            name_pair: "BCH/CNY",
            price_usd: "1239.03",
            percent_change_24h: "-2.08",
            rank: "4",
            volumn_change_24h: "-26.32",
            price_cny: "7791.05",
            hasbl: true
          },
          {
            symbol: "XRP",
            name: "Ripple",
            name_pair: "XRP/CNY",
            price_usd: "0.97",
            percent_change_24h: "-1.87",
            rank: "5",
            volumn_change_24h: "-0.02",
            price_cny: "6.09",
            hasbl: true
          },
          {
            symbol: "ADA",
            name: "Cardano",
            name_pair: "ADA/CNY",
            price_usd: "0.34",
            percent_change_24h: "-0.02",
            rank: "6",
            volumn_change_24h: "0.00",
            price_cny: "2.12",
            hasbl: true
          }
        ]
      ]
    };
  },
  props: {},
  components: {},
  created: function() {
    console.log(this.$options.methods);
  },
  watch: {
    selected: function(newv, oldv) {
      //console.log(newv, oldv);
    }
  },
  methods: {
    onloaddata: function() {
      this.$ajax
        .get("/getFocusCoins", { params: {} })
        .then(res => {
          //
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
          console.log(fzarr);
          this.background = fzarr;
        })
        .catch(err => {
          console.log(err);
        });

      this.$ajax
        .get("/getWaveList/down", { params: {} })
        .then(res => {
          //
          this.downlist = res.data.data;
        })
        .catch(err => {
          console.log(err);
        });

      this.$ajax
        .get("/getWaveList/up", { params: {} })
        .then(res => {
          //
          this.uplist = res.data.data;
        })
        .catch(err => {
          console.log(err);
        });

      this.$ajax
        .get("/getMarketCapList", { params: {} })
        .then(res => {
          //
          this.caplist = res.data.data;
        })
        .catch(err => {
          console.log(err);
        });
    },
    loadTop() {
      this.$refs.loadmore.onTopLoaded();
    },
    loadBottom() {
    
    this.allLoaded = true;// 若数据已全部获取完毕
    this.$refs.loadmore.onBottomLoaded();
  }
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.mint-swipe {
  height: 8rem;
}
.mint-search {
  height: auto;
}
.bannerbox {
  height: 9rem;
  width: 100%;
  background: #fff;
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
  height: 5rem;
  text-decoration: none;
}
.flaxbox .child.br:last-child {
  border-right: none;
}
.numname {
  color: #999;
  font-size: 1.4rem;
  line-height: 1.6
}
.moneoy {
  color: #ff0000;
  font-size: 1.8rem;
}
.chanum,
.chaper {
  color: #ff0000;
  font-size: 1.4rem;
}
.bg-w {
  background: #fff;
}
.listbody .listtitle .seeall {
  font-size: 3rem;
}
.listbody .listtitle.child .bfb {
  text-align: right;
  margin-right: 2rem;
}
.table {
  width: 100%;
}
.mint-navbar {
  background-color: #ddd;
}
body, html{
  height: 100%;
}
.indexpage {
  height: 100%;
}
.seemore{
  width: 42vw;
  height: 8vw;
  background-color: #498FE0;
  border-radius: 4vw;
  color: #fff;
  text-align: center;
  line-height: 8vw;
  font-size: 1.4rem;
  display: block;
  margin: 1rem auto;
  text-decoration: none
}
</style>
