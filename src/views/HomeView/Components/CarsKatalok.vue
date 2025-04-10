<template>
  <div class="cars-katalok mt-5">
    <h1 class="main-header">АВТОМОБИЛЬНЫЙ КАТАЛОГ</h1>
    <!-- ===== Loader ===== -->
    <div v-if="loading" class="loader shadow">
      <a-spin />
    </div>
    <a-row :gutter="[10, 10]" v-else-if="cars.length">
      <a-col
        :xs="{ span: 24 }"
        :md="{ span: 8 }"
        v-for="(car, index) in cars"
        :key="index"
      >
      <!-- ===== AvtoCards ===== -->
        <RouterLink :to="`/katalok/cars-tovar/${car.id}`">
          <AvtoCard
            :avtomabil="{ ...car, route: '/katalok/cars-tovar' }"
            :images="car.image"
            :cost="car.cost"
            :country="car.country"
            :milage="car.milage"
            :model="car.model"
          />
        </RouterLink>
      </a-col>
    </a-row>
    <!-- ==== malumot kelmasa  ===== -->
    <a-result
      v-else-if="error"
      status="404"
      title="404"
      sub-title="Sorry, An error occurred while loading the data!"
    />
  </div>
  <div class="mt-3 me-2 under-link" >
    <RouterLink to="/katalok">Перейти в каталог <i class="bi bi-arrow-right"></i></RouterLink>
  </div>
</template>
<script setup>
//components
import AvtoCard from '@/components/Ui/AvtoCard.vue';

//hooks
import { useFetch } from '@/Hooks/UseFatch';

//Vue
import { ref, watch } from 'vue';
import { RouterLink } from 'vue-router';

//Moshinalar Malumot
const cars = ref([]);

//Api
const API_BASE_URL = import.meta.env.VITE_APP_API;

//fetch Sorov
const { data, loading, error } = useFetch(`${API_BASE_URL}/cars`);

//Kuzat
watch(data, (newData) => {
  cars.value = newData.slice(0, 6);
});
</script>

<style scoped>
.under-link{
  display: flex;
  justify-content: end;
  a{
    text-decoration: none;
    font-weight: 400;
    font-size: 15px;
    line-height: 18px;
    color: #293843;
  }
} 
</style>
