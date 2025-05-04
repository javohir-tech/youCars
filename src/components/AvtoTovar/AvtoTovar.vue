<template>
  <div class="mt-4">
    <a-row :gutter="[20, 15]" align="stretch">
      <!-- images-->
      <a-col :xs="{ span: 24 }" :md="{ span: 12 }">
        <div class="tovar-images">
          <!-- ===== Tovar Images ===== -->
          <swiper
            :style="{
              '--swiper-navigation-color': '#fff',
              '--swiper-pagination-color': '#fff',
            }"
            :loop="true"
            :spaceBetween="10"
            :navigation="true"
            :thumbs="{ swiper: thumbsSwiper }"
            :modules="modules"
            class="mySwiper2"
          >
            <swiper-slide
              v-for="(image, index) in props.carData.image"
              :key="index"
            >
              <img :src="image" alt="tovar images" loading="lazy" />
            </swiper-slide>
          </swiper>
          <swiper
            @swiper="setThumbsSwiper"
            :loop="true"
            :spaceBetween="10"
            :slidesPerView="4"
            :freeMode="true"
            :watchSlidesProgress="true"
            :modules="modules"
            class="mySwiper"
          >
            <swiper-slide
              v-for="(image, index) in props.carData.image"
              :key="index"
            >
              <img :src="image" />
            </swiper-slide>
          </swiper>
        </div>
      </a-col>
      <!-- tovar info -->
      <a-col :xs="{ span: 24 }" :md="{ span: 12 }">
        <div class="shadow tovar-info">
          <h1 class="tovar-name">{{ props.carData.model }}</h1>
          <a-flex
            gap="1"
            justify="space-between"
            align="center"
            class="tovar-viewers"
          >
            <!-- ===== Tovar info ===== -->
            <a-flex gap="3">
              <span>{{ formatDate(props.carData?.createdAt) }}</span>
              <span
                ><i class="fa-solid fa-eye me-1"></i
                >{{ props.carData.seen }}</span
              >
              <span>
                <i
                  class="bi bi-heart ms-2"
                  v-if="!carsStore.isSelected(props.carData.id)"
                  @click="
                    carsStore.addCar({
                      ...props.carData,
                      route: props.tovarRoute,
                    })
                  "
                ></i>
                <i
                  class="bi bi-heart-fill ms-2"
                  v-else
                  @click="carsStore.removeCar(props.carData.id)"
                ></i>
              </span>
            </a-flex>
            <a-flex align="center" gap="3" class="tovar-stock">
              <i class="fa-solid fa-check"></i>
              <p class="mb-0">В наличии</p>
            </a-flex>
          </a-flex>
          <!-- ===== Tovar Texnik herakteristika ===== -->
          <a-row class="mt-3">
            <a-col :xs="{ span: 24 }" :md="{ span: 12 }" class="tovar-data">
              <a-flex
                v-for="(item, index) in specs"
                :key="index"
                align="center"
                justify="space-between"
                class="mb-3 tovar-data__item"
                :class="{ 'mb-0': index === specs.length - 1 }"
              >
                <p class="mb-0">{{ item.label }}</p>
                <h3 class="mb-0">{{ item.value }}</h3>
              </a-flex>
            </a-col>
          </a-row>
        </div>
        <!-- ===== Tovar Narxi  ===== -->
        <a-flex class="tovar-price">
          <p class="me-5 mb-0">{{ $t('pages.avtoTovar.cost') }}:</p>
          <p class="ms-5 mb-0">{{ props.carData.cost }} $</p>
        </a-flex>
        <!-- ===== Author Data ===== -->
        <div class="user-data shadow">
          <div class="user-card">
            <a-flex align="center" gap="15" class="user-info">
              <a-avatar :size="40" class="avatar" :gap="gap">
                {{
                  props.userData?.name
                    ? props.userData.name.charAt(0).toUpperCase()
                    : ''
                }}
              </a-avatar>
              <div>
                <p class="mb-0 mb-md-2">{{ props.userData.name }}</p>
                <a :href="`mailto:${props.user?.email}`" class="mb-0">{{
                  props.userData?.email
                }}</a>
              </div>
            </a-flex>
            <a-flex align="center" class="ms-4 message" gap="15">
              <img
                src="../../assets/Images/Icons/messege2.png"
                class="img-fluid"
                loading="lazy"
                alt="messege"
              />
              <p class="mb-0">{{ $t('pages.avtoTovar.message') }}</p>
            </a-flex>
          </div>
        </div>
      </a-col>
    </a-row>

    <!-- ===== Tovar description ===== -->
    <div class="tovar-description shadow mt-3">
      <h2 class="item-header">
        {{ $t('pages.avtoTovar.headers.description') }}
      </h2>
      <p class="mb-0">{{ props.carData.description }}</p>
    </div>

    <a-row
      :gutter="[10, 10]"
      class="mt-4"
      justify="space-between"
      align="stretch"
    >
      <!-- ===== Tovar texnik harekteristika ===== -->
      <a-col :xs="{ span: 24 }" :md="{ span: 12 }">
        <div class="shadow technical-info">
          <h1 class="main-header">
            {{ $t('pages.avtoTovar.headers.TechSpecifications') }}
          </h1>
          <a-row :gutter="[10, 10]" justify="space-between">
            <a-col :xs="{ span: 24 }" :md="{ span: 11 }" class="tovar-data">
              <a-flex
                v-for="(item, index) in specs"
                :key="index"
                align="center"
                justify="space-between"
                class="mb-3 tovar-data__item"
                :class="{ 'mb-0': index === specs.length - 1 }"
              >
                <p class="mb-0">{{ item.label }}</p>
                <h3 class="mb-0">{{ item.value }}</h3>
              </a-flex>
            </a-col>
            <!--=================================================================================-->
            <a-col :xs="{ span: 24 }" :md="{ span: 11 }" class="tovar-data">
              <a-flex
                v-for="(item, index) in specsTwo"
                :key="index"
                align="center"
                justify="space-between"
                class="mb-3 tovar-data__item"
                :class="{ 'mb-0': index === specs.length - 1 }"
              >
                <p class="mb-0">{{ item.label }}</p>
                <h3 class="mb-0">{{ item.value }}</h3>
              </a-flex>
            </a-col>
          </a-row>
        </div>
      </a-col>
      <!-- ===== Message with tovar Author ===== -->
      <a-col :xs="{ span: 24 }" :md="{ span: 12 }">
        <div class="shadow client-config">
          <h1 class="main-header">
            {{ $t('pages.avtoTovar.headers.message') }}
          </h1>
          <div class="message-buttons">
            <button type="button">Здравствуйте</button>
            <button type="button">Какой срок доставки?</button>
            <button type="button">птс ОРИГИНАЛ?</button>
            <button type="button">Пробег оригинал?</button>
            <button type="button">Какой бензин?</button>
          </div>
        </div>
      </a-col>
    </a-row>
    <!-- ===== oxshash  Tovarlar ===== -->
    <div class="mt-5">
      <h1 class="main-header mb-3">
        {{ $t('pages.avtoTovar.headers.similar') }}
      </h1>
      <a-row :gutter="[10, 10]">
        <a-col
          v-for="similarCar in similar"
          :key="similarCar.id"
          :xs="{ span: 24 }"
          :md="{ span: 8 }"
        >
          <RouterLink :to="`${props.tovarRoute}/${similarCar.id}`">
            <AvtoCard
              :avtomabil="{ ...similarCar, route: props.tovarRoute }"
              :images="similarCar.image"
              :cost="similarCar.cost"
              :country="similarCar.country"
              :milage="similarCar.milage"
              :model="similarCar.model"
            />
          </RouterLink>
        </a-col>
      </a-row>
    </div>
  </div>
</template>

<script setup>
import { computed, ref, toRaw } from 'vue';
import { Swiper, SwiperSlide } from 'swiper/vue';
import { RouterLink } from 'vue-router';

//Import swiper styles
import 'swiper/css/free-mode';
import 'swiper/css/navigation';
import 'swiper/css/thumbs';

// Import required modules
import { FreeMode, Navigation, Thumbs } from 'swiper/modules';

//components
import AvtoCard from '../Ui/AvtoCard.vue';

//Store
import { useCarStore } from '@/Stores/store';

//i18n
import { useI18n } from 'vue-i18n';

const { t } = useI18n();

const carsStore = useCarStore();

const thumbsSwiper = ref(null);

const setThumbsSwiper = (swiper) => {
  thumbsSwiper.value = swiper;
};

//Props
const props = defineProps({
  carData: {
    type: Object,
    required: true,
  },
  userData: {
    type: Object,
    required: true,
  },
  similar: {
    type: Array,
    required: true,
  },
  tovarRoute: {
    type: String,
    required: true,
  },
});

//tecnical specs
const specs = computed(() => [
  { label: t('pages.avtoTovar.technical.model'), value: props.carData.model },
  { label: t('pages.avtoTovar.technical.year'), value: props.carData.year },
  {
    label: t('pages.avtoTovar.technical.milage'),
    value: `${props.carData.milage} км`,
  },
  { label: t('pages.avtoTovar.technical.color'), value: props.carData.color },
  {
    label: t('pages.avtoTovar.technical.dvigatel'),
    value: `${props.carData.volume} л / ${props.carData.horsepower} л.с`,
  },
  {
    label: t('pages.avtoTovar.technical.country'),
    value: props.carData.country,
  },
]);

const specsTwo = [
  { label: t('pages.avtoTovar.technical.fuel'), value: props.carData.engine },
  {
    label: t('pages.avtoTovar.technical.box'),
    value: props.carData.checkpoint,
  },
];

const modules = [FreeMode, Navigation, Thumbs];

//update date
const formatDate = (dateString) => {
  if (!dateString) return 'Дата не указана';
  const date = new Date(dateString);
  if (isNaN(date.getTime())) return 'Неверный формат даты';
  return new Intl.DateTimeFormat('ru-RU', {
    day: 'numeric',
    month: 'long',
    year: 'numeric',
  }).format(date);
};
</script>

<style scoped>
@import './AvtoTovar.css';
</style>
