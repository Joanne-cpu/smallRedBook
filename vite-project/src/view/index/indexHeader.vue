<template>
    <!-- 头部 -->
    <div class="header">
      <div class="header-list">
        <a href="#" class="header-logo">
            <img :src="redBookImg">
        </a>
        <div class="header-input">
          <input type="text" placeholder="登录搜索更多功能">
          <button class="iconfont icon-sousuo"></button>
        </div>
        <div class="header-icon">
          <i class="iconfont icon--more"></i>
        </div>
      </div>
    </div>
</template>
  
<script setup>
    import {ref} from 'vue'
    import redBookImg from '@/assets/images/redBook.png'
    import '../../assets/css/index.css'
</script>
  
<style scoped>
  
</style>