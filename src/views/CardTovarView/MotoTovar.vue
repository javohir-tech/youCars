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
        <AvtoTovar v-if="tovarData && similar.length" similar-route="/motorcycle/moto-tovar" :similar="similar"
            :car-data="carData" :user-data="userData" />
        <div v-else class="loader shadow">
            <a-spin />
        </div>
    </div>
    <a-back-top />
</template>

<script setup>
//components
import AvtoTovar from '@/components/AvtoTovar/AvtoTovar.vue';
//Hooks
import { useFetch } from '@/Hooks/UseFatch';
//vue
import { ref, watch } from 'vue';
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

//Hooks
const { data: carResponse, get: getCar } = useFetch(`${import.meta.env.VITE_APP_API}/motorcycles/${route.params.id}`)
const { data: similarResponse, get: getSimilar } = useFetch(`${import.meta.env.VITE_APP_API}/motorcycles`)

watch(carResponse, (tovar) => {
    tovarData.value = tovar
    carData.value = tovar.result
    userData.value = tovar.userData
})
watch(similarResponse, (similarData) => {
    similar.value = getRandomSimilar(similarData)
})

//get datas
getCar()
getSimilar()
</script>


<style scoped></style>