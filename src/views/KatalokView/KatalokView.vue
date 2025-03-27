<template>
    <div class="container">
        <a-breadcrumb class="mt-5">
            <a-breadcrumb-item>
                <RouterLink to="/">Главная</RouterLink>
            </a-breadcrumb-item>
            <a-breadcrumb-item>
                <RouterLink to="/katalok">Каталог</RouterLink>
            </a-breadcrumb-item>
        </a-breadcrumb>
        <Filter filterName="Каталог" />
        <div v-if="loading" class="loader shadow">
            <a-spin />
        </div>
        <AvtoKatalok v-else-if="cars.length" :avtomobiles="cars" :newCurrent="current" router="/katalok/cars-tovar" />
        <a-result
        v-else-if="error" status="404" title="404"
        sub-title="Sorry, An error occurred while loading the data!"
        />
    </div>
    <a-back-top />
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

const current = ref(1);
const cars = ref([])

const { data, loading,error } = useFetch(`${import.meta.env.VITE_APP_API}/cars`)

watch(data, (newData) => {
    cars.value = newData
})

</script>
<style scoped>
.pagination {
    text-align: center;
}
</style>