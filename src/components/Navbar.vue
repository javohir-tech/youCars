<template>
    <header>
        <nav class="navbar">
            <div class="navbar-links">
                <div class="container">
                    <a-flex justify="space-between" align="center">
                        <ul class="navbar-list">
                            <li>
                                <RouterLink to="/">Главная</RouterLink>
                            </li>
                            <li>
                                <RouterLink to="/katalok">Каталог</RouterLink>
                            </li>
                            <li>
                                <RouterLink to="/about">О нас</RouterLink>
                            </li>
                            <li>
                                <RouterLink to="/news">Новости</RouterLink>
                            </li>
                            <li>
                                <RouterLink to="/contact">Контакты</RouterLink>
                            </li>
                        </ul>
                        <a-flex :gap="15" align="center" class="navbar-icons">
                            <a-flex :gap="10">
                                <a href="#" target="_blank"><i class="fa-brands fa-instagram"></i></a>
                                <a href="#" target="_blank"><i class="fa-brands fa-whatsapp"></i></a>
                                <a href="#" target="_blank"><i class="fa-brands fa-youtube"></i></a>
                            </a-flex>
                            <a href="totel:+9987712329040">
                                <a-flex :gap="5" align="center">
                                    <i class="fa-solid fa-phone"></i>
                                    <p style="margin: 0;">+7 (777) 777-77-77</p>
                                </a-flex>
                            </a>
                            <a href="#">
                                <a-flex :gap="5" align="center">
                                    <i class="fa-solid fa-envelope"></i>
                                    <p style="margin: 0;">Info@mail.ru</p>
                                </a-flex>
                            </a>
                            <a-space>
                                <a-select v-model:value="value1" style="width: 120px" :options="options1"
                                    @change="handleChange">
                                </a-select>
                            </a-space>
                        </a-flex>
                    </a-flex>
                </div>
            </div>
            <div class="navbar-info shadow-bottom">
                <div class="container">
                    <a-flex :gap="10" align="center" justify="space-between">
                        <a-flex :gap="10">
                            <img src="../assets/Images/YouCar.png" alt="">
                            <ul class="cars-categories">
                                <li>
                                    <a href="#">Автомобили</a><img src="../assets/Images/Vector.png" alt="">
                                </li>
                                <li>
                                    <a href="#">Коммерческий транспорт</a><img src="../assets/Images/Vector.png" alt="">
                                </li>
                                <li>
                                    <a href="#">Мотоциклы</a><img src="../assets/Images/Vector.png" alt="">
                                </li>
                            </ul>
                        </a-flex>
                        <a-space>
                            <a-input-search class="search-input" v-model:value="value" placeholder="Поиск по названию"
                                @search="onSearch" />
                        </a-space>
                        <a-flex :gap="10" align="center" class="navbar-buttons">
                            <div>
                                <img src="../assets/Images/messages.png" alt="">
                            </div>
                            <RouterLink to="/login">
                                <a-button>Войти</a-button>
                            </RouterLink>
                            <RouterLink to="/register">
                                <a-button type="primary">Регистрация</a-button>
                            </RouterLink>
                        </a-flex>
                    </a-flex>
                </div>
            </div>  
        </nav>
    </header>
</template>
<script setup>
import { RouterLink } from 'vue-router';
import { ref } from 'vue';

//select input
const handleChange = value => {
    console.log(`selected ${value}`);
};
const options1 = ref([
    {
        value: 'rus',
        label: 'Rus',
    },
    {
        value: 'eng',
        label: 'Eng',
    },
    {
        value: 'uzb',
        label: 'Uzb',
    },
]);

const value1 = ref('Rus');

//search input
const value = ref('');
const onSearch = searchValue => {
    console.log('use value', searchValue);
    console.log('or use this.value', value.value);
};
</script>
<style>
.navbar-links {
    background-color: rgba(246, 246, 246, 1);
    padding: 10px 0px;
}

.navbar-info {
    padding: 15px 0px;
}

.navbar-list {
    list-style: none;
    display: flex;
    gap: 10px;
    margin-bottom: 0;

    a {
        font-weight: 500;
        font-size: 14px;
        color: rgba(67, 67, 67, 1);
    }
}

.navbar-icons {
    a {
        color: rgba(152, 152, 152, 1);
        font-weight: 400;
        font-size: 14px;
    }
}

.cars-categories {
    margin-bottom: 0;
    list-style: none;
    display: flex;
    gap: 10px;

    li {
        display: flex;
        align-items: center;
        gap: 10px;

        a {
            font-weight: 400;
            font-size: 16px;
            color: rgba(1, 1, 1, 1);
        }
    }
}

.search-input {
    width: 400px;
}

.shadow-bottom {
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1); /* faqat pastki qismga soya */
}
</style>