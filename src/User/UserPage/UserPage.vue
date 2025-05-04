<template>
  <div class="container">
    <!-- <RouterLink to="/rate">Salom</RouterLink> -->
    <a-row class="mt-4" :gutter="[10, 10]" justify="space-between">
      <a-col :xs="{ span: 24 }" :md="{ span: 6 }">
        <div class="acc-layout">
          <div class="user-sidebar">
            <a-flex align="center" gap="10" class="user-acc">
              <div v-html="svg" class="avatar"></div>
              <div>
                <h1 class="mb-1">{{ userName }}</h1>
                <p class="mb-0">{{ $t('userPage.sideBar.reyting') }} 0.0</p>
              </div>
            </a-flex>
            <a-flex justify="space-between" class="mt-3 user-email">
              <p>E-mail</p>
              <a href="#" aria-disabled="true">{{ email }}</a>
            </a-flex>
            <a-flex justify="space-between" class="user-email">
              <p>{{ $t('userPage.sideBar.rate') }}</p>
              <a href="#" aria-disabled="true"
                ><i class="bi bi-exclamation-square me-1"></i
                >{{ $t('userPage.sideBar.userRate') }}</a
              >
            </a-flex>
          </div>
          <!--router links-->
          <div class="router-links">
            <RouterLink
              v-for="item in menuItems"
              :key="item.path"
              :to="`/${userName}/${item.path}`"
            >
              <a-flex class="acc-item" gap="10">
                <i :class="`bi ${item.icon}`"></i>
                <p class="mb-0">{{ item.label }}</p>
              </a-flex>
            </RouterLink>
            <a-flex class="acc-item" align="center" gap="10">
              <i class="bi bi-columns"></i>
              <a-dropdown>
                <a class="ant-dropdown-link" @click.prevent>
                  <p class="mb-0">{{ $t('userPage.sideBar.ad') }}</p>
                  <i class="bi bi-chevron-down ms-1"></i>
                  <DownOutlined />
                </a>
                <template #overlay>
                  <a-menu>
                    <a-menu-item>
                      <RouterLink :to="`/${userName}/my-ads`">{{
                        $t('userPage.sideBar.myads')
                      }}</RouterLink>
                    </a-menu-item>
                    <a-menu-item>
                      <RouterLink to="/place-ad">{{
                        $t('userPage.sideBar.ad')
                      }}</RouterLink>
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
          </div>
          <a-popconfirm
            :title="t('userPage.sideBar.logOutMessage')"
            @confirm="logOut"
            @cancel="cancel"
          >
            <button class="acc-button mt-3" type="button">
              {{ $t('userPage.sideBar.logOut') }}
            </button>
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
//i18n
import { useI18n } from 'vue-i18n';

const { t } = useI18n();

//Pinia
const userStore = useUserStore();
const CarStore = useCarStore();
//Route
const route = useRouter();
//menu items
const menuItems = computed(() => [
  { path: 'featured', icon: 'bi-star', label: t('userPage.sideBar.featured') },
  {
    path: 'message',
    icon: 'bi-chat-dots',
    label: t('userPage.sideBar.message'),
  },
]);

const menuItems2 = computed(() => [
  { path: 'rate', icon: 'bi-fire', label: t('userPage.sideBar.rate') },
  { path: 'setting', icon: 'bi-gear', label: t('userPage.sideBar.setting') },
]);

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
  message.success('We will wait for you until we see you.');
  route.push('/');
};

const cancel = () => {
  message.info("We're happy to have you with us.");
};
</script>
<style scoped>
@import './UserPage.css';
</style>
