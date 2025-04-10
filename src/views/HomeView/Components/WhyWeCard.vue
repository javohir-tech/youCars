<template>
  <a-col :xs="{ span: 24 }" :md="{ span: 12 }" :lg="{ span: 6 }">
    <div class="card shadow">
      <div class="card-box">
        <img :src="icon" class="img-fluid" alt="key" />
        <h3 class="my-3">{{ title }}</h3>
        <p>{{ subtitle }}</p>
      </div>
    </div>
  </a-col>
</template>
<script setup>
//Props
defineProps({
  icon: String,
  title: String,
  subtitle: String,
});
</script>
<style scoped>
.card-box {
  height: 180px;
  img {
    width: 64px;
    height: 48px;
  }
}

.card {
  padding: 15px 20px;
  border-radius: 7px;

  h3 {
    font-weight: 500;
    font-size: 18px;
    color: rgba(32, 32, 32, 1);
  }

  p {
    font-weight: 400;
    font-size: 15px;
    line-height: 20px;
    color: rgba(152, 152, 152, 1);
  }
}

.card:hover {
  background-color: #f5f5f5;
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.1);
  transform: translateY(-5px);
  transition: all 0.3s ease;
}
</style>
