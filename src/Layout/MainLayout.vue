<template>
  <Navbar />
  <main>
    <RouterView />
  </main>
  <Footer />
  <a-back-top class="a-back-top"/>
</template>
<script setup>
//components
import { Navbar, Footer } from '@/components';
//vue router
import { RouterView } from 'vue-router';
</script>
<style>
.navbar-laptop {
  display: none;
}

@media(max-width: 768px){
  .a-back-top{
    display: none;
  }
}
</style>
