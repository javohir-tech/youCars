<template>
  <div class="container">
    <Banner />
    <!--  filter -->
    <h1 class="main-header mt-3">{{ $t('pages.home.filter.header') }}</h1>
    <Filter FilterName="АВТОМОБИЛЬНЫЙ КАТАЛОГ" />
    <!--Cars Katalok -->
    <CarsKatalok />
    <!-- WhyWe-->
    <WhyWe />
    <!--AboutCompony-->
    <AboutCompony />
    <!--Marks-->
    <Marks />
    <!-- footer under -->
    <ResponseBanner />
    <!--NewsCards-->
    <NewsCards />
  </div>
</template>
<script setup>
//filter
import Filter from '@/components/Filter/Filter.vue';
//components
import { AboutCompony, Banner, CarsKatalok, Marks, WhyWe } from './Components';
import { NewsCards, ResponseBanner } from '@/components';
</script>
<style></style>
