<template>
  <div class="responsive-container">
    <div class="desktop-header">
      <h1 class="main-header">{{ $t('userPage.sideBar.message') }}</h1>
    </div>
    <div class="mobile-header mt-3">
      <button @click="goBack">
        <h1 class="main-header">
          <i class="bi bi-chevron-left"></i>{{ $t('userPage.sideBar.message') }}
        </h1>
      </button>
    </div>
    <div class="empty-box">
      <div class="message-icons__effect">
        <img
          src="../.././assets/Images/Icons/messageEffect3.gif"
          class="img-fluid"
          alt="img"
        />
      </div>
      <h3>{{ $t('userPage.message.title') }}</h3>
      <p>{{ $t('userPage.message.subtitle') }}</p>
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
<style scoped>
.message-icons__effect {
  width: 200px;
}
</style>
