<template>
    <div class="navbar-container">
        <!-- mobile  -->
        <div class="header">
            <div class="logo">
                <RouterLink to="/">
                    <img src="../assets/Images/YouCar.png" alt="YouCar">
                </RouterLink>
            </div>
            <div class="search-box">
                <a-input-search placeholder="Поиск по названию" v-model:value="searchValue" />
            </div>
            <div class="menu-toggle" @click="isMenuOpen = !isMenuOpen">
                <img src="../assets/Images/toggleButton.png" alt="">
            </div>
        </div>

        <!-- Mobile Menu -->
        <div class="mobile-menu" :class="{ 'open': isMenuOpen }">
            <div class="nav-links">
                <router-link @click="isMenuOpen = !isMenuOpen" to="/" class="nav-link">Главная</router-link>
                <router-link @click="isMenuOpen = !isMenuOpen" to="/katalok" class="nav-link">Каталог</router-link>
                <router-link @click="isMenuOpen = !isMenuOpen" to="/about" class="nav-link">О нас</router-link>
                <router-link @click="isMenuOpen = !isMenuOpen" to="/news" class="nav-link">Новости</router-link>
                <router-link @click="isMenuOpen = !isMenuOpen" to="/contact" class="nav-link">Контакты</router-link>
            </div>

            <div class="language-selector">
                <a-select v-model:value="language" style="width: 80px">
                    <a-select-option value="rus">RU</a-select-option>
                    <a-select-option value="eng">EN</a-select-option>
                    <a-select-option value="uzb">UZ</a-select-option>
                </a-select>
            </div>

            <div class="notification-icon">
                <i class="fa-regular fa-bell"></i>
            </div>

            <div class="categories">
                <RouterLink @click="isMenuOpen = !isMenuOpen" to="/katalok" class="mobile-category__name">
                    <div class="category-item">
                        <span>Автомобили</span>
                        <i class="fa-solid fa-chevron-right"></i>
                    </div>
                </RouterLink>
                <RouterLink @click="isMenuOpen = !isMenuOpen" to="/commerce-cars" class="mobile-category__name">
                    <div class="category-item">
                        <span>Коммерческий транспорт</span>
                        <i class="fa-solid fa-chevron-right"></i>
                    </div>
                </RouterLink>
                <RouterLink @click="isMenuOpen = !isMenuOpen" to="/motorcycle" class="mobile-category__name">
                    <div class="category-item">
                        <span>Мотоциклы</span>
                        <i class="fa-solid fa-chevron-right"></i>
                    </div>
                </RouterLink>
            </div>

            <div class="contact-info">
                <a href="#" style="text-decoration: none;" target="_blank">
                    <div class="contact-item">
                        <i class="fa-solid fa-phone"></i>
                        <span>+7 (777) 777-77-77</span>
                    </div>
                </a>
                <a href="#" style="text-decoration: none;" target="_blank">
                    <div class="contact-item">
                        <i class="fa-solid fa-envelope"></i>
                        <span>info@mail.ru</span>
                    </div>
                </a>
            </div>

            <div class="social-icons">
                <a href="#" target="_blank" class="social-icon"><i class="fa-brands fa-vk"></i></a>
                <a href="#" target="_blank" class="social-icon"><i class="fa-brands fa-whatsapp"></i></a>
                <a href="#" target="_blank" class="social-icon"><i class="fa-brands fa-instagram"></i></a>
            </div>

            <div class="auth-buttons">
                <router-link @click="isMenuOpen = !isMenuOpen" to="/register"
                    class="register-btn">Регистрация</router-link>
                <router-link @click="isMenuOpen = !isMenuOpen" to="/login" class="login-btn">Войти</router-link>
            </div>
        </div>
        <!--desktop-->
        <div class="desktop-navbar">
            <div class="navbar-top">
                <div class="container">
                    <a-flex align="center" justify="space-between">
                        <ul class="navbar-list">
                            <li><router-link to="/">Главная</router-link></li>
                            <li><router-link to="/katalok">Каталог</router-link></li>
                            <li><router-link to="/about">О нас</router-link></li>
                            <li><router-link to="/news">Новости</router-link></li>
                            <li><router-link to="/contact">Контакты</router-link></li>
                        </ul>
                        <div class="navbar-right">
                            <div class="social-icons">
                                <a target="_blank" href="#"><i class="fa-brands fa-instagram"></i></a>
                                <a target="_blank" href="#"><i class="fa-brands fa-whatsapp"></i></a>
                                <a target="_blank" href="#"><i class="fa-brands fa-vk"></i></a>
                            </div>
                            <a href="#" target="_blank">
                                <div class="contact-phone">
                                    <i class="fa-solid fa-phone"></i>
                                    <span>+7 (777) 777-77-77</span>
                                </div>
                            </a>
                            <a href="#" target="_blank">
                                <div class="contact-email">
                                    <i class="fa-solid fa-envelope"></i>
                                    <span>info@mail.ru</span>
                                </div>
                            </a>
                            <a-select v-model:value="language" style="width: 80px">
                                <a-select-option value="rus">RU</a-select-option>
                                <a-select-option value="eng">EN</a-select-option>
                                <a-select-option value="uzb">UZ</a-select-option>
                            </a-select>
                        </div>
                    </a-flex>
                </div>
            </div>
            <div class="navbar-bottom">
                <div class="container">
                    <a-flex justify="space-between" align="center">
                        <div class="logo-categories">
                            <RouterLink to="/">
                                <img src="../assets/Images/YouCar.png" alt="YouCar">
                            </RouterLink>
                            <ul class="categories-list">
                                <li>
                                    <RouterLink to="/katalok" class="categories-name">
                                        <a href="#">Автомобили</a>
                                        <img src="../assets/Images/Vector.png" alt="">
                                    </RouterLink>
                                </li>
                                <li>
                                    <RouterLink to="/commerce-cars" class="categories-name">
                                        <a href="#">Коммерческий транспорт</a>
                                        <img src="../assets/Images/Vector.png" alt="">
                                    </RouterLink>
                                </li>
                                <li>
                                    <RouterLink to="/motorcycle" class="categories-name">
                                        <a href="#">Мотоциклы</a>
                                        <img src="../assets/Images/Vector.png" alt="">
                                    </RouterLink>
                                </li>
                            </ul>
                        </div>
                        <div class="navbar-actions">
                            <a-input-search class="search-input" placeholder="Поиск по названию"
                                v-model:value="searchValue" />
                            <div>
                                <img src="../assets/Images/messages.png" alt="">
                            </div>
                            <router-link to="/login" class="login-btn">Войти</router-link>
                            <router-link to="/register" class="register-btn">Регистрация</router-link>
                        </div>
                    </a-flex>
                </div>
            </div>
        </div>
    </div>
</template>

<script setup>
import { ref } from 'vue';

const isMenuOpen = ref(false);
const searchValue = ref('');
const language = ref('rus');
</script>

<style scoped>
.navbar-container {
    position: relative;
    width: 100%;
}

/* Header styles */
.header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 10px 15px;
    border-bottom: 1px dashed #e0e0e0;
}

.logo img {
    height: 30px;
}

.search-box {
    flex-grow: 1;
    margin: 0 15px;
}

.menu-toggle {
    width: 30px;
    height: 30px;
    display: flex;
    align-items: center;
    justify-content: center;
    cursor: pointer;
}

/* Mobile Menu Styles */
.mobile-menu {
    position: fixed;
    top: 50px;
    left: 0;
    width: 100%;
    height: calc(100vh - 50px);
    background-color: white;
    z-index: 1000;
    overflow-y: auto;
    transform: translateX(-100%);
    transition: transform 0.3s ease;
    display: flex;
    flex-direction: column;
    padding: 0;
}

.mobile-menu.open {
    transform: translateX(0);
}

.nav-links {
    display: flex;
    flex-direction: column;
    border-bottom: 1px dashed #e0e0e0;
}

.nav-link {
    padding: 15px;
    color: #333;
    text-decoration: none;
    font-size: 16px;
    border-bottom: 1px solid #f5f5f5;
}

.language-selector {
    position: absolute;
    top: 15px;
    right: 60px;
    display: flex;
    align-items: center;
    gap: 5px;
}

.notification-icon {
    position: absolute;
    top: 15px;
    right: 15px;
    font-size: 20px;
}

.categories {
    padding: 10px 0;
}

.category-item {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 15px;
    background-color: #f5f5f5;
    margin-bottom: 1px;
}

.mobile-category__name {
    text-decoration: none;
    color: #000;
}

.contact-info {
    padding: 15px;
}

.contact-item {
    display: flex;
    align-items: center;
    gap: 10px;
    margin-bottom: 10px;
    color: #666;
}

.social-icons {
    display: flex;
    padding: 15px;
    gap: 15px;
}

.social-icon {
    font-size: 20px;
    color: #666;
}

.auth-buttons {
    margin-top: auto;
    display: flex;
    flex-direction: column;
}

.register-btn {
    display: block;
    text-align: center;
    padding: 15px;
    background-color: #2196F3;
    color: white;
    text-decoration: none;
    font-weight: bold;
}

.login-btn {
    display: block;
    text-align: center;
    padding: 15px;
    background-color: #f5f5f5;
    color: #333;
    text-decoration: none;
}

/* Desktop Navbar - hidden on mobile */
.desktop-navbar {
    display: none;
}

/* Media query for desktop view */
@media (min-width: 992px) {
    .header {
        display: none;
    }

    .mobile-menu {
        display: none;
    }

    .desktop-navbar {
        display: block;
    }


    .navbar-top {
        display: flex;
        justify-content: space-between;
        align-items: center;
        padding: 10px 0;
        background-color: rgba(246, 246, 246, 1);
    }

    .navbar-list {
        display: flex;
        list-style: none;
        gap: 20px;
        margin: 0;
        padding: 0;
    }

    .navbar-list a {
        color: rgba(67, 67, 67, 1);
        text-decoration: none;
        font-size: 14px;
        font-weight: 500;
    }

    .navbar-right {
        display: flex;
        align-items: center;
        gap: 20px;
    }

    .social-icons {
        display: flex;
        gap: 10px;
    }

    .social-icons a {
        color: rgba(152, 152, 152, 1);
    }

    .contact-phone,
    .contact-email {
        display: flex;
        align-items: center;
        gap: 5px;
        color: rgba(152, 152, 152, 1);
        font-size: 14px;
    }

    .navbar-bottom {
        display: flex;
        justify-content: space-between;
        align-items: center;
        padding: 15px 0;
        box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
    }

    .logo-categories {
        display: flex;
        align-items: center;
        gap: 20px;
    }

    .categories-list {
        display: flex;
        list-style: none;
        gap: 20px;
        margin: 0;
        padding: 0;
    }

    .categories-name {
        display: flex;
        align-items: center;
        gap: 10px;
    }

    .categories-list a {
        color: #000;
        text-decoration: none;
        font-size: 16px;
    }

    .navbar-actions {
        display: flex;
        align-items: center;
        gap: 15px;
    }

    .search-input {
        width: 400px;
    }

    .login-btn,
    .register-btn {
        padding: 8px 16px;
        border-radius: 4px;
        text-decoration: none;
    }

    .login-btn {
        border: 1px solid #ddd;
        color: #333;
    }

    .register-btn {
        background-color: #2196F3;
        color: white;
    }
}
</style>