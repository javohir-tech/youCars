<template>
  <div class="container">
    <a-breadcrumb class="mt-3">
      <a-breadcrumb-item>
        <RouterLink to="/">{{ $t('navbar.pages.home') }}</RouterLink>
      </a-breadcrumb-item>
      <a-breadcrumb-item>
        <RouterLink to="/motorcycle">{{
          $t('navbar.Avto.motorcycles')
        }}</RouterLink>
      </a-breadcrumb-item>
      <a-breadcrumb-item>
        <RouterLink :to="`/motorcycle/moto-tovar/${route.params.id}`">{{
          carData.model
        }}</RouterLink>
      </a-breadcrumb-item>
    </a-breadcrumb>
    <div v-if="loading" class="loader shadow">
      <a-spin />
    </div>
    <AvtoTovar
      v-else-if="tovarData && similar.length"
      tovar-route="/motorcycle/moto-tovar"
      :similar="similar"
      :car-data="carData"
      :user-data="userData"
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
//Vue
import { useRoute } from 'vue-router';
//Hooks
import { useFetchCarData } from '@/Hooks/UseFatchCarData';
//Components
import AvtoTovar from '@/components/AvtoTovar/AvtoTovar.vue';

const route = useRoute();

const { carData, userData, tovarData, similar, loading, error } =
  useFetchCarData(`${import.meta.env.VITE_APP_API}/motorcycles`);
</script>

<style scoped></style>
