<template>
  <div class="cars-card">
    <div class="cars-card-image">
      <!-- ===== Images ===== -->
      <Swiper
        :scrollbar="{
          hide: false,
          draggable: true,
        }"
        :modules="modules"
        class="mySwiper"
      >
        <swiper-slide v-for="(image, index) in props.images" :key="index">
          <a-skeleton
            v-if="loading[index]"
            active
            :paragraph="false"
            style="width: 100%; height: 220px; border-radius: 8px"
          />
          <img
            v-show="!loading[index]"
            :src="image"
            class="img-fluid"
            alt="Slide image"
            @load="onImageLoad(index)"
          />
        </swiper-slide>
      </Swiper>
    </div>
    <!-- ===== Card Info ===== -->
    <div class="cars-card-info shadow">
      <p class="avto-name mb-3">
        {{ props.model }} , {{ props.avtomabil.year }}
      </p>
      <p class="avto-cost mb-2">{{ props.cost }}$</p>
      <div class="card-description">
        <a-flex align="center" justify="space-between">
          <div>
            <p class="mb-2">{{ props.milage }} km</p>
            <p class="mb-2">
              {{ props.avtomabil.volume }} /
              {{ props.avtomabil.horsepower }} л.с /
              {{ props.avtomabil.engine }}
            </p>
          </div>
          <div>
            <p class="mb-2">Робот</p>
            <p class="mb-2">передний привод</p>
          </div>
        </a-flex>
        <a-flex align="center" justify="space-between">
          <p>{{ props.country }}</p>
          <div>
            <i
              v-if="!carsStore.isSelected(props.avtomabil.id)"
              @click.prevent="carsStore.addCar(props.avtomabil)"
              class="bi bi-heart"
            ></i>
            <i
              v-else
              @click.prevent="carsStore.removeCar(props.avtomabil.id)"
              class="bi bi-heart-fill"
            ></i>
          </div>
        </a-flex>
      </div>
    </div>
  </div>
</template>
<script setup>
//Vue
import { ref } from 'vue';
import { Swiper, SwiperSlide } from 'swiper/vue';
// import required modules
import { Scrollbar } from 'swiper/modules';
// Pinia
import { useCarStore } from '@/Stores/store';

const modules = [Scrollbar];
const carsStore = useCarStore();

const props = defineProps({
  avtomabil: {
    type: Object,
  },
  images: Array,
  title: String,
  cost: {
    type: Number,
    default: 0,
  },
  country: String,
  milage: Number,
  model: String,
});

const loading = ref([]);

//skeleton rasm kelguncha
function onImageLoad(index) {
  loading.value[index] = false;
}

props.images.forEach(() => loading.value.push(true));
</script>
<style scoped>
.cars-card-image img {
  height: 220px;
  border-radius: 10px;
  width: 100%;
}

.ant-skeleton-title {
  height: 200px;
}

.cars-card-info {
  padding: 15px;
  border-radius: 10px;
}

.avto-name {
  font-size: 17px;
  font-weight: 400;
  line-height: 18px;
  color: rgba(41, 56, 67, 1);
}

.avto-cost {
  font-weight: 700;
  font-size: 20px;
  line-height: 18px;
  color: rgba(41, 56, 67, 1);
}

.card-description {
  font-weight: 400;
  font-size: 15px;
  color: rgba(152, 152, 152, 1);
}

.bi-heart-fill {
  color: rgba(255, 0, 0, 1);
}

@media (max-width: 576px) {
  .cars-card-image img {
    height: 200px;
  }
}
</style>
