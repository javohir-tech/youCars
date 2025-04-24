import { ref } from "vue";
import axios from "axios";

export function useFilteredCars(endpointUrl) {
    const cars = ref([]);
    const loading = ref(false);
    const error = ref(null);

    const fetchFilteredCars = async (filters) => {
        loading.value = true;
        error.value = null;

        try {
            const response = await axios.post(endpointUrl,  filters);
            cars.value = response.data.cars;
        } catch (err) {
            error.value = err;
        }finally{
            loading.value = false;
        }
    };

    return {
        cars,
        loading, 
        error,
        fetchFilteredCars,
    }
}