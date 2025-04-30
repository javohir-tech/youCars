import { defineStore } from 'pinia';
import { ref } from 'vue';

export const useFilterStore = defineStore('filter', () => {
  const stock = ref({
    maxYear: 0,
    minPrice: 16500,
    maxPrice: 70000,
    // page: 0,
    // rate: "cash",
    model: '',
    country: '',
  });

  const setFilter = (key, value) => {
    stock.value[key] = value;
  };

  const resetFilter = () => {
    stock.value = {
      maxYear: 0,
      minPrice: 0,
      maxPrice: 0,
      page: 0,
      rate: 'cash',
      model: '',
      country: '',
    };
  };

  return {
    stock,
    setFilter,
    resetFilter,
  };
});
