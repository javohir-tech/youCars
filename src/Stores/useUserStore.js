import { defineStore } from 'pinia';
import { ref, watch } from 'vue';

export const useUserStore = defineStore('userStore', () => {
  //state
  const storedUser = JSON.parse(localStorage.getItem('userInfo')) || {
    name: null,
    email: null,
    id: null,
    token: null
  };

  const userInfo = ref(storedUser);

  const setUser = (user) => {
    userInfo.value = { ...user };
  };

  watch(userInfo, (newValue) => {
    if (newValue.token) {
      localStorage.setItem('userInfo', JSON.stringify(newValue));
    } else {
      localStorage.removeItem('userInfo'); 
    }
  }, { deep: true });

  return {
    userInfo,
    setUser,
  };
});
