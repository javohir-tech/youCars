<template>
  <div>
    <h1 class="main-header">Настройки</h1>
    <div>
      <p>аккаунт</p>
      <a-form
        :model="formState"
        name="basic"
        layout="horizontal"
        autocomplete="off"
        @finish="onFinish"
        @finishFailed="onFinishFailed"
      >
        <a-form-item
          label="Username"
          name="username"
          :rules="[{ required: true, message: 'Please input your username!' }]"
        >
          <a-input v-model:value="formState.username" />
        </a-form-item>

        <a-form-item
          label="Password"
          name="password"
          :rules="[
            {
              type: 'email',
              required: true,
              message: 'Please input your password!',
            },
          ]"
        >
          <a-input v-model:value="formState.password" />
        </a-form-item>

        <a-form-item>
          <a-button type="primary" html-type="submit">Submit</a-button>
        </a-form-item>
      </a-form>
    </div>
  </div>
</template>
<script setup>
import { reactive } from 'vue';
const formState = reactive({
  username: '',
  password: '',
  remember: true,
});
const onFinish = (values) => {
  console.log('Success:', values);
};
const onFinishFailed = (errorInfo) => {
  console.log('Failed:', errorInfo);
};
</script>
<style>
@import './Setting.css';
</style>
