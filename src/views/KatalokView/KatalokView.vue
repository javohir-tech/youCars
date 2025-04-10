<template>
  <div class="container">
    <!-- ===== Router Yo'li ===== -->
    <a-breadcrumb class="mt-5">
      <a-breadcrumb-item>
        <RouterLink to="/">Главная</RouterLink>
      </a-breadcrumb-item>
      <a-breadcrumb-item>
        <RouterLink to="/katalok">Каталог</RouterLink>
      </a-breadcrumb-item>
    </a-breadcrumb>
    <!-- ===== Filter Qilish ===== -->
    <Filter filterName="Каталог" />
    <!-- ===== Loader ===== -->
    <div v-if="loading" class="loader shadow">
      <a-spin />
    </div>
    <!-- ===== Cars ===== -->
    <AvtoKatalok
      v-else-if="cars.length"
      :avtomobiles="cars"
      :newCurrent="current"
      router="/katalok/cars-tovar"
    />
    <!-- ===== Malumot Kelmasa ===== -->
    <a-result
      v-else-if="error"
      status="404"
      title="404"
      sub-title="Sorry, An error occurred while loading the data!"
    />
  </div>
</template>
<script setup>
//vue
import { ref, watch } from 'vue';
import { RouterLink } from 'vue-router';
//components
import Filter from '../../components/Filter/Filter.vue';
import AvtoKatalok from '@/components/AvtoKatalok/AvtoKatalok.vue';
//Hooks
import { useFetch } from '@/Hooks/UseFatch';

//Page
const current = ref(1);
//Moshinalar malumoti
const cars = ref([]);

//Fecth  Sorov Moshinalar
const { data, loading, error } = useFetch(
  `${import.meta.env.VITE_APP_API}/cars`
);

// Kuzatish
watch(data, (newData) => {
  cars.value = newData;
});
</script>
<style scoped>
.pagination {
  text-align: center;
}
</style>
