<template>
    <div class="news mt-5">
        <h1 class="main-header">Новости</h1>
        <div class="news-cards">
            <a-row :gutter="[10, 10]">
                <a-col :xs="{ span: 24 }" :md="{ span: 12 }" :lg="{ span: 8 }" v-for="ourNew in ourNews" :key="ourNew.key">
                    <div class="news-card">
                        <div class="card-image">
                            <img :src="ourNew.image" class="img-fluid" alt="news image">
                        </div>
                        <div class="card-info shadow">
                            <div class="card-titles">
                                <h2>{{ ourNew.title }}</h2>
                                <p>{{ ourNew.content.split(' ').slice(0, 35).join(' ') }}...</p>
                            </div>
                            <a href="#" class="card-link">
                                <a-flex align="center" :gap="10">
                                    <p class="mb-0">Подробнее</p>
                                    <i class="fa-solid fa-right-to-bracket"></i>
                                </a-flex>
                            </a>
                        </div>
                    </div>
                </a-col>
            </a-row>
        </div>
    </div>
</template>
<script setup>
import axios from 'axios';
import { onMounted, ref } from 'vue';
const ourNews = ref([])

onMounted(() => {
    fetchNews()
})
const fetchNews = async () => {
    try {
        const response = await axios.get(`${import.meta.env.VITE_APP_API}/news`)
        console.log(import.meta.env.VITE_APP_API)
        ourNews.value = response.data.slice(0, 3)
        // console.log(news)
    } catch (error) {
        console.log(error)
    }
}

</script>
<style scoped>
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

        p {
            text-decoration: underline;
        }
    }
}

.card-titles p {
    font-weight: 400;
    font-size: 15px;
    color: rgba(152, 152, 152, 1);
}
</style>