<template>
  <div class="container">
    <!--BreadCrumb -->
    <a-breadcrumb class="mt-5">
      <a-breadcrumb-item>
        <RouterLink to="/">{{ $t('navbar.pages.home') }}</RouterLink>
      </a-breadcrumb-item>
      <a-breadcrumb-item>
        <RouterLink to="/motorcycle">{{ $t('navbar.Avto.motorcycles') }}</RouterLink>
      </a-breadcrumb-item>
    </a-breadcrumb>
    <!-- filter component -->
     <h1 class="main-header mt-3">{{ $t('pages.motorcycles.filter.header') }}</h1>
    <Filter/>
    <!-- AvtoBar -->
    <div v-if="loading" class="loader shadow">
      <a-spin />
    </div>
    <AvtoKatalok
      v-else-if="motorcycles.length"
      :avtomobiles="motorcycles"
      :new-current="current"
      router="/motorcycle/moto-tovar"
    />
    <a-result
      v-else-if="error"
      status="404"
      title="404"
      sub-title="Sorry, An error occurred while loading the data!"
    />
    <!-- ==== request ===== -->
     <ResponseBanner/>
  </div>
</template>
<script setup>
//vue
import { ref, watch } from 'vue';
import { RouterLink } from 'vue-router';
//components
import AvtoKatalok from '@/components/AvtoKatalok/AvtoKatalok.vue';
import Filter from '@/components/Filter/Filter.vue';
import { ResponseBanner } from '@/components';
//Hooks
import { useFetch } from '@/Hooks/UseFatch';

const motorcycles = ref([]);
const current = ref(1);

const { data, loading, error } = useFetch(
  `${import.meta.env.VITE_APP_API}/motorcycles`
);

watch(data, (newData) => {
  motorcycles.value = newData;
});
</script>
<style></style>
