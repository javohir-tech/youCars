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
        <!-- <div class="cars-katalok mt-5">
            <a-row :gutter="[10, 10]" v-if="paginatedCars.length">
                <a-col :xs="{ span: 24 }" :md="{ span: 8 }" :lg="{ span: 6 }" v-for="(car, index) in paginatedCars" :key="index">
                    <AvtoCard :image="car.image?.[0]" :cost="car.cost" :country="car.country" :milage="car.milage"
                        :model="car.model" />
                </a-col>
            </a-row>
            <a-pagination class="pagination mt-3" v-model:current="current" :page-size="pageSize" :total="cars.length"
                show-less-items 
                @change="onPageChange"
                />
        </div> -->
        <AvtoKatalok v-if="cars.length" :avtomobiles="cars" :newCurrent="current" router="/katalok/cars-tovar" />
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
import Filter from '../../components/Filter/Filter.vue';
import AvtoKatalok from '@/components/AvtoKatalok/AvtoKatalok.vue';
//Hooks
import { useFetch } from '@/Hooks/UseFatch';

const current = ref(1);
const cars = ref([])

const { data, get } = useFetch(`${import.meta.env.VITE_APP_API}/cars`)

watch(data, (newData) => {
    cars.value = newData
})

get()

</script>
<style scoped>
.pagination {
    text-align: center;
}
</style>