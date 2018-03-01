<template>
    <div class="container">
        <div class="flbb">
            <router-link class="footerlink" :to="'./about'">关于我们</router-link>
            <router-link class="footerlink" :to="'./declaration'">免责声明</router-link>
            <router-link class="footerlink" :to="'./copyright'">版权声明</router-link>
        </div>
        <!-- <p>京ICP备01111111号  同步财经&版权所有</p> -->
    </div>
</template>

<style scoped>
    .container {
        height: 8rem;
        width: 100%;
        background-color: #000;
        color: rgb(233, 220, 220);
        font-size: 1.4rem;
        padding: 1rem 2rem
    }
    a{
        line-height: 3rem
    }
    .flbb{
        width: 100%
    }
    .flbb .footerlink {
        flex: 1;
        text-decoration: none;
        color: #fff;
    }
    p{
        margin: 0;
        padding: 0
    }
</style>

<script>
    export default {
        name: 'navfooter',
        data() {
            return {
            }
        },
        created:function(){
           
        }
    }
</script>