<template>
  <div class="container">
    <Banner />
    <!--  filter -->
    <Filter FilterName="АВТОМОБИЛЬНЫЙ КАТАЛОГ" />
    <!--Cars Katalok -->
    <CarsKatalok />
    <!-- WhyWe-->
    <WhyWe />
    <!--AboutCompony-->
    <AboutCompony />
    <!--Marks-->
    <Marks />
    <!--NewsCards-->
    <NewsCards />
  </div>
</template>
<script setup>
//filter
import Filter from '@/components/Filter/Filter.vue';
//components
import {
  AboutCompony,
  Banner,
  CarsKatalok,
  Marks,
  WhyWe,
} from './Components';
import { NewsCards } from '@/components';
</script>
<style></style>
