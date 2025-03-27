<template>
    <div class="registration-container">
        <div class="registration-card">
            <h1 class="title">Регистрация</h1>
            <p class="subtitle">Заполните поля ниже для создания аккаунта.</p>
            <div>
                <a-form :model="formState" name="basic" autocomplete="off" @finish="onFinish"
                    @finishFailed="onFinishFailed">

                    <a-form-item name="name" :rules="[{ required: true, message: 'Please input your username!' }]">
                        <a-input v-model:value="formState.name" placeholder="Имя" />
                    </a-form-item>

                    <a-form-item name="email"
                        :rules="[{ required: true, message: 'Please input your email!', type: 'email' }]">
                        <a-input v-model:value="formState.email" placeholder="E-mail" />
                    </a-form-item>

                    <a-form-item name="password" :rules="[{ required: true, message: 'Please input your password!' }]">
                        <a-input-password v-model:value="formState.password" placeholder="Введите пароль" />
                    </a-form-item>

                    <a-form-item name="confirmPassword" :rules="[{
                        required: true,
                        message: 'Please confirm your password!'
                    }, {
                        validator: validateConfirmPassword
                    }]">
                        <a-input-password v-model:value="formState.confirmPassword" placeholder="Повторите пароль" />
                    </a-form-item>

                    <div>
                        <a-checkbox v-model:checked="formState.remember">Согласен с политикой обработки
                            данных.</a-checkbox>
                    </div>

                    <a-button type="primary" style="width: 100%; margin-top: 16px;" html-type="submit"
                        :disabled="loading">
                        <a-spin size="small" v-if="loading" />
                        {{ loading ? 'Laoding...' : 'Зарегистрироваться' }}
                    </a-button>
                </a-form>
                <div class="under-link">
                    <p>Уже есть аккаунт? <RouterLink to="/login">Войти</RouterLink>
                    </p>
                </div>
            </div>
        </div>
    </div>
</template>

<script setup>
import { message } from 'ant-design-vue';
import axios from 'axios';
//Vue
import { RouterLink, useRouter } from 'vue-router';
import { reactive, ref, watch } from 'vue';

const route = useRouter()

const loading = ref(false)

const formState = reactive({
    name: '',
    email: '',
    password: '',
    confirmPassword: '',
    role: 'customer',
    userrate: 'yearly',
    remember: false,
});

const onFinish = async () => {
    loading.value = true
    try {
        const payload = {
            name: formState.name,
            email: formState.email,
            password: formState.password,
            role: formState.role,
            userrate: formState.userrate,
            createdAt: new Date().toISOString(),
            updatedAt: new Date().toISOString(),
        };

        const response = await axios.post(`${import.meta.env.VITE_APP_API}/user-register`, payload)
        console.log('Success:', response.data);

        if (formState.remember) {
            localStorage.setItem('token', response.data.token)
            localStorage.setItem('userName', response.data.userData.name)
            localStorage.setItem('email', response.data.userData.email)
        } else {
            sessionStorage.setItem('token', response.data.token)
            sessionStorage.setItem('userName', response.data.userData.name)
            sessionStorage.setItem('email', response.data.userData.email)
        }

        message.success(`Success: ${response.data.message || 'Registered successfully!'}`)

        route.push('/').then(() => {
            window.location.reload()
        })

        formState.name = '';
        formState.email = '';
        formState.password = '';
        formState.confirmPassword = '';
        formState.remember = false;
    } catch (error) {
        console.error('Error:', error.response?.data || error.message);
        message.error(error.response?.data?.message || 'Ro‘yxatdan o‘tishda xato yuz berdi');
    } finally {
        loading.value = false
    }
};

const onFinishFailed = (errorInfo) => {
    console.log('Failed:', errorInfo);
};

// Confirm passwordni tasdiqlovchi funksiya
const validateConfirmPassword = async (_, value) => {
    if (value !== formState.password) {
        throw new Error('Passwords do not match!');
    }
};

watch(() => formState.password, () => {
    if (formState.confirmPassword) {
        validateConfirmPassword(null, formState.confirmPassword).catch(() => { });
    }
});


</script>

<style scoped>
@import './auth.css';
</style>
