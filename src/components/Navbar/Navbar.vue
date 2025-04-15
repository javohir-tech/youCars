<template>
  <div class="navbar-container">
    <!-- mobile  -->
    <div class="header">
      <div class="logo">
        <RouterLink to="/" style="text-decoration: none">
          <span class="brand">You<span>Car</span></span>
        </RouterLink>
      </div>
      <div class="search-box">
        <a-input-search
          placeholder="Поиск по названию"
          v-model:value="searchValue"
        />
      </div>
      <div class="menu-toggle" @click="isMenuOpen = !isMenuOpen">
        <img src="../../assets/Images/toggleButton.png" alt="" />
      </div>
    </div>

    <!-- Mobile Menu -->
    <div class="mobile-menu" :class="{ open: isMenuOpen }">
      <div v-if="userStore.userInfo.token" class="mobile-user">
        <RouterLink
          @click="isMenuOpen = !isMenuOpen"
          class="user-mobile__link"
          :to="userName ? `/${userName}` : '/guest'"
        >
          <div v-if="svg" v-html="svg" class="avatar"></div>
          <a-avatar v-else>
            <template #icon>
              <UserOutlined />
            </template>
          </a-avatar>
          <p class="mb-0">{{ userStore.userInfo.name }}</p>
          <i class="fa-solid fa-chevron-right" style="margin-left: auto"></i>
        </RouterLink>
      </div>
      <div class="nav-links">
        <router-link
          @click="isMenuOpen = !isMenuOpen"
          to="/"
          class="nav-link"
          >{{ $t('navbar.pages.home') }}</router-link
        >
        <router-link
          @click="isMenuOpen = !isMenuOpen"
          to="/katalok"
          class="nav-link"
          >{{ $t('navbar.pages.katalok') }}</router-link
        >
        <router-link
          @click="isMenuOpen = !isMenuOpen"
          to="/about"
          class="nav-link"
          >{{ $t('navbar.pages.about') }}</router-link
        >
        <router-link
          @click="isMenuOpen = !isMenuOpen"
          to="/news"
          class="nav-link"
          >{{ $t('navbar.pages.news') }}</router-link
        >
        <router-link
          @click="isMenuOpen = !isMenuOpen"
          to="/contact"
          class="nav-link"
          >{{ $t('navbar.pages.contact') }}</router-link
        >
      </div>

      <div
        :class="[
          userStore.userInfo.token
            ? 'language-selector'
            : 'language-selector user-language',
        ]"
      >
        <a-select v-model:value="language" style="width: 80px">
          <a-select-option value="ru">RU</a-select-option>
          <a-select-option value="en">EN</a-select-option>
          <a-select-option value="uz">UZ</a-select-option>
        </a-select>
      </div>

      <div
        :class="[
          userStore.userInfo.token
            ? 'notification-icon'
            : 'notification-icon user-notifacation',
        ]"
      >
        <i class="fa-regular fa-bell"></i>
      </div>

      <div class="categories">
        <RouterLink
          @click="isMenuOpen = !isMenuOpen"
          to="/katalok"
          class="mobile-category__name"
        >
          <div class="category-item">
            <span>{{ $t('navbar.Avto.avtomabil') }}</span>
            <i class="fa-solid fa-chevron-right"></i>
          </div>
        </RouterLink>
        <RouterLink
          @click="isMenuOpen = !isMenuOpen"
          to="/commerce-cars"
          class="mobile-category__name"
        >
          <div class="category-item">
            <span>{{ $t('navbar.Avto.commercial') }}</span>
            <i class="fa-solid fa-chevron-right"></i>
          </div>
        </RouterLink>
        <RouterLink
          @click="isMenuOpen = !isMenuOpen"
          to="/motorcycle"
          class="mobile-category__name"
        >
          <div class="category-item">
            <span>{{ $t('navbar.Avto.motorcycles') }}</span>
            <i class="fa-solid fa-chevron-right"></i>
          </div>
        </RouterLink>
      </div>

      <div class="contact-info">
        <a href="#" style="text-decoration: none" target="_blank">
          <div class="contact-item">
            <i class="fa-solid fa-phone"></i>
            <span>+7 (777) 777-77-77</span>
          </div>
        </a>
        <a href="#" style="text-decoration: none" target="_blank">
          <div class="contact-item">
            <i class="fa-solid fa-envelope"></i>
            <span>info@mail.ru</span>
          </div>
        </a>
      </div>

      <div class="social-icons">
        <a href="#" target="_blank" class="social-icon"
          ><i class="fa-brands fa-vk"></i
        ></a>
        <a href="#" target="_blank" class="social-icon"
          ><i class="fa-brands fa-whatsapp"></i
        ></a>
        <a href="#" target="_blank" class="social-icon"
          ><i class="fa-brands fa-instagram"></i
        ></a>
      </div>

      <div v-if="!userStore.userInfo.name" class="auth-buttons">
        <router-link
          @click="isMenuOpen = !isMenuOpen"
          to="/register"
          class="register-btn"
          >{{ $t('navbar.auth.register') }}</router-link
        >
        <router-link
          @click="isMenuOpen = !isMenuOpen"
          to="/login"
          class="login-btn"
          >{{ $t('navbar.auth.login') }}</router-link
        >
      </div>
    </div>
    <!--
    =======================
    =======================
    =======================
    -->
    <!-- ====== Desctop Navbar ====== -->
    <div class="desktop-navbar">
      <div class="navbar-top">
        <div class="container">
          <a-flex align="center" justify="space-between">
            <ul class="navbar-list">
              <li>
                <router-link to="/">{{ $t('navbar.pages.home') }}</router-link>
              </li>
              <li>
                <router-link to="/katalok">{{
                  $t('navbar.pages.katalok')
                }}</router-link>
              </li>
              <li>
                <router-link to="/about">{{
                  $t('navbar.pages.about')
                }}</router-link>
              </li>
              <li>
                <router-link to="/news">{{
                  $t('navbar.pages.news')
                }}</router-link>
              </li>
              <li>
                <router-link to="/contact">{{
                  $t('navbar.pages.contact')
                }}</router-link>
              </li>
            </ul>
            <div class="navbar-right">
              <div class="social-icons">
                <a target="_blank" href="#"
                  ><i class="fa-brands fa-instagram"></i
                ></a>
                <a target="_blank" href="#"
                  ><i class="fa-brands fa-whatsapp"></i
                ></a>
                <a target="_blank" href="#"><i class="fa-brands fa-vk"></i></a>
              </div>
              <a href="#" target="_blank">
                <div class="contact-phone">
                  <i class="fa-solid fa-phone"></i>
                  <span>+7 (777) 777-77-77</span>
                </div>
              </a>
              <a href="#" target="_blank">
                <div class="contact-email">
                  <i class="fa-solid fa-envelope"></i>
                  <span>info@mail.ru</span>
                </div>
              </a>
              <a-select v-model:value="language" style="width: 80px">
                <a-select-option value="ru">RU</a-select-option>
                <a-select-option value="en">EN</a-select-option>
                <a-select-option value="uz">UZ</a-select-option>
              </a-select>
            </div>
          </a-flex>
        </div>
      </div>
      <div class="navbar-bottom">
        <div class="container">
          <a-flex justify="space-between" align="center">
            <div class="logo-categories">
              <RouterLink to="/">
                <span class="brand">You<span>Car</span></span>
              </RouterLink>
              <ul class="categories-list">
                <li>
                  <RouterLink to="/katalok" class="categories-name">
                    <p class="mb-0">{{ $t('navbar.Avto.avtomabil') }}</p>
                    <img src="../../assets/Images/Vector.png" alt="" />
                  </RouterLink>
                </li>
                <li>
                  <RouterLink to="/commerce-cars" class="categories-name">
                    <p class="mb-0">{{ $t('navbar.Avto.commercial') }}</p>
                    <img src="../../assets/Images/Vector.png" alt="" />
                  </RouterLink>
                </li>
                <li>
                  <RouterLink to="/motorcycle" class="categories-name">
                    <p class="mb-0">{{ $t('navbar.Avto.motorcycles') }}</p>
                    <img src="../../assets/Images/Vector.png" alt="" />
                  </RouterLink>
                </li>
              </ul>
            </div>
            <div class="navbar-actions">
              <a-input-search
                class="search-input"
                placeholder="Поиск по названию"
                v-model:value="searchValue"
              />
              <div>
               <RouterLink to="/messageView">
                <img src="../../assets/Images/messages.png" alt="" />
               </RouterLink>
              </div>
              <div v-if="userStore.userInfo.token">
                <div class="user-data">
                  <p class="mb-0">{{ userStore.userInfo.name }}</p>
                  <RouterLink :to="userName ? `/${userName}` : '/guest'">
                    <div v-if="svg" v-html="svg" class="avatar"></div>
                    <a-avatar v-else>
                      <template #icon>
                        <UserOutlined />
                      </template>
                    </a-avatar>
                  </RouterLink>
                </div>
              </div>
              <a-flex v-else gap="10">
                <router-link to="/login" class="login-btn">{{
                  $t('navbar.auth.login')
                }}</router-link>
                <router-link to="/register" class="register-btn">{{
                  $t('navbar.auth.register')
                }}</router-link>
              </a-flex>
            </div>
          </a-flex>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
//Vue
import { ref, computed, onMounted, watch, onUnmounted } from 'vue';
// DeceBear
import { createAvatar } from '@dicebear/core';
import { initials } from '@dicebear/collection';
//Pinia
import { useUserStore } from '@/Stores/useUserStore';
//i18n
import { useI18n } from 'vue-i18n';

//language adit
const { locale } = useI18n();

const language = ref(localStorage.getItem('lang') || locale.value);

// State
const isMenuOpen = ref(false);
const searchValue = ref('');
const svg = ref('');

// User store
const userStore = useUserStore();
const userName = computed(() => userStore.userInfo?.name || 'User');

// Generate avatar
const generateAvatar = () => {
  const avatar = createAvatar(initials, { seed: userName.value });
  svg.value = avatar.toString();
};

onMounted(generateAvatar);

//userName
watch(userName, () => {
  generateAvatar();
});

//menu  open or close
watch(isMenuOpen, (newVal) => {
  document.body.style.overflow = newVal ? 'hidden' : '';
});

//language edit  watch
watch(language, (newLang) => {
  locale.value = newLang;
  localStorage.setItem('lang', newLang);
});

onUnmounted(() => {
  document.body.style.overflow = '';
});
</script>

<style scoped>
@import './Navbar.css';
</style>
