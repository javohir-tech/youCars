<template>
  <div class="dropdown-container">
    <div class="filter-item">
      <p>{{ filterName }}</p>
      <a-dropdown :placement="yonalish" class="my-dropdown">
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
</template>
<script setup>
import { ref } from 'vue';
const yonalish = ref('bottom');
defineProps({
  filterName: String || Number,
  filterCategoriesDefault: String || Number,
  filterCategories: String || Number,
});
</script>
<style scoped>
.dropdown-container {
  font-family: Arial, sans-serif;
}

:deep(.dropdown-button) {
  width: 150px;
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

@media (max-width: 576px) {
  .dropdown-container {
    width: 100%;
  }
  :deep(.dropdown-button) {
    width: 100% !important;
  }
}
</style>
