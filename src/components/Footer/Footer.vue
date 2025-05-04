<template>
  <div class="container">
    <footer class="footer mt-5">
      <a-row class="footer-links" :gutter="[10, 10]">
        <a-col :md="{ span: 24 }" :lg="{ span: 6 }">
          <div>
            <RouterLink to="/">
              <span class="brand">You<span>Car</span></span>
            </RouterLink>
            <div class="social-icons my-3">
              <a target="_blank" href="#"
                ><i class="fa-brands fa-instagram"></i
              ></a>
              <a target="_blank" href="#"
                ><i class="fa-brands fa-whatsapp"></i
              ></a>
              <a target="_blank" href="#"><i class="fa-brands fa-vk"></i></a>
            </div>
            <p class="avto-broker mb-1">{{ $t('footer.title') }}</p>
            <p class="avto-broker">{{ $t('footer.subtitle') }}</p>
          </div>
        </a-col>
        <a-col :md="{ span: 12 }" :lg="{ span: 3 }">
          <div>
            <h3>{{ $t('footer.headers.compony') }}</h3>
            <ul class="footer-list">
              <li>
                <router-link to="/">{{ $t('footer.pages.home') }}</router-link>
              </li>
              <li>
                <router-link to="/katalok">{{
                  $t('footer.pages.katalok')
                }}</router-link>
              </li>
              <li>
                <router-link to="/about">{{
                  $t('footer.pages.about')
                }}</router-link>
              </li>
              <li>
                <router-link to="/news">{{
                  $t('footer.pages.news')
                }}</router-link>
              </li>
              <li>
                <router-link to="/contact">{{
                  $t('footer.pages.contact')
                }}</router-link>
              </li>
            </ul>
          </div>
        </a-col>
        <a-col :md="{ span: 12 }" :lg="{ span: 3 }" class="countrys">
          <div>
            <h3>{{ $t('footer.headers.avtomabil') }}</h3>
            <ul class="footer-list">
              <li>
                <a href="#">{{ $t('footer.country.yevrop') }}</a>
              </li>
              <li>
                <a href="#">{{ $t('footer.country.usa') }}</a>
              </li>
              <li>
                <a href="#">{{ $t('footer.country.oea') }}</a>
              </li>
              <li>
                <a href="#">{{ $t('footer.country.china') }}</a>
              </li>
              <li>
                <a href="#">{{ $t('footer.country.korea') }}</a>
              </li>
            </ul>
          </div>
        </a-col>
        <a-col :md="{ span: 24 }" :lg="{ span: 12 }">
          <div>
            <h3>{{ $t('footer.headers.marka') }}</h3>
            <a-row :gutter="[10, 10]">
              <a-col
                class="footer-col__links"
                v-for="mark in marks"
                :xs="{ span: 6 }"
                :md="{ span: 4 }"
              >
                {{ mark.name }}
              </a-col>
            </a-row>
          </div>
        </a-col>
      </a-row>
    </footer>
  </div>
</template>
<script setup>
//vue
import { ref, watch } from 'vue';
import { RouterLink } from 'vue-router';

//Hooks
import { useFetch } from '@/Hooks/UseFatch';

const marks = ref([]);

const { data, get } = useFetch(`${import.meta.env.VITE_APP_API}/marks`);

watch(data, (newData) => {
  marks.value = newData;
});
</script>
<style scoped>
@import './Footer.css';
</style>
