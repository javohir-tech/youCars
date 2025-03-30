<template>
  <div class="my-5 about-banner">
    <a-row justify="space-between">
      <a-col :xs="{ span: 24 }" :md="{ span: 10 }">
        <div class="about-banner__img">
          <img
            src="@/assets/Images/sloy1.png"
            class="img-fluid front-image"
            alt="about-banner"
          />
          <img
            src="@/assets/Images/backImage.png"
            class="img-fluid back-image"
            alt=""
          />
        </div>
      </a-col>
      <a-col :xs="{ span: 24 }" :md="{ span: 13 }">
        <div class="about-banner__info">
          <h2 class="main-header">О нашей компании</h2>
          <p>
            Мы имеем огромный опыт работы с автомобильным рынком Кореи и
            тщательно отбираем автомобили для наших клиентов, учитывая их
            потребности и бюджет. Мы работаем только с надежными поставщиками и
            перевозчиками, чтобы обеспечить безопасность и надежность доставки.
          </p>
          <button class="btn-primary">Связаться с нами</button>
        </div>
      </a-col>
    </a-row>
    <div>
      <img
        src="../../../assets/Images/balloons.png"
        class="img-fluid baloons"
        alt=""
      />
      <a-flex justify="center" align="center" class="marka">
        <p class="mb-0">№1</p>
      </a-flex>
    </div>
  </div>
</template>
<script setup></script>
<style scoped>
.about-banner {
  position: relative;
  background-color: rgba(246, 246, 246, 1);
  padding: 20px 25px;
  border-radius: 10px;
  margin-top: 100px;
}

.about-banner__img {
  height: 300px;
  text-align: center;
  position: relative;
}

.front-image {
  height: 300px;
  transform: scale(1.3);
  position: absolute;
  top: -25px;
  left: 35%;
  z-index: 2;
}

.back-image {
  transform: scale(0.8);
  position: absolute;
  left: 25%;
  top: -30px;
  z-index: 1;
}

.about-banner__info {
  color: rgba(152, 152, 152, 1);
  font-weight: 400;
  font-size: 16px;
}

.baloons {
  position: absolute;
  bottom: 0;
  right: 10%;
}

.marka {
  position: absolute;
  bottom: 0;
  right: 6%;
  height: 120px;
  width: 100px;
  background-color: rgba(38, 132, 229, 1);
  clip-path: polygon(0% 100%, 100% 100%, 85% 0%, 15% 0%);

  p {
    font-weight: 900;
    font-size: 35px;
    line-height: 23px;
    color: rgba(255, 255, 255, 1);
  }
}

@media (max-width: 576px) {
  .front-image {
    left: 25%;
  }

  .back-image {
    left: 10%;
  }

  .about-banner__info {
    margin-top: 20px;
  }

  .baloons {
    width: 100px;
  }
  .marka {
    height: 60px;
    width: 50px;
    p {
      font-size: 20px;
      line-height: 15px;
    }
  }
}
</style>
