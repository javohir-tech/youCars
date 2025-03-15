<template>
    <div class="cars-card">
        <div class="cars-card-image">
            <img :src="image" class="img-fluid" alt="">
        </div>
        <div class="cars-card-info shadow">
            <p>Hyundai Solaris 2 Рестайлинг, 2022</p>
            <p>{{ cost }}$</p>
            <a-flex align="center" justify="space-between">
                <div>
                    <p>{{ milage }}km</p>
                    <p>1.4/100 л.с./Бензин</p>
                </div>
                <div>
                    <p>Робот</p>
                    <p>передний привод</p>
                </div>
            </a-flex>
            <a-flex align="center" justify="space-between">
                <p>{{ country }}</p>
                <div>
                    <i class="fa-solid fa-heart"></i>
                </div>
            </a-flex>
        </div>
    </div>
</template>
<script setup>
defineProps({
    image: String,
    title: String,
    cost: String,
    country: String,
    milage: Number
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
</style>