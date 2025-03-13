<template>
  <section class="banner-section">
    <div class="container">
      <a-row class="banner-box">
        <a-col class="banner-section__info" :xs="{ span: 24 }" :md="{ span: 12 }">
          <h1>Новый Geely Monjaro!</h1>
          <p>Кроссовер Monjaro - премиальная модель Geely по уровню дизайна, материалов и технологий. </p>
          <button class="btn-primary">Подробнее</button>
        </a-col>
        <a-col :xs="{ span: 24 }" :md="{ span: 12 }">
          <img src="../assets/Images/bannerImage.png" class="img-fluid" alt="">
        </a-col>
      </a-row>
    </div>
  </section>
</template>
<script setup>
</script>
<style scoped>
.banner-section {
  margin-top: 30px;
}

.banner-box{
  padding: 45px 20px;
  background-color: rgba(244, 244, 244, 1);
  border-radius: 10px;
}

.banner-section__info {
  h1 {
    font-weight: 500;
    font-size: 35px;
    text-transform: uppercase;
  }

  p {
    font-weight: 400;
    font-size: 16px;
    color: rgba(90, 90, 90, 1);
  }
}
</style>