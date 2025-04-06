<template>
  <div class="container">
    <!-- <RouterLink to="/rate">Salom</RouterLink> -->
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
            <a href="#" aria-disabled="true"
              ><i class="bi bi-exclamation-square me-1"></i>Базовый тариф</a
            >
          </a-flex>
          <!--router links-->
          <RouterLink
            v-for="item in menuItems"
            :key="item.path"
            :to="`/${userName}/${item.path}`"
          >
            <a-flex class="acc-item" align="center" gap="10">
              <i :class="`bi ${item.icon}`"></i>
              <p class="mb-0">{{ item.label }}</p>
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
                    <RouterLink :to="`/${userName}/my-ads`"
                      >Мои объявления</RouterLink
                    >
                  </a-menu-item>
                  <a-menu-item>
                    <RouterLink to="/place-ad"
                      >Разместить объявление</RouterLink
                    >
                  </a-menu-item>
                </a-menu>
              </template>
            </a-dropdown>
          </a-flex>
          <!--router links-->
          <RouterLink
            v-for="item in menuItems2"
            :key="item.path"
            :to="`/${userName}/${item.path}`"
          >
            <a-flex class="acc-item" align="center" gap="10">
              <i :class="`bi ${item.icon}`"></i>
              <p class="mb-0">{{ item.label }}</p>
            </a-flex>
          </RouterLink>
          <a-popconfirm
            title="Are you sure you want to log out?"
            @confirm="logOut"
            @cancel="cancel"
          >
            <button class="acc-button" type="button">Выйти</button>
          </a-popconfirm>
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
import { useRouter } from 'vue-router';
import { RouterLink, RouterView } from 'vue-router';
// Pinia Store
import { useUserStore } from '@/Stores/useUserStore';
import { useCarStore } from '@/Stores/store';
import { message } from 'ant-design-vue';

//Pinia
const userStore = useUserStore();
const CarStore = useCarStore();
//Route
const route = useRouter();
//menu items
const menuItems = [
  { path: 'featured', icon: 'bi-star', label: 'Избранное' },
  { path: 'message', icon: 'bi-chat-dots', label: 'Сообщения' },
];

const menuItems2 = [
  { path: 'rate', icon: 'bi-fire', label: 'Тариф' },
  { path: 'setting', icon: 'bi-gear', label: 'Настройки аккаунта' },
];

//userInfo
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
});


//LogOut Function
const logOut = () => {
  localStorage.removeItem('token');
  localStorage.removeItem('userInfo');
  userStore.setUser({});
  CarStore.selectedCars = [];
  message.success('hayr');
  route.push('/');
};

const cancel = () => {
  message.error("We're happy to have you with us.");
};
</script>
<style scoped>
@import './UserPage.css';
</style>
