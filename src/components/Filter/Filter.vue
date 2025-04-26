<template>
  <div class="filter mt-5">
    <div class="filter-box shadow">
      <a-flex align="center" class="filter-btns" :gap="15">
        <div class="tabs-container">
          <button class="tab-button" :class="{ active: activeTab === 'all' }" @click="activeTab = 'all'">
            {{ $t('components.filter.buttons.all') }}
          </button>
          <button class="tab-button" :class="{ active: activeTab === 'new' }" @click="activeTab = 'new'">
            {{ $t('components.filter.buttons.new') }}
          </button>
          <button class="tab-button" :class="{ active: activeTab === 'used' }" @click="activeTab = 'used'">
            {{ $t('components.filter.buttons.probeg') }}
          </button>
        </div>
        <a-flex gap="10">
          <a-checkbox v-model:checked="checked">{{
            $t('components.filter.radios.stock')
            }}</a-checkbox>
          <a-checkbox v-model:checked="checked2">{{
            $t('components.filter.radios.order')
            }}</a-checkbox>
        </a-flex>
      </a-flex>

      <a-flex justify="space-between" class="filter-dropdowns mt-3">
        <div class="dropdown-container">
          <div class="filter-item">
            <p>{{ $t('components.filter.filterItems.marka') }}</p>
            <a-dropdown :placement="yonalish" class="my-dropdown" v-model="salom">
              <a-button class="dropdown-button">
                <span>Geely</span>
                <span class="dropdown-icon">▼</span>
              </a-button>
              <template #overlay>
                <a-menu class="custom-dropdown-menu">
                  <a-menu-item class="custom-menu-item"> Geely </a-menu-item>
                </a-menu>
              </template>
            </a-dropdown>
          </div>
        </div>
        <div class="dropdown-container">
          <div class="filter-item">
            <p>{{ $t('components.filter.filterItems.model') }}</p>
            <a-dropdown :placement="yonalish" class="my-dropdown" v-model="filters.stock.model">
              <a-button class="dropdown-button">
                <span>{{ filters.stock.model || modelOptions[0] }}</span>
                <span class="dropdown-icon">▼</span>
              </a-button>
              <template #overlay>
                <a-menu class="custom-dropdown-menu">
                  <a-menu-item class="custom-menu-item" v-for="model in modelOptions" :key="model"
                    @click="() => (filters.setFilter('model' , model))">
                    {{ model }}
                  </a-menu-item>
                </a-menu>
              </template>
            </a-dropdown>
          </div>
        </div>
        <div class="dropdown-container">
          <div class="filter-item">
            <p>{{ $t('components.filter.filterItems.country') }}</p>
            <a-dropdown :placement="yonalish" class="my-dropdown" v-model="filters.stock.country">
              <a-button class="dropdown-button">
                <span>{{ filters.stock.country || countryOptions[0] }}</span>
                <span class="dropdown-icon">▼</span>
              </a-button>
              <template #overlay>
                <a-menu class="custom-dropdown-menu">
                  <a-menu-item class="custom-menu-item" v-for="country in countryOptions" :key="country"
                    @click="() => (filters.setFilter('country', country))">
                    {{ country }}
                  </a-menu-item>
                </a-menu>
              </template>
            </a-dropdown>
          </div>
        </div>
        <div class="dropdown-container">
          <div class="filter-item">
            <p>{{ $t('components.filter.filterItems.year') }}</p>
            <a-dropdown :placement="yonalish" class="my-dropdown" v-model="filters.stock.maxYear">
              <a-button class="dropdown-button">
                <span>{{ filters.stock.maxYear || yearOptions[0] }}</span>
                <span class="dropdown-icon">▼</span>
              </a-button>
              <template #overlay>
                <a-menu class="custom-dropdown-menu">
                  <a-menu-item class="custom-menu-item" v-for="year in yearOptions" :key="year"
                    @click="filters.setFilter('maxYear' , year)">
                    {{ year }}
                  </a-menu-item>
                </a-menu>
              </template>
            </a-dropdown>
          </div>
        </div>
        <div class="dropdown-container">
          <div class="filter-item">
            <p>{{ $t('components.filter.filterItems.cost') }}</p>
            <a-dropdown :placement="yonalish" class="my-dropdown" v-model="filters.stock.maxPrice">
              <a-button class="dropdown-button">
                <span>{{
                  `${filters.stock.maxPrice} - ${filters.stock.minPrice}` || priceOptions[0]
                  }}</span>
                <span class="dropdown-icon">▼</span>
              </a-button>
              <template #overlay>
                <a-menu class="custom-dropdown-menu">
                  <a-menu-item class="custom-menu-item" v-for="price in priceOptions" :key="price"
                    @click="() => (filters.setFilter('maxPrice' , price)) && filters.setFilter('minPirce', price)">
                    {{ `${price}-${price}` }}
                  </a-menu-item>
                </a-menu>
              </template>
            </a-dropdown>
          </div>
        </div>
      </a-flex>
    </div>
  </div>
</template>
<script setup>
import { ref } from 'vue';
import { useI18n } from 'vue-i18n';

const activeTab = ref('all');
const yonalish = ref('bottom');

//filter store
import { useFilterStore } from '@/Stores/useFilter';

const filters = useFilterStore()

//filters options
const modelOptions = ref(['lacetti', 'tahoe 2', 'crider', 'BMW', 'Tahoe']);
const countryOptions = ref(['USA', 'Russia']);
const yearOptions = ref([2023, 2024]);
const priceOptions = ref([16500, 70000]);

const checked = ref(false);
const checked2 = ref(false);
// const filters = ref({
//   model: '',
//   country: '',
//   maxYear: 0,
//   maxPrice: 0,
//   minPrice: 0,
//   page: 1,
// });
</script>
<style scoped>
@import './Filter.css';
</style>
