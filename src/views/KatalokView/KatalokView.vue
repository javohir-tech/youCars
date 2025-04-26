<template>
  <div class="container">
    <!-- ===== Router Yo'li ===== -->
    <a-breadcrumb class="mt-5">
      <a-breadcrumb-item>
        <RouterLink to="/">{{ $t('navbar.pages.home') }}</RouterLink>
      </a-breadcrumb-item>
      <a-breadcrumb-item>
        <RouterLink to="/katalok">{{ $t('navbar.pages.katalok') }}</RouterLink>
      </a-breadcrumb-item>
    </a-breadcrumb>
    <!-- ===== Filter Qilish ===== -->
    <h1 class="main-header mt-3">{{ $t('pages.katalok.filter.header') }}</h1>
    <Filter />
    <!-- ===== Loader ===== -->
    <div v-if="loading || loadingFilter" class="loader shadow">
      <a-spin />
    </div>
    <!-- ===== Cars ===== -->
    <AvtoKatalok v-else-if="cars.length" :avtomobiles="cars" :newCurrent="current" router="/katalok/cars-tovar" />
    <!-- ===== Malumot Kelmasa ===== -->
    <a-result v-else-if="error || errorFilter" status="404" title="404" sub-title="Sorry, An error occurred while loading the data!" />
    <!-- ===== Request ===== -->
    <ResponseBanner />
  </div>
</template>
<script setup>
//vue
import { ref, watch, watchEffect } from 'vue';
import { RouterLink } from 'vue-router';
//components
import Filter from '../../components/Filter/Filter.vue';
import AvtoKatalok from '@/components/AvtoKatalok/AvtoKatalok.vue';
import { ResponseBanner } from '@/components';
//Hooks
import { useFetch } from '@/Hooks/UseFatch';
//filred Hook
import { useFilteredCars } from '@/Hooks/useFilteredCars';
//filter store
import { useFilterStore } from '@/Stores/useFilter';

//filters
const filters = useFilterStore()
//Page
const current = ref(1);
//Moshinalar malumoti
const cars = ref([]);

//Fecth  Sorov Moshinalar
const { data, loading, error } = useFetch(
  `${import.meta.env.VITE_APP_API}/cars`
);

const { carsFilter, loadingFilter, errorFilter, fetchFilteredCars } = useFilteredCars(`${import.meta.env.VITE_APP_API}/cars-filter`);

// Kuzatish
watch(data, (newData) => {
  if (newData) {
    cars.value = newData;
  }
});

watch(
  () => filters.stock,
  async (newFilters) => {
    const hasFilter = Object.values(newFilters).some(
      (val) => val !== null && val !== '' && !(Array.isArray(val) && val.length === 0)
    );
    if (hasFilter) {
      await fetchFilteredCars(newFilters);
    }
  },
  { deep: true }
);

watchEffect(() => {
  if (carsFilter.value.length > 0) {
    cars.value = carsFilter.value;
  } else if (filters.stock) {
    cars.value = [];
  }
});
</script>
<style scoped>
.pagination {
  text-align: center;
}
</style>
