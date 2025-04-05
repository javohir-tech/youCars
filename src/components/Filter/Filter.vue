<template>
  <div class="filter mt-5">
    <h1 class="main-header">{{ filterName }}</h1>
    <div class="filter-box shadow">
      <a-flex align="center" class="filter-btns" :gap="15">
        <div class="tabs-container">
          <button class="tab-button" :class="{ active: activeTab === 'all' }" @click="activeTab = 'all'">
            Все
          </button>
          <button class="tab-button" :class="{ active: activeTab === 'new' }" @click="activeTab = 'new'">
            Новые
          </button>
          <button class="tab-button" :class="{ active: activeTab === 'used' }" @click="activeTab = 'used'">
            С пробегом
          </button>
        </div>
        <a-checkbox v-model:checked="checked">В наличии</a-checkbox>
        <a-checkbox v-model:checked="checked2">Под заказ</a-checkbox>
      </a-flex>

      <a-flex justify="space-between" class="filter-dropdowns mt-3">
        <div class="dropdown-container">
          <div class="filter-item">
            <p>Выберите марку</p>
            <a-dropdown :placement="yonalish" class="my-dropdown" v-model="salom">
              <a-button class="dropdown-button">
                <span>Geely</span>
                <span class="dropdown-icon">▼</span>
              </a-button>
              <template #overlay>
                <a-menu class="custom-dropdown-menu">
                  <a-menu-item class="custom-menu-item">
                    Geely
                  </a-menu-item>
                </a-menu>
              </template>
            </a-dropdown>
          </div>
        </div>
        <div class="dropdown-container">
          <div class="filter-item">
            <p>ВЫберите модель</p>
            <a-dropdown :placement="yonalish" class="my-dropdown" v-model="filters.model">
              <a-button class="dropdown-button">
                <span>{{ filters.model || modelOptions[0] }}</span>
                <span class="dropdown-icon">▼</span>
              </a-button>
              <template #overlay>
                <a-menu class="custom-dropdown-menu">
                  <a-menu-item class="custom-menu-item" v-for="model in modelOptions" :key="model"
                    @click="() => filters.model = model">
                    {{ model }}
                  </a-menu-item>
                </a-menu>
              </template>
            </a-dropdown>
          </div>
        </div>
        <div class="dropdown-container">
          <div class="filter-item">
            <p>Страна</p>
            <a-dropdown :placement="yonalish" class="my-dropdown" v-model="salom">
              <a-button class="dropdown-button">
                <span>{{ filters.country || countryOptions[0] }}</span>
                <span class="dropdown-icon">▼</span>
              </a-button>
              <template #overlay>
                <a-menu class="custom-dropdown-menu">
                  <a-menu-item class="custom-menu-item" v-for="country in countryOptions" :key="country"
                    @click="() => filters.country = country">
                    {{ country }}
                  </a-menu-item>
                </a-menu>
              </template>
            </a-dropdown>
          </div>
        </div>
        <div class="dropdown-container">
          <div class="filter-item">
            <p>Год</p>
            <a-dropdown :placement="yonalish" class="my-dropdown" v-model="salom">
              <a-button class="dropdown-button">
                <span>{{ filters.maxYear || yearOptions[0] }}</span>
                <span class="dropdown-icon">▼</span>
              </a-button>
              <template #overlay>
                <a-menu class="custom-dropdown-menu">
                  <a-menu-item class="custom-menu-item" v-for="year in yearOptions" :key="year"
                    @click="() => filters.maxYear = year">
                    {{ year }}
                  </a-menu-item>
                </a-menu>
              </template>
            </a-dropdown>
          </div>
        </div>
        <div class="dropdown-container">
          <div class="filter-item">
            <p>Цена</p>
            <a-dropdown :placement="yonalish" class="my-dropdown" v-model="salom">
              <a-button class="dropdown-button">
                <span>{{ filterCategoriesDefault }}</span>
                <span class="dropdown-icon">▼</span>
              </a-button>
              <template #overlay>
                <a-menu class="custom-dropdown-menu">
                  <a-menu-item class="custom-menu-item">
                    {{ filterCategories }}
                  </a-menu-item>
                </a-menu>
              </template>
            </a-dropdown>
          </div>
        </div>
        <!--
        <FilterItem v-model="filters.minPrice" filter-name="Цена" filter-categories="300000-400000" -->
        <!-- filter-categories-default="300000-400000" /> -->
      </a-flex>
      <button class="mt-3">filterlash</button>
    </div>
  </div>
</template>
<script setup>
import { ref } from 'vue';

const activeTab = ref('all');
const yonalish = ref('bottom');

//filters options
const modelOptions = ref(['lacetti', 'tahoe 2', 'crider', 'BMW', 'Tahoe'])
const countryOptions = ref(['USA', 'Russia', 'North Korea'])
const yearOptions = ref([2023, 2024])
const priceOptions = ref([])

const checked = ref(false);
const checked2 = ref(false);
const filters = ref({
  model: '',
  country: '',
  maxYear: 0,
  maxPrice: 0,
  minPrice: 0,
  page: 1
})

defineProps({
  filterName: String,
});
</script>
<style scoped>
@import './Filter.css';
</style>
