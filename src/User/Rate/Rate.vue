<template>
  <div class="responsive-container">
    <div class="desktop-header">
      <h1 class="main-header">{{ $t('userPage.rate.header') }}</h1>
    </div>
    <div class="mobile-header mt-3">
      <button @click="goBack">
        <h1 class="main-header">
          <i class="bi bi-chevron-left"></i>{{ $t('userPage.rate.header') }}
        </h1>
      </button>
    </div>
    <div class="pricing-container">
      <div
        class="pricing-option"
        :class="{ selected: selectedOption === 'year' }"
        @click="selectOption('year')"
      >
        <div class="option-header">
          <label class="radio-container">
            <input
              type="radio"
              name="pricing"
              value="year"
              v-model="selectedOption"
              @click.stop
            />
            <span class="radio-custom"></span>
            <span class="option-title">{{
              $t('userPage.rate.card1.title')
            }}</span>
          </label>
          <div class="price-container">
            <div class="price">3590.00 {{ $t('userPage.rate.rub') }}</div>
            <div class="price-per-day">
              9.8 {{ $t('userPage.rate.rub') }}. / {{ $t('userPage.rate.day') }}
            </div>
          </div>
        </div>
        <ul class="features-list">
          <li>{{ $t('userPage.rate.card1.subtitle1') }}</li>
          <li>{{ $t('userPage.rate.card1.subtitle2') }}</li>
          <li>{{ $t('userPage.rate.card1.subtitle3') }}</li>
        </ul>
      </div>

      <div
        class="pricing-option"
        :class="{ selected: selectedOption === 'month' }"
        @click="selectOption('month')"
      >
        <div class="option-header">
          <label class="radio-container">
            <input
              type="radio"
              name="pricing"
              value="month"
              v-model="selectedOption"
              @click.stop
            />
            <span class="radio-custom"></span>
            <span class="option-title">{{
              $t('userPage.rate.card2.title')
            }}</span>
          </label>
          <div class="price-container">
            <div class="price">690.00 {{ $t('userPage.rate.rub') }}</div>
            <div class="price-per-day">
              16.3 {{ $t('userPage.rate.rub') }}. /
              {{ $t('userPage.rate.day') }}
            </div>
          </div>
        </div>
        <ul class="features-list">
          <li>{{ $t('userPage.rate.card2.subtitle1') }}</li>
          <li>{{ $t('userPage.rate.card2.subtitle2') }}</li>
          <li>{{ $t('userPage.rate.card2.subtitle3') }}</li>
        </ul>
      </div>

      <div
        class="pricing-option"
        :class="{ selected: selectedOption === 'day' }"
        @click="selectOption('day')"
      >
        <div class="option-header">
          <label class="radio-container">
            <input
              type="radio"
              name="pricing"
              value="day"
              v-model="selectedOption"
              @click.stop
            />
            <span class="radio-custom"></span>
            <span class="option-title">{{
              $t('userPage.rate.card3.title')
            }}</span>
          </label>
          <div class="price-container">
            <div class="price">90.00 {{ $t('userPage.rate.rub') }}</div>
          </div>
        </div>
      </div>
      <a-button type="primary" class="mb-3" style="width: 100%" :disabled="true"
        >Оформить</a-button
      >
      <a-button type="primary" style="width: 100%" :disabled="true"
        >Возможности на Премиуме</a-button
      >
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue';
import { useRouter } from 'vue-router';

const selectedOption = ref('year');

const selectOption = (option) => {
  selectedOption.value = option;
};

const router = useRouter();

function goBack() {
  router.go(-1);
}
</script>

<style scoped>
@import './Rate.css';
</style>
