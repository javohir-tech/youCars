<template>
    <div>
        <h1 class="main-header">Настройки</h1>
        <div class="user-edit__box">
            <p>аккаунт</p>
            <a-form :model="formState" name="basic" layout="vertical" autocomplete="off" @finish="onFinish"
                @finishFailed="onFinishFailed">
                <a-row :gutter="[10, 10]">
                    <a-col :md="{ span: 12 }">
                        <a-form-item label="Имя" name="username"
                            :rules="[{ required: true, message: 'Please input your username!' }]">
                            <a-input v-model:value="formState.username" />
                        </a-form-item>
                    </a-col>

                    <a-col :md="{ span: 12 }">
                        <a-form-item label="E-mail" name="email" :rules="[
                            {
                                type: 'email',
                                required: true,
                                message: 'Please input your password!',
                            },
                        ]">
                            <a-input v-model:value="formState.email" />
                        </a-form-item>
                    </a-col>
                </a-row>

                <a-form-item>
                    <a-button type="primary" html-type="submit">
                        {{ loading ? 'Loading...' : 'Сохранить' }}
                    </a-button>
                </a-form-item>
            </a-form>
        </div>
    </div>
</template>
<script setup>
import { message } from 'ant-design-vue';
import axios from 'axios';
import { reactive, ref } from 'vue';

const userName = localStorage.getItem('userName') || sessionStorage.getItem('userName')
const userEmail = localStorage.getItem('email') || sessionStorage.getItem('email')
const userId = localStorage.getItem('id') || sessionStorage.getItem('id')
const loading = ref(false)

const formState = reactive({
    username: userName,
    email: userEmail,
    // remember: true,
});

const onFinish = async () => {
    try {
        const response = await axios.put(`${import.meta.env.VITE_APP_API}/update-name-email/${userId}`, {
            newName: formState.username,
            newEmail: formState.email
        })
        localStorage.setItem('userName', formState.username)
        // console.log(response)
        message.success(response.data.message)
    } catch (error) {
        console.log(error)
    } finally {
        loading.value = false
    }
};
const onFinishFailed = (errorInfo) => {
    console.log('Failed:', errorInfo);
};
</script>
<style>
@import './Setting.css';
</style>
