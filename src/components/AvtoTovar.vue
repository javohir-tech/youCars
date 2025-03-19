<template>
    <div class="mt-4">
        <a-row :gutter="[25, 15]">
            <a-col :xs="{ span: 24 }" :md="{ span: 12 }">
                <div class="tovar-images">
                    <swiper :style="{
                        '--swiper-navigation-color': '#fff',
                        '--swiper-pagination-color': '#fff',
                    }" :loop="true" :spaceBetween="10" :navigation="true" :thumbs="{ swiper: thumbsSwiper }"
                        :modules="modules" class="mySwiper2">
                        <swiper-slide v-for="(image, index) in props.tovarData.image" :key="index">
                            <img :src="image" />
                        </swiper-slide>
                    </swiper>
                    <swiper @swiper="setThumbsSwiper" :loop="true" :spaceBetween="10" :slidesPerView="4"
                        :freeMode="true" :watchSlidesProgress="true" :modules="modules" class="mySwiper">
                        <swiper-slide v-for="(image, index) in props.tovarData.image" :key="index">
                            <img :src="image" />
                        </swiper-slide>
                    </swiper>
                </div>
            </a-col>
            <a-col :xs="{ span: 24 }" :md="{ span: 12 }">
                <div class="shadow tovar-info">
                    <h1 class="tovar-name">{{ props.tovarData.model }}</h1>
                    <a-flex justify="space-between">
                        <div>
                            <span>{{ props.tovarData.createdAt }}</span>
                            <span><i class="fa-solid fa-eye me-2"></i> {{ props.tovarData.seen }}</span>
                            <span><i class="fa-solid fa-heart"></i></span>
                        </div>
                        <a-flex align="center" gap="10">
                            <i class="fa-solid fa-check"></i>
                            <p class="mb-0">В наличии</p>
                        </a-flex>
                    </a-flex>
                    <hr>
                    <div>
                        
                    </div>
                </div>
            </a-col>
        </a-row>
    </div>
</template>

<script setup>
import { ref, toRaw } from 'vue'
import { Swiper, SwiperSlide } from 'swiper/vue'

//Import swiper styles
import 'swiper/css/free-mode'
import 'swiper/css/navigation'
import 'swiper/css/thumbs'

// Import required modules
import { FreeMode, Navigation, Thumbs } from 'swiper/modules'

const thumbsSwiper = ref(null)

const setThumbsSwiper = (swiper) => {
    thumbsSwiper.value = swiper
}

const props = defineProps({
    tovarData: {
        type: Object,
        required: true,
    },
    userData:{
        type:Object,
        required: true
    }
})

const modules = [FreeMode, Navigation, Thumbs]

console.log(toRaw(props.tovarData))
console.log(toRaw(props.userData))
</script>

<style scoped>
/* .tovar-images{
        
    } */

.mySwiper2 {
    width: 100%;
    height: 400px;
}

.mySwiper2 img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    border-radius: 8px;
}

.mySwiper {
    width: 100%;
    height: 100px;
    margin-top: 10px;
}

.mySwiper img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    border-radius: 4px;
    cursor: pointer;
}

.mySwiper .swiper-slide {
    opacity: 0.5;
    transition: opacity 0.3s ease;
}

.mySwiper .swiper-slide-thumb-active {
    opacity: 1;
    border: 2px solid #fff;
    border-radius: 4px;
}

.tovar-info {
    padding: 20px 30px;
    border-radius: 10px;
}

@media(max-width:576px){
    .mySwiper2{
        height: 200px;
    }
    .mySwiper{
        height: 60px;
    }
}
</style>