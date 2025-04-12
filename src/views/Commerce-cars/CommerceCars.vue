<template>
  <div class="container">
    <!-- ===== Commerce cars ===== -->
    <a-breadcrumb class="mt-5">
      <a-breadcrumb-item>
        <RouterLink to="/">{{ $t('navbar.pages.home') }}</RouterLink>
      </a-breadcrumb-item>
      <a-breadcrumb-item>
        <RouterLink to="/commerce-cars">{{ $t('navbar.Avto.commercial') }}</RouterLink>
      </a-breadcrumb-item>
    </a-breadcrumb>
    <!-- ===== filter ===== -->
    <h1 class="main-header mt-3">{{ $t('pages.CommercialTransport.filter.header') }}</h1>
    <Filter />
    <div v-if="loading" class="loader shadow">
      <a-spin />
    </div>
    <!-- ===== Commerce cars ===== -->
    <AvtoKatalok v-else-if="commerceCars.length" :avtomobiles="commerceCars" :new-current="current"
      router="/commerce-cars/commerce-cars-tovar" />
    <a-result v-else-if="error" status="404" title="404" sub-title="Sorry, An error occurred while loading the data!" />
    <!-- ===== Request ===== -->
    <ResponseBanner />
  </div>
</template>
<script setup>
//vue
import { ref, watch } from 'vue';
import { RouterLink } from 'vue-router';
//components
import Filter from '@/components/Filter/Filter.vue';
import AvtoKatalok from '@/components/AvtoKatalok/AvtoKatalok.vue';
import { ResponseBanner } from '@/components';
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
