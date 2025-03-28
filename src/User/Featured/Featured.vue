<template>
    <div>
        izobrainiya
        {{ storeCounter.count }}
        <div class="buttons">
            <button @click="storeCounter.increament">+</button>
            <button @click="storeCounter.decreament">-</button>
        </div>
        <p style="text-align: center;">{{ storeCounter.oddOrEven }}</p>
        <input type="number" v-model="storeCounter.count">
    </div>
</template>
<script setup>
import { useCounterStore } from '@/Stores/Store';

const storeCounter = useCounterStore()
</script>
<style>
.buttons button {
    padding: 10px;
    margin-right: 10px;
}
</style>