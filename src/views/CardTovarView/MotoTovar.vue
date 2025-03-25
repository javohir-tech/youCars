<template>
    <div class="container">
        <a-breadcrumb class="mt-5">
            <a-breadcrumb-item>
                <RouterLink to="/">Главная</RouterLink>
            </a-breadcrumb-item>
            <a-breadcrumb-item>
                <RouterLink to="/motorcycle">Мотоциклы</RouterLink>
            </a-breadcrumb-item>
            <a-breadcrumb-item>
                <RouterLink :to="`/motorcycle/moto-tovar/${route.params.id}`">{{ carData.model }}</RouterLink>
            </a-breadcrumb-item>
        </a-breadcrumb>
        <AvtoTovar v-if="tovarData && similar.length" similar-route="/motorcycle/moto-tovar" :similar="similar" :car-data="carData" :user-data="userData" />
        <div v-else class="loader shadow">
            <a-spin />
        </div>
    </div>
</template>

<script setup>
//components
import AvtoTovar from '@/components/AvtoTovar/AvtoTovar.vue';

import axios from 'axios';
import { onMounted, ref, toRaw, watch } from 'vue';
import { useRoute } from 'vue-router';

const route = useRoute()

const carData = ref([])
const userData = ref([])
const tovarData = ref([])
const similar = ref([])

const getRandomSimilar = (similar) => {
    if (similar.length <= 3) return similar

    return similar
        .sort(() => Math.random() - 0.5)
        .slice(0, 3)
}

const fetchData = async () => {
    try {
        const [carResponse, similarResponse] = await Promise.all([
            axios.get(`${import.meta.env.VITE_APP_API}/motorcycles/${route.params.id}`),
            axios.get(`${import.meta.env.VITE_APP_API}/motorcycles`)
        ])

        tovarData.value = carResponse.data
        carData.value = carResponse.data.result
        userData.value = carResponse.data.userData
        similar.value = getRandomSimilar(similarResponse.data)

        // console.log('Car Data:', toRaw(carData.value))
        // console.log('Similar:', toRaw(similar.value))
    } catch (error) {
        console.error('Error fetching data:', error)
    }
}

watch(() => route.params.id, () => {
    fetchData()
})

onMounted(() => {
    fetchData()
})
</script>


<style scoped></style>