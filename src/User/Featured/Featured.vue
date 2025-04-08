<template>
  <div class="responsive-container">
    <div class="desktop-header">
      <h1 class="main-header">Избранное</h1>
    </div>
    <div class="mobile-header mt-3">
      <button @click="goBack">
        <h1 class="main-header"><i class="bi bi-chevron-left"></i>Избранное</h1>
      </button>
    </div>
    <a-row v-if="carStore.selectedCars.length > 0" :gutter="[10, 10]">
      <a-col v-for="selectedCar in carStore.selectedCars" :xs="{ span: 24 }" :md="{ span: 8 }" :key="selectedCar.id">
        <RouterLink :to="`${selectedCar.route}/${selectedCar.id}`">
          <AvtoCard :avtomabil="selectedCar" :images="selectedCar.image" :cost="selectedCar.cost"
            :country="selectedCar.country" :milage="selectedCar.milage" :model="selectedCar.model" />
        </RouterLink>
      </a-col>
    </a-row>
    <div v-else class="empty-box">
      <img src="../../assets/Images/selectedCars.png" class="img-fluid mb-3" alt="selected cars" />
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
//Components
import AvtoCard from '@/components/Ui/AvtoCard.vue';
//Pinia
import { useCarStore } from '@/Stores/store';
//Vue Router
import { useRouter } from 'vue-router';
import { RouterLink } from 'vue-router';

const carStore = useCarStore();
const router = useRouter()

function goBack(){
  router.go(-1)
}
</script>
<style scoped>
.buttons button {
  padding: 10px;
  margin-right: 10px;
}
</style>
