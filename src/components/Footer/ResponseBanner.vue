<template>
  <div class="container">
    <div class="response-banner mt-5">
      <a-row justify="space-between" align="center">
        <a-col :xs="{ span: 24 }" :lg="{ span: 11 }">
          <h2>{{ $t('components.underfooter.title') }}</h2>
          <p class="my-3">{{ $t('components.underfooter.subtitle') }}</p>
          <button type="button" @click="navigateContact">{{ $t('components.underfooter.request') }}</button>
        </a-col>
        <a-col :xs="{ span: 24 }" :lg="{ span: 11 }">
          <img src="../../assets/Images/responseBanner.png" class="img-fluid" loading="lazy" alt="banner-image" />
        </a-col>
      </a-row>
    </div>
  </div>
</template>
<script setup>
//vueRouter
import { useRouter } from 'vue-router';

const route = useRouter()

const navigateContact=()=>{
  route.push('/contactus')
}
</script>
<style scoped>
.response-banner {
  background-color: red;
  padding: 30px 40px;
  border-radius: 10px;
  background: linear-gradient(90deg, #3593f3 50.44%, #0c74df 80.16%);
  color: rgba(255, 255, 255, 1);

  h2 {
    font-weight: 500;
    font-size: 28px;
  }

  p {
    font-weight: 400;
    font-size: 14px;
  }

  button {
    background-color: rgba(113, 178, 247, 1);
    border: none;
    padding: 15px 20px;
  }
}
</style>
