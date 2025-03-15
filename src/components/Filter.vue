<template>
    <div class="filter mt-5">
        <h1>Подбор авто</h1>
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
                <FilterItem filter-name="Выберите марку" filter-categories="Geely" filter-categories-default="Geely" />
                <FilterItem filter-name="ВЫберите модель" filter-categories="Monjaro"
                    filter-categories-default="Monjaro" />
                <FilterItem filter-name="Страна" filter-categories="Китай" filter-categories-default="Китай" />
                <FilterItem filter-name="Год" filter-categories=0-2024 filter-categories-default=0-2024 />
                <FilterItem filter-name="Цена" filter-categories=300000-400000
                    filter-categories-default=300000-400000 />
            </a-flex>
        </div>
    </div>
</template>
<script setup>
import { ref } from 'vue';
import FilterItem from './Ui/FilterItem.vue';

const activeTab = ref('all');

const checked = ref(false);
const checked2 = ref(false)
</script>
<style scoped>
.filter {
    margin-top: 20px;
}

.tabs-container {
    display: flex;
    border-radius: 8px;
    overflow: hidden;
    width: fit-content;
}

.tab-button {
    padding: 10px 16px;
    border: none;
    background-color: #f2f2f2;
    color: #333;
    font-size: 14px;
    cursor: pointer;
    transition: background-color 0.3s, color 0.3s;
}

.tab-button.active {
    background-color: #2c3e50;
    color: white;
}

.tab-button:first-child {
    border-top-left-radius: 8px;
    border-bottom-left-radius: 8px;
}

.tab-button:last-child {
    border-top-right-radius: 8px;
    border-bottom-right-radius: 8px;
}

.filter-box {
    padding: 25px 20px;
    border-radius: 10px;
}

.filter-dropdowns,
.filter-btns {
    gap: 10px;
}

@media (max-width: 576px) {
    .filter-dropdowns,
    .filter-btns {
        flex-direction: column !important;
        align-items: start !important;
    }
}
</style>