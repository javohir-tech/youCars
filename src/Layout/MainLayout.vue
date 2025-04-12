<template>
  <Navbar />
  <main>
    <RouterView />
  </main>
  <Footer />
  <a-back-top />
</template>
<script setup>
//components
import { Navbar, Footer } from '@/components';

import { RouterView } from 'vue-router';
</script>
<style>
.navbar-laptop {
  display: none;
}
</style>
