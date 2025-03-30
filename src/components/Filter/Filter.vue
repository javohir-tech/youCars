<template>
  <div class="filter mt-5">
    <h1 class="main-header">{{ filterName }}</h1>
    <div class="filter-box shadow">
      <a-flex align="center" class="filter-btns" :gap="15">
        <div class="tabs-container">
          <button
            class="tab-button"
            :class="{ active: activeTab === 'all' }"
            @click="activeTab = 'all'"
          >
            Все
          </button>
          <button
            class="tab-button"
            :class="{ active: activeTab === 'new' }"
            @click="activeTab = 'new'"
          >
            Новые
          </button>
          <button
            class="tab-button"
            :class="{ active: activeTab === 'used' }"
            @click="activeTab = 'used'"
          >
            С пробегом
          </button>
        </div>
        <a-checkbox v-model:checked="checked">В наличии</a-checkbox>
        <a-checkbox v-model:checked="checked2">Под заказ</a-checkbox>
      </a-flex>

      <a-flex justify="space-between" class="filter-dropdowns mt-3">
        <FilterItem
          filter-name="Выберите марку"
          filter-categories="Geely"
          filter-categories-default="Geely"
        />
        <FilterItem
          filter-name="ВЫберите модель"
          filter-categories="Monjaro"
          filter-categories-default="Monjaro"
        />
        <FilterItem
          filter-name="Страна"
          filter-categories="Китай"
          filter-categories-default="Китай"
        />
        <FilterItem
          filter-name="Год"
          filter-categories="0-2024"
          filter-categories-default="0-2024"
        />
        <FilterItem
          filter-name="Цена"
          filter-categories="300000-400000"
          filter-categories-default="300000-400000"
        />
      </a-flex>
    </div>
  </div>
</template>
<script setup>
import { ref } from 'vue';
import FilterItem from '../Ui/FilterItem.vue';

const activeTab = ref('all');

const checked = ref(false);
const checked2 = ref(false);

defineProps({
  filterName: String,
});
</script>
<style scoped>
@import './Filter.css';
</style>
