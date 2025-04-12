<template>
  <div class="mt-5">
    <h1 class="main-header">{{ $t('pages.home.whyWe.header') }}</h1>
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
//Vue
import { computed } from 'vue';
//components
import WhyWeCard from './WhyWeCard.vue';

// icons
import key from '../../../assets/Images/Icons/carIcon.gif';
import message from '../../../assets/Images/Icons/messageIcon.gif';
import search from '../../../assets/Images/Icons/search.gif';
import dastafka from '../../../assets/Images/Icons/import1.gif';

//lannguage edit
import { useI18n } from 'vue-i18n';

const { t } = useI18n();

// cards data
const cards = computed(() => [
  {
    icon: key,
    title: t('pages.home.whyWe.card1.title'),
    subtitle: t('pages.home.whyWe.card1.subtitle'),
  },
  {
    icon: message,
    title: t('pages.home.whyWe.card2.title'),
    subtitle: t('pages.home.whyWe.card2.subtitle'),
  },
  {
    icon: search,
    title: t('pages.home.whyWe.card3.title'),
    subtitle: t('pages.home.whyWe.card3.subtitle'),
  },
  {
    icon: dastafka,
    title: t('pages.home.whyWe.card4.title'),
    subtitle: t('pages.home.whyWe.card4.subtitle'),
  },
]);
</script>
