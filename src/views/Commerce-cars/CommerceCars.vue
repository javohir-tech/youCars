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
        <AvtoKatalok v-if="commerceCars.length" :avtomobiles="commerceCars" :new-current="current"
            router="/commerce-cars/commerce-cars-tovar" />
        <div v-else class="loader shadow">
            <a-spin />
        </div>
    </div>
    <a-back-top />
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

const commerceCars = ref([])
const current = ref(1)

const { data, get } = useFetch(`${import.meta.env.VITE_APP_API}/commerce-cars`)

watch(data, (newData) => {
    commerceCars.value = newData
})

get()
</script>
<style></style>