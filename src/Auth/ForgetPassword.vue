<template>
  <div class="registration-container">
    <div class="registration-card">
      <h1 class="title">{{ $t('auth.forgetPassword.header') }}</h1>
      <p class="subtitle">{{ $t('auth.forgetPassword.title') }}</p>
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

          <a-button type="primary" style="width: 100%; margin-top: 16px" html-type="submit" :disabled="loading">
            <a-spin size="small" v-if="loading" />
            {{ loading ? 'Laoding...' : $t('auth.forgetPassword.button') }}
          </a-button>
        </a-form>
        <div class="under-link">
          <p>{{ $t('auth.forgetPassword.subtitle') }}<RouterLink to="/login">{{ $t('navbar.auth.login') }}</RouterLink>
          </p>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { message } from 'ant-design-vue';
import axios from 'axios';
import { reactive, ref } from 'vue';
import { useI18n } from 'vue-i18n';

const t = useI18n()
const loading = ref(false);

const formState = reactive({
  email: '',
});

const onFinish = async () => {
  loading.value = true;
  try {
    const payload = {
      email: formState.email,
    };

    const response = await axios.post(
      `${import.meta.env.VITE_APP_API}/forgot-password`,
      payload
    );
    console.log(response.data);

    message.success(response.data.message);
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
