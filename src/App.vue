<template>
  <div id="app">
    
    <router-view/>
    <navfooter></navfooter>
    
  </div>
</template>

<script>
export default {
  name: "App"
};
</script>

<style>
html{font-size: 62.5%;min-height:100vh}
body{background-color: #f5f5f5;min-height:100vh}
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
.mint-search-list{
  overflow: visible
}
#app>.hello{
  min-height: 100vh;
  padding:0vw 0 8rem;
  margin: 0vw 0 -8rem
}
#app>a{
  display: none
}
.page{
  background-color: #f9f9f9
}
.clearfix:before, 
.clearfix:after { 
  display: table; 
  line-height: 0; 
  content: ""; 
} 
 
.clearfix:after { 
  clear: both; 
} 
.centeralign{
  text-align: center
}
.container {
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;

  box-sizing: border-box;
}
.mt-30 {
  margin-top: 3rem
}
.listbody{
  background: #fff
}
.listbody .listtitle{
  display: flex;
  border-bottom:1px solid #e0e0e0;
  text-decoration: none;
  color: #333;
}
.listbody .listtitle:last-child{
  border: none
}
.listbody .listtitle>div,
.listbody .listtitle>.child{
  flex: 1;
  font-size:12px;
  line-height: 3;
  overflow: hidden;
text-overflow:ellipsis;
white-space: nowrap;
}
.listbody .listtitle.parent .name{
  text-align: left;
  text-indent: 15px
}
.listbody .listtitle.child .name{
  font-weight: bold;
  text-align: left;
  padding-left: 15px
}
.listbody .listtitle .child,
.listbody .listtitle>.child{
  font-size: 1.4rem;
  padding-right:.5rem;
}
.listbody .listtitle.parent .bfb{
  text-align:center;
  padding-right: 10px
}
.listbody .listtitle .red{
  color: #fff;
  background: #F43530;
  border-radius:2rem;
  line-height: 20px;
  width:6.6rem;
  text-align: center;
  padding: 2px 0;
  font-size: 12px
}
.bfb {
  display: flex;
  justify-content: center;
  align-items: center;
}
.green{
  color: #fff;
  background: #00C203;
  border-radius:2rem;
  line-height: 20px;
  width:6.6rem;
  text-align: center;
  font-size: 12px;
  padding: 2px 0
}
.seeall{
  line-height: 88px;
  text-align: center;
  font-size: 28px;
  color: #586C94;
  border: none;
  width: 100%
}
.textcenter{
  text-align: center;
  text-indent: 0px !important
}
.textright{
  text-align: right;
  text-indent: 0px !important
}
.redtext{
  color: #ff0000 !important;
}
.greentext{
  color: #00C203 !important;
}
.flbb {
  display: flex
}
.flbb view{
  flex: 1
}
.flbb .smtext {
  font-size: .6;
  color: #999
}
.smbox view{
  color: #fff;
  border-radius: 20px;
  display: inline;
  line-height: 40px;
  padding: 3px 10px;
  font-size: .6;
}
.smbox view.red{background: #F43530;}
.smbox view.green{background: #00C203;}

</style>
