<template>
  <div class="responsive-container">
    <div class="desktop-header">
      <h1 class="main-header">{{ $t('userPage.setting.header') }}</h1>
    </div>
    <div class="mobile-header mt-3">
      <button @click="goBack">
        <h1 class="main-header">
          <i class="bi bi-chevron-left"></i>{{ $t('userPage.setting.header') }}
        </h1>
      </button>
    </div>
    <div class="user-edit__box">
      <p>{{ $t('userPage.setting.accaunt') }}</p>
      <a-form
        :model="formState"
        name="basic"
        layout="vertical"
        autocomplete="off"
        @finish="updateEmailName"
        @finishFailed="onFinishFailed"
      >
        <a-row :gutter="[10, 10]">
          <a-col :xs="{ span: 24 }" :md="{ span: 12 }">
            <a-form-item
              :label="t('userPage.setting.name')"
              name="username"
              :rules="[
                { required: true, message: 'Please input your username!' },
              ]"
            >
              <a-input v-model:value="formState.username" />
            </a-form-item>
          </a-col>

          <a-col :xs="{ span: 24 }" :md="{ span: 12 }">
            <a-form-item
              label="E-mail"
              name="email"
              :rules="[
                {
                  type: 'email',
                  required: true,
                  message: 'Please input your password!',
                },
              ]"
            >
              <a-input v-model:value="formState.email" />
            </a-form-item>
          </a-col>
        </a-row>
        <a-button
          class="save-button"
          type="primary"
          html-type="submit"
          :disabled="loadingEmail"
        >
          <template v-if="loadingEmail"> <a-spin /> Loading... </template>
          <template v-else> {{ $t('userPage.setting.button') }} </template>
        </a-button>
      </a-form>
    </div>

    <div class="user-password__box mt-4">
      <p>{{ $t('userPage.setting.editPassword') }}</p>
      <a-form
        :model="formState"
        autocomplete="off"
        layout="vertical"
        name="passwordUpdate"
        @finish="updatePassword"
        @finishFailed="onFinishFailed"
      >
        <a-row :gutter="[10, 10]">
          <a-col :xs="{ span: 24 }" :md="{ span: 8 }">
            <a-form-item
              :label="t('userPage.setting.oldPassword')"
              name="password"
              :rules="[
                { required: true, message: 'Please input your password!' },
              ]"
            >
              <a-input-password v-model:value="formState.password" />
            </a-form-item>
          </a-col>
          <a-col :xs="{ span: 24 }" :md="{ span: 8 }">
            <a-form-item
              :label="t('userPage.setting.newPassword')"
              name="newPass"
              :rules="[
                { required: true, message: 'Please input your password!' },
                {
                  min: 6,
                  message: 'The password must be at least 6 characters long!',
                },
              ]"
            >
              <a-input-password v-model:value="formState.newPass" />
            </a-form-item>
          </a-col>
          <a-col :xs="{ span: 24 }" :md="{ span: 8 }">
            <a-form-item
              :label="t('userPage.setting.rebitNewPassword')"
              name="confirmPass"
              :rules="[
                { required: true, message: 'Please confirm your password!' },
                { validator: validateConfirmPassword },
              ]"
            >
              <a-input-password v-model:value="formState.confirmPass"/>
            </a-form-item>
          </a-col>
        </a-row>
        <div class="mb-3">
          <RouterLink to="/forgetPassword"
            >{{ $t('userPage.setting.forgetPassword') }}?</RouterLink
          >
        </div>
        <a-button
          class="save-button"
          type="primary"
          html-type="submit"
          :disabled="loadingPassword"
        >
          <template v-if="loadingPassword"> <a-spin /> Loading... </template>
          <template v-else> {{ $t('userPage.setting.button') }} </template>
        </a-button>
      </a-form>
    </div>
  </div>
</template>
<script setup>
//Axios
import axios from 'axios';
//vue router
import { useRouter } from 'vue-router';
import { RouterLink } from 'vue-router';
//vue
import { reactive, ref, watch } from 'vue';
//Antd
import { message } from 'ant-design-vue';
//Store
import { useUserStore } from '@/Stores/useUserStore';
//i18n
import { useI18n } from 'vue-i18n';

const { t } = useI18n();

const userStore = useUserStore();
const loadingEmail = ref(false);
const loadingPassword = ref(false);
const router = useRouter();

function goBack() {
  router.go(-1);
}

const formState = reactive({
  username: userStore.userInfo.name,
  email: userStore.userInfo.email,
  password: '',
  newPass: '',
  confirmPass: '',
  // remember: true,
});

const updateEmailName = async () => {
  loadingEmail.value = true;
  try {
    const response = await axios.put(
      `${import.meta.env.VITE_APP_API}/update-name-email/${userStore.userInfo.id}`,
      {
        newName: formState.username,
        newEmail: formState.email,
      }
    );
    console.log(response.data);
    userStore.setUser({
      name: formState.username,
      email: formState.email,
      id: userStore.userInfo.id,
      token: userStore.userInfo.token,
    });
    message.success(response.data.message);
  } catch (error) {
    console.log(error);
  } finally {
    loadingEmail.value = false;
  }
};

const updatePassword = async () => {
  loadingPassword.value = true;
  try {
    const response = await axios.put(
      `${import.meta.env.VITE_APP_API}/update-password/${userStore.userInfo.id}`,
      {
        oldPass: formState.password,
        newPass: formState.newPass,
      }
    );
    formState.password = '';
    formState.newPass = '';
    formState.confirmPass = '';
    message.success(response.data.message);
  } catch (error) {
    message.error(error.message);
  } finally {
    loadingPassword.value = false;
  }
};

const onFinishFailed = (errorInfo) => {
  console.log('Failed:', errorInfo);
};

//valitatasiya
const validateConfirmPassword = async (_, value) => {
  if (!value) {
    return Promise.reject(new Error('Please confirm your password!'));
  }
  if (value !== formState.newPass) {
    return Promise.reject(new Error('Passwords do not match!'));
  }
  return Promise.resolve();
};
</script>
<style>
@import './Setting.css';
</style>
