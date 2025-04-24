<template>
    <div class="footer">
      <div class="footer-list">
        <ul>
          <li v-for="v in footerList" :key="v.id">
            <router-link :to="v.path">
              <i class="iconfont" :class="v.icon"></i>      
            </router-link>                                                                                    
          </li>
        </ul>
      </div>
    </div>
</template>
<script setup>
  import {ref} from 'vue'
  import '../assets/css/index.css'
import { RouterLink } from 'vue-router';

  let footerList=ref([
    {
      id:1,
      icon:'icon-wode',
      path:'/index/recommend'
    },
    {
      id:2,
      icon:'icon-tianjia',
      path:'/find'
    },
    {
      id:3,
      icon:'icon-tongzhi',
      path:'/notice'
    },
    {
      id:4,
      icon:'icon-shouye-copy',
      path:'/my'
    }
  ])
</script>

<style scoped>

</style>