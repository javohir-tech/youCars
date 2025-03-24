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
        <AvtoTovar v-if="tovarData" :tovar-data="carData"  :user-data="userData"/>
        <div v-else>
            loading...
        </div>
    </div>
</template>

<script setup>
import AvtoTovar from '@/components/AvtoTovar/AvtoTovar.vue';
import axios from 'axios';
import { onMounted, ref } from 'vue';
import { useRoute } from 'vue-router';

const route = useRoute()

const carData = ref([])
const userData = ref([])
const tovarData = ref([])

const fetchCar = async() =>{
    try {
        const response = await axios.get(`${import.meta.env.VITE_APP_API}/cars/${route.params.id}`)
        tovarData.value = response.data
        carData.value = response.data.result
        userData.value = response.data.userData
    } catch (error) {
        console.log(error)
    }
}

onMounted(()=>{
    fetchCar()
})
</script>

<style scoped>

</style>