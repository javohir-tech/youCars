<template>
  <div class="container">
    <!-- ===== Bread Crumps -->
    <a-breadcrumb class="mt-4">
      <a-breadcrumb-item>
        <RouterLink to="/">{{ $t('navbar.pages.home') }}</RouterLink>
      </a-breadcrumb-item>
      <a-breadcrumb-item>
        <RouterLink to="/news">{{ $t('navbar.pages.news') }}</RouterLink>
      </a-breadcrumb-item>
    </a-breadcrumb>
    <!-- news cards -->
    <NewsCards />
    <!-- =====  Response ===== -->
    <ResponseBanner />
  </div>
</template>
<script setup>
//components
import { NewsCards, ResponseBanner } from '@/components';
</script>
<style></style>
