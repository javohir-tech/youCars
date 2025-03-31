<template>
    <a-form :model="formState" autocomplete="off" layout="vertical" name="passwordUpdate" @finish="onFinish"
        @finishFailed="onFinishFailed">
        <a-row :gutter="[10, 10]">
            <a-col :md="{ span: 8 }">
                <a-form-item label="Password" name="password"
                    :rules="[{ required: true, message: 'Please input your password!' }]">
                    <a-input-password v-model:value="formState.password" />
                </a-form-item>
            </a-col>
            <a-col :md="{ span: 8 }">
                <a-form-item label="Новый пароль" name="newPass" :rules="[{ required: true, message: 'Please input your password!' },
                { validator: validateNewPassword }
                ]">
                    <a-input-password v-model:value="formState.newPass" />
                </a-form-item>
            </a-col>
            <a-col :md="{ span: 8 }">
                <a-form-item label="Подтвердите пароль" name="confirmPass" :rules="[
                    { required: true, message: 'Please confirm your password!' },
                    { validator: validateConfirmPassword }
                ]">
                    <a-input-password v-model:value="formState.confirmPass" />
                </a-form-item>
            </a-col>
        </a-row>
        <a-button type="primary" html-type="submit">Submit</a-button>
    </a-form>
</template>

<script setup>
import { message } from 'ant-design-vue';
import { reactive } from 'vue';

const formState = reactive({
    password: '',
    newPass: '',
    confirmPass: ''
});

const onFinish = values => {
    console.log('Success:', values);
};

const onFinishFailed = errorInfo => {
    console.log('Failed:', errorInfo);
};

const validateNewPassword = async (_, value) => {
    if (!value) {
        return Promise.reject(new Error('Iltimos, yangi parolni kiriting!'));
    }
    if (value.length < 6) {
        return Promise.reject(new Error('Parol kamida 6 ta belgidan iborat bo‘lishi kerak!'));
    }
    return Promise.resolve();
};

const validateConfirmPassword = async (_, value) => {
    if (!value) {
        return Promise.reject(new Error('Please confirm your password!'));
    }
    if (value !== formState.newPass) { // ❗️ oldPass yoki boshqa state ishlatilmaydi
        return Promise.reject(new Error('Passwords do not match!'));
    }
    return Promise.resolve();
};
</script>
