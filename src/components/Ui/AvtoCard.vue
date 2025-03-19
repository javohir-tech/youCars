<template>
        <div class="cars-card">
            <div class="cars-card-image">
                <Swiper :scrollbar="{
                    hide: false,
                    draggable: true
                }" :modules="modules" class="mySwiper">
                    <swiper-slide v-for="(image, index) in props.images" :key="index">
                        <img :src="image" class="img-fluid" alt="">
                    </swiper-slide>
                </Swiper>
            </div>
            <div class="cars-card-info shadow">
                <p class="avto-name">{{ props.model }}</p>
                <p class="avto-cost">{{ props.cost }}$</p>
                <div class="card-description">
                    <a-flex align="center" justify="space-between">
                        <div>
                            <p>{{ props.milage }}km</p>
                            <p>1.4/100 л.с./Бензин</p>
                        </div>
                        <div>
                            <p>Робот</p>
                            <p>передний привод</p>
                        </div>
                    </a-flex>
                    <a-flex align="center" justify="space-between">
                        <p>{{ props.country }}</p>
                        <div>
                            <i class="fa-solid fa-heart"></i>
                        </div>
                    </a-flex>
                </div>
            </div>
        </div>
</template>
<script setup>
import { Swiper, SwiperSlide } from 'swiper/vue';
// import required modules
import { Scrollbar } from 'swiper/modules';

const modules = [Scrollbar]

const props = defineProps({
    images: Array,
    title: String,
    cost: {
        type: Number,
        default: 0
    },
    country: String,
    milage: Number,
    model: String,
})

</script>
<style scoped>
.cars-card-image img {
    height: 220px;
    border-radius: 10px;
    width: 100%;
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
</style>