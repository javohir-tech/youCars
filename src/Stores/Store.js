import { computed, ref } from 'vue';
import { defineStore } from 'pinia';

export const useCounterStore = defineStore('counter', () => {

    //state
    const count = ref(10)
    //actions
    const increament = () => {
        count.value++
    }
    function decreament() {
        count.value--
    }

    //getters
    const oddOrEven = computed(() => {
        if (count.value % 2 ===0){
            return 'even'
        }
        return 'odd'
    })

    return {
        //state
        count,
        //Actions
        increament,
        decreament,
        //getters
        oddOrEven
    }

})