<template>
  <div class="responsive-container">
    <div class="desktop-header">
      <h1 class="main-header">{{ $t('userPage.sideBar.myads') }}</h1>
    </div>
    <div class="mobile-header mt-3">
      <button @click="goBack">
        <h1 class="main-header">
          <i class="bi bi-chevron-left"></i>{{ $t('userPage.sideBar.myads') }}
        </h1>
      </button>
    </div>
    <div class="empty-box">
      <div class="my-adds__effect">
        <img
          src="../../assets/Images/Icons/my-adds.gif"
          class="img-fluid"
          alt="img"
        />
      </div>
      <h3>{{ $t('userPage.myads.title') }}</h3>
      <p>{{ $t('userPage.myads.subtitle') }}</p>
      <RouterLink to="/place-ad" class="btn-primary">{{ $t('userPage.myads.button') }}</RouterLink>
    </div>
  </div>
</template>
<script setup>
import { useRouter } from 'vue-router';
const router = useRouter();

function goBack() {
  router.go(-1);
}
</script>
<style>
.my-adds__effect {
  width: 200px;
}
</style>
