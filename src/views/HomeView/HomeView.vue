<template>
  <div class="container">
    <Banner />
    <!--  filter -->
    <Filter />
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
    <!-- <Example/> -->
    <br>
    <br>
    <br>
    <br>
    <br>
  </div>
</template>
<script setup>

//filter
import Filter from '@/components/Filter.vue';
//components
import { AboutCompony, Banner, CarsKatalok, Marks, NewsCards, WhyWe } from './Components';
import Example from './Components/example.vue';
</script>
<style></style>