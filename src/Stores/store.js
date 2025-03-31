//Vue
import { ref } from 'vue';
//Pinia
import { defineStore } from 'pinia';
//Antd
import { message } from 'ant-design-vue';

const token = localStorage.getItem('token') || sessionStorage.getItem('token');

export const useCarStore = defineStore('counter', () => {
  //state
  const selectedCars = ref([]);

  //actions
  const addCar = (car) => {
    if (token) {
      if (!selectedCars.value.some((c) => c.id === car.id)) {
        selectedCars.value.push(car);
        message.success('The car has been saved');
      }
    } else {
      message.error('You are not registered');
    }
  };

  const removeCar = (id) => {
    selectedCars.value = selectedCars.value.filter((c) => c.id !== id);
    message.info('The car has been removed from saved items');
  };

  const isSelected = (id) => selectedCars.value.some((c) => c.id === id);

  return {
    //state
    selectedCars,
    //actions
    addCar,
    removeCar,
    isSelected,
  };
});
