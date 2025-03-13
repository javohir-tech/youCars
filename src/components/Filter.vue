<template>
    <div class="filter">
        <h1>Подбор авто</h1>
        <a-flex align="center" :gap="15">
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

        <div class="filter-dropdowns">
            <div class="dropdown-container">
                <a-dropdown :placement="bottom" class="my-dropdown">
                    <a-button class="dropdown-button">
                        <span>dropdown</span>
                        <span class="dropdown-icon">▼</span>
                    </a-button>
                    <template #overlay>
                        <a-menu class="custom-dropdown-menu">
                            <a-menu-item class="custom-menu-item">
                                1
                            </a-menu-item>
                            <a-menu-item class="custom-menu-item">
                                2
                            </a-menu-item>
                        </a-menu>
                    </template>
                </a-dropdown>
            </div>  
        </div>
    </div>
</template>
<script setup>
import { Dropdown as ADropdown, Button as AButton, Menu as AMenu, MenuItem as AMenuItem } from 'ant-design-vue';
import { ref } from 'vue';

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

.dropdown-container {
    font-family: Arial, sans-serif;
}

/* Style for the dropdown button */
:deep(.dropdown-button) {
    background-color: #f5f5f5;
    border: none;
    border-radius: 4px;
    height: 40px;
    padding: 0 10px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    color: #333;
    box-shadow: none;
}

:deep(.dropdown-button:hover) {
    background-color: #e8e8e8;
    color: #333;
}

:deep(.dropdown-button:focus) {
    background-color: #f5f5f5;
    color: #333;
}

.dropdown-icon {
    font-size: 10px;
    margin-left: 8px;
    color: #666;
}

/* Style for the dropdown menu */
:deep(.custom-dropdown-menu) {
    border-radius: 4px;
    box-shadow: 0 2px 8px rgba(0, 0, 0, 0.15);
    padding: 4px 0;
}

:deep(.custom-menu-item) {
    padding: 8px 12px;
    font-size: 14px;
    color: #333;
    transition: background-color 0.3s;
}

:deep(.custom-menu-item:hover) {
    background-color: #f5f5f5;
}

/* Override Ant Design's default styles */
:deep(.ant-dropdown-menu) {
    min-width: 120px;
}

:deep(.ant-btn > span) {
    font-size: 14px;
}
</style>