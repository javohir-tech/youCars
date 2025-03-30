<template>
  <div class="mt-5">
    <h1 class="main-header">Почему мы?</h1>
    <a-row :gutter="[10, 10]">
      <WhyWeCard
        :icon="key"
        title="Работаем под ключ"
        subtitle="У нас вы можете приобрести автомобиль напрямую у официального автодилера, без посредников и переводчиков."
      />
      <WhyWeCard
        :icon="message"
        title="онлайн-чат 24/7"
        subtitle="Мы всегда на связи, чтобы ответить на ваши вопросы и помочь вам с выбором."
      />
      <WhyWeCard
        :icon="car"
        title="Упрощенный выбор авто"
        subtitle="мы создали этот сайт, чтобы сделать поиск автомобиля по вашим критериям максимально простым и удобным."
      />
      <WhyWeCard
        :icon="dastafka"
        title="Доставка"
        subtitle="поставка в любой регион РФ, прямая связь без посредников"
      />
    </a-row>
  </div>
</template>
<script setup>
import WhyWeCard from './WhyWeCard.vue';

//icons
import key from '../../../assets/Images/Icons/key.png';
import message from '../../../assets/Images/Icons/message.png';
import car from '../../../assets/Images/Icons/car.png';
import dastafka from '../../../assets/Images/Icons/dastafka.png';
</script>
<style></style>
