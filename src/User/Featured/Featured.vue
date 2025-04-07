<template>
  <div class="responsive-container">
    <div class="desktop-header">
      <h1 class="main-header">Избранное</h1>
    </div>
    <div class="mobile-header">
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
    <div v-else class="selectedCar">
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
import { RouterLink } from 'vue-router';
import { useRouter } from 'vue-router';

const router = useRouter()
const carStore = useCarStore();

function goBack(){
  router.go(-1)
}
</script>
<style scoped>
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
  a{
    text-decoration: none;
  }
}

.desktop-header{
  display: block;
}

.mobile-header{
  display: none;
}

@media (max-width: 576px) {

  .responsive-container {
    width: 100%;
    padding-right: var(--bs-gutter-x, 0.75rem);
    padding-left: var(--bs-gutter-x, 0.75rem);
    margin-right: auto;
    margin-left: auto;
    max-width: 540px;
  }

  .desktop-header{
    display: none;
  }

  .mobile-header{
    display: block;
    button{
      border: none;
      background-color: transparent;
    }
  }
}
</style>
