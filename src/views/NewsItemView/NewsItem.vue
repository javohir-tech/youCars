<template>
  <div class="container">
    <div class="loading" v-if="loading">
      <a-spin />
    </div>
    <a-result
      v-else-if="error"
      status="404"
      title="404"
      sub-title="Sorry, An error occurred while loading the data!"
    />
    <div v-if="Object.keys(news).length">
      <div class="mt-4">
        <a-breadcrumb class="mt-4">
          <a-breadcrumb-item>
            <RouterLink to="/">{{ $t('navbar.pages.home') }}</RouterLink>
          </a-breadcrumb-item>
          <a-breadcrumb-item>
            <RouterLink to="/news">{{ $t('navbar.pages.news') }}</RouterLink>
          </a-breadcrumb-item>
          <a-breadcrumb-item>
            <RouterLink :to="`/news/${route.params.id}`">{{
              news.title
            }}</RouterLink>
          </a-breadcrumb-item>
        </a-breadcrumb>
      </div>
      <div class="new-box mt-3">
        <h2 class="news-title">{{ news.title }}</h2>
        <a-row :gutter="[10, 10]">
          <a-col :xs="{ span: 24 }" :md="{ span: 17 }" class="news-main__info">
            <div class="news-image__box">
              <img
                :src="news.image"
                loading="lazy"
                class="img-fluid"
                alt="news image"
              />
            </div>
            <p class="mt-3">{{ news.content }}</p>
          </a-col>
          <a-col :xs="{ span: 24 }" :md="{ span: 7 }">
            <div class="shadow news-accardion">
              <h3>Читайте другие статьи в нашем блоге:</h3>
              <a-collapse v-model:activeKey="activeKey" ghost>
                <a-collapse-panel
                  key="1"
                  class="accardion-item"
                  header="СРАВНЕНИЕ ЯПОНСКИХ И НЕМЕЦКИХ АВТОМОБИЛЕЙ: ЧТО ЛУЧШЕ?"
                >
                  <p>{{ text }}</p>
                </a-collapse-panel>
                <a-collapse-panel
                  key="2"
                  class="accardion-item"
                  header="ТОП-5 НАДЕЖНЫХ АВТОМОБИЛЕЙ ДЛЯ СЕМЕЙНОГО ИСПОЛЬЗОВАНИЯ"
                >
                  <p>{{ text }}</p>
                </a-collapse-panel>
                <a-collapse-panel
                  key="3"
                  class="accardion-item"
                  header="ТОП-5 НАДЕЖНЫХ АВТОМОБИЛЕЙ ДЛЯ СЕМЕЙНОГО ИСПОЛЬЗОВАНИЯ"
                >
                  <p>{{ text }}</p>
                </a-collapse-panel>
              </a-collapse>
              <a href="#" class="new-addition mt-4"
                >Читать больше новостей <i class="bi bi-arrow-up-right"></i
              ></a>
            </div>
          </a-col>
        </a-row>
      </div>
    </div>
    <ResponseBanner />
  </div>
</template>

<script setup>
//Axios
import axios from 'axios';
//VUE ROUTE
import { onMounted, ref } from 'vue';
import { useRoute } from 'vue-router';
//componnents
import { ResponseBanner } from '@/components';

//values
const route = useRoute();
const news = ref({});
const activeKey = ref([]);
const loading = ref(false);
const error = ref(null);
const text = `A dog is a type of domesticated animal.Known for its loyalty and faithfulness,it can be found as a welcome guest in many households across the world.`;

const fetchNew = async () => {
  loading.value = true;
  error.value = null;
  try {
    const response = await axios.get(
      `${import.meta.env.VITE_APP_API}/news/${route.params.id}`
    );
    news.value = response.data;
  } catch (err) {
    error.value = err.message;
  } finally {
    loading.value = false;
  }
};

onMounted(() => {
  fetchNew();
});
</script>

<style scoped>
.news-title {
  font-weight: 500;
  font-size: 26px;
}

.news-main__info img {
  max-height: 383px;
  width: 100%;
  border-radius: 15px;
}

.news-main__info p {
  font-weight: 500;
  font-size: 16px;
  color: #989898;
}

.news-accardion {
  padding: 15px 20px;
  border-radius: 10px;

  h3 {
    font-weight: 500;
    font-size: 26px;
  }
}

.new-addition {
  font-weight: 500;
  font-size: 14px;
  color: #202020;
  text-decoration: none;
}

.loading {
  text-align: center;
  background: rgba(0, 0, 0, 0.05);
  border-radius: 4px;
  margin-bottom: 20px;
  padding: 30px 50px;
  margin: 20px 0;
}

@media (max-width: 576px) {
  .news-main__info img {
    height: 150px;
  }
}
</style>
