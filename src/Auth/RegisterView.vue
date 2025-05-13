<template>
  <div class="registration-container">
    <div class="registration-card">
      <h1 class="title">{{ $t('auth.register.header') }}</h1>
      <p class="subtitle">{{ $t('auth.register.title') }}</p>
      <div>
        <a-form :model="formState" name="basic" autocomplete="off" @finish="onFinish" @finishFailed="onFinishFailed">
          <a-form-item name="name" :rules="[
            { required: true, message: 'Please input your username!' },
          ]">
            <a-input v-model:value="formState.name" :placeholder="$t('auth.register.name')" />
          </a-form-item>

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
            {
              min: 6,
              message: 'The password must be at least 6 characters long!',
            },
          ]">
            <a-input-password v-model:value="formState.password" :placeholder="$t('auth.register.password')" />
          </a-form-item>

          <a-form-item name="confirmPassword" :rules="[
            {
              required: true,
              message: 'Please confirm your password!',
            },
            {
              validator: validateConfirmPassword,
            },
          ]">
            <a-input-password v-model:value="formState.confirmPassword"
              :placeholder="$t('auth.register.resPassword')" />
          </a-form-item>

          <div>
            <a-checkbox v-model:checked="formState.remember">{{ $t('auth.register.radio') }}</a-checkbox>
          </div>

          <a-button type="primary" style="width: 100%; margin-top: 16px" html-type="submit" :disabled="loading">
            <a-spin size="small" v-if="loading" />
            {{ loading ? 'Laoding...' : $t('auth.register.button') }}
          </a-button>
          <a-button @click="regiterWithGoogle" type="primary" style="width: 100%; margin-top: 16px">
            Google
          </a-button>
        </a-form>
        <div class="under-link">
          <p>{{ $t('auth.register.subtitle') }}<RouterLink to="/login">{{ $t('navbar.auth.login') }}</RouterLink>
          </p>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { useRegister } from '../Hooks/useRegister'

const {
  formState,
  loading,
  onFinish,
  onFinishFailed,
  validateConfirmPassword,
  regiterWithGoogle
} = useRegister();
</script>

<style scoped>
@import './auth.css';
</style>
