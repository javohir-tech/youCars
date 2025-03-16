<template>
    <div class="cars-katalok mt-5">
        <h1 class="main-header">АВТОМОБИЛЬНЫЙ КАТАЛОГ</h1>
        <a-row :gutter="[10, 10]">
            <a-col :xs="{ span: 24 }" :md="{ span: 8 }" :lg="{ span: 6 }" v-for="(car, index) in cars" :key="index">
                <AvtoCard :image="car.image[0]" :cost="car.cost" :country="car.country" :milage="car.milage"
                    :model="car.model" />
            </a-col>
        </a-row>
    </div>
</template>
<script setup>
//components 
import AvtoCard from '@/components/Ui/AvtoCard.vue';

//axios  
import axios from 'axios';

//onMounted
import { onMounted, ref } from 'vue';

const cars = ref()

const FetchData = async () => {
    try {
        const { data } = await axios.get(`https://api.youcarrf.ru/api-docs/cars`)
        cars.value = data.slice(0, 8)
        // console.log(data)
    } catch (error) {
        console.log(error)
    }
}

onMounted(() => {
    FetchData()
})
</script>
<style></style>