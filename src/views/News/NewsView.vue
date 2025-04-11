<template>
  <div class="container">
    <a-breadcrumb class="mt-4">
      <a-breadcrumb-item>
        <RouterLink to="/">{{ $t('navbar.pages.home') }}</RouterLink>
      </a-breadcrumb-item>
      <a-breadcrumb-item>
        <RouterLink to="/news">{{ $t('navbar.pages.news') }}</RouterLink>
      </a-breadcrumb-item>
    </a-breadcrumb>
    <NewsCards />
  </div>
</template>
<script setup>
import { NewsCards } from '@/components';
</script>
<style></style>
