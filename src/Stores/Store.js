import { computed, ref } from 'vue';
import { defineStore } from 'pinia';
import { message } from 'ant-design-vue';

export const useCarStore = defineStore('counter', () => {
    //state
    const selectedCars = ref([]);

    //actions
    const addCar = (car) => {
        if (!selectedCars.value.some(c => c.id === car.id)) {
            selectedCars.value.push(car)
            message.success('The car has been saved')
        }
    }

    const removeCar = (id) => {
        selectedCars.value = selectedCars.value.filter(c => c.id !== id)
        message.info('The car has been removed from saved items')
    }

    const isSelected = (id) => selectedCars.value.some(c => c.id === id)

    return {
        //state
        selectedCars,
        //actions
        addCar,
        removeCar,
        isSelected
    }
})
