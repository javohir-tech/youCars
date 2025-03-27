<template>
    <div class="cars-katalok mt-5">
        <h1 class="main-header">АВТОМОБИЛЬНЫЙ КАТАЛОГ</h1>
        <div v-if="loading" class="loader shadow">
            <a-spin />
        </div>
        <a-row :gutter="[10, 10]" v-else-if="cars.length">
            <a-col :xs="{ span: 24 }" :md="{ span: 8 }" :lg="{ span: 6 }" v-for="(car, index) in cars" :key="index">
                <RouterLink :to="`/katalok/cars-tovar/${car.id}`">
                    <AvtoCard :images="car.image" :cost="car.cost" :country="car.country" :milage="car.milage"
                        :model="car.model" :idNumber="car.id" />
                </RouterLink>
            </a-col>
        </a-row>
        <a-result v-else-if="error" status="404" title="404" sub-title="Sorry, An error occurred while loading the data!" />
    </div>
</template>
<script setup>
//components 
import AvtoCard from '@/components/Ui/AvtoCard.vue';

//hooks
import { useFetch } from '@/Hooks/UseFatch';

//Vue
import { ref, watch } from 'vue';
import { RouterLink } from 'vue-router';

const cars = ref([])

const { data, loading, error } = useFetch(`${import.meta.env.VITE_APP_API}/cars`)


watch(data, (newData) => {
    cars.value = newData.slice(0, 8)
})

</script>
<style></style>