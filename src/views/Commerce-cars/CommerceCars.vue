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
</template>
<script setup>
import axios from 'axios';
import { onMounted, ref } from 'vue';

//components
import Filter from '@/components/Filter/Filter.vue';
import AvtoKatalok from '@/components/AvtoKatalok.vue';

const commerceCars = ref([])
const current = ref(1)

const fetchCommerceCars = async () => {
    try {
        const response = await axios.get(`${import.meta.env.VITE_APP_API}/commerce-cars`)
        commerceCars.value = response.data
    } catch (error) {
        console.log(error)
    }
}

onMounted(() => {
    fetchCommerceCars()
})

</script>
<style></style>