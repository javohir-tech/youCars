<template>
  <div class="container">
    <a-breadcrumb class="mt-3">
      <a-breadcrumb-item>
        <RouterLink to="/">{{ $t('navbar.pages.home') }}</RouterLink>
      </a-breadcrumb-item>
      <a-breadcrumb-item>
        <RouterLink to="/katalok">{{ $t('navbar.pages.katalok') }}</RouterLink>
      </a-breadcrumb-item>
      <a-breadcrumb-item>
        <RouterLink :to="`/katalok/cars-tovar/${route.params.id}`">{{
          carData.model
          }}</RouterLink>
      </a-breadcrumb-item>
    </a-breadcrumb>
    <div v-if="loading" class="loader shadow">
      <a-spin />
    </div>
    <!--===== Tovar haqida malumot ===== -->
    <AvtoTovar v-else-if="tovarData && similar.length" tovar-route="/katalok/cars-tovar" :similar="similar"
      :car-data="carData" :user-data="userData" />
    <a-result v-else-if="error" status="404" title="404" sub-title="Sorry, An error occurred while loading the data!" />
    <!-- ===== response tovars =====-->
    <ResponseBanner />
  </div>
</template>

<script setup>
//Hooks
import { useFetchCarData } from '@/Hooks/UseFatchCarData';
//Vue
import { useRoute } from 'vue-router';
//Components
import AvtoTovar from '@/components/AvtoTovar/AvtoTovar.vue';
import { ResponseBanner } from '@/components';
const route = useRoute();

const { carData, userData, tovarData, similar, loading, error } =
  useFetchCarData(`${import.meta.env.VITE_APP_API}/cars`);
</script>

<style scoped></style>
