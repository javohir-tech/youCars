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
import { useLogin } from '@/Hooks/useLogin';
import { RouterLink } from 'vue-router';
const { formState, loading, onFinish, onFinishFailed } = useLogin();
</script>
<style scoped>
@import './auth.css';
</style>
