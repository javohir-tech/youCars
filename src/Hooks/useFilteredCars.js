import { ref } from "vue";
import axios from "axios";

export function useFilteredCars(endpointUrl) {
    const carsFilter = ref([]);
    const loadingFilter = ref(false);
    const errorFilter = ref(null);

    const fetchFilteredCars = async (filters) => {
        loadingFilter.value = true;
        errorFilter.value = null;

        try {
            const response = await axios.post(endpointUrl,  filters);
            carsFilter.value = response.data.cars;
        } catch (err) {
            errorFilter.value = err;
        }finally{
            loadingFilter.value = false;
        }
    };

    return {
        carsFilter,
        loadingFilter, 
        errorFilter,
        fetchFilteredCars,
    }
}