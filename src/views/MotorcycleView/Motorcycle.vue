<template>
    <div class="container">
        <!--BreadCrumb -->
        <a-breadcrumb class="mt-5">
            <a-breadcrumb-item>
                <RouterLink to="/">Главная</RouterLink>
            </a-breadcrumb-item>
            <a-breadcrumb-item>
                <RouterLink to="/motorcycle">Мотоциклы</RouterLink>
            </a-breadcrumb-item>
        </a-breadcrumb>
        <!-- filter component -->
        <Filter filter-name="Мотоциклы" />
        <!-- AvtoBar -->
        <AvtoKatalok v-if="motorcycles.length" :avtomobiles="motorcycles" :new-current="current"
            router="/motorcycle/moto-tovar" />
        <div v-else class="loader shadow">
            <a-spin />
        </div>
    </div>
    <a-back-top />
</template>
<script setup>
import axios from 'axios';
import { onMounted, ref } from 'vue';
import { RouterLink } from 'vue-router';
//components
import AvtoKatalok from '@/components/AvtoKatalok/AvtoKatalok.vue';
import Filter from '@/components/Filter/Filter.vue';

const motorcycles = ref([])
const current = ref(1);

const fetchMotorcycles = async () => {
    try {
        const response = await axios.get(`${import.meta.env.VITE_APP_API}/motorcycles`)
        motorcycles.value = response.data
    } catch (error) {
        console.log(error)
    }
}

onMounted(() => {
    fetchMotorcycles()
})

</script>
<style></style>