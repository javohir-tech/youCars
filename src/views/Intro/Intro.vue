<template>
  <div class="intro">
    <div class="overlay">
      <h1>Xush kelibsiz!</h1>
      <p>Sizning sayohatingiz boshlanmoqda 🚀</p>
    </div>
  </div>
</template>

<script setup>
import { onMounted } from 'vue';
import { useRouter } from 'vue-router';

const router = useRouter();

onMounted(() => {
  setTimeout(() => {
    router.push('/home'); // ✅ 5 sekunddan keyin Home sahifasiga o'tadi
  }, 5000); // 5 sekund davomida intro chiqadi
});
</script>

<style scoped>
.intro {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: 9999;
  overflow: hidden;
}

.video-bg {
  width: 100%;
  height: 100%;
  object-fit: cover;
}

.overlay {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  color: #fff;
  text-align: center;
}

.overlay h1 {
  font-size: 3rem;
  font-weight: bold;
  margin-bottom: 1rem;
}

.overlay p {
  font-size: 1.5rem;
}
</style>
