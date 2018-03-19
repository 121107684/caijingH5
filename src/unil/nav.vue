<template>
    <div class="container">
        <router-link :to="{path:'/'}">
            <img @click="updata" src="../assets/navtop_02.jpg" alt="">
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
                namecild:"自组建的值"
            }
        },
        props:{
            name:name
        },
        created:function(){
           
        },
        methods:{
            updata:function(){ 
                this.$store.commit('increment')
                console.log(this.$store.state.count)
            }
        }
        
    }
</script>