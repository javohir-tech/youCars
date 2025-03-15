<template>
    <div class="cars-katalok">
        <h1>АВТОМОБИЛЬНЫЙ КАТАЛОГ</h1>
        <a-row :gutter="[10, 10]">
            <a-col span="6" v-for="(car, index) in cars" :key="index">
                <AvtoCard :image="car.image[0]" :cost="car.cost" :country="car.country" :milage="car.milage"/>
            </a-col>
        </a-row>
    </div>
</template>
<script setup>
import axios from 'axios';
import AvtoCard from '../Ui/AvtoCard.vue';
import { onMounted, ref } from 'vue';

const cars = ref()
console.log(cars)

const FetchData = async () => {
    try {
        const { data } = await axios.get(`${import.meta.env.VITE_APP_API}cars`)
        cars.value = data
        console.log(data)
    } catch (error) {
        console.log(error)
    }
}

onMounted(() => {
    FetchData()
})
</script>
<style></style>