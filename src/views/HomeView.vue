<template>
  <div class="container">
    <Banner/>
    <!--  filter -->
    <Filter/>
    <!--Cars Katalok -->
    <CarsKatalok/>
  </div>
</template>
<script setup>

//filter
import Filter from '@/components/Filter.vue';
import Banner from '@/components/HomeComponents/Banner.vue';
import CarsKatalok from '@/components/HomeComponents/CarsKatalok.vue';

</script>
<style></style>