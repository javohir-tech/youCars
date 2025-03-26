import { ref, watch, onMounted } from 'vue'
import axios from 'axios'
import { useRoute } from 'vue-router'

export function useFetchCarData(apiBaseUrl) {
    const route = useRoute()

    const carData = ref([])
    const userData = ref([])
    const tovarData = ref([])
    const similar = ref([])
    const loading = ref(false)

    const getRandomSimilar = (similar) => {
        if (similar.length <= 3) return similar
        return similar.sort(() => Math.random() - 0.5).slice(0, 3)
    }

    const fetchData = async (id) => {
        loading.value = true
        try {
            const [carResponse, similarResponse] = await Promise.all([
                axios.get(`${apiBaseUrl}/${id}`),
                axios.get(`${apiBaseUrl}`)
            ])

            tovarData.value = carResponse.data
            carData.value = carResponse.data.result
            userData.value = carResponse.data.userData
            similar.value = getRandomSimilar(similarResponse.data)
        } catch (error) {
            console.error('Error fetching data:', error)
        } finally {
            loading.value = false
        }
    }

    watch(() => route.params.id, (newId) => {
        if (newId) fetchData(newId)
    })

    onMounted(() => {
        if (route.params.id) fetchData(route.params.id)
    })

    return {
        carData,
        userData,
        tovarData,
        similar,
        loading,
        fetchData
    }
}
