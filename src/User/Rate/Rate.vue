<template>
  <div class="responsive-container">
    <div class="desktop-header">
      <h1 class="main-header">Выбор тарифа</h1>
    </div>
    <div class="mobile-header mt-3">
      <button @click="goBack">
        <h1 class="main-header"><i class="bi bi-chevron-left"></i>Выбор тарифа</h1>
      </button>
    </div>
    <div class="pricing-container">
      <div class="pricing-option" :class="{ 'selected': selectedOption === 'year' }" @click="selectOption('year')">
        <div class="option-header">
          <label class="radio-container">
            <input type="radio" name="pricing" value="year" v-model="selectedOption" @click.stop>
            <span class="radio-custom"></span>
            <span class="option-title">Премиум доступ на год</span>
          </label>
          <div class="price-container">
            <div class="price">3590.00 руб</div>
            <div class="price-per-day">9.8 руб. / день</div>
          </div>
        </div>
        <ul class="features-list">
          <li>10 отчётов по кад.номеру включено</li>
          <li>3 отчётов по VIN авто включено</li>
          <li>Бесплатные выписки из ЕГРЮЛ</li>
        </ul>
      </div>

      <div class="pricing-option" :class="{ 'selected': selectedOption === 'month' }" @click="selectOption('month')">
        <div class="option-header">
          <label class="radio-container">
            <input type="radio" name="pricing" value="month" v-model="selectedOption" @click.stop>
            <span class="radio-custom"></span>
            <span class="option-title">Премиум доступ на 30 дней</span>
          </label>
          <div class="price-container">
            <div class="price">690.00 руб</div>
            <div class="price-per-day">16.3 руб. / день</div>
          </div>
        </div>
        <ul class="features-list">
          <li>3 отчёта по кад.номеру включено</li>
          <li>1 отчёт по VIN авто включен</li>
          <li>Бесплатные выписки из ЕГРЮЛ</li>
        </ul>
      </div>

      <div class="pricing-option" :class="{ 'selected': selectedOption === 'day' }" @click="selectOption('day')">
        <div class="option-header">
          <label class="radio-container">
            <input type="radio" name="pricing" value="day" v-model="selectedOption" @click.stop>
            <span class="radio-custom"></span>
            <span class="option-title">Премиум доступ на 24 часа</span>
          </label>
          <div class="price-container">
            <div class="price">90.00 руб</div>
          </div>
        </div>
      </div>
      <a-button type="primary" class="mb-3" style="width: 100%;" :disabled="true">Оформить</a-button>
      <a-button type="primary" style="width: 100%;" :disabled="true">Возможности на Премиуме</a-button>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue'
import { useRouter } from 'vue-router';

const selectedOption = ref('year')

const selectOption = (option) => {
  selectedOption.value = option
}

const router = useRouter()

function goBack(){
  router.go(-1)
}
</script>

<style scoped>
@import './Rate.css';
</style>