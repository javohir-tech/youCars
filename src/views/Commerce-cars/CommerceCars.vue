<template>
  <div class="container">
    <a-breadcrumb class="mt-5">
      <a-breadcrumb-item>
        <RouterLink to="/">Главная</RouterLink>
      </a-breadcrumb-item>
      <a-breadcrumb-item>
        <RouterLink to="/commerce-cars">Коммерческий транспорт</RouterLink>
      </a-breadcrumb-item>
    </a-breadcrumb>
    <Filter filter-name="Коммерческий транспорт" />
    <div v-if="loading" class="loader shadow">
      <a-spin />
    </div>
    <AvtoKatalok
      v-else-if="commerceCars.length"
      :avtomobiles="commerceCars"
      :new-current="current"
      router="/commerce-cars/commerce-cars-tovar"
    />
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
import Filter from '@/components/Filter/Filter.vue';
import AvtoKatalok from '@/components/AvtoKatalok/AvtoKatalok.vue';
//Hooks
import { useFetch } from '@/Hooks/UseFatch';

const commerceCars = ref([]);
const current = ref(1);

const { data, loading, error } = useFetch(
  `${import.meta.env.VITE_APP_API}/commerce-cars`
);

watch(data, (newData) => {
  commerceCars.value = newData;
});
</script>
<style></style>
