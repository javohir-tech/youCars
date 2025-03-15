<template>
  <div class="container">
    <Banner />
    <!--  filter -->
    <Filter />
    <!--Cars Katalok -->
    <CarsKatalok />
    <!-- WhyWe-->
    <WhyWe />
  </div>
</template>
<script setup>

//filter
import Filter from '@/components/Filter.vue';
//components
import { Banner, CarsKatalok, WhyWe } from './Components';
</script>
<style></style>