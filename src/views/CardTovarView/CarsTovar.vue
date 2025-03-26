<template>
    <div class="container">
        <a-breadcrumb class="mt-5">
            <a-breadcrumb-item>
                <RouterLink to="/">Главная</RouterLink>
            </a-breadcrumb-item>
            <a-breadcrumb-item>
                <RouterLink to="/katalok">Каталог</RouterLink>
            </a-breadcrumb-item>
            <a-breadcrumb-item>
                <RouterLink :to="`/katalok/cars-tovar/${route.params.id}`">{{ carData.model }}</RouterLink>
            </a-breadcrumb-item>
        </a-breadcrumb>
        <div v-if="loading" class="loader shadow">
            <a-spin />
        </div>
        <AvtoTovar v-else-if="tovarData && similar.length" similar-route="/katalok/cars-tovar" :similar="similar"
            :car-data="carData" :user-data="userData" />
    </div>
    <a-back-top />
</template>

<script setup>
//Hooks
import { useFetchCarData } from '@/Hooks/UseFatchCarData';
//Vue
import { useRoute } from 'vue-router';
//Components
import AvtoTovar from '@/components/AvtoTovar/AvtoTovar.vue';
const route = useRoute()

const { carData, userData, tovarData, similar, loading } = useFetchCarData(`${import.meta.env.VITE_APP_API}/cars`)
</script>

<style scoped></style>