<template>
    <div class="container">
        <router-link :to="{path:'/'}">
            <img src="../assets/navtop_02.jpg" alt="">
        </router-link>
    </div>
</template>

<style scoped>
    .container {
        width: 100%;
    }
    .container img{
        display:block;
        width: 100%;
    }
</style>

<script>
    export default {
        name: 'navhead',
        data() {
            return {
            }
        },
        created:function(){
            console.log("aaaa")
        }
    }
</script>