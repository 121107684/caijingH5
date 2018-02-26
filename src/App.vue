<template>
  <div id="app">
    
    <router-view/>
    
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
}
.listbody .listtitle:last-child{
  border: none
}
.listbody .listtitle>view,
.listbody .listtitle>navigator{
  flex: 1;
  text-indent: 1em;
  font-size: 1.4rem;
  line-height: 8rem;
  overflow: hidden;
text-overflow:ellipsis;
white-space: nowrap;
}
.listbody .listtitle view.child,
.listbody .listtitle>navigator.child{
  font-size: 1.4rem;
  padding-right:.5rem;
}
.listbody .listtitle.parent .bfb{
  text-align:center;
}
.listbody .listtitle .red{
  color: #fff;
  background: #F43530;
  border-radius: 1rem;
  display: inline;
  line-height: 20px;
  padding: 6px 10px;
  
}
.green{
  color: #fff;
  background: #00C203;
  border-radius: 20px;
  display: inline;
  line-height: 40px;
   padding: 6px 10px;
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
