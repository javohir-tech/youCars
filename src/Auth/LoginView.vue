<template>
  <div class="registration-container">
    <div class="registration-card">
      <h1 class="title">Вход</h1>
      <div>
        <a-form :model="formState" name="basic" autocomplete="off" @finish="onFinish" @finishFailed="onFinishFailed">
          <a-form-item name="email" :rules="[
            {
              required: true,
              message: 'Please input your email!',
              type: 'email',
            },
          ]">
            <a-input v-model:value="formState.email" placeholder="E-mail" />
          </a-form-item>

          <a-form-item name="password" :rules="[
            { required: true, message: 'Please input your password!' },
          ]">
            <a-input-password v-model:value="formState.password" placeholder="Введите пароль" />
          </a-form-item>

          <a-flex justify="space-between" aling="center">
            <a-checkbox v-model:checked="formState.remember">Запомнить меня</a-checkbox>
            <RouterLink to="/forgetPassword" class="forget-password">Забыли пароль?</RouterLink>
          </a-flex>

          <a-button type="primary" style="width: 100%; margin-top: 16px" html-type="submit" :disabled="loading">
            <a-spin size="small" v-if="loading" />
            {{ loading ? 'Laoding...' : 'Войти' }}
          </a-button>
        </a-form>
        <div class="under-link">
          <p>
            Еще нет аккаунта?<RouterLink to="/register"> Зарегистрироваться </RouterLink>
          </p>
        </div>
      </div>
    </div>
  </div>
</template>
<script setup>
import { message } from 'ant-design-vue';
import axios from 'axios';
4;
import { RouterLink, useRouter } from 'vue-router';
import { reactive, ref } from 'vue';
import { useUserStore } from '@/Stores/useUserStore';

const route = useRouter();
const userStore = useUserStore();
const loading = ref(false);

const formState = reactive({
  email: '',
  password: '',
  remember: false,
});

const onFinish = async () => {
  loading.value = true;
  try {
    const payload = {
      email: formState.email,
      password: formState.password,
    };

    const response = await axios.post(
      `${import.meta.env.VITE_APP_API}/login`,
      payload
    );
    // console.log('Success', response.data);

    if (formState.remember) {
      userStore.setUser({
        name: response.data.userData.name,
        email: response.data.userData.email,
        id: response.data.userData.id,
        token: response.data.token,
      });
      localStorage.setItem('token', response.data.token);
    } else {
      sessionStorage.setItem('token', response.data.token);
      userStore.setUser({
        name: response.data.userData.name,
        email: response.data.userData.email,
        id: response.data.userData.id,
        token: response.data.token,
      });
    }

    message.success(
      `Success: ${response.data.message || 'Login successfully!'}`
    );

    route.push('/');
    formState.email = '';
    formState.password = '';
    formState.remember = false;
  } catch (error) {
    message.error(error.response?.data?.message || 'Xatolik yuz berdi');
  } finally {
    loading.value = false;
  }
};

const onFinishFailed = (errorInfo) => {
  console.log('Failed:', errorInfo);
};
</script>
<style scoped>
@import './auth.css';
</style>
