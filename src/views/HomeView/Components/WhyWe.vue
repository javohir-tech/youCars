<template>
  <div class="mt-5">
    <h1 class="main-header">Почему мы?</h1>
    <a-row :gutter="[10, 10]">
      <WhyWeCard
        v-for="(card, index) in cards"
        :key="index"
        :icon="card.icon"
        :title="card.title"
        :subtitle="card.subtitle"
      />
    </a-row>
  </div>
</template>

<script setup>
import WhyWeCard from './WhyWeCard.vue';

// icons
import key from '../../../assets/Images/Icons/carIcon.gif';
import message from '../../../assets/Images/Icons/messageIcon.gif';
import search from '../../../assets/Images/Icons/search.gif';
import dastafka from '../../../assets/Images/Icons/import1.gif';

// cards data
const cards = [
  {
    icon: key,
    title: 'Работаем под ключ',
    subtitle:
      'У нас вы можете приобрести автомобиль напрямую у официального автодилера, без посредников и переводчиков.',
  },
  {
    icon: message,
    title: 'онлайн-чат 24/7',
    subtitle:
      'Мы всегда на связи, чтобы ответить на ваши вопросы и помочь вам с выбором.',
  },
  {
    icon: search,
    title: 'Упрощенный выбор авто',
    subtitle:
      'мы создали этот сайт, чтобы сделать поиск автомобиля по вашим критериям максимально простым и удобным.',
  },
  {
    icon: dastafka,
    title: 'Доставка',
    subtitle: 'поставка в любой регион РФ, прямая связь без посредников',
  },
];
</script>
