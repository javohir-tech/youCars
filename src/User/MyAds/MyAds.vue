<template>
  <div class="responsive-container">
    <div class="desktop-header">
      <h1 class="main-header">Мои объявления</h1>
    </div>
    <div class="mobile-header mt-3">
      <button @click="goBack">
        <h1 class="main-header"><i class="bi bi-chevron-left"></i>Мои объявления</h1>
      </button>
    </div>
    <div class="empty-box">
      <div class="my-adds__effect">
        <img src="../../assets/Images/Icons/my-adds.gif" class="img-fluid" alt="img">
      </div>
      <h3>У вас нет размещённых автомобилей</h3>
      <p>Вы ещё не добавили ни одного автомобиля. Нажмите «Добавить», чтобы разместить свой первый автомобиль.</p>
    </div>
  </div>
</template>
<script setup>
import { useRouter } from 'vue-router';
const router = useRouter()

function goBack(){
  router.go(-1)
}
</script>
<style>

.my-adds__effect{
  width: 200px;
}

</style>
