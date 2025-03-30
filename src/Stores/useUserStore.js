//Pinia
import { defineStore } from 'pinia';
import { ref } from 'vue';

export const useUserStore = defineStore('userStore', () => {
  const userName = ref('');

  const addUserName = (name) => {
    userName.value = name;
  };

  return {
    //state
    userName,
    //actions
    addUserName,
  };
});
