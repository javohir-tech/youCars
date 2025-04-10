<template>
  <section class="banner-section">
    <a-row class="banner-box">
      <a-col class="banner-section__info" :xs="{ span: 24 }" :md="{ span: 12 }">
        <h1>Новый Geely Monjaro!</h1>
        <p>
          Кроссовер Monjaro - премиальная модель Geely по уровню дизайна,
          материалов и технологий.
        </p>
        <button class="btn-primary banner-button">Подробнее</button>
      </a-col>
      <a-col :xs="{ span: 24 }" :md="{ span: 12 }" class="banner-image">
        <img
          src="../../../assets/Images/bannerImage.png"
          class="img-fluid"
          alt=""
          data-aos="slide-left"
          data-aos-duration="2000"
          data-aos-once="true"
        />
      </a-col>
    </a-row>
  </section>
</template>
<script setup>
import AOS from 'aos';
import 'aos/dist/aos.css';

AOS.init({
  duration: 1000,
  once: true,
  easing: 'ease-in-out',
});
</script>
<style scoped>
.banner-section {
  margin-top: 30px;
}

.banner-box {
  padding: 45px 20px;
  background-color: rgba(244, 244, 244, 1);
  border-radius: 10px;
  overflow: hidden;
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

@media (max-width: 576px) {
  .banner-box {
    padding: 20px 10px 40px;
  }

  .banner-section__info {
    h1 {
      font-size: 24px;
    }

    p {
      font-size: 16px;
    }
  }

  .banner-button {
    width: 100%;
    padding: 15px;
    margin-bottom: 20px;
  }

  .banner-image {
    img {
      scale: 1.7;
      margin-top: 10px;
    }
  }

  .banner-image img {
    transition: transform 1s ease-out-in;
  }

  [data-aos='slide-left'].aos-animate {
    transform: translateX(60px);
  }

  [data-aos='slide-left'] {
    transform: translateX(150px);
  }
}
</style>
