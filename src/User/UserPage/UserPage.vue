<template>
  <div class="container">
    <a-row class="mt-4" :gutter="[10, 10]" justify="space-between">
      <a-col :md="{ span: 6 }">
        <div class="shadow acc-layout">
          <a-flex align="center" gap="10" class="user-acc">
            <div v-html="svg" class="avatar"></div>
            <div>
              <h1 class="mb-1">{{ userName }}</h1>
              <p class="mb-0">Рейтинг 0.0</p>
            </div>
          </a-flex>
          <a-flex justify="space-between" class="mt-3 user-email">
            <p>E-mail</p>
            <a href="#" aria-disabled="true">{{ email }}</a>
          </a-flex>
          <a-flex justify="space-between" class="user-email">
            <p>Базовый тариф</p>
            <a href="#" aria-disabled="true"><i class="bi bi-exclamation-square me-1"></i>Базовый тариф</a>
          </a-flex>
          <RouterLink :to="`/${userName}/`">
            <a-flex class="acc-item" align="center" gap="10">
              <i class="bi bi-star"></i>
              <p class="mb-0">Избранное</p>
            </a-flex>
          </RouterLink>
          <RouterLink :to="`/${userName}/message`">
            <a-flex class="acc-item" align="center" gap="10">
              <i class="bi bi-chat-dots"></i>
              <p class="mb-0">Сообщения</p>
            </a-flex>
          </RouterLink>
          <a-flex class="acc-item" align="center" gap="10">
            <i class="bi bi-columns"></i>
            <a-dropdown>
              <a class="ant-dropdown-link" @click.prevent>
                Разместить объявление <i class="bi bi-chevron-down ms-1"></i>
                <DownOutlined />
              </a>
              <template #overlay>
                <a-menu>
                  <a-menu-item>
                    <RouterLink :to="`/${userName}/my-ads`">Мои объявления</RouterLink>
                  </a-menu-item>
                  <a-menu-item>
                    <RouterLink :to="`/${userName}/place-ad`">Разместить объявление</RouterLink>
                  </a-menu-item>
                </a-menu>
              </template>
            </a-dropdown>
          </a-flex>
          <RouterLink :to="`/${userName}/rate`">
            <a-flex class="acc-item" align="center" gap="10">
              <i class="bi bi-fire"></i>
              <p class="mb-0">Тариф</p>
            </a-flex>
          </RouterLink>
          <RouterLink :to="`/${userName}/setting`">
            <a-flex class="acc-item mb-3" align="center" gap="10">
              <i class="bi bi-gear"></i>
              <p class="mb-0">Настройки аккаунта</p>
            </a-flex>
          </RouterLink>
          <button class="acc-button">Выйти</button>
        </div>
      </a-col>
      <a-col :md="{ span: 18 }">
        <div class="shadow acc-info">
          <RouterView />
        </div>
      </a-col>
    </a-row>
  </div>
</template>
<script setup>
import { computed, ref, onMounted, watch } from 'vue';
// Dicebear
import { createAvatar } from '@dicebear/core';
import { initials } from '@dicebear/collection';
// Vue Router
import { RouterLink, RouterView } from 'vue-router';
// Pinia Store
import { useUserStore } from '@/Stores/useUserStore';

const userStore = useUserStore();

const userName = computed(() => userStore.userInfo?.name || 'javohir');
const email = computed(() => userStore.userInfo?.email || 'user@example.com');

const svg = ref('');

onMounted(() => {
  const avatar = createAvatar(initials, {
    seed: userName.value,
  });
  svg.value = avatar.toString();
});

watch(userName, () => {
  const avatar = createAvatar(initials, {
    seed: userName.value,
  });
  svg.value = avatar.toString();
})
</script>
<style scoped>
@import './UserPage.css';
</style>
