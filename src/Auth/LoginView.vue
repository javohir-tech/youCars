<template>
  <div class="registration-container">
    <div class="registration-card">
      <h1 class="title">{{ $t('auth.login.header') }}</h1>
      <div>
        <a-form
          :model="formState"
          name="basic"
          autocomplete="off"
          @finish="onFinish"
          @finishFailed="onFinishFailed"
        >
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
            ]"
          >
            <a-input-password
              v-model:value="formState.password"
              :placeholder="$t('auth.login.password')"
            />
          </a-form-item>

          <a-flex justify="space-between" aling="center">
            <a-checkbox v-model:checked="formState.remember"
              >{{ $t('auth.login.radio') }}</a-checkbox
            >
            <RouterLink to="/forgetPassword" class="forget-password"
              >{{ $t('auth.login.forgetPassword') }}</RouterLink
            >
          </a-flex>

          <a-button
            type="primary"
            style="width: 100%; margin-top: 16px"
            html-type="submit"
            :disabled="loading"
          >
            <a-spin size="small" v-if="loading" />
            {{ loading ? 'Laoding...' : $t('auth.login.button') }}
          </a-button>
        </a-form>
        <div class="under-link">
          <p>
            {{ $t('auth.login.subtitle') }}<RouterLink to="/register"
              >{{ $t('navbar.auth.register') }}</RouterLink
            >
          </p>
        </div>
      </div>
    </div>
  </div>
</template>
<script setup>
import { message } from 'ant-design-vue';
import axios from 'axios';
import { RouterLink, useRouter } from 'vue-router';
import { reactive, ref } from 'vue';
import { useUserStore } from '@/Stores/useUserStore';
import { useI18n } from 'vue-i18n';

const  t = useI18n()
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
