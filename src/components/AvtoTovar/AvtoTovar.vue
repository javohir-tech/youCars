<template>
    <div class="mt-4">
        <a-row :gutter="[20, 15]">
            <!-- images-->
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
            <!-- tovar info -->
            <a-col :xs="{ span: 24 }" :md="{ span: 12 }">
                <div class="shadow tovar-info">
                    <h1 class="tovar-name">{{ props.tovarData.model }}</h1>
                    <a-flex gap="1" justify="space-between" align="center" class="tovar-viewers">
                        <a-flex gap="3">
                            <span>{{ formatDate(props.tovarData?.createdAt) }}</span>
                            <span><i class="fa-solid fa-eye me-1"></i>{{ props.tovarData.seen }}</span>
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
                                <h3 class="mb-0">{{ props.tovarData.model }}</h3>
                            </a-flex>
                            <a-flex align="center" justify="space-between" class="mb-3 tovar-data__item">
                                <p class="mb-0">Год выпуска</p>
                                <h3 class="mb-0">{{ props.tovarData.year }}</h3>
                            </a-flex>
                            <a-flex align="center" justify="space-between" class="mb-3 tovar-data__item">
                                <p class="mb-0">Пробег</p>
                                <h3 class="mb-0">{{ props.tovarData.milage }} км</h3>
                            </a-flex>
                            <a-flex align="center" justify="space-between" class="mb-3 tovar-data__item">
                                <p class="mb-0">Цвет</p>
                                <h3 class="mb-0">{{ props.tovarData.color }}</h3>
                            </a-flex>
                            <a-flex align="center" justify="space-between" class="mb-3 tovar-data__item">
                                <p class="mb-0">лошадиная сила</p>
                                <h3 class="mb-0">{{ props.tovarData.horsepower }}</h3>
                            </a-flex>
                            <a-flex align="center" justify="space-between" class="mb-0 tovar-data__item">
                                <p class="mb-0">Страна</p>
                                <h3 class="mb-0">{{ props.tovarData.country }}</h3>
                            </a-flex>
                        </a-col>
                    </a-row>
                </div>
                <a-flex class="tovar-price">
                    <p class="me-5 mb-0">Цена: </p>
                    <p class="ms-5 mb-0">{{ props.tovarData.cost }} $</p>
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
                            <img src="../assets/Images/Icons/messege2.png" class="img-fluid" alt="messege">
                            <p class="mb-0">Написать</p>
                        </a-flex>
                        <!-- </RouterLink> -->
                    </div>
                </div>
            </a-col>
        </a-row>

        <div class="tovar-description shadow mt-3">
            <h2 class="item-header">Описание</h2>
            <p class="mb-0">{{ props.tovarData.description }}</p>
        </div>

        <a-row :gutter="[10, 10]" class="mt-4" justify="space-between">
            <a-col :xs="{ span: 24 }" :md="{ span: 12 }">
                <div class="shadow technical-info">
                    <h1 class="main-header">Технические характеристики</h1>
                    <a-row :gutter="[10, 10]" justify="space-between">
                        <a-col :xs="{ span: 24 }" :md="{ span: 11 }" class="tovar-data">
                            <a-flex align="center" justify="space-between" class="mb-3 tovar-data__item">
                                <p class="mb-0">Модель</p>
                                <h3 class="mb-0">{{ props.tovarData.model }}</h3>
                            </a-flex>
                            <a-flex align="center" justify="space-between" class="mb-3 tovar-data__item">
                                <p class="mb-0">Год выпуска</p>
                                <h3 class="mb-0">{{ props.tovarData.year }}</h3>
                            </a-flex>
                            <a-flex align="center" justify="space-between" class="mb-3 tovar-data__item">
                                <p class="mb-0">Пробег</p>
                                <h3 class="mb-0">{{ props.tovarData.milage }} км</h3>
                            </a-flex>
                            <a-flex align="center" justify="space-between" class="mb-3 tovar-data__item">
                                <p class="mb-0">Цвет</p>
                                <h3 class="mb-0">{{ props.tovarData.color }}</h3>
                            </a-flex>
                            <a-flex align="center" justify="space-between" class="mb-3 tovar-data__item">
                                <p class="mb-0">лошадиная сила</p>
                                <h3 class="mb-0">{{ props.tovarData.horsepower }}</h3>
                            </a-flex>
                            <a-flex align="center" justify="space-between" class="mb-0 tovar-data__item">
                                <p class="mb-0">Страна</p>
                                <h3 class="mb-0">{{ props.tovarData.country }}</h3>
                            </a-flex>
                        </a-col>
                        <a-col :xs="{ span: 24 }" :md="{ span: 11 }" class="tovar-data">
                            <a-flex align="center" justify="space-between" class="mb-3 tovar-data__item">
                                <p class="mb-0">Модель</p>
                                <h3 class="mb-0">{{ props.tovarData.model }}</h3>
                            </a-flex>
                            <a-flex align="center" justify="space-between" class="mb-3 tovar-data__item">
                                <p class="mb-0">Год выпуска</p>
                                <h3 class="mb-0">{{ props.tovarData.year }}</h3>
                            </a-flex>
                            <a-flex align="center" justify="space-between" class="mb-3 tovar-data__item">
                                <p class="mb-0">Пробег</p>
                                <h3 class="mb-0">{{ props.tovarData.milage }} км</h3>
                            </a-flex>
                            <a-flex align="center" justify="space-between" class="mb-3 tovar-data__item">
                                <p class="mb-0">Цвет</p>
                                <h3 class="mb-0">{{ props.tovarData.color }}</h3>
                            </a-flex>
                        </a-col>
                    </a-row>
                </div>
            </a-col>
            <a-col :xs="{ span: 24 }" :md="{ span: 12 }">
                <div class="shadow client-config">
                    <h1 class="main-header">Задайте вопрос продавцу</h1>
                    <div>

                    </div>
                </div>
            </a-col>
        </a-row>
    </div>
</template>

<script setup>
import { ref } from 'vue'
import { Swiper, SwiperSlide } from 'swiper/vue'
// import { RouterLink } from 'vue-router'

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
    userData: {
        type: Object,
        required: true
    }
})

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
@import "./AvtoTovar.css"
</style>