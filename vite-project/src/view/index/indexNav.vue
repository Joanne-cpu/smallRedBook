<template>
    <div class="index-nav">
       <div class="nav-content">
         <div class="nav-wrapper">
           <ul class="nav-list">
              <li v-for="(v,i) in navList" :key="v.id"
              :class="change==i?'select':''" @click="change=i">
                <router-link :to="v.path">
                    {{ v.contont }}
                </router-link>
              </li>
          </ul>
         </div>
       </div>
    </div>
    <router-view></router-view>
</template>

<script setup>
    import {ref} from 'vue'
    import '../../assets/css/index.css'

    let change=ref(0);

    const navList=ref([
        {
            id:1,
            contont:'推荐',
            path:'/index/recommend'        
        },
        {
            id:2,
            contont:'穿搭',
            path:'/index/clothes'        
        },
        {
            id:3,
            contont:'美食',
            path:'/index/food'        
        },
        {
            id:4,
            contont:'彩妆',
            path:'/index/cosmetics'        
        },
        {
            id:5,
            contont:'影视',
            path:'/index/move'        
        },
        {
            id:6,
            contont:'职场',
            path:'/index/job'        
        },
        {
            id:7,
            contont:'情感',
            path:'/index/feeling'        
        },
        {
            id:8,
            contont:'家居',
            path:'/index/house'        
        },
        {
            id:9,
            contont:'游戏',
            path:'/index/game'        
        },
        {
            id:10,
            contont:'旅行',
            path:'/index/travel'        
        },
        {
            id:11,
            contont:'健身',
            path:'/index/fitness'        
        }
    ])
</script>

<style scoped>


</style>