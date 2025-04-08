<template>
  <div class="news mt-5">
    <h1 class="main-header">Новости</h1>
    <div class="news-cards desktop-version">
      <div v-if="loading" class="loader shadow">
        <a-spin />
      </div>
      <a-row v-else-if="ourNews.length" :gutter="[10, 10]">
        <a-col
          :xs="{ span: 24 }"
          :md="{ span: 12 }"
          :lg="{ span: 8 }"
          v-for="ourNew in ourNews"
          :key="ourNew.key"
        >
          <div class="news-card">
            <div class="card-image">
              <img :src="ourNew.image" class="img-fluid" alt="news image" />
            </div>
            <div class="card-info shadow">
              <div class="card-titles">
                <h2>{{ ourNew.title }}</h2>
                <p>
                  {{ ourNew.content?.split(' ').slice(0, 35).join(' ') }}...
                </p>
              </div>
              <RouterLink :to="`/news/${ourNew.id}`" class="card-link">
                <a-flex align="center" :gap="10">
                  <p class="mb-0">Подробнее</p>
                  <i class="fa-solid fa-right-to-bracket"></i>
                </a-flex>
              </RouterLink>
            </div>
          </div>
        </a-col>
      </a-row>
      <a-result
        v-else-if="error"
        status="404"
        title="404"
        sub-title="Sorry, An error occurred while loading the data!"
      />
    </div>
    <div v-if="loading" class="loader shadow mobile-version">
      <a-spin />
    </div>
    <a-result
      class="mobile-version"
      v-else-if="error"
      status="404"
      title="404"
      sub-title="Sorry, An error occurred while loading the data!"
    />
    <Swiper
      v-else-if="ourNews.length"
      :spaceBetween="30"
      :centeredSlides="true"
      :autoplay="{
        delay: 2500,
        disableOnInteraction: false,
      }"
      :pagination="{
        clickable: true,
      }"
      :navigation="false"
      :modules="modules"
      class="mySwiper mobile-version"
    >
      <swiper-slide v-for="ourNew in ourNews" :key="ourNew.key">
        <div class="news-card">
          <div class="card-image">
            <img :src="ourNew.image" class="img-fluid" alt="news image" />
          </div>
          <div class="card-info shadow">
            <div class="card-titles">
              <h2>{{ ourNew.title }}</h2>
              <p>{{ ourNew.content?.split(' ').slice(0, 35).join(' ') }}...</p>
            </div>
            <RouterLink :to="`/news/${ourNew.id}`" class="card-link">
              <a-flex align="center" :gap="10">
                <p class="mb-0">Подробнее</p>
                <i class="fa-solid fa-right-to-bracket"></i>
              </a-flex>
            </RouterLink>
          </div>
        </div>
      </swiper-slide>
    </Swiper>
  </div>
</template>
<script setup>
//vue
import { onMounted, ref, watch } from 'vue';

// import Swiper from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/vue';

//Hooks
import { useFetch } from '@/Hooks/UseFatch';

// import required modules
import { Pagination, Autoplay } from 'swiper/modules';
//Router
import { RouterLink } from 'vue-router';

const modules = [Pagination, Autoplay];
const ourNews = ref([]);

const { data, loading, error } = useFetch(
  `${import.meta.env.VITE_APP_API}/news`
);

watch(data, (newData) => {
  ourNews.value = newData.slice(0, 3);
});
</script>
<style scoped>
.desktop-version {
  display: block;
}

.mobile-version {
  display: none;
}

.card-image img {
  border-radius: 10px;
  height: 250px;
  width: 100%;
}

.card-info {
  margin-top: 5px;
  background-color: rgba(255, 255, 255, 1);
  padding: 20px 15px;
  border-radius: 10px;
  height: 200px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;

  h2 {
    font-weight: 500;
    font-size: 19px;
    line-height: 20px;
    color: rgba(41, 56, 67, 1);
  }

  .card-link {
    color: rgba(41, 56, 67, 1);
    font-weight: 400;
    font-size: 14px;
    text-decoration: none;
  }
}

.card-titles p {
  font-weight: 400;
  font-size: 15px;
  color: rgba(152, 152, 152, 1);
}

.swiper {
  width: 100%;
  height: 100%;
}

.swiper-slide img {
  display: block;
  object-fit: cover;
}

@media (max-width: 576px) {
  .desktop-version {
    display: none;
  }

  .mobile-version {
    display: block;
  }
}
</style>
