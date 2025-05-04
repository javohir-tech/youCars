<template>
  <div class="registration-container">
    <div class="registration-card">
      <h1 class="title">{{ $t('auth.register.header')}}</h1>
      <p class="subtitle">{{ $t('auth.register.title')}}</p>
      <div>
        <a-form
          :model="formState"
          name="basic"
          autocomplete="off"
          @finish="onFinish"
          @finishFailed="onFinishFailed"
        >
          <a-form-item
            name="name"
            :rules="[
              { required: true, message: 'Please input your username!' },
            ]"
          >
            <a-input v-model:value="formState.name" :placeholder="$t('auth.register.name')" />
          </a-form-item>

          <a-form-item
            name="email"
            :rules="[
              {
                required: true,
                message: 'Please input your email!',
                type: 'email',
              },
            ]"
          >
            <a-input v-model:value="formState.email" placeholder="E-mail" />
          </a-form-item>

          <a-form-item
            name="password"
            :rules="[
              { required: true, message: 'Please input your password!' },
              {
                min: 6,
                message: 'The password must be at least 6 characters long!',
              },
            ]"
          >
            <a-input-password
              v-model:value="formState.password"
              :placeholder="$t('auth.register.password')"
            />
          </a-form-item>

          <a-form-item
            name="confirmPassword"
            :rules="[
              {
                required: true,
                message: 'Please confirm your password!',
              },
              {
                validator: validateConfirmPassword,
              },
            ]"
          >
            <a-input-password
              v-model:value="formState.confirmPassword"
             :placeholder="$t('auth.register.resPassword')"
            />
          </a-form-item>

          <div>
            <a-checkbox v-model:checked="formState.remember"
              >{{ $t('auth.register.radio') }}</a-checkbox
            >
          </div>

          <a-button
            type="primary"
            style="width: 100%; margin-top: 16px"
            html-type="submit"
            :disabled="loading"
          >
            <a-spin size="small" v-if="loading" />
            {{ loading ? 'Laoding...' : $t('auth.register.button') }}
          </a-button>
        </a-form>
        <div class="under-link">
          <p>{{ $t('auth.register.subtitle') }}<RouterLink to="/login">{{ $t('navbar.auth.login') }}</RouterLink></p>
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
//pinia
import { useUserStore } from '@/Stores/useUserStore';
import { useI18n } from 'vue-i18n';

const t = useI18n()
const route = useRouter();
const userStore = useUserStore();
const loading = ref(false);

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
  loading.value = true;
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

    const response = await axios.post(
      `${import.meta.env.VITE_APP_API}/user-register`,
      payload
    );
    console.log('Success:', response.data);

    if (formState.remember) {
      localStorage.setItem('token', response.data.token);
      userStore.setUser({
        name: response.data.userData.name,
        email: response.data.userData.email,
        id: response.data.userData.id,
        token: response.data.token,
      });
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
      `Success: ${response.data.message || 'Registered successfully!'}`
    );

    route.push('/').then(() => {
      window.location.reload();
    });

    formState.name = '';
    formState.email = '';
    formState.password = '';
    formState.confirmPassword = '';
    formState.remember = false;
  } catch (error) {
    console.error('Error:', error.response?.data || error.message);
    message.error(error?.message || 'Ro‘yxatdan o‘tishda xato yuz berdi');
  } finally {
    loading.value = false;
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

watch(
  () => formState.password,
  () => {
    if (formState.confirmPassword) {
      validateConfirmPassword(null, formState.confirmPassword).catch(() => {});
    }
  }
);
</script>

<style scoped>
@import './auth.css';
</style>
