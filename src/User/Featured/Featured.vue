<template>
  <div>
    <h1 class="main-header">Избранное</h1>
    <a-row v-if="carStore.selectedCars.length > 0" :gutter="[10, 10]">
      <a-col
        v-for="selectedCar in carStore.selectedCars"
        :md="{ span: 8 }"
        :key="selectedCar.id"
      >
        <AvtoCard
          :avtomabil="selectedCar"
          :images="selectedCar.image"
          :cost="selectedCar.cost"
          :country="selectedCar.country"
          :milage="selectedCar.milage"
          :model="selectedCar.model"
        />
      </a-col>
    </a-row>
    <div v-else class="selectedCar">
      <img
        src="../../assets/Images/selectedCars.png"
        class="img-fluid mb-3"
        alt="selected cars"
      />
      <h3>Нет сохраненных объявлений</h3>
      <p class="mb-4">
        Чтобы добавить авто в избранное, нажмите на сердечко на карточке машины!
      </p>
      <RouterLink class="btn-primary" to="/katalok">
        Перейти в каталог
      </RouterLink>
    </div>
  </div>
</template>
<script setup>
import AvtoCard from '@/components/Ui/AvtoCard.vue';
import { useCarStore } from '@/Stores/store';
import { RouterLink } from 'vue-router';

const carStore = useCarStore();
</script>
<style>
.buttons button {
  padding: 10px;
  margin-right: 10px;
}

.selectedCar {
  display: flex;
  align-items: center;
  flex-direction: column;
  justify-content: center;
  padding: 20px;
  h3 {
    font-weight: 500;
    font-size: 20px;
    color: rgba(152, 152, 152, 1);
  }
  p {
    font-weight: 400;
    font-size: 15px;
  }
}
</style>
