<template>
  <div class="container">
    <div class="place-add__box shadow mt-4">
      <div>
        <div class="add-section__header">
          <h1>Разместите объявление </h1>
          <p>Укажите данные об автомобиле для размещения объявления</p>
        </div>
        <div class="navigation-container">
          <div class="tabs-container">
            <button v-for="(tab, index) in tabs" :key="index" :class="['tab', { active: activeTab === index }]"
              @click="setActiveTab(index)">
              {{ tab }}
            </button>
          </div>
        </div>
      </div>
      <div class="my-4">
        <h1 class="main-header">Характеристики</h1>
        <form>
          <div class="input-box">
            <p class="mb-0">Год выпуска</p>
            <a-date-picker v-model:value="dateValue" picker="year" />
          </div>
          <div class="input-box">
            <p class="mb-0">Пробег</p>
            <a-input-number id="inputNumber" v-model:value="value" />
          </div>
          <div class="input-box">
            <p class="mb-0">Страна</p>
            <a-select ref="select" v-model:value="value1" style="width: 120px" @focus="focus" @change="handleChange">
              <a-select-option value="jack">Usa</a-select-option>
            </a-select>
          </div>
          <div class="input-box">
            <p class="mb-0">Топливо</p>
            <a-select ref="select" v-model:value="value2" style="width: 120px" @focus="focus" @change="handleChange">
              <a-select-option value="Бензин">Бензин</a-select-option>
            </a-select>
          </div>
        </form>
      </div>
    </div>
  </div>
</template>
<script setup>
import { ref } from 'vue';
const tabs = ref(['Автомобили', 'Коммерческий транспорт', 'Мотоциклы']);
const activeTab = ref(1);
//input values
const dateValue = ref()
const value = ref(16000)
const value1 = ref('Usa');
const value2 = ref('Бензин')

const setActiveTab = (index) => {
  activeTab.value = index;
};
</script>
<style scoped>
@import './PLaceAd.css';
</style>
