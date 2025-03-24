<template>
    <footer class="footer mt-5">
        <div class="container">
            <a-row class="footer-links" :gutter="[10, 10]">
                <a-col :md="{ span: 24 }" :lg="{ span: 6 }">
                    <div>
                        <RouterLink>
                            <img src="../assets/Images/YouCar.png" alt="">
                        </RouterLink>
                        <div class="social-icons my-3">
                            <a target="_blank" href="#"><i class="fa-brands fa-instagram"></i></a>
                            <a target="_blank" href="#"><i class="fa-brands fa-whatsapp"></i></a>
                            <a target="_blank" href="#"><i class="fa-brands fa-vk"></i></a>
                        </div>
                        <p class="avto-broker">© 1-й автоброкер <br>Внесём качественные изменения в Вашу жизнь!</p>
                    </div>
                </a-col>
                <a-col :md="{ span: 12 }" :lg="{ span: 3 }">
                    <div>
                        <h3>Компания</h3>
                        <ul class="footer-list">
                            <li><router-link to="/">Главная</router-link></li>
                            <li><router-link to="/katalok">Каталог</router-link></li>
                            <li><router-link to="/about">О нас</router-link></li>
                            <li><router-link to="/news">Новости</router-link></li>
                            <li><router-link to="/contact">Контакты</router-link></li>
                        </ul>
                    </div>
                </a-col>
                <a-col :md="{ span: 12 }" :lg="{ span: 3 }">
                    <div>
                        <h3>автомобили</h3>
                        <ul class="footer-list">
                            <li><a href="#">Из Европы</a></li>
                            <li><a href="#">Из США</a></li>
                            <li><a href="#">Из ОАЭ</a></li>
                            <li><a href="#">Из Китая</a></li>
                            <li><a href="#">Из Кореи</a></li>
                        </ul>
                    </div>
                </a-col>
                <a-col :md="{ span: 24 }" :lg="{ span: 12 }">
                    <div>
                        <h3>Марки</h3>
                        <a-row :gutter="[10, 10]">
                            <a-col class="footer-col__links" v-for="mark in marks" :xs="{ span: 6 }" :md="{ span: 4 }">
                                {{ mark.name }}
                            </a-col>
                        </a-row>
                    </div>
                </a-col>
            </a-row>
        </div>
    </footer>
</template>
<script setup>
import axios from 'axios';
import { onMounted, ref } from 'vue';
import { RouterLink } from 'vue-router';
onMounted(() => {
    fetchMarks()
})
const marks = ref([])
const fetchMarks = async () => {
    try {
        const response = await axios.get(`${import.meta.env.VITE_APP_API}/marks`)
        // console.log(response)
        marks.value = response.data
    } catch (error) {
        console.log(error)
    }
}

</script>
<style scoped>
@import './Footer.css'
</style>