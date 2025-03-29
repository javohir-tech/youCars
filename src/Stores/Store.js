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
        } else {
            message.info('This car has already been added')
        }
    }

    const removeCar = (id) => {
        selectedCars.value = selectedCars.value.filter(c => c.id !== id)
        message.success('The car has been removed from saved items')
    }

    const isSelected = (car) => selectedCars.value.some(c => c.id === car.id)

    return {
        //state
        selectedCars,
        //actions
        addCar,
        removeCar,
        isSelected
    }
})