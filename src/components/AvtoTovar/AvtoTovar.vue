<template>
    <div class="mt-4">
        <a-row :gutter="[20, 15]" align="stretch">
            <!-- images-->
            <a-col :xs="{ span: 24 }" :md="{ span: 12 }">
                <div class="tovar-images">
                    <swiper :style="{
                        '--swiper-navigation-color': '#fff',
                        '--swiper-pagination-color': '#fff',
                    }" :loop="true" :spaceBetween="10" :navigation="true" :thumbs="{ swiper: thumbsSwiper }"
                        :modules="modules" class="mySwiper2">
                        <swiper-slide v-for="(image, index) in props.carData.image" :key="index">
                            <img :src="image" />
                        </swiper-slide>
                    </swiper>
                    <swiper @swiper="setThumbsSwiper" :loop="true" :spaceBetween="10" :slidesPerView="4"
                        :freeMode="true" :watchSlidesProgress="true" :modules="modules" class="mySwiper">
                        <swiper-slide v-for="(image, index) in props.carData.image" :key="index">
                            <img :src="image" />
                        </swiper-slide>
                    </swiper>
                </div>
            </a-col>
            <!-- tovar info -->
            <a-col :xs="{ span: 24 }" :md="{ span: 12 }">
                <div class="shadow tovar-info">
                    <h1 class="tovar-name">{{ props.carData.model }}</h1>
                    <a-flex gap="1" justify="space-between" align="center" class="tovar-viewers">
                        <a-flex gap="3">
                            <span>{{ formatDate(props.carData?.createdAt) }}</span>
                            <span><i class="fa-solid fa-eye me-1"></i>{{ props.carData.seen }}</span>
                            <span><i class="fa-solid fa-heart"></i></span>
                        </a-flex>
                        <a-flex align="center" gap="3" class="tovar-stock">
                            <i class="fa-solid fa-check"></i>
                            <p class="mb-0">В наличии</p>
                        </a-flex>
                    </a-flex>
                    <a-row class="mt-3">
                        <a-col :xs="{ span: 24 }" :md="{ span: 12 }" class="tovar-data">
                            <a-flex align="center" justify="space-between" class="mb-3 tovar-data__item">
                                <p class="mb-0">Модель</p>
                                <h3 class="mb-0">{{ props.carData.model }}</h3>
                            </a-flex>
                            <a-flex align="center" justify="space-between" class="mb-3 tovar-data__item">
                                <p class="mb-0">Год выпуска</p>
                                <h3 class="mb-0">{{ props.carData.year }}</h3>
                            </a-flex>
                            <a-flex align="center" justify="space-between" class="mb-3 tovar-data__item">
                                <p class="mb-0">Пробег</p>
                                <h3 class="mb-0">{{ props.carData.milage }} км</h3>
                            </a-flex>
                            <a-flex align="center" justify="space-between" class="mb-3 tovar-data__item">
                                <p class="mb-0">Цвет</p>
                                <h3 class="mb-0">{{ props.carData.color }}</h3>
                            </a-flex>
                            <a-flex align="center" justify="space-between" class="mb-3 tovar-data__item">
                                <p class="mb-0">лошадиная сила</p>
                                <h3 class="mb-0">{{ props.carData.horsepower }}</h3>
                            </a-flex>
                            <a-flex align="center" justify="space-between" class="mb-0 tovar-data__item">
                                <p class="mb-0">Страна</p>
                                <h3 class="mb-0">{{ props.carData.country }}</h3>
                            </a-flex>
                        </a-col>
                    </a-row>
                </div>
                <a-flex class="tovar-price">
                    <p class="me-5 mb-0">Цена: </p>
                    <p class="ms-5 mb-0">{{ props.carData.cost }} $</p>
                </a-flex>
                <div class="user-data shadow">
                    <div class="user-card">
                        <a-flex align="center" gap="15" class="user-info">
                            <a-avatar :size="40" class="avatar" :gap="gap">
                                {{ props.userData?.name ? props.userData.name.charAt(0).toUpperCase() : '' }}
                            </a-avatar>
                            <div>
                                <p class=" mb-0 mb-md-2">{{ props.userData.name }}</p>
                                <a :href="`mailto:${props.user?.email}`" class="mb-0">{{ props.userData?.email }}</a>
                            </div>
                        </a-flex>
                        <!-- <RouterLink to="/"> -->
                        <a-flex align="center" class="ms-4 message" gap="15">
                            <img src="../../assets/Images/Icons/messege2.png" class="img-fluid" alt="messege">
                            <p class="mb-0">Написать</p>
                        </a-flex>
                        <!-- </RouterLink> -->
                    </div>
                </div>
            </a-col>
        </a-row>

        <div class="tovar-description shadow mt-3">
            <h2 class="item-header">Описание</h2>
            <p class="mb-0">{{ props.carData.description }}</p>
        </div>

        <a-row :gutter="[10, 10]" class="mt-4" justify="space-between" align="stretch">
            <a-col :xs="{ span: 24 }" :md="{ span: 12 }">
                <div class="shadow technical-info">
                    <h1 class="main-header">Технические характеристики</h1>
                    <a-row :gutter="[10, 10]" justify="space-between">
                        <a-col :xs="{ span: 24 }" :md="{ span: 11 }" class="tovar-data">
                            <a-flex align="center" justify="space-between" class="mb-3 tovar-data__item">
                                <p class="mb-0">Модель</p>
                                <h3 class="mb-0">{{ props.carData.model }}</h3>
                            </a-flex>
                            <a-flex align="center" justify="space-between" class="mb-3 tovar-data__item">
                                <p class="mb-0">Год выпуска</p>
                                <h3 class="mb-0">{{ props.carData.year }}</h3>
                            </a-flex>
                            <a-flex align="center" justify="space-between" class="mb-3 tovar-data__item">
                                <p class="mb-0">Пробег</p>
                                <h3 class="mb-0">{{ props.carData.milage }} км</h3>
                            </a-flex>
                            <a-flex align="center" justify="space-between" class="mb-3 tovar-data__item">
                                <p class="mb-0">Цвет</p>
                                <h3 class="mb-0">{{ props.carData.color }}</h3>
                            </a-flex>
                            <a-flex align="center" justify="space-between" class="mb-3 tovar-data__item">
                                <p class="mb-0">лошадиная сила</p>
                                <h3 class="mb-0">{{ props.carData.horsepower }}</h3>
                            </a-flex>
                            <a-flex align="center" justify="space-between" class="mb-0 tovar-data__item">
                                <p class="mb-0">Страна</p>
                                <h3 class="mb-0">{{ props.carData.country }}</h3>
                            </a-flex>
                        </a-col>
                        <a-col :xs="{ span: 24 }" :md="{ span: 11 }" class="tovar-data">
                            <a-flex align="center" justify="space-between" class="mb-3 tovar-data__item">
                                <p class="mb-0">Модель</p>
                                <h3 class="mb-0">{{ props.carData.model }}</h3>
                            </a-flex>
                            <a-flex align="center" justify="space-between" class="mb-3 tovar-data__item">
                                <p class="mb-0">Год выпуска</p>
                                <h3 class="mb-0">{{ props.carData.year }}</h3>
                            </a-flex>
                            <a-flex align="center" justify="space-between" class="mb-3 tovar-data__item">
                                <p class="mb-0">Пробег</p>
                                <h3 class="mb-0">{{ props.carData.milage }} км</h3>
                            </a-flex>
                            <a-flex align="center" justify="space-between" class="mb-3 tovar-data__item">
                                <p class="mb-0">Цвет</p>
                                <h3 class="mb-0">{{ props.carData.color }}</h3>
                            </a-flex>
                        </a-col>
                    </a-row>
                </div>
            </a-col>
            <a-col :xs="{ span: 24 }" :md="{ span: 12 }">
                <div class="shadow client-config">
                    <h1 class="main-header">Задайте вопрос продавцу</h1>
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

        <div class="mt-5">
            <h1 class="main-header mb-3">ПОХОЖИЕ</h1>
            <a-row :gutter="[10, 10]">
                <a-col v-for="similarCar in similar" :key="similarCar.id" :xs="{ span: 24 }" :md="{ span: 8 }">
                    <RouterLink :to="`${props.similarRoute}/${similarCar.id}`">
                        <AvtoCard 
                        :avtomabil="similarCar"
                        :images="similarCar.image"
                        :cost="similarCar.cost" 
                        :country="similarCar.country"
                        :milage="similarCar.milage"
                        :model="similarCar.model" />
                    </RouterLink>
                </a-col>
            </a-row>
        </div>
    </div>
</template>

<script setup>
import { ref, toRaw } from 'vue'
import { Swiper, SwiperSlide } from 'swiper/vue'
import { RouterLink } from 'vue-router'

//Import swiper styles
import 'swiper/css/free-mode'
import 'swiper/css/navigation'
import 'swiper/css/thumbs'

// Import required modules
import { FreeMode, Navigation, Thumbs } from 'swiper/modules'

//components
import AvtoCard from '../Ui/AvtoCard.vue'

const thumbsSwiper = ref(null)

const setThumbsSwiper = (swiper) => {
    thumbsSwiper.value = swiper
}

const props = defineProps({
    carData: {
        type: Object,
        required: true,
    },
    userData: {
        type: Object,
        required: true
    },
    similar: {
        type: Array,
        required: true
    },
    similarRoute: {
        type: String,
        required: true
    }
})

console.log(toRaw(props.similar))
const modules = [FreeMode, Navigation, Thumbs]

const formatDate = (dateString) => {
    if (!dateString) return 'Дата не указана'
    const date = new Date(dateString)
    if (isNaN(date.getTime())) return 'Неверный формат даты'
    return new Intl.DateTimeFormat('ru-RU', {
        day: 'numeric',
        month: 'long',
        year: 'numeric'
    }).format(date)
}

</script>

<style scoped>
@import "./AvtoTovar.css";
</style>