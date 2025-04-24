<template>
  <div class="cars-katalok mt-5">
    <h1 class="main-header">{{ $t('pages.home.avtomabilKatalok.header') }}</h1>

    <!-- Loader -->
    <div v-if="loading || filteredCarsRef.loading" class="loader shadow">
      <a-spin />
    </div>

    <!-- Filterlangan yoki umumiy mashinalar -->
    <a-row :gutter="[10, 10]" v-else-if="cars.length">
      <a-col :xs="{ span: 24 }" :md="{ span: 8 }" v-for="(car, index) in cars" :key="index">
        <RouterLink :to="`/katalok/cars-tovar/${car.id}`">
          <AvtoCard :avtomabil="{ ...car, route: '/katalok/cars-tovar' }" :images="car.image" :cost="car.cost"
            :country="car.country" :milage="car.milage" :model="car.model" />
        </RouterLink>
      </a-col>
    </a-row>

    <!-- Xatolik -->
    <a-result v-else-if="error" status="404" title="404"
      sub-title="Sorry, an error occurred while loading the data!" />

    <!-- Batafsil link -->
    <div class="mt-3 me-2 under-link">
      <RouterLink to="/katalok">
        {{ $t('pages.home.avtomabilKatalok.link') }}
        <i class="bi bi-arrow-right"></i>
      </RouterLink>
    </div>
  </div>
</template>

<script setup>
// components
import AvtoCard from '@/components/Ui/AvtoCard.vue';
import { RouterLink } from 'vue-router';

// stores
import { useFilterStore } from '@/Stores/useFilter';

// hooks
import { useFetch } from '@/Hooks/UseFatch';
import { useFilteredCars } from '@/Hooks/useFilteredCars';

// vue
import { ref, watch, watchEffect } from 'vue';

// API base URL
const API_BASE_URL = import.meta.env.VITE_APP_API;

// Store
const filters = useFilterStore();

// Local state
const cars = ref([]);


const { data, loading, error } = useFetch(`${API_BASE_URL}/cars`);
watch(data, (newData) => {
  if (newData) {
    cars.value = newData.slice(0, 6);
  }
});


const filteredCarsRef = useFilteredCars(`${API_BASE_URL}/cars-filter`);

watch(
  () => filters.stock,
 async (newFilters) => {
    const hasFilter = Object.values(newFilters).some(
      (val) => val !== null && val !== '' && !(Array.isArray(val) && val.length === 0)
    );
    if (hasFilter) {
     await filteredCarsRef.fetchFilteredCars(newFilters);
    }
  },
  { deep: true }
);

watchEffect(() => {
  if (filteredCarsRef.cars.value.length > 0) {
    cars.value = filteredCarsRef.cars.value;
  } else if (filters.stock) {
    cars.value = []; // yoki loading = true qo‘yib loaderni ko‘rsatish
  }
});
</script>

<style scoped>
.under-link {
  display: flex;
  justify-content: end;

  a {
    text-decoration: none;
    font-weight: 400;
    font-size: 15px;
    line-height: 18px;
    color: #293843;
  }
}
</style>
