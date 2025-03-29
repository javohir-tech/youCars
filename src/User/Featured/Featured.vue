<template>
    <div>
        <h1 class="main-header">Избранное</h1>
        <a-row :gutter="[10, 10]">
            <a-col v-for="selectedCar in carStore.selectedCars" :md="{ span: 8 }" :key="selectedCar.id">
                <AvtoCard
                :images="selectedCar.image" 
                :cost="selectedCar.cost" 
                :country="selectedCar.country" 
                :milage="selectedCar.milage"    
                :model="selectedCar.model"
                />
            </a-col>
        </a-row>
    </div>
</template>
<script setup>
import AvtoCard from '@/components/Ui/AvtoCard.vue';
import { useCarStore } from '@/Stores/Store';

const carStore = useCarStore()
</script>
<style>
.buttons button {
    padding: 10px;
    margin-right: 10px;
}
</style>