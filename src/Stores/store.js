//Vue
import { ref } from 'vue';
//Pinia
import { defineStore } from 'pinia';
//Antd
import { message } from 'ant-design-vue';
//userStore
import { useUserStore } from './useUserStore';

export const useCarStore = defineStore(
  'counter',
  () => {
    const userStore = useUserStore();
    //state
    const selectedCars = ref([]);
    //actions
    const addCar = (car) => {
      const token = userStore.userInfo.token;
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
  },
  {
    persist: true,
  }
);
