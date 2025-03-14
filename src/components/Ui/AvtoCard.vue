<template>
    <div class="cars-card">
        <div class="cars-card-image">
            <img :src="image" class="img-fluid" alt="">
        </div>
        <div class="cars-card-info">
            <p>Hyundai Solaris 2 Рестайлинг, 2022</p>
            <p>19000$</p>
            <a-flex align="center" justify="space-between">
                <div>
                    <p>35 000 км</p>
                    <p>1.4/100 л.с./Бензин</p>
                </div>
                <div>
                    <p>Робот</p>
                    <p>передний привод</p>
                </div>
            </a-flex>
            <a-flex align="center" justify="space-between">
                <p>США</p>
                <div>
                    <i class="fa-solid fa-heart"></i>
                </div>
            </a-flex>
        </div>
    </div>
</template>
<script setup>
defineProps({
    image:String,
    title:String
})
</script>
<style></style>